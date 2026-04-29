import { JsonLd } from "./json-ld";
import { dentistJsonLd } from "@/lib/seo";
import { getAggregateReviewRating } from "@/lib/google-reviews-server";

/**
 * Async server component that injects the `Dentist` schema with a live
 * `aggregateRating` pulled from Google Places (cached for 24h server-side).
 * Falls back to the un-rated schema if review credentials are missing or the
 * upstream call fails.
 */
export async function DentistSchema() {
  const aggregateRating = await getAggregateReviewRating();
  return (
    <JsonLd
      data={dentistJsonLd(aggregateRating ? { aggregateRating } : undefined)}
    />
  );
}
