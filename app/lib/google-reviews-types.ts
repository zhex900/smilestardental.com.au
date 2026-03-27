export type GoogleReviewItem = {
  id: string;
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  avatar: string;
};

export type GoogleReviewsPayload = {
  ok: boolean;
  source: "google" | "fallback";
  rating: number;
  userRatingCount: number;
  displayName?: string;
  reviews: GoogleReviewItem[];
};
