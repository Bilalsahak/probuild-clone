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

/** Public Google Business Profile listing. Rating and count are copied from the listing as shown publicly. */
export const googleListing = {
  name: "Seattle MasterFix Precision Craftsmanship",
  url: "https://www.google.com/maps/place/Seattle+MasterFix+Precision+Craftsmanship/@47.6683468,-122.363542,17z/data=!4m6!3m5!1s0x549015c3e27be477:0xa0987c9d5cbbcc15!8m2!3d47.6683468!4d-122.363542!16s%2Fg%2F11zwph69d1",
  shortUrl: "https://maps.app.goo.gl/mr9dPTnkT5AcTn5a9",
  /** Average star rating shown on the listing. Update together with reviewCount. */
  rating: 5.0,
  reviewCount: 1,
  /** Date the rating/count above were last checked against the listing. */
  checked: "2026-10-26",
};

export const reviews: Review[] = [
  {
    author: "Bilal Sahak",
    platform: "Google",
    url: googleListing.url,
    date: "2026-10-25",
    rating: 5,
    text: "I had a great experience with Seattle MasterFix. They did a really good job remodeling my shower and installing a new sliding glass shower door. The work was done carefully and professionally, and the finished result looks great. They were also easy to communicate with and paid attention to the details. I'm very happy with how everything turned out and would definitely recommend Seattle MasterFix to anyone looking for quality remodeling work.",
  },
];
