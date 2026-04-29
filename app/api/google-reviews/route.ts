import { NextResponse } from "next/server";
import {
  REVIEWS_REVALIDATE_SECONDS,
  getGoogleReviewsPayload,
} from "@/lib/google-reviews-server";

/** ISR + Data Cache: refresh at most once per day (literal required for Next segment config). */
export const revalidate = 86400;

export async function GET() {
  const payload = await getGoogleReviewsPayload();
  const cacheControl = payload.ok
    ? `public, s-maxage=${REVIEWS_REVALIDATE_SECONDS}, stale-while-revalidate=${REVIEWS_REVALIDATE_SECONDS}`
    : `public, s-maxage=${payload.source === "fallback" ? 60 : 300}`;
  return NextResponse.json(payload, {
    headers: { "Cache-Control": cacheControl },
  });
}
