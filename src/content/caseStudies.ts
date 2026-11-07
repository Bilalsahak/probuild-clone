/**
 * Case studies. Placeholders only — do NOT fill these in with invented jobs.
 * Each slot needs a real Seattle MasterFix job from Bill: trade, scope,
 * duration, and location/date. Until then the Projects page shows the slots
 * as “to be added” and the photo gallery below them.
 */
export type CaseStudy = {
  id: string;
  /** e.g. "Drywall repair and paint". Placeholder until Bill fills it in. */
  title: string;
  trade: string;
  scope: string;
  duration: string;
  locationAndDate: string;
  status: "placeholder" | "published" | "draft";
  /** Internal notes only — never rendered on a public page. */
  notes?: string;
};

export const caseStudies: CaseStudy[] = [
  /**
   * DRAFT — hidden. Not rendered anywhere on the site (no page imports a
   * "draft" entry, and the Projects page shows no case-study cards at all).
   * Facts are from the verified estimate SMF-2026-1104-01 only. The client's
   * name, street address, phone and email are deliberately NOT stored in this
   * public repo — they stay on the estimate only — and must NOT appear on any
   * public page. Stays hidden until the job is done and the client approves photos.
   */
  {
    id: "drywall-paint-2026-11-draft",
    title: "Drywall repair and interior paint — draft (hidden)",
    trade: "Drywall and paint",
    scope:
      "Drywall repair and interior paint, living room and hallway — patch water-damaged drywall, match existing knockdown texture, prime and paint walls and ceiling.",
    duration: "3–4 days",
    locationAndDate: "Seattle, WA — start week of Nov 17, 2026",
    status: "draft",
    notes:
      "Estimate SMF-2026-1104-01: $4,850 total, tax included. Before/after photos: pending — needs the client's approval after the job is done. Do not publish.",
  },
  {
    id: "case-study-1",
    title: "Case study 1 — to be added",
    trade: "Bill to fill in",
    scope: "Bill to fill in: what was done, and for whom.",
    duration: "Bill to fill in",
    locationAndDate: "Bill to fill in: Seattle neighbourhood and date.",
    status: "placeholder",
  },
  {
    id: "case-study-2",
    title: "Case study 2 — to be added",
    trade: "Bill to fill in",
    scope: "Bill to fill in: what was done, and for whom.",
    duration: "Bill to fill in",
    locationAndDate: "Bill to fill in: Seattle neighbourhood and date.",
    status: "placeholder",
  },
  {
    id: "case-study-3",
    title: "Case study 3 — to be added",
    trade: "Bill to fill in",
    scope: "Bill to fill in: what was done, and for whom.",
    duration: "Bill to fill in",
    locationAndDate: "Bill to fill in: Seattle neighbourhood and date.",
    status: "placeholder",
  },
];
