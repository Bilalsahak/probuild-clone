/**
 * Cost-guide hub pages for local SEO.
 * Market bands = cited public estimates.
 * mf* = Seattle MasterFix project ranges (labeled on page; final after free on-site estimate).
 */

export type GuideSlug = "kitchen-remodel-cost-seattle" | "bathroom-remodel-cost-seattle" | "bathroom-remodel-ballard" | "adu-cost-seattle" | "adu-builder-ballard" | "basement-finishing-cost-seattle" | "siding-replacement-cost-seattle" | "fence-installation-cost-seattle" | "laminate-flooring-cost-seattle" | "drywall-repair-cost-seattle" | "seismic-retrofit-king-county" | "tile-installation-cost-seattle" | "interior-painting-cost-seattle" | "deck-addition-cost-seattle" | "unit-turn-cost-seattle";

export type GuidePackage = {
  name: string;
  starting: number;
  typical: number;
  days: string;
};

export type Guide = {
  slug: GuideSlug;
  keyword: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  serviceLink: string;
  relatedServices: string[];
  fitsCore: string;
  unit: string;
  low: number;
  typical: number;
  high: number;
  lowLabel: string;
  typicalLabel: string;
  highLabel: string;
  notes: string;
  costDrivers: string[];
  faqs: { q: string; a: string }[];
  photoSlots: string[];
  sources: string[];
  mfLabel: string;
  mfStarting: number;
  mfTypical: number;
  mfHigh: number;
  mfNote: string;
  marketMid: number;
  pctBelowMid: number;
  timelineWeeks?: string;
  packages?: GuidePackage[];
};

export const guides: Guide[] = [
  {
    "slug": "kitchen-remodel-cost-seattle",
    "keyword": "kitchen remodel cost Seattle 2026",
    "title": "Kitchen remodel cost Seattle 2026",
    "seoTitle": "Kitchen remodel cost Seattle 2026 | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for kitchen remodel cost Seattle 2026 in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/",
    "relatedServices": [
      "/services/tile/",
      "/services/paint/",
      "/services/laminate/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for kitchen remodels (WA Lic. #SEATTMP744NL).",
    "unit": "project",
    "low": 32271,
    "typical": 95542,
    "high": 188401,
    "lowLabel": "Minor midrange (Cost vs. Value 2025 Seattle)",
    "typicalLabel": "Major midrange (Cost vs. Value 2025 Seattle)",
    "highLabel": "Upscale (Cost vs. Value 2025 Seattle)",
    "notes": "Market bands from Cost vs. Value 2025 Seattle (JLC/Zonda), also cited on FairHomeCost. Angi Seattle kitchen renovation guide lists about $16,200\u2013$45,000 for many kitchen projects (often lighter scopes).",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for kitchen remodel cost Seattle 2026?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $24,200, typical about $71,400, high planning band about $140,700. Public Seattle market midpoint used for comparison is about $95,542. Competitive GC kitchen ranges for Seattle & King County. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does a kitchen remodel cost in Seattle in 2026?",
        "a": "The 2025 Cost vs. Value Report (JLC/Zonda) puts a minor midrange kitchen remodel in Seattle at about $32,271, a major midrange at about $95,542, and an upscale remodel at about $188,401. These are modeled scopes, not bids. Real quotes depend on size, cabinets, layout changes, and sales tax."
      },
      {
        "q": "Does a kitchen remodel add value in Seattle?",
        "a": "In the same report, the minor midrange kitchen remodel recoups an estimated 118.1% of cost at resale in Seattle; major midrange about 53.1%; upscale about 38.7%. ROI is an estimate at sale, not a promise of your sale price."
      },
      {
        "q": "Do I need a Seattle permit for a kitchen remodel?",
        "a": "SDCI generally exempts minor alterations under $6,000 in a 6-month period; cabinet installs often don't need a building permit, but load-bearing, electrical, and plumbing changes usually need their own permits. Confirm with SDCI for your scope."
      }
    ],
    "photoSlots": [
      "kitchen before/after if available",
      "tile backsplash detail",
      "countertop/cabinet paint detail",
      "crew at work"
    ],
    "sources": [
      "https://fairhomecost.com/seattle/kitchen-remodel-cost/",
      "https://zondahome.com/2025-cost-vs-value-report/",
      "https://www.angi.com/articles/complete-house-renovation-cost/wa/seattle"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 24200,
    "mfTypical": 71400,
    "mfHigh": 140700,
    "mfNote": "Competitive GC kitchen ranges for Seattle & King County.",
    "marketMid": 95542,
    "pctBelowMid": 25.3
  },
  {
    "slug": "bathroom-remodel-cost-seattle",
    "keyword": "bathroom remodel cost Seattle 2026",
    "title": "Bathroom remodel cost Seattle 2026",
    "seoTitle": "Bathroom remodel cost Seattle 2026 | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for bathroom remodel cost Seattle 2026 in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/bathroom-remodels/",
    "relatedServices": [
      "/services/bathroom-remodels/",
      "/services/tile/"
    ],
    "fitsCore": "Yes \u2014 /services/bathroom-remodels/",
    "unit": "project",
    "low": 36146,
    "typical": 58151,
    "high": 107451,
    "lowLabel": "Midrange bath (Cost vs. Value 2025 Seattle)",
    "typicalLabel": "Universal-design bath (Cost vs. Value 2025 Seattle)",
    "highLabel": "Upscale bath (Cost vs. Value 2025 Seattle)",
    "notes": "CvV Seattle mid/universal/upscale scopes. Angi Seattle bathroom remodel average is $14,779 ($3,000\u2013$38,000), mixing many smaller jobs; Angi full remodel band about $31,190\u2013$123,270.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for bathroom remodel cost Seattle 2026?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $11,000, typical about $27,000, high planning band about $80,300. Public Seattle market midpoint used for comparison is about $36,146. Starting suits partial/cosmetic; typical targets midrange full remodel scopes. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does a bathroom remodel cost in Seattle?",
        "a": "Per Cost vs. Value 2025 Seattle figures, a midrange bath remodel averages about $36,146, a universal-design bath about $58,151, and an upscale remodel about $107,451. These are report scopes \u2014 your quote will differ."
      },
      {
        "q": "What is the ROI on a Seattle bathroom remodel?",
        "a": "CvV 2025 Seattle estimates about 46.8% cost recouped for midrange, 59.2% for universal design, and 35.3% for upscale \u2014 estimates at resale, not promises of your sale price."
      }
    ],
    "photoSlots": [
      "shower remodel",
      "tile detail",
      "vanity/fixture finish",
      "sliding glass shower door if available"
    ],
    "sources": [
      "https://www.angi.com/articles/how-much-does-bathroom-remodel-cost/wa/seattle",
      "https://zondahome.com/2025-cost-vs-value-report/",
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 11000,
    "mfTypical": 27000,
    "mfHigh": 80300,
    "mfNote": "Starting suits partial/cosmetic; typical targets midrange full remodel scopes.",
    "marketMid": 36146,
    "pctBelowMid": 25.3
  },
  {
    "slug": "bathroom-remodel-ballard",
    "keyword": "bathroom remodel Ballard",
    "title": "Bathroom remodel Ballard",
    "seoTitle": "Bathroom remodel Ballard | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for bathroom remodel Ballard in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/bathroom-remodels/",
    "relatedServices": [
      "/services/bathroom-remodels/",
      "/service-area/ballard/"
    ],
    "fitsCore": "Yes",
    "unit": "project",
    "low": 36146,
    "typical": 50000,
    "high": 107451,
    "lowLabel": "CvV midrange Seattle (Ballard proxy)",
    "typicalLabel": "Planning mid between CvV midrange and universal (Seattle market)",
    "highLabel": "CvV upscale Seattle (Ballard proxy)",
    "notes": "No Ballard-only CvV split; Seattle market figures used. Angi Seattle average $14,779 for mixed scopes.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for bathroom remodel Ballard?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $11,000, typical about $32,200, high planning band about $80,300. Public Seattle market midpoint used for comparison is about $43,073. Ballard Craftsman plumbing and tile often land near the typical band. Final price is after a free on-site estimate."
      },
      {
        "q": "Who remodeled bathrooms in Ballard?",
        "a": "Seattle MasterFix Precision Craftsmanship is a Ballard-based WA-registered contractor (SEATTMP744NL) offering bathroom remodels and related tile work for Seattle & King County."
      },
      {
        "q": "What should Ballard homeowners budget?",
        "a": "Use Seattle Cost vs. Value midrange (~$36k) as a planning floor for a defined midrange scope; older Ballard plumbing, tile, and waterproofing often push real quotes higher."
      },
      {
        "q": "Do Ballard homes need special permits?",
        "a": "Ballard is inside Seattle city limits, so SDCI rules apply (building/electrical/plumbing as needed). Historic Landmark District parcels near Ballard Avenue may have extra design constraints \u2014 check SDCI before you demolish."
      },
      {
        "q": "How long does a typical Ballard bathroom remodel take with MasterFix?",
        "a": "Typical Seattle MasterFix Ballard bathroom timeline: 2\u20134 weeks on site after materials arrive (written contract sets the schedule). Permit reviews and long-lead materials can extend the calendar."
      }
    ],
    "photoSlots": [
      "Ballard bathroom if available",
      "shower tile",
      "older-home plumbing access"
    ],
    "sources": [
      "https://www.angi.com/articles/how-much-does-bathroom-remodel-cost/wa/seattle",
      "https://zondahome.com/2025-cost-vs-value-report/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 11000,
    "mfTypical": 32200,
    "mfHigh": 80300,
    "mfNote": "Ballard Craftsman plumbing and tile often land near the typical band.",
    "marketMid": 43073,
    "pctBelowMid": 25.2,
    "timelineWeeks": "2\u20134 weeks on site after materials arrive (written contract sets the schedule)"
  },
  {
    "slug": "adu-cost-seattle",
    "keyword": "ADU cost Seattle 2026",
    "title": "ADU cost Seattle 2026",
    "seoTitle": "ADU cost Seattle 2026 | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for ADU cost Seattle 2026 in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/",
    "relatedServices": [
      "/services/drywall/",
      "/services/paint/",
      "/services/tile/",
      "/services/laminate/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for ADU / DADU projects.",
    "unit": "project",
    "low": 123069,
    "typical": 210944,
    "high": 350000,
    "lowLabel": "Seattle attached-ADU permit median 2023\u20132025 (city estimated project cost)",
    "typicalLabel": "Cost vs. Value 2025 Seattle Accessory Dwelling Unit",
    "highLabel": "Larger / custom DADU planning band (local ADU cost guides)",
    "notes": "Seattle open-data DADU 2025 median estimated cost $196,326; AADU 2023\u20132025 median $123,069. CvV Seattle ADU $210,944.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for ADU cost Seattle 2026?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $92,200, typical about $157,700, high planning band about $261,800. Public Seattle market midpoint used for comparison is about $210,944. Starting aligns with simpler attached/conversion scopes; typical near DADU mid less about 20%. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does an ADU cost in Seattle?",
        "a": "Cost vs. Value 2025 lists a Seattle Accessory Dwelling Unit at about $210,944 typical job cost with ~32.3% cost recouped at resale. Actual AADU/DADU prices vary widely by size, site work, and finish level."
      },
      {
        "q": "What permits does Seattle require for an ADU?",
        "a": "Per SDCI, adding an attached or detached ADU requires a construction addition/alteration permit and must meet current building, mechanical, electrical, energy, land-use, and ECA standards. King County sewer capacity charges apply."
      },
      {
        "q": "Can MasterFix build my ADU?",
        "a": "Yes. Seattle MasterFix Precision Craftsmanship provides full general contracting for attached and detached ADU projects in Seattle & King County (WA Lic. #SEATTMP744NL), coordinating permits and the build."
      }
    ],
    "photoSlots": [
      "interior finish in accessory unit if any",
      "tile bath",
      "paint/drywall",
      "exterior siding detail"
    ],
    "sources": [
      "https://adunorth.com/seattle-adu-cost/",
      "https://seattle.gov/construction-and-inspections/permits/common-projects/accessory-dwelling-units",
      "https://zondahome.com/2025-cost-vs-value-report/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 92200,
    "mfTypical": 157700,
    "mfHigh": 261800,
    "mfNote": "Starting aligns with simpler attached/conversion scopes; typical near DADU mid less about 20%.",
    "marketMid": 210944,
    "pctBelowMid": 25.2
  },
  {
    "slug": "adu-builder-ballard",
    "keyword": "ADU builder Ballard",
    "title": "ADU builder Ballard",
    "seoTitle": "ADU builder Ballard | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for ADU builder Ballard in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/service-area/ballard/",
    "relatedServices": [
      "/service-area/ballard/",
      "/services/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for Ballard ADU / DADU projects.",
    "unit": "project",
    "low": 123069,
    "typical": 210944,
    "high": 350000,
    "lowLabel": "Seattle AADU permit median (Ballard uses city figures)",
    "typicalLabel": "Cost vs. Value 2025 Seattle ADU",
    "highLabel": "Larger / custom DADU planning band",
    "notes": "Same Seattle market sources; Ballard lots often add access and setback complexity.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for ADU builder Ballard?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $92,200, typical about $157,700, high planning band about $261,800. Public Seattle market midpoint used for comparison is about $210,944. Ballard DADU/AADU full GC ranges. Final price is after a free on-site estimate."
      },
      {
        "q": "Who builds ADUs in Ballard?",
        "a": "Seattle MasterFix Precision Craftsmanship is a Ballard-based WA-registered general contractor (SEATTMP744NL, 5415 6th Ave NW) that provides full general contracting for ADU / DADU projects in Ballard and across Seattle & King County."
      },
      {
        "q": "How long do Seattle ADU permits take?",
        "a": "SDCI notes pre-approved DADU plans can often permit in about 2\u20136 weeks in many cases. Custom designs take longer. Always verify current timelines with SDCI."
      },
      {
        "q": "What does a Ballard ADU typically cost?",
        "a": "Use the Seattle CvV ADU figure (~$210,944) as a planning anchor, then get site-specific bids that include foundation, utilities, and finishes."
      }
    ],
    "photoSlots": [
      "Ballard exterior/yard if available",
      "siding",
      "interior finish"
    ],
    "sources": [
      "https://adunorth.com/seattle-adu-cost/",
      "https://seattle.gov/construction-and-inspections/permits/common-projects/accessory-dwelling-units",
      "https://zondahome.com/2025-cost-vs-value-report/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 92200,
    "mfTypical": 157700,
    "mfHigh": 261800,
    "mfNote": "Ballard DADU/AADU full GC ranges.",
    "marketMid": 210944,
    "pctBelowMid": 25.2
  },
  {
    "slug": "basement-finishing-cost-seattle",
    "keyword": "basement finishing Seattle cost",
    "title": "Basement finishing Seattle cost",
    "seoTitle": "Basement finishing Seattle cost | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for basement finishing Seattle cost in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/",
    "relatedServices": [
      "/services/drywall/",
      "/services/paint/",
      "/services/laminate/",
      "/services/tile/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for basement finishing / remodels.",
    "unit": "project",
    "low": 45000,
    "typical": 68358,
    "high": 120000,
    "lowLabel": "Smaller finish planning band (below CvV Seattle basement remodel)",
    "typicalLabel": "Cost vs. Value 2025 Seattle Basement Remodel",
    "highLabel": "Guest-suite / higher-finish planning band",
    "notes": "CvV Seattle basement remodel $68,358. Angi Seattle basement renovation guide lists about $13,400\u2013$38,900 for many renovation scopes (often lighter than a full finish).",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for basement finishing Seattle cost?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $33,600, typical about $51,100, high planning band about $89,700. Public Seattle market midpoint used for comparison is about $68,358. Moisture and egress work can push above typical. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does basement finishing cost in Seattle?",
        "a": "Cost vs. Value 2025 lists a Seattle basement remodel at about $68,358 typical job cost with ~68% estimated cost recouped. Waterproofing, ceiling height, and egress can move the number a lot."
      },
      {
        "q": "Do I need a permit to finish a Seattle basement?",
        "a": "Adding habitable space, new bedrooms, or changing egress usually needs an SDCI construction permit plus electrical/plumbing as applicable. Confirm with SDCI."
      },
      {
        "q": "What trades does MasterFix handle in basements?",
        "a": "Seattle MasterFix provides full general contracting for basement finishing and remodels in Seattle & King County, including coordination of structure, waterproofing partners as needed, drywall, paint, flooring, and tile."
      }
    ],
    "photoSlots": [
      "drywall finish",
      "laminate/LVP floor",
      "paint",
      "egress window if any"
    ],
    "sources": [
      "https://zondahome.com/2025-cost-vs-value-report/",
      "https://www.angi.com/articles/complete-house-renovation-cost/wa/seattle",
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 33600,
    "mfTypical": 51100,
    "mfHigh": 89700,
    "mfNote": "Moisture and egress work can push above typical.",
    "marketMid": 68358,
    "pctBelowMid": 25.2
  },
  {
    "slug": "siding-replacement-cost-seattle",
    "keyword": "siding replacement cost Seattle",
    "title": "Siding replacement cost Seattle",
    "seoTitle": "Siding replacement cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for siding replacement cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/siding/",
    "relatedServices": [
      "/services/siding/",
      "/services/paint/"
    ],
    "fitsCore": "Yes \u2014 /services/siding/",
    "unit": "project",
    "low": 12393,
    "typical": 20370,
    "high": 50000,
    "lowLabel": "Angi Seattle fiber-cement install range low",
    "typicalLabel": "Angi Seattle fiber-cement install average",
    "highLabel": "Larger / multi-story / complex elevations (local planning high)",
    "notes": "Angi Seattle fiber-cement average $20,370 ($12,393\u2013$30,160). Angi Seattle siding replacement average $17,867. Cost vs. Value 2025 Seattle fiber-cement replacement scope $29,743.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for siding replacement cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $9,500, typical about $15,200, high planning band about $37,400. Public Seattle market midpoint used for comparison is about $20,370. Typical targets fiber-cement whole-house mid scopes; high end for complex elevations. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does siding replacement cost in Seattle?",
        "a": "Cost vs. Value 2025 Seattle lists about $25,656 for a vinyl siding replacement scope and about $29,743 for fiber-cement. Larger homes, stories, and repair of sheathing change the bid."
      },
      {
        "q": "What siding works best in Seattle rain?",
        "a": "Fiber-cement is commonly chosen for PNW weather resistance. Proper flashing and weather barrier matter as much as the cladding brand."
      },
      {
        "q": "Do I need a permit to replace siding in Seattle?",
        "a": "Envelope work often needs SDCI review; minor repairs under the $6,000 threshold may be exempt. Confirm with SDCI for your elevation."
      }
    ],
    "photoSlots": [
      "fiber-cement install",
      "flashing detail",
      "before/after elevation",
      "paint/finish"
    ],
    "sources": [
      "https://www.angi.com/articles/how-much-does-it-cost-replace-vinyl-fiber-cement-siding/wa/seattle",
      "https://www.angi.com/articles/how-much-does-siding-cost-replace/wa/seattle",
      "https://fairhomecost.com/seattle/siding-replacement-cost/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 9500,
    "mfTypical": 15200,
    "mfHigh": 37400,
    "mfNote": "Typical targets fiber-cement whole-house mid scopes; high end for complex elevations.",
    "marketMid": 20370,
    "pctBelowMid": 25.4
  },
  {
    "slug": "fence-installation-cost-seattle",
    "keyword": "fence installation cost Seattle",
    "title": "Fence installation cost Seattle",
    "seoTitle": "Fence installation cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for fence installation cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/fencing/",
    "relatedServices": [
      "/services/fencing/"
    ],
    "fitsCore": "Yes \u2014 /services/fencing/",
    "unit": "per linear foot",
    "low": 24,
    "typical": 40,
    "high": 85,
    "lowLabel": "Angi Seattle low $/lf (material-dependent)",
    "typicalLabel": "Angi Seattle average about $40/lf",
    "highLabel": "Premium clear cedar / complex sites",
    "notes": "Angi Seattle fence guide: about $24\u2013$56/lf depending on material, average near $40/lf.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for fence installation cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $19 / per linear foot, typical about $30 / per linear foot, high planning band about $61 / per linear foot. Public Seattle market midpoint used for comparison is about $40 / per linear foot. Cedar privacy on accessible lots often near typical; slopes and gates push higher. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does fence installation cost in Seattle?",
        "a": "Angi's Seattle fence guide (2026 data page) puts typical installed costs around $24\u2013$56 per linear foot depending on material, with an average near $40/lf. A 150-ft project often lands roughly $3,500\u2013$8,200 in that dataset."
      },
      {
        "q": "Do I need a Seattle fence permit?",
        "a": "SDCI Tip #312 covers decks, fences, and arbors. Height, location, and masonry rules matter \u2014 confirm current limits with SDCI before digging posts. Call 811 before you dig."
      },
      {
        "q": "What fence material lasts in Seattle weather?",
        "a": "Cedar and composite are commonly recommended for wet PNW conditions. Grade, posts, and sealing drive longevity as much as the face boards."
      }
    ],
    "photoSlots": [
      "cedar privacy fence",
      "gate detail",
      "post footing",
      "Ballard/compact-lot install"
    ],
    "sources": [
      "https://www.angi.com/articles/how-much-does-fence-installation-cost/wa/seattle"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 19,
    "mfTypical": 30,
    "mfHigh": 61,
    "mfNote": "Cedar privacy on accessible lots often near typical; slopes and gates push higher.",
    "marketMid": 40,
    "pctBelowMid": 25.0
  },
  {
    "slug": "laminate-flooring-cost-seattle",
    "keyword": "laminate flooring cost Seattle",
    "title": "Laminate flooring cost Seattle",
    "seoTitle": "Laminate flooring cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for laminate flooring cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/laminate/",
    "relatedServices": [
      "/services/laminate/"
    ],
    "fitsCore": "Yes",
    "unit": "per sq ft",
    "low": 3,
    "typical": 8,
    "high": 13,
    "lowLabel": "Installed laminate low $/sf (Seattle 2026 flooring guide)",
    "typicalLabel": "Mid installed planning $/sf",
    "highLabel": "Installed laminate high $/sf",
    "notes": "BB Builders Seattle 2026 flooring guide: laminate about $3\u2013$13/sf installed. Going Rate King County LVP/laminate complete about $8.75\u2013$9/sf.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for laminate flooring cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $2.75 / per sq ft, typical about $5.95 / per sq ft, high planning band about $9.80 / per sq ft. Public Seattle market midpoint used for comparison is about $8 / per sq ft. Wet rooms may need LVP instead of laminate. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does laminate flooring cost in Seattle?",
        "a": "A 2026 Seattle flooring guide lists laminate at about $3\u2013$13 per square foot installed. Room size, tear-out, underlayment, and transitions change the total."
      },
      {
        "q": "Is laminate a good idea in Seattle kitchens?",
        "a": "Laminate can swell with standing water. Many Seattle homeowners pick LVP in wet zones instead. Ask for the right product for each room."
      },
      {
        "q": "Do I need a permit to replace flooring in Seattle?",
        "a": "Surface flooring replacement usually does not need an SDCI building permit unless you alter structure or add radiant heat. Verify for your scope."
      }
    ],
    "photoSlots": [
      "laminate install",
      "transition detail",
      "underlayment",
      "finished room"
    ],
    "sources": [
      "https://bb-builders.pro/flooring-replacement-cost-seattle/",
      "https://goingrate.co/rates/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 2.75,
    "mfTypical": 5.95,
    "mfHigh": 9.8,
    "mfNote": "Wet rooms may need LVP instead of laminate.",
    "marketMid": 8,
    "pctBelowMid": 25.6
  },
  {
    "slug": "drywall-repair-cost-seattle",
    "keyword": "drywall repair cost Seattle",
    "title": "Drywall repair cost Seattle",
    "seoTitle": "Drywall repair cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for drywall repair cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/drywall/",
    "relatedServices": [
      "/services/drywall/",
      "/services/paint/"
    ],
    "fitsCore": "Yes",
    "unit": "project (typical repair)",
    "low": 392,
    "typical": 834,
    "high": 1349,
    "lowLabel": "Angi Seattle repair range low",
    "typicalLabel": "Angi Seattle average repair",
    "highLabel": "Angi Seattle repair range high",
    "notes": "Angi Seattle drywall repair average about $834 ($392\u2013$1,349). New install often $1.50\u2013$4/sf.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for drywall repair cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $300, typical about $600, high planning band about $1,000. Public Seattle market midpoint used for comparison is about $834. Texture match and water damage drive the high band. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does drywall repair cost in Seattle?",
        "a": "Angi's Seattle drywall repair page lists an average around $834, typically $392\u2013$1,349, depending on area, texture match, and access."
      },
      {
        "q": "How much to install new drywall in Seattle?",
        "a": "Angi lists Seattle drywall installation contractors around $1.50\u2013$4 per square foot installed, with project averages in the low thousands depending on size."
      },
      {
        "q": "When does drywall need a Seattle permit?",
        "a": "Nonstructural improvements under $6,000 are often exempt; new walls or structural changes usually need SDCI review."
      }
    ],
    "photoSlots": [
      "patch/texture match",
      "level-4/5 finish",
      "paint blend",
      "water-damage repair"
    ],
    "sources": [
      "https://www.angi.com/articles/how-much-does-drywall-repair-cost-small-holes/wa/seattle",
      "https://www.angi.com/articles/what-cost-install-drywall/wa/seattle"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 300,
    "mfTypical": 600,
    "mfHigh": 1000,
    "mfNote": "Texture match and water damage drive the high band.",
    "marketMid": 834,
    "pctBelowMid": 28.1
  },
  {
    "slug": "seismic-retrofit-king-county",
    "keyword": "seismic retrofit King County",
    "title": "Seismic retrofit King County",
    "seoTitle": "Seismic retrofit King County | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for seismic retrofit King County in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/",
    "relatedServices": [
      "/services/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for seismic retrofit projects in Seattle & King County.",
    "unit": "project",
    "low": 5000,
    "typical": 10000,
    "high": 20000,
    "lowLabel": "Bolting-only / simple crawlspace (specialty firm ranges)",
    "typicalLabel": "Typical bolting + cripple-wall bracing",
    "highLabel": "Engineered / finished-basement access",
    "notes": "Seattle specialty guides often $7,000\u2013$12,000 typical. Sound Seismic about $5,000\u2013$12,000 typical; finished basements higher. ECD engineered bracing often $8,000\u2013$20,000.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for seismic retrofit King County?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $4,700, typical about $7,500, high planning band about $15,000. Public Seattle market midpoint used for comparison is about $10,000. Prescriptive plan-set homes often near typical; finished basements need the high band. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does a seismic retrofit cost in King County?",
        "a": "Specialty Seattle-area firms commonly quote about $5,000\u2013$12,000 for a typical crawlspace/unfinished-basement bolting and bracing job, and $15,000\u2013$35,000 when finished walls must be opened. Get an on-site assessment."
      },
      {
        "q": "Do I need a permit?",
        "a": "Seattle offers an Earthquake Home Retrofit Permit and prescriptive plan sets via SDCI. Outside Seattle, check your city or MyBuildingPermit.com. Retrofits are generally voluntary for single-family homes but still need a building permit when performed."
      },
      {
        "q": "Does MasterFix do seismic retrofits?",
        "a": "Yes. Seattle MasterFix provides full general contracting for seismic retrofit projects in Seattle & King County (foundation bolting, cripple-wall bracing, and related permitted work), following SDCI or local-jurisdiction permit requirements."
      }
    ],
    "photoSlots": [
      "Crawlspace / foundation bolting detail",
      "foundation access",
      "permit documents graphic"
    ],
    "sources": [
      "https://cgengineering.com/2025/10/seismic-retrofitting-guide-for-seattle-homeowners/",
      "https://www.soundseismic.com/earthquake-retrofit-contractor/earthquake-proofing-information",
      "https://engineering-contracting-design.com/seismic-retrofit",
      "https://www.seattle.gov/construction-and-inspections/permits/permits-we-issue-(a-z)/earthquake-home-retrofit-permit"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 4700,
    "mfTypical": 7500,
    "mfHigh": 15000,
    "mfNote": "Prescriptive plan-set homes often near typical; finished basements need the high band.",
    "marketMid": 10000,
    "pctBelowMid": 25.0
  },
  {
    "slug": "tile-installation-cost-seattle",
    "keyword": "tile installation cost Seattle",
    "title": "Tile installation cost Seattle",
    "seoTitle": "Tile installation cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for tile installation cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/tile/",
    "relatedServices": [
      "/services/tile/",
      "/services/bathroom-remodels/"
    ],
    "fitsCore": "Yes",
    "unit": "per sq ft",
    "low": 12,
    "typical": 25,
    "high": 50,
    "lowLabel": "Installed tile low $/sf (Seattle flooring guide)",
    "typicalLabel": "Going Rate King County tile floor complete about $25\u2013$26/sf",
    "highLabel": "Complex porcelain / pattern work high $/sf",
    "notes": "BB Builders Seattle guide: ceramic/porcelain about $12\u2013$50/sf installed. Going Rate King County complete tile floors about $25\u2013$26/sf.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for tile installation cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $10 / per sq ft, typical about $19 / per sq ft, high planning band about $37 / per sq ft. Public Seattle market midpoint used for comparison is about $25 / per sq ft. Shower waterproofing is usually a separate line from flat floor tile. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does tile installation cost in Seattle?",
        "a": "Seattle flooring guides put ceramic/porcelain tile roughly $12\u2013$50 per square foot installed. A King County going-rate snapshot lists complete tile floors around $25\u2013$26/sf."
      },
      {
        "q": "Why is shower tile more expensive?",
        "a": "Waterproofing, slopes to drain, niches, and glass add labor and materials beyond flat floor tile."
      },
      {
        "q": "Can MasterFix tile my bathroom?",
        "a": "Yes \u2014 tile and bathroom remodels are listed services. Request a written scope-based estimate."
      }
    ],
    "photoSlots": [
      "floor tile",
      "shower tile",
      "schluter/waterproofing detail",
      "grout finish"
    ],
    "sources": [
      "https://bb-builders.pro/flooring-replacement-cost-seattle/",
      "https://goingrate.co/rates/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 10,
    "mfTypical": 19,
    "mfHigh": 37,
    "mfNote": "Shower waterproofing is usually a separate line from flat floor tile.",
    "marketMid": 25,
    "pctBelowMid": 24.0
  },
  {
    "slug": "interior-painting-cost-seattle",
    "keyword": "interior painting cost Seattle",
    "title": "Interior painting cost Seattle",
    "seoTitle": "Interior painting cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for interior painting cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/paint/",
    "relatedServices": [
      "/services/paint/",
      "/services/drywall/"
    ],
    "fitsCore": "Yes",
    "unit": "per sq ft",
    "low": 2.5,
    "typical": 6.65,
    "high": 8.75,
    "lowLabel": "Going Rate interior walls simple repaint $/sf",
    "typicalLabel": "Walls + ceilings + trim standard $/sf (Going Rate King County)",
    "highLabel": "Premium/occupied walls+ceilings+trim $/sf",
    "notes": "Going Rate King County 2026: simple repaint about $2.50\u2013$3.00/sf; walls+ceilings+trim about $6.50\u2013$6.80/sf; premium occupied about $7.67\u2013$8.75/sf.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for interior painting cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $2.05 / per sq ft, typical about $4.95 / per sq ft, high planning band about $6.55 / per sq ft. Public Seattle market midpoint used for comparison is about $6.65 / per sq ft. Lead-safe practices on pre-1978 homes can add prep time. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does interior painting cost in Seattle / King County?",
        "a": "A 2026 King County contractor-rate snapshot lists about $2.50\u2013$3.00 per sq ft for a simple interior wall repaint, and about $6.50\u2013$6.80 per sq ft when walls, ceilings, and trim are included."
      },
      {
        "q": "Does paint need a permit?",
        "a": "Ordinary interior painting usually does not. Lead-safe work practices apply on pre-1978 housing when disturbing paint."
      },
      {
        "q": "Do you have paint project photos?",
        "a": "Paint project photos are still being added to the site. Ask for recent paint examples when you request an estimate."
      }
    ],
    "photoSlots": [
      "cut-ins/trim",
      "cabinet paint if offered",
      "before/after wall"
    ],
    "sources": [
      "https://goingrate.co/rates/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 2.05,
    "mfTypical": 4.95,
    "mfHigh": 6.55,
    "mfNote": "Lead-safe practices on pre-1978 homes can add prep time.",
    "marketMid": 6.65,
    "pctBelowMid": 25.6
  },
  {
    "slug": "deck-addition-cost-seattle",
    "keyword": "deck addition cost Seattle",
    "title": "Deck addition cost Seattle",
    "seoTitle": "Deck addition cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for deck addition cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/",
    "relatedServices": [
      "/services/fencing/",
      "/services/paint/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for deck additions.",
    "unit": "project",
    "low": 20294,
    "typical": 28639,
    "high": 45000,
    "lowLabel": "Cost vs. Value 2025 Seattle wood deck addition",
    "typicalLabel": "Cost vs. Value 2025 Seattle composite deck addition",
    "highLabel": "Larger / elevated / covered decks (local planning high)",
    "notes": "CvV Seattle wood $20,294 / composite $28,639. Angi Seattle deck guide: about $37\u2013$74/sf; average project about $10,133 for many smaller decks.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for deck addition cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $8,100, typical about $21,400, high planning band about $33,700. Public Seattle market midpoint used for comparison is about $28,639. High end for elevated/complex sites; starting for smaller ground-level wood decks. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does a deck cost in Seattle?",
        "a": "Cost vs. Value 2025 Seattle lists about $20,294 for a wood deck addition scope and about $28,639 for composite, with estimated cost recouped around 83% and 80% respectively."
      },
      {
        "q": "Do decks need permits in Seattle?",
        "a": "Many decks need SDCI permits; height, attachment, and location in required yards matter. See SDCI Tip #312 and confirm before building."
      },
      {
        "q": "Does MasterFix build decks?",
        "a": "Yes. Seattle MasterFix provides full general contracting for deck additions in Seattle & King County, including permitting coordination under applicable SDCI / local rules."
      }
    ],
    "photoSlots": [
      "Finished deck detail",
      "rail detail",
      "ledger flashing"
    ],
    "sources": [
      "https://zondahome.com/2025-cost-vs-value-report/",
      "https://www.angi.com/articles/how-much-does-it-cost-build-deck/wa/seattle",
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 8100,
    "mfTypical": 21400,
    "mfHigh": 33700,
    "mfNote": "High end for elevated/complex sites; starting for smaller ground-level wood decks.",
    "marketMid": 28639,
    "pctBelowMid": 25.3
  },
  {
    "slug": "unit-turn-cost-seattle",
    "keyword": "apartment unit turn cost Seattle",
    "title": "Apartment unit turn cost Seattle",
    "seoTitle": "Apartment unit turn cost Seattle | Seattle MasterFix",
    "seoDescription": "MasterFix and public market ranges for apartment unit turn cost Seattle in Seattle & King County. WA contractor #SEATTMP744NL. Free on-site estimate.",
    "serviceLink": "/services/unit-turns/",
    "relatedServices": [
      "/services/unit-turns/",
      "/property-managers/"
    ],
    "fitsCore": "Yes \u2014 /services/unit-turns/",
    "unit": "per unit",
    "low": 1200,
    "typical": 6500,
    "high": 20000,
    "lowLabel": "Basic make-ready band (multifamily GC guide)",
    "typicalLabel": "Standard refresh mid band",
    "highLabel": "Full unit remodel band",
    "notes": "Industry multifamily guides often group basic make-ready about $1,200\u2013$2,500, standard refresh about $4,000\u2013$8,500, and full remodel about $12,000\u2013$28,000+.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "What does Seattle MasterFix typically charge for apartment unit turn cost Seattle?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate: starting about $950 / per unit, typical about $4,850 / per unit, high planning band about $15,000 / per unit. Public Seattle market midpoint used for comparison is about $6,500 / per unit. Package days assume vacant unit and materials in hand; written estimate confirms. Final price is after a free on-site estimate."
      },
      {
        "q": "How much does an apartment unit turn cost in Seattle?",
        "a": "Public multifamily guides often group turns as basic make-ready (about $1,200\u2013$2,500), standard refresh (about $4,000\u2013$8,500), and full remodel ($12,000\u2013$28,000+). These are industry planning bands \u2014 request a unit-specific bid."
      },
      {
        "q": "What unit-turn packages does MasterFix offer?",
        "a": "Typical Seattle MasterFix project ranges, final price after free on-site estimate for vacant units: Basic make-ready starting $950 / typical $1,350 (3\u20135 business days); Standard refresh starting $3,000 / typical $4,850 (7\u201312 business days); Full unit remodel starting $8,950 / typical $15,000 (14\u201328 business days). Scope is confirmed in a written estimate."
      }
    ],
    "photoSlots": [
      "unit turn paint",
      "flooring refresh",
      "bath refresh",
      "make-ready checklist graphic"
    ],
    "sources": [
      "https://unitedgreenbuilders.com/property-manager-guide",
      "https://propertymanagersseattle.com/cost-of-tenant-turnover/"
    ],
    "mfLabel": "Typical Seattle MasterFix project ranges, final price after free on-site estimate",
    "mfStarting": 950,
    "mfTypical": 4850,
    "mfHigh": 15000,
    "mfNote": "Package days assume vacant unit and materials in hand; written estimate confirms.",
    "marketMid": 6500,
    "pctBelowMid": 25.4,
    "packages": [
      {
        "name": "Basic make-ready",
        "starting": 950,
        "typical": 1350,
        "days": "3\u20135 business days"
      },
      {
        "name": "Standard refresh",
        "starting": 3000,
        "typical": 4850,
        "days": "7\u201312 business days"
      },
      {
        "name": "Full unit remodel",
        "starting": 8950,
        "typical": 15000,
        "days": "14\u201328 business days"
      }
    ]
  }
]


export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function formatGuideMoney(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: Number.isInteger(n) ? 0 : 2,
  }).format(n);
}
