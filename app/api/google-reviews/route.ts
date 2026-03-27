import { NextResponse } from "next/server";
import type {
  GoogleReviewItem,
  GoogleReviewsPayload,
} from "@/lib/google-reviews-types";

/** ISR + Data Cache: refresh at most once per day (literal required for Next segment config). */
export const revalidate = 86400;

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

function normalizeReviews(
  reviews: PlacesReview[] | undefined,
): GoogleReviewItem[] {
  if (!reviews?.length) return [];
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

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();

  const fallback: GoogleReviewsPayload = {
    ok: false,
    source: "fallback",
    rating: 4.9,
    userRatingCount: 152,
    reviews: [],
  };

  if (!key || !placeId) {
    return NextResponse.json(fallback satisfies GoogleReviewsPayload, {
      headers: { "Cache-Control": "public, s-maxage=60" },
    });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,displayName",
      },
      next: { revalidate },
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[google-reviews] Places API error", res.status, errText);
      return NextResponse.json(fallback satisfies GoogleReviewsPayload, {
        headers: { "Cache-Control": "public, s-maxage=300" },
      });
    }

    const data = (await res.json()) as PlacesResponse;

    const rating =
      typeof data.rating === "number" ? data.rating : fallback.rating;
    const userRatingCount =
      typeof data.userRatingCount === "number"
        ? data.userRatingCount
        : fallback.userRatingCount;

    const payload: GoogleReviewsPayload = {
      ok: true,
      source: "google",
      rating,
      userRatingCount,
      displayName: data.displayName?.text,
      reviews: normalizeReviews(data.reviews),
    };

    return NextResponse.json(payload satisfies GoogleReviewsPayload, {
      headers: {
        "Cache-Control": `public, s-maxage=${revalidate}, stale-while-revalidate=${revalidate}`,
      },
    });
  } catch (e) {
    console.error("[google-reviews]", e);
    return NextResponse.json(fallback satisfies GoogleReviewsPayload, {
      headers: { "Cache-Control": "public, s-maxage=300" },
    });
  }
}
