/**
 * FAQ content. Verified facts only — every answer is drawn from the copy
 * already on the site (how we work, trade pages, contact page, legal notices)
 * or from facts Bill has confirmed for estimates (1-year labor warranty,
 * per-project pricing, never hourly). No prices, no ranges, no response-time
 * promise, no specific neighbourhoods, no certifications.
 *
 * Keep the answers plain text: they are also used verbatim in the FAQPage
 * JSON-LD on src/app/faq/page.tsx. Do not use words banned by
 * scripts/check-forbidden.mjs here.
 */
import { site } from "@/config/site";

export type FaqItem = { id: string; q: string; a: string; link?: { href: string; label: string } };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "pricing",
    title: "Pricing and estimates",
    items: [
      {
        id: "how-much-will-my-project-cost",
        q: "How much will my project cost?",
        a: "There are no fixed prices on this site. Every job is priced as one written project quote for the agreed scope — never by the hour. What moves the price depends on the trade: the size of the job, the condition of what is already there, the materials and finish you choose, how much prep or repair is needed, and access. Each trade page has a “What drives cost” list for that trade, and your written quote is the price for your job.",
      },
      {
        id: "how-do-i-get-an-estimate",
        q: "How do I get an estimate?",
        a: `Use the estimate form on the contact page — it asks for the trade, a short description, your budget range and timeline, then your contact details — or call ${site.phone}, email ${site.email}, or book a consultation. Where it makes sense we visit the property and walk through the work with you. You receive a written estimate. Estimates are non-binding until a written contract is signed.`,
      },
      {
        id: "what-happens-after-i-submit",
        q: "What happens after I send an estimate request?",
        a: "We review your request and follow up about next steps. That may be a phone call, a consultation, or a site visit and walkthrough where it makes sense. If the scope is agreed, you receive a written estimate, and work begins only after a written contract is signed.",
      },
      {
        id: "how-do-i-pay",
        q: "How and when do I pay?",
        a: "Your written quote and contract set out the payment schedule, including any deposit. Work is priced per project, not by the hour.",
      },
      {
        id: "can-i-send-photos",
        q: "Can I send photos with my estimate request?",
        a: `Yes. Attach up to 5 photos to the estimate form (25 MB each). Photos help us understand the condition and scope before a visit. You can also email photos to ${site.email} and mention your name.`,
      },
    ],
  },
  {
    id: "timelines",
    title: "Timelines",
    items: [
      {
        id: "how-long-will-my-job-take",
        q: "How long will my job take?",
        a: "Typical timelines depend on the trade. Siding is typically 1–4 weeks, fencing 3–10 days, tile 3–14 days, laminate flooring 1–5 days, drywall 3–10 days including drying time between coats, and paint 2–7 days. Bathroom remodels and unit turns depend on the scope, the condition behind the walls, material lead times and any permit or inspection steps. Your written contract sets the actual schedule.",
      },
    ],
  },
  {
    id: "permits-and-older-homes",
    title: "Permits and older homes",
    items: [
      {
        id: "do-i-need-a-permit",
        q: "Do I need a permit, and who handles it?",
        a: "Where a permit is required for the work we perform, we prepare and submit the application and coordinate inspections, as set out in your written contract. We do not provide architectural or engineering services. If drawings or structural engineering are required, they are prepared by independent licensed professionals.",
      },
      {
        id: "home-built-before-1978",
        q: "My home was built before 1978. What should I know?",
        a: "Tell us when you request an estimate. Older homes may contain lead-based paint, and older materials such as siding, flooring, joint compound and texture may contain asbestos. We will go over the lead-safety information required before work begins on a covered older home and discuss testing before disturbing suspect materials.",
      },
    ],
  },
  {
    id: "warranty-and-changes",
    title: "Warranty and changes",
    items: [
      {
        id: "what-warranty-do-you-offer",
        q: "What warranty do you offer?",
        a: "We offer a 1-year labor warranty. The details are in the signed contract for your job.",
      },
      {
        id: "what-if-something-changes",
        q: "What if something changes once work starts?",
        a: "If conditions change once work starts, we tell you early. Changes to the scope are agreed in writing before the work changes.",
      },
    ],
  },
  {
    id: "service-area-and-prep",
    title: "Service area and preparing for work",
    items: [
      {
        id: "where-do-you-work",
        q: "Where do you work?",
        a: "We work in Seattle and King County, WA. Our home turf is Ballard, Greenwood, Ravenna and North Seattle — tell us your property address when you request an estimate, and your written quote confirms the service area for your job.",
        link: { href: "/service-area/", label: "See the service area page" },
      },
      {
        id: "how-do-i-prepare",
        q: "How do I prepare for the work?",
        a: "We will tell you what to clear or move before work starts, and what access we need. Tell us up front about keys or lockbox codes, parking, building rules, and anything in the work area that needs protecting.",
      },
    ],
  },
  {
    id: "property-managers",
    title: "Property managers and general contractors",
    items: [
      {
        id: "do-you-work-for-property-managers",
        q: "Do you work for property managers or general contractors?",
        a: "Yes. We do unit turns, punch lists, and bulk or recurring repair work for property managers and general contractors. We walk the unit or site with you, agree a written scope, and schedule around access and building rules. See the Property managers page for the full list.",
      },
    ],
  },
  {
    id: "about-us",
    title: "About Seattle MasterFix",
    items: [
      {
        id: "who-is-seattle-masterfix",
        q: "Who is Seattle MasterFix?",
        a: `${site.registeredName} is a Washington-registered contractor, WA Contractor Registration No. ${site.registrationNo}, UBI ${site.ubi}, based at ${site.address.full}. Call ${site.phone} or email ${site.email}. Registration, bond and workers’ comp status can be verified with WA L&I.`,
      },
    ],
  },
];

export const faqItems: FaqItem[] = faqGroups.flatMap((g) => g.items);
