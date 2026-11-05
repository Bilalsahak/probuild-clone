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
  status: "placeholder" | "published";
};

export const caseStudies: CaseStudy[] = [
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
