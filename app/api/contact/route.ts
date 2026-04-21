import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  question?: unknown;
  turnstileToken?: unknown;
};

const MAX_LEN = {
  name: 120,
  email: 254,
  question: 5000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bad(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(req: Request): string | undefined {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  return req.headers.get("cf-connecting-ip") ?? undefined;
}

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn(
      "[contact] TURNSTILE_SECRET_KEY is not set; rejecting all submissions.",
    );
    return false;
  }
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      },
    );
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[contact] Turnstile verify failed", err);
    return false;
  }
}

async function sendViaResend(opts: {
  name: string;
  email: string;
  question: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return {
      ok: false,
      error:
        "Email service is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_TO_EMAIL.",
    };
  }

  const subject = `Ask Our Dentists: new question from ${opts.name}`;
  const safeName = escapeHtml(opts.name);
  const safeEmail = escapeHtml(opts.email);
  const safeQuestion = escapeHtml(opts.question).replace(/\n/g, "<br/>");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
      <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Question:</strong></p>
      <div style="padding:12px;background:#f6f6f6;border-radius:6px;white-space:pre-wrap">
        ${safeQuestion}
      </div>
    </div>
  `.trim();

  const text = [
    `New Contact Form Submission`,
    ``,
    `Name: ${opts.name}`,
    `Email: ${opts.email}`,
    ``,
    `Question:`,
    opts.question,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: opts.email,
        subject,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[contact] Resend error", res.status, errText);
      return {
        ok: false,
        error: "Email service rejected the request. Please try again later.",
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[contact] Resend request failed", err);
    return { ok: false, error: "Email service is unreachable." };
  }
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return bad("Invalid JSON body.");
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const question =
    typeof body.question === "string" ? body.question.trim() : "";
  const turnstileToken =
    typeof body.turnstileToken === "string" ? body.turnstileToken : "";

  if (!name) return bad("Name is required.");
  if (name.length > MAX_LEN.name) return bad("Name is too long.");
  if (!email) return bad("Email is required.");
  if (email.length > MAX_LEN.email || !EMAIL_RE.test(email)) {
    return bad("Please provide a valid email address.");
  }
  if (!question) return bad("Question is required.");
  if (question.length > MAX_LEN.question) return bad("Question is too long.");
  if (!turnstileToken) return bad("Anti-spam challenge not completed.");

  const ip = getClientIp(req);
  const isHuman = await verifyTurnstile(turnstileToken, ip);
  if (!isHuman) {
    return bad(
      "Anti-spam verification failed. Please refresh and try again.",
      403,
    );
  }

  const sent = await sendViaResend({ name, email, question });
  if (!sent.ok) return bad(sent.error, 502);

  return NextResponse.json({ ok: true });
}
