/**
 * SINGLE SOURCE OF TRUTH for business facts shown on the site.
 * Edit values here once; every page, the footer, the privacy policy, the terms
 * and the JSON-LD pick them up.
 *
 * Anything containing "OWNER TO CONFIRM" is a placeholder that must be replaced
 * (or confirmed) by the business owner before the site goes live.
 * Run `npm run check:owner` to list what is still open.
 */

export const site = {
  /** Public / trade name used in headings, logo alt text and the page title. */
  name: "Seattle MasterFix Precision Craftsmanship",
  shortName: "Seattle MasterFix",
  tagline: "Built on trust. Executed with precision.",
  description:
    "Residential and light-commercial remodeling in Seattle and King County, WA: siding, fencing, tile, laminate flooring, drywall, and paint.",
  url: "https://seattlemasterfix.com",

  /**
   * Business name for the license line and legal pages. Per the owner (Oct 1, 2026), L&I
   * confirmed the business name is "Seattle MasterFix Precision Craftsmanship" (the all-caps
   * abbreviated form on the L&I lookup is only a display abbreviation). Edit ONLY this
   * constant; it is used in the header strip, footer, contact page, privacy policy, terms,
   * the license line and the JSON-LD legalName.
   */
  registeredName: "Seattle MasterFix Precision Craftsmanship",

  /** WA contractor registration number (RCW 18.27.100 requires it in advertising). */
  registrationNo: "SEATTMP744NL",
  /** Washington Unified Business Identifier. */
  ubi: "605-904-953",

  phone: "(206) 550-4576",
  phoneHref: "tel:+12065504576",
  phoneE164: "+1-206-550-4576",
  email: "info@seattlemasterfix.com",
  estimatesEmail: "estimates@seattlemasterfix.com",

  /** Current business address (confirmed by the owner, Oct 1, 2026; also updated with L&I). */
  address: {
    street: "5415 6th Ave NW",
    city: "Seattle",
    state: "WA",
    zip: "98107",
    full: "5415 6th Ave NW, Seattle, WA 98107",
  },
  /** Owner confirmed this is the current address. Gates the address in JSON-LD. */
  addressConfirmed: true,

  /** Service area as shown on production. OWNER TO CONFIRM. Gates `areaServed` in JSON-LD. */
  serviceArea: "Seattle and King County, WA",
  serviceAreaConfirmed: false,

  calendly: "https://calendly.com/bill-seattlemasterfix/new-meeting",
  /** Public Formspree endpoint (same one the production site uses). */
  formspree: "https://formspree.io/f/xnjeedlb",

  linkedin: "https://www.linkedin.com/company/seattle-masterfix-precision-craftsmanship/home/",

  lniVerifyUrl:
    "https://secure.lni.wa.gov/verify/Detail.aspx?UBI=605904953&LIC=SEATTMP744NL&SAW=",

  /** Privacy-policy / terms effective date. */
  policyEffectiveDate: "October 1, 2026",
  /** Term used in the Terms of Use for venue. Attorney to confirm. */
  venue: "King County, Washington",
} as const;

export function getFormspreeEndpoint(): string {
  return process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || site.formspree;
}

/** Deployment base path ("" on seattlemasterfix.com; "/repo-name" on GitHub Pages previews). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** True for preview deployments: adds noindex and disables canonical/sitemap hints. */
export const isPreview = process.env.NEXT_PUBLIC_PREVIEW === "1";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/how-we-work/", label: "How we work" },
  { href: "/contact/", label: "Contact" },
] as const;
