/**
 * Cost-guide hub pages for local SEO.
 * Price bands are public-source planning estimates (e.g. Cost vs. Value 2025 Seattle),
 * clearly labeled — never MasterFix fixed quotes.
 */

export type GuideSlug = "kitchen-remodel-cost-seattle" | "bathroom-remodel-cost-seattle" | "bathroom-remodel-ballard" | "adu-cost-seattle" | "adu-builder-ballard" | "basement-finishing-cost-seattle" | "siding-replacement-cost-seattle" | "fence-installation-cost-seattle" | "laminate-flooring-cost-seattle" | "drywall-repair-cost-seattle" | "seismic-retrofit-king-county" | "tile-installation-cost-seattle" | "interior-painting-cost-seattle" | "deck-addition-cost-seattle" | "unit-turn-cost-seattle";

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
};

export const guides: Guide[] = 
[
  {
    "slug": "kitchen-remodel-cost-seattle",
    "keyword": "kitchen remodel cost Seattle 2026",
    "title": "Kitchen remodel cost Seattle 2026",
    "seoTitle": "Kitchen remodel cost Seattle 2026 | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for kitchen remodel cost Seattle 2026 in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "lowLabel": "Minor midrange (CvV 2025 Seattle)",
    "typicalLabel": "Major midrange (CvV 2025 Seattle)",
    "highLabel": "Upscale (CvV 2025 Seattle)",
    "notes": "CvV defined scopes, not quotes. Seattle sales tax ~10.55% may apply on top (WA DOR / FairHomeCost).",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794",
      "https://fairhomecost.com/seattle/kitchen-remodel-cost/"
    ]
  },
  {
    "slug": "bathroom-remodel-cost-seattle",
    "keyword": "bathroom remodel cost Seattle 2026",
    "title": "Bathroom remodel cost Seattle 2026",
    "seoTitle": "Bathroom remodel cost Seattle 2026 | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for bathroom remodel cost Seattle 2026 in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "lowLabel": "Midrange bath remodel (CvV 2025 Seattle)",
    "typicalLabel": "Universal-design bath (CvV 2025 Seattle)",
    "highLabel": "Upscale bath remodel (CvV 2025 Seattle)",
    "notes": "Cosmetic refreshes can land lower; layout moves and waterproofing drive cost up.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794"
    ]
  },
  {
    "slug": "bathroom-remodel-ballard",
    "keyword": "bathroom remodel Ballard",
    "title": "Bathroom remodel Ballard",
    "seoTitle": "Bathroom remodel Ballard | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for bathroom remodel Ballard in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "lowLabel": "CvV midrange Seattle (proxy)",
    "typicalLabel": "Planning mid (between midrange & universal)",
    "highLabel": "CvV upscale Seattle (proxy)",
    "notes": "No Ballard-only public CvV split; use Seattle market figures as planning baseline.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      }
    ],
    "photoSlots": [
      "Ballard bathroom if available",
      "shower tile",
      "older-home plumbing access"
    ],
    "sources": [
      "https://www.unitedsignature.com/seattle-remodel-permit-checklist-building-electrical-plumbing-and-mechanical-permits-by-project-type/"
    ]
  },
  {
    "slug": "adu-cost-seattle",
    "keyword": "ADU cost Seattle 2026",
    "title": "ADU cost Seattle 2026",
    "seoTitle": "ADU cost Seattle 2026 | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for ADU cost Seattle 2026 in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
    "serviceLink": "/services/",
    "relatedServices": [
      "/services/drywall/",
      "/services/paint/",
      "/services/tile/",
      "/services/laminate/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for ADU / DADU projects.",
    "unit": "project",
    "low": 150000,
    "typical": 210944,
    "high": 350000,
    "lowLabel": "Lower planning band",
    "typicalLabel": "CvV 2025 Seattle Accessory Dwelling Unit",
    "highLabel": "Larger / custom DADU planning band",
    "notes": "CvV models one defined ADU scope. Pre-approved DADU plans can speed SDCI review (SDCI/OPCD ADUniverse).",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794",
      "https://seattle.gov/construction-and-inspections/permits/common-projects/accessory-dwelling-units"
    ]
  },
  {
    "slug": "adu-builder-ballard",
    "keyword": "ADU builder Ballard",
    "title": "ADU builder Ballard",
    "seoTitle": "ADU builder Ballard | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for ADU builder Ballard in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
    "serviceLink": "/service-area/ballard/",
    "relatedServices": [
      "/service-area/ballard/",
      "/services/"
    ],
    "fitsCore": "Yes \u2014 full general contracting for Ballard ADU / DADU projects.",
    "unit": "project",
    "low": 150000,
    "typical": 210944,
    "high": 350000,
    "lowLabel": "Planning low",
    "typicalLabel": "CvV 2025 Seattle ADU",
    "highLabel": "Planning high",
    "notes": "Ballard often has compact lots; setbacks, lot coverage, and alley access matter.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794",
      "https://seattle.gov/construction-and-inspections/permits/common-projects/accessory-dwelling-units"
    ]
  },
  {
    "slug": "basement-finishing-cost-seattle",
    "keyword": "basement finishing Seattle cost",
    "title": "Basement finishing Seattle cost",
    "seoTitle": "Basement finishing Seattle cost | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for basement finishing Seattle cost in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "lowLabel": "Smaller finish planning band",
    "typicalLabel": "CvV 2025 Seattle Basement Remodel",
    "highLabel": "Guest suite / higher finish",
    "notes": "CvV basement remodel ~$68,358 Seattle, ~68% cost recouped. Moisture and egress drive real scopes.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794"
    ]
  },
  {
    "slug": "siding-replacement-cost-seattle",
    "keyword": "siding replacement cost Seattle",
    "title": "Siding replacement cost Seattle",
    "seoTitle": "Siding replacement cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for siding replacement cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
    "serviceLink": "/services/siding/",
    "relatedServices": [
      "/services/siding/",
      "/services/paint/"
    ],
    "fitsCore": "Yes \u2014 /services/siding/",
    "unit": "project",
    "low": 25656,
    "typical": 29743,
    "high": 55000,
    "lowLabel": "CvV vinyl siding replacement Seattle",
    "typicalLabel": "CvV fiber-cement siding replacement Seattle",
    "highLabel": "Larger / complex elevations",
    "notes": "CvV models whole-house defined scopes. Real $/sf and stories vary.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794"
    ]
  },
  {
    "slug": "fence-installation-cost-seattle",
    "keyword": "fence installation cost Seattle",
    "title": "Fence installation cost Seattle",
    "seoTitle": "Fence installation cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for fence installation cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "typicalLabel": "Angi Seattle average ~$40/lf",
    "highLabel": "Premium clear cedar / complex sites (local contractor blogs)",
    "notes": "Angi Seattle: ~$24\u2013$56/lf depending on material; cedar often $25\u2013$50/lf in mid guides; some specialty shops quote $50\u2013$85/lf for premium privacy.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://www.angi.com/articles/how-much-does-fence-installation-cost/wa/seattle",
      "https://seattle.gov/DPD/Publications/CAM/cam312.pdf"
    ]
  },
  {
    "slug": "laminate-flooring-cost-seattle",
    "keyword": "laminate flooring cost Seattle",
    "title": "Laminate flooring cost Seattle",
    "seoTitle": "Laminate flooring cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for laminate flooring cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
    "serviceLink": "/services/laminate/",
    "relatedServices": [
      "/services/laminate/"
    ],
    "fitsCore": "Yes",
    "unit": "per sq ft",
    "low": 3,
    "typical": 8,
    "high": 13,
    "lowLabel": "Installed laminate low $/sf (BB Builders Seattle 2026 guide)",
    "typicalLabel": "Mid installed planning $/sf",
    "highLabel": "Installed laminate high $/sf (same guide)",
    "notes": "BB Builders Seattle 2026: laminate $3\u2013$13 installed. Going Rate King County lists LVP/laminate complete ~$8.75\u2013$9/sf (spot check).",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
    ]
  },
  {
    "slug": "drywall-repair-cost-seattle",
    "keyword": "drywall repair cost Seattle",
    "title": "Drywall repair cost Seattle",
    "seoTitle": "Drywall repair cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for drywall repair cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "notes": "Angi Seattle: repair avg $834 ($392\u2013$1,349). Install ~$1.50\u2013$4/sf. Large replacements scale differently.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
    ]
  },
  {
    "slug": "seismic-retrofit-king-county",
    "keyword": "seismic retrofit King County",
    "title": "Seismic retrofit King County",
    "seoTitle": "Seismic retrofit King County | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for seismic retrofit King County in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "highLabel": "Engineered / finished basement access",
    "notes": "CG Engineering / Stronghome-style guides: often $7k\u2013$12k typical. Sound Seismic: $5k\u2013$12k typical; finished basements $15k\u2013$20k+. ECD: $8k\u2013$20k engineered bracing band.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
    ]
  },
  {
    "slug": "tile-installation-cost-seattle",
    "keyword": "tile installation cost Seattle",
    "title": "Tile installation cost Seattle",
    "seoTitle": "Tile installation cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for tile installation cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "lowLabel": "Installed tile low $/sf (BB Builders Seattle guide)",
    "typicalLabel": "Going Rate King County tile floor complete ~$25\u2013$26/sf",
    "highLabel": "Complex porcelain / pattern work high $/sf",
    "notes": "Labor is a large share; showers and waterproofing are separate line items from field tile.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
    ]
  },
  {
    "slug": "interior-painting-cost-seattle",
    "keyword": "interior painting cost Seattle",
    "title": "Interior painting cost Seattle",
    "seoTitle": "Interior painting cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for interior painting cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
    "serviceLink": "/services/paint/",
    "relatedServices": [
      "/services/paint/",
      "/services/drywall/"
    ],
    "fitsCore": "Yes",
    "unit": "per sq ft",
    "low": 2.5,
    "typical": 6.5,
    "high": 8.75,
    "lowLabel": "Going Rate interior walls simple repaint $/sf",
    "typicalLabel": "Walls + ceilings + trim standard $/sf",
    "highLabel": "Premium/occupied walls+ceilings+trim $/sf",
    "notes": "Going Rate King County 2026: simple repaint $2.5\u2013$3/sf; walls+ceilings+trim $6.5\u2013$6.8/sf; premium occupied $7.67\u2013$8.75/sf.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
    ]
  },
  {
    "slug": "deck-addition-cost-seattle",
    "keyword": "deck addition cost Seattle",
    "title": "Deck addition cost Seattle",
    "seoTitle": "Deck addition cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for deck addition cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "lowLabel": "CvV wood deck addition Seattle",
    "typicalLabel": "CvV composite deck addition Seattle",
    "highLabel": "Larger / covered decks",
    "notes": "CvV models defined deck additions. Height above grade affects lot coverage and yard rules (SDCI Tip 312).",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
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
      "https://myemail.constantcontact.com/Discover-Average-Costs-for-28-Different-Types-of-Projects---Finally--Construction-Starts.html?aid=jAR0Xu2bGeY&soid=1133778892794",
      "https://seattle.gov/DPD/Publications/CAM/cam312.pdf"
    ]
  },
  {
    "slug": "unit-turn-cost-seattle",
    "keyword": "apartment unit turn cost Seattle",
    "title": "Apartment unit turn cost Seattle",
    "seoTitle": "Apartment unit turn cost Seattle | Seattle MasterFix",
    "seoDescription": "Public 2025\u201326 planning ranges for apartment unit turn cost Seattle in Seattle & King County, with cited sources. WA contractor #SEATTMP744NL. Not a MasterFix quote \u2014 request a written estimate.",
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
    "notes": "United Green Builders PM guide cites roughly $1.2k\u2013$2.5k basic, $4k\u2013$8.5k standard refresh, $12k\u2013$28k+ full remodel \u2014 treat as planning bands, not MasterFix price list. actual packages.",
    "costDrivers": [
      "Scope and whether layout, plumbing, or structure changes",
      "Material grade and lead times",
      "Access, stories, and occupied-home constraints",
      "Moisture, older wiring/plumbing, and hidden repairs common in Seattle housing stock",
      "Permits, inspections, and Washington sales tax"
    ],
    "faqs": [
      {
        "q": "How much does an apartment unit turn cost in Seattle?",
        "a": "Public multifamily guides often group turns as basic make-ready (about $1,200\u2013$2,500), standard refresh (about $4,000\u2013$8,500), and full remodel ($12,000\u2013$28,000+). These are industry planning bands \u2014 request a unit-specific bid."
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
    ]
  }
]
;

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function formatGuideMoney(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
