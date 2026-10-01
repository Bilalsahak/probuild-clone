# Crew feedback (NOT shown on the website)

The owner reports that the five comments below were written about work done by
members of the crew **in other states, before Seattle MasterFix operated in
Washington**. They are **not** reviews of Seattle MasterFix, they are **not**
Google reviews, and the writers are **not** Seattle MasterFix customers.

They were removed from the live pages because the old section presented them
as "WHAT CLIENTS SAY" with a Google "G" badge, five stars and a link to the
Seattle MasterFix Google Maps listing, which is likely to mislead visitors
(FTC 16 CFR Part 465; RCW 19.86.020 — see `legal-audit.md` items 1–2).

The same text lives in `src/content/crewFeedback.ts` (the file the optional,
disabled-by-default component reads). Keep the two in sync.

| # | Comment (verbatim from the old page) | Label shown on old page | Year | Original source | Written permission |
|---|---|---|---|---|---|
| 1 | "Easy team to work with. They kept us updated, showed up when they said they would, and left the place clean every day. The finished work looks great." | Commercial renovation client — North Carolina | OWNER TO CONFIRM | OWNER TO CONFIRM | NOT OBTAINED |
| 2 | "We had a long punch list and they handled it without making things complicated. Good communication, fair expectations, and solid attention to detail." | Property owner — Austin, Texas | OWNER TO CONFIRM | OWNER TO CONFIRM | NOT OBTAINED |
| 3 | "Professional from the walkthrough through the final clean-up. When something unexpected came up, they explained the options clearly and kept the project moving." | Business owner — Houston, Texas | OWNER TO CONFIRM | OWNER TO CONFIRM | NOT OBTAINED |
| 4 | "The crew was respectful of the property and very organized. The trim and finish work came out sharp, and they took care of the small details without us having to chase them." | General contractor — Dallas, Texas | OWNER TO CONFIRM | OWNER TO CONFIRM | NOT OBTAINED |
| 5 | "Really dependable and easy to communicate with. They worked around our schedule, kept the site tidy, and delivered exactly what we discussed. We'd gladly work with them again." | Property management client — Florida | OWNER TO CONFIRM | OWNER TO CONFIRM | NOT OBTAINED |

## If you later want to publish them

All of these must be true first:

1. You know who wrote each comment, when, and where it originally appeared, and
   you have proof of authenticity (screenshot, message, date).
2. You have the writer's **written** permission to publish it (and have checked
   whether naming the previous employer/contractor needs separate permission).
3. A Washington attorney has reviewed the final wording.

Then follow the README section "Crew feedback — how to enable". The component
adds the required disclaimer, state/year labels, and "Not a Seattle MasterFix
customer" on each card; it never shows stars, ratings, a Google logo or a Maps link.

Going forward, collect real reviews from real Seattle MasterFix customers with a
generalized request (no payment, discount or other incentive tied to positive
reviews, and do not hide negative ones).
