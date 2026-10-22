/**
 * GENUINE third-party reviews ONLY (Google or Yelp), copied exactly as they appear publicly.
 * Leave this array empty until real reviews exist; the Reviews section is hidden when empty.
 * Never add sample, paraphrased, staff-written or out-of-state crew comments here.
 * See README → "Reviews".
 */
export type Review = {
  /** Author name exactly as shown publicly on the platform. */
  author: string;
  platform: "Google" | "Yelp";
  /** Direct public URL to the review. */
  url: string;
  /** ISO date the review was posted, e.g. "2026-11-03". */
  date: string;
  /** Review text, verbatim. */
  text: string;
  /** Star rating given on the platform, 1–5. */
  rating: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [];
