"use client";

import { useEffect, useState } from "react";
import type { GoogleReviewsPayload } from "@/lib/google-reviews-types";

async function fetchReviews(): Promise<GoogleReviewsPayload> {
  const res = await fetch("/api/google-reviews");
  const payload = (await res.json()) as GoogleReviewsPayload;
  if (!res.ok) throw new Error(String(res.status));
  return payload;
}

export function useGoogleReviews() {
  const [data, setData] = useState<GoogleReviewsPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchReviews()
      .then((payload) => {
        if (!cancelled) setData(payload);
      })
      .catch(() => {
        if (!cancelled) {
          setData({
            ok: false,
            source: "fallback",
            rating: 4.9,
            userRatingCount: 152,
            reviews: [],
          });
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading };
}
