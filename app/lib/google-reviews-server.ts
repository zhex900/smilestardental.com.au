import "server-only";

import type { GoogleReviewsPayload } from "./google-reviews-types";

/** ISR + Data Cache: refresh at most once per day. */
export const REVIEWS_REVALIDATE_SECONDS = 86400;

type PlacesReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
  name?: string;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  displayName?: { text?: string };
  reviews?: PlacesReview[];
};

const FALLBACK: GoogleReviewsPayload = {
  ok: false,
  source: "fallback",
  rating: 4.9,
  userRatingCount: 152,
  reviews: [],
};

function normaliseReviews(reviews: PlacesReview[] | undefined) {
  if (!reviews?.length) return [] as GoogleReviewsPayload["reviews"];
  return reviews.map((r, index) => ({
    id: r.name ?? `review-${index}`,
    name: r.authorAttribution?.displayName ?? "Google user",
    rating: Math.min(5, Math.max(1, Math.round(r.rating ?? 5))),
    text: (r.text?.text ?? "").trim() || "—",
    timeAgo: r.relativePublishTimeDescription ?? "",
    avatar:
      r.authorAttribution?.photoUri ??
      "https://www.gstatic.com/images/branding/product/2x/avatar_square_blue_512dp.png",
  }));
}

/**
 * Fetch the live Google Places review payload, or a fallback if credentials
 * are missing / the upstream call fails. Cached server-side via Next's Data
 * Cache (`revalidate: 86400`), so callers don't need their own caching layer.
 */
export async function getGoogleReviewsPayload(): Promise<GoogleReviewsPayload> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();
  if (!key || !placeId) return FALLBACK;

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,displayName",
      },
      next: { revalidate: REVIEWS_REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[google-reviews] Places API error", res.status, errText);
      return FALLBACK;
    }

    const data = (await res.json()) as PlacesResponse;
    const rating =
      typeof data.rating === "number" ? data.rating : FALLBACK.rating;
    const userRatingCount =
      typeof data.userRatingCount === "number"
        ? data.userRatingCount
        : FALLBACK.userRatingCount;

    return {
      ok: true,
      source: "google",
      rating,
      userRatingCount,
      displayName: data.displayName?.text,
      reviews: normaliseReviews(data.reviews),
    };
  } catch (e) {
    console.error("[google-reviews]", e);
    return FALLBACK;
  }
}

/** Just the aggregate (rating + count) — for JSON-LD `aggregateRating`. */
export async function getAggregateReviewRating(): Promise<{
  ratingValue: number;
  reviewCount: number;
} | null> {
  const payload = await getGoogleReviewsPayload();
  if (!payload.userRatingCount || payload.userRatingCount < 1) return null;
  return {
    ratingValue: Number(payload.rating.toFixed(1)),
    reviewCount: payload.userRatingCount,
  };
}
