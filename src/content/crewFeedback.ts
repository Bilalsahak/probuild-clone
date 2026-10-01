/**
 * Crew feedback — NOT RENDERED BY DEFAULT.
 *
 * These are comments the owner says were written about work done by members of
 * our crew in other states, before Seattle MasterFix operated in Washington.
 * They are NOT reviews of Seattle MasterFix, were NOT posted on a Seattle
 * MasterFix Google Business Profile, and the writers are NOT Seattle MasterFix
 * customers. See content/crew-feedback.md and the README for how to enable.
 *
 * To show an item: fill in the real `year` and `source`, get the writer's
 * written permission, set `consentObtained: true`, then set the build variable
 * NEXT_PUBLIC_SHOW_CREW_FEEDBACK=true.
 */
export type CrewFeedbackItem = {
  quote: string;
  /** How the writer described themself (as originally shown). */
  role: string;
  state: string;
  /** Year the work was done. OWNER TO CONFIRM. */
  year: string;
  /** Where the comment originally came from (message, text, review site...). OWNER TO CONFIRM. */
  source: string;
  /** Written permission on file from the writer to publish. */
  consentObtained: boolean;
};

const TBD = "[OWNER TO CONFIRM]";

export const crewFeedback: CrewFeedbackItem[] = [
  {
    quote:
      "Easy team to work with. They kept us updated, showed up when they said they would, and left the place clean every day. The finished work looks great.",
    role: "Commercial renovation client",
    state: "North Carolina",
    year: TBD,
    source: TBD,
    consentObtained: false,
  },
  {
    quote:
      "We had a long punch list and they handled it without making things complicated. Good communication, fair expectations, and solid attention to detail.",
    role: "Property owner",
    state: "Texas",
    year: TBD,
    source: TBD,
    consentObtained: false,
  },
  {
    quote:
      "Professional from the walkthrough through the final clean-up. When something unexpected came up, they explained the options clearly and kept the project moving.",
    role: "Business owner",
    state: "Texas",
    year: TBD,
    source: TBD,
    consentObtained: false,
  },
  {
    quote:
      "The crew was respectful of the property and very organized. The trim and finish work came out sharp, and they took care of the small details without us having to chase them.",
    role: "General contractor",
    state: "Texas",
    year: TBD,
    source: TBD,
    consentObtained: false,
  },
  {
    quote:
      "Really dependable and easy to communicate with. They worked around our schedule, kept the site tidy, and delivered exactly what we discussed. We’d gladly work with them again.",
    role: "Property management client",
    state: "Florida",
    year: TBD,
    source: TBD,
    consentObtained: false,
  },
];
