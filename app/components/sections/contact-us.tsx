"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";

type ContactUsProps = {
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  /** Wrapper section id. Used by anchor links (e.g. /about#contact-us). */
  id?: string;
  className?: string;
};

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const DEFAULT_HEADING = "Ask Our Dentists";
const DEFAULT_DESCRIPTION =
  "Have a dental question? Our team is here to help. Submit your question and we'll get back to you shortly.";
const DEFAULT_IMAGE = "/images/dr-melody-patient-xray.webp";
const DEFAULT_IMAGE_ALT =
  "Dr Melody Healy reviewing a dental X-ray with a patient at Smile Star Dental, Warners Bay.";

declare global {
  interface Window {
    turnstile?: {
      reset: (container?: string | HTMLElement) => void;
      render: (
        container: string | HTMLElement,
        opts: Record<string, unknown>,
      ) => string;
    };
  }
}

export function ContactUs({
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  id = "contact-us",
  className = "",
}: ContactUsProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [form, setForm] = useState({ name: "", email: "", question: "" });
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });
  const turnstileRef = useRef<HTMLDivElement>(null);

  const resetTurnstile = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.turnstile &&
      turnstileRef.current
    ) {
      try {
        window.turnstile.reset(turnstileRef.current);
      } catch {
        // noop
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      resetTurnstile();
    };
  }, [resetTurnstile]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.state === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const turnstileToken = fd.get("cf-turnstile-response")?.toString() ?? "";

    if (!turnstileToken) {
      setStatus({
        state: "error",
        message: "Please complete the anti-spam check before submitting.",
      });
      return;
    }

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        setStatus({
          state: "error",
          message:
            data.error ??
            "Something went wrong sending your question. Please try again.",
        });
        resetTurnstile();
        return;
      }

      setStatus({
        state: "success",
        message: "Thanks! Your question is on its way to our team.",
      });
      setForm({ name: "", email: "", question: "" });
      resetTurnstile();
    } catch (err) {
      console.error("[contact-us] submit failed", err);
      setStatus({
        state: "error",
        message: "Network error. Please try again in a moment.",
      });
      resetTurnstile();
    }
  };

  const isSubmitting = status.state === "submitting";

  return (
    <section
      id={id}
      className={`container mx-auto px-4 py-12 scroll-mt-28 ${className}`}
    >
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-xl bg-gold-200"
      >
        <div className="group flex flex-col md:flex-row">
          <div className="w-full p-8 md:w-1/2">
            <p className="mb-4 text-3xl font-bold ">{heading}</p>
            <p className="mb-6 text-gray-600">{description}</p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label
                  htmlFor={`${id}-name`}
                  className="mb-1 block text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor={`${id}-email`}
                  className="mb-1 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor={`${id}-question`}
                  className="mb-1 block text-sm font-medium"
                >
                  Your Question
                </label>
                <textarea
                  id={`${id}-question`}
                  name="question"
                  rows={4}
                  value={form.question}
                  onChange={(e) =>
                    setForm({ ...form, question: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {siteKey ? (
                <div
                  ref={turnstileRef}
                  className="cf-turnstile"
                  data-sitekey={siteKey}
                  data-theme="light"
                />
              ) : (
                <p className="text-xs text-amber-700">
                  Spam protection is disabled: set{" "}
                  <code className="font-mono">
                    NEXT_PUBLIC_TURNSTILE_SITE_KEY
                  </code>{" "}
                  to enable Cloudflare Turnstile.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-gold-400 px-6 py-3 font-medium text-white transition-colors hover:bg-gold-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit Question"}
              </button>

              {status.state === "success" ? (
                <p role="status" className="text-sm font-medium text-green-700">
                  {status.message}
                </p>
              ) : null}
              {status.state === "error" ? (
                <p role="alert" className="text-sm font-medium text-red-600">
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
          <div className="relative min-h-[320px] w-full overflow-hidden rounded-xl md:w-1/2">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="rounded-xl object-cover grayscale transition-[filter,transform] duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
