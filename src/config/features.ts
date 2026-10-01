/**
 * Feature switches. Everything here is OFF/safe by default.
 */

/**
 * Crew feedback (out-of-state comments about work done by our crew members
 * BEFORE Seattle MasterFix operated in Washington). These are NOT reviews of
 * Seattle MasterFix and must never be shown as such.
 *
 * Rendering requires ALL of:
 *   1. NEXT_PUBLIC_SHOW_CREW_FEEDBACK=true at build time, and
 *   2. `consentObtained: true` (plus real `year` and `source`) on each item in
 *      src/content/crewFeedback.ts, and
 *   3. an attorney's sign-off. See README, "Crew feedback".
 */
export const SHOW_CREW_FEEDBACK = process.env.NEXT_PUBLIC_SHOW_CREW_FEEDBACK === "true";

/**
 * Photos flagged in the legal audit as having unverified origin (they look
 * professionally staged, may be stock/AI/another company's, or do not look
 * like Seattle). They are held back from every page until the owner confirms
 * provenance and flips `status` to "verified" in src/content/photos.ts, or
 * set this to true to show them anyway.
 */
export const SHOW_UNVERIFIED_PHOTOS = process.env.NEXT_PUBLIC_SHOW_UNVERIFIED_PHOTOS === "true";
