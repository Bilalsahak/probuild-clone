/**
 * Service-area location pages for Seattle neighborhoods and King County cities.
 *
 * Home turf (Ballard, Greenwood, Ravenna, North Seattle) was approved by Bill
 * on 2026-11-06. Additional pages are for places inside the confirmed service
 * area (Seattle and King County) and are not labelled as home turf. The written
 * quote still confirms whether we can take a given address.
 *
 * Copy rules:
 * - No invented jobs, reviews, quotes, or statistics.
 * - Photos are crew work from the existing library and are never labelled as
 *   jobs in that neighbourhood.
 * - A published job block is allowed only for a confirmed Seattle MasterFix
 *   project. Otherwise the page carries an HTML comment
 *   `<!-- TODO Bill: add a real job here -->` and no fake project.
 * - Edmonds, Lynnwood, Puyallup and Tacoma are intentionally omitted: they sit
 *   outside the confirmed Seattle & King County service area, and the Puyallup
 *   seismic ceiling-grid lead was not confirmed as a completed job.
 */
import type { GuideSlug } from "@/content/guides";
import type { PhotoTrade, ServiceSlug } from "@/content/services";

export type AreaRegion = "home-turf" | "seattle" | "north-king" | "eastside" | "south-king";

export const regionLabels: Record<AreaRegion, string> = {
  "home-turf": "Home turf",
  seattle: "Seattle neighborhoods",
  "north-king": "North King County",
  eastside: "Eastside",
  "south-king": "South King County",
};

export type CommonProject = {
  title: string;
  body: string;
  serviceSlug?: ServiceSlug;
  guideSlug?: GuideSlug;
};

export type PermitNotes = {
  body: string;
  officialName: string;
  officialHref: string;
  extra?: { name: string; href: string }[];
};

export type LocalJob =
  | {
      status: "published";
      title: string;
      summary: string;
      href?: string;
      hrefLabel?: string;
    }
  | { status: "todo" };

export type Neighbourhood = {
  slug: string;
  name: string;
  region: AreaRegion;
  /** City used in schema and areaServed, e.g. "Seattle" or "Bellevue". */
  city: string;
  placeKind: "neighborhood" | "city";
  heroTitle: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  intro2: string;
  housingStock: string;
  commonProjects: CommonProject[];
  permitNotes: PermitNotes;
  focusGuides: GuideSlug[];
  focusServices: ServiceSlug[];
  nearbySlugs: string[];
  job: LocalJob;
  photoFiles: { trade: PhotoTrade; file: string }[];
};

/**
 * Confirmed Seattle MasterFix job, paid in full. Do not name the client or
 * publish the street address. Photos on /projects/ are before and during only.
 */
export const seattleAreaFeaturedJob = {
  title: "Commercial ceiling and drywall",
  summary:
    "A Seattle-area commercial ceiling and drywall project: open ceiling cavities were closed in with new board, then taped and mudded. Photos on the projects page show before and during work only. Finished shots will be added when we have them. The client is unnamed.",
  href: "/projects/",
  hrefLabel: "See project photos",
} as const;

export const neighbourhoods: Neighbourhood[] = [
  {
    slug: "greenwood",
    name: "Greenwood",
    region: "home-turf",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Greenwood exterior painting and remodeling",
    seoTitle: "Greenwood exterior painting and remodeling contractor",
    seoDescription:
      "Exterior painting, wall restoration, shower tile and ceiling work in Greenwood, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Greenwood is on our home turf in North Seattle, a short drive from our shop on 6th Ave NW. We take on exterior painting and siding repairs, bathroom and shower tile, ceiling and drywall work, and the rest of our eight trades for homes here.",
    intro2:
      "Greenwood Avenue and the blocks around it have a lot of older wood exteriors that show weather, peeling paint, and localized rot. Tell us the property address when you request an estimate. The written quote confirms the service area and the scope for your job.",
    housingStock:
      "Much of Greenwood and nearby Phinney Ridge is made up of early-1900s Craftsman and bungalow houses, with mid-century homes and newer infill mixed in. Many still have original or aging wood siding, window trim, and soffits. On the wet west slope of the hill, paint film and wood trim take regular weather, so exterior prep — scraping, priming, and repairing failed wood — is often as important as the finish coats. Interiors in these houses frequently have older bathrooms, plaster or early drywall ceilings, and kitchens that have been remodeled in stages.",
    commonProjects: [
      {
        title: "Exterior painting and wall restoration",
        body:
          "On Greenwood's wood-sided homes, a paint job often starts with repairs: failed caulk, soft trim, and localized siding damage. We also take on siding repair or replacement when the wall itself needs more than paint. Exterior paint is quoted on site from the condition of the surfaces, height and access, and how much prep is required — there is no separate exterior-paint range on this site. For whole-house siding replacement, see the planning bands in our siding guide. Homes built before 1978 can need extra paint prep; we factor that into the written quote after we see the house.",
        serviceSlug: "paint",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Shower tile and bathroom remodels",
        body:
          "Older Greenwood bathrooms often need a waterproof shower rebuild, not just new tile over what is already there. We handle tile, drywall, and paint as one project when the room requires it.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Ceilings and drywall",
        body:
          "Ceiling cracks, water staining, and texture matching are common in older North Seattle houses. We patch, replace, and finish drywall on walls and ceilings, then paint when that is part of the agreed scope.",
        serviceSlug: "drywall",
        guideSlug: "drywall-repair-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Greenwood is inside Seattle city limits, so building, electrical, and plumbing permits are issued by the Seattle Department of Construction & Inspections (SDCI), not a separate neighborhood office. Ordinary interior paint and like-for-like surface flooring often do not need a building permit. Work that changes structure, the weather envelope, a wet location, or electrical circuits usually does. Fence and deck rules, accessory dwelling units, and voluntary earthquake retrofits have their own SDCI guidance. Dollar thresholds and exemptions change — confirm the current rules with SDCI before you open walls or start demolition. We discuss likely permit needs at the estimate and put them in the written quote when they apply.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "interior-painting-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "drywall-repair-cost-seattle",
      "tile-installation-cost-seattle",
    ],
    focusServices: ["paint", "siding", "bathroom-remodels", "tile", "drywall"],
    nearbySlugs: ["north-seattle", "ballard", "fremont", "wallingford", "ravenna", "shoreline"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding2.webp" },
      { trade: "fencing", file: "fencing3.webp" },
      { trade: "tile", file: "tile2.webp" },
      { trade: "laminate", file: "laminate5.webp" },
      { trade: "drywall", file: "drywall4.webp" },
    ],
  },
  {
    slug: "ballard",
    name: "Ballard",
    region: "home-turf",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Ballard bathroom remodeling and repair",
    seoTitle: "Ballard bathroom remodeling and repair contractor",
    seoDescription:
      "Bathroom remodels, shower tile, and home repair in Ballard, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Ballard is on our home turf. Our shop is in the neighborhood, at 5415 6th Ave NW. We work on bathroom remodels and shower tile, siding and paint, flooring, drywall, fencing, and unit turns in Ballard homes and small residential buildings.",
    intro2:
      "Lots here are often tight, and many houses have been added onto over time. Share the property address when you request an estimate so we can confirm access, parking, and that the job is in our service area before we visit.",
    housingStock:
      "Ballard still has a large number of early-1900s Craftsman houses and smaller worker cottages, alongside newer townhouses and accessory dwelling units. Many older homes have compact bathrooms, original or aging plumbing walls, and wood exteriors that face wind off the water. Infill and ADU work is common on lots that already have a main house, so staging and protecting the occupied home matters as much as the new work itself.",
    commonProjects: [
      {
        title: "Bathroom remodels and shower tile",
        body:
          "A Ballard bathroom remodel often means opening a small existing bath, improving waterproofing in the shower, and tying new tile, drywall, and paint together in one scope. We have a Ballard-specific cost guide for planning bands, and a Seattle-wide tile guide for per-square-foot ranges.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-ballard",
      },
      {
        title: "ADUs and added living space",
        body:
          "When a Ballard lot can take a backyard or basement unit, the finish work — drywall, paint, flooring, tile, and sometimes a new bath — is work we do as a general contractor. Planning bands for ADU projects are in our Ballard ADU guide. Zoning and permits are confirmed with the city for each site.",
        guideSlug: "adu-builder-ballard",
      },
      {
        title: "Siding, paint, and weather repairs",
        body:
          "Wood siding and trim in Ballard take a lot of weather. We repair or replace siding, paint interiors and exteriors, and quote the work after we see the surfaces and how we would reach them.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Ballard is in Seattle, so permits go through SDCI. Bathroom remodels that change plumbing, add a shower, or move walls usually need plumbing and construction permits; a surface refresh of finishes may not. ADUs need addition or alteration permits, and Seattle offers pre-approved DADU plan options that can shorten review on some sites. Fence height, yards, and lot coverage are covered in SDCI tip sheets. Confirm current requirements with SDCI for your address. We will say in the written quote if the scope is likely to need a permit and who is submitting it.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "Seattle accessory dwelling units",
          href: "https://www.seattle.gov/construction-and-inspections/permits/common-projects/accessory-dwelling-units",
        },
      ],
    },
    focusGuides: [
      "bathroom-remodel-ballard",
      "tile-installation-cost-seattle",
      "adu-builder-ballard",
      "siding-replacement-cost-seattle",
      "interior-painting-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "tile", "siding", "paint", "drywall"],
    nearbySlugs: ["greenwood", "fremont", "magnolia", "queen-anne", "north-seattle", "wallingford"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding6.webp" },
      { trade: "fencing", file: "fencing.webp" },
      { trade: "tile", file: "tile8.webp" },
      { trade: "laminate", file: "laminate.webp" },
      { trade: "drywall", file: "drywall.webp" },
    ],
  },
  {
    slug: "ravenna",
    name: "Ravenna",
    region: "home-turf",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Ravenna remodeling and repair contractor",
    seoTitle: "Ravenna remodeling and repair contractor",
    seoDescription:
      "Drywall, bathrooms, flooring and home repair in Ravenna, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Ravenna is on our home turf in northeast Seattle, near the University District and Roosevelt. We work on drywall and ceilings, bathrooms, flooring, paint, siding, fencing, and unit turns in houses and small residential buildings here.",
    intro2:
      "Tree canopy, older basements, and tight street parking are part of working in Ravenna. Tell us the address and the trade when you request an estimate so we can plan access and confirm the service area in your written quote.",
    housingStock:
      "Ravenna and the blocks toward Roosevelt and the University District include many early-1900s houses, brick and stucco exteriors as well as wood, and a number of mid-century homes. Basements are common, and some have been partly finished already. Older plaster or early drywall, settled trim, and bathrooms that have not been rebuilt in a long time show up often. The neighborhood's trees keep a lot of shade and moss on roofs, decks, and north walls, which can show up later as ceiling stains or exterior paint failure.",
    commonProjects: [
      {
        title: "Drywall, ceilings, and texture match",
        body:
          "Patches after leaks, ceiling repairs, and matching an existing texture are typical Ravenna interior jobs. We can include interior paint in the same written quote when the repair needs to blend into the surrounding room.",
        serviceSlug: "drywall",
        guideSlug: "drywall-repair-cost-seattle",
      },
      {
        title: "Bathrooms and tile",
        body:
          "Many Ravenna baths are still the original footprint. A shower rebuild or a full bath remodel is quoted as one project, including waterproofing, tile, and the drywall and paint that go with it.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Basement finishing",
        body:
          "Where a basement is dry enough to finish, the work often includes drywall, flooring, paint, and sometimes a new bathroom. Moisture and egress have to be checked before we price a finish package. See the basement guide for planning bands.",
        guideSlug: "basement-finishing-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Ravenna is in Seattle, so SDCI is the permit agency. Finishing a basement, adding a bathroom, or changing egress typically needs permits; a drywall patch and interior paint often do not. If the house is in or near a shoreline, environmentally critical area, or a special district, extra review can apply — that is checked against the address, not assumed from the neighborhood name. Confirm current SDCI rules before you start. Permit costs that apply are listed in the written quote.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "drywall-repair-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "basement-finishing-cost-seattle",
      "laminate-flooring-cost-seattle",
      "interior-painting-cost-seattle",
    ],
    focusServices: ["drywall", "bathroom-remodels", "laminate", "paint", "tile"],
    nearbySlugs: ["north-seattle", "wallingford", "greenwood", "lake-forest-park", "capitol-hill", "fremont"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding3.webp" },
      { trade: "fencing", file: "fencing6.webp" },
      { trade: "tile", file: "tile12.webp" },
      { trade: "laminate", file: "laminate9.webp" },
      { trade: "drywall", file: "drywall5.webp" },
    ],
  },
  {
    slug: "north-seattle",
    name: "North Seattle",
    region: "home-turf",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "North Seattle remodeling and repair contractor",
    seoTitle: "North Seattle remodeling, ceilings and exterior repair",
    seoDescription:
      "Ceiling, drywall, exterior painting and remodeling in North Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "North Seattle is on our home turf. That includes Greenwood and the residential areas toward Broadview, Bitter Lake, Haller Lake, Northgate, and the neighborhoods just south of the city line at Shoreline. We handle all eight of our trades here.",
    intro2:
      "Housing in North Seattle ranges from early-1900s streets to mid-century ramblers, so the same trade can look very different from one block to the next. Give us the property address with your estimate request. The written quote confirms the service area for that job.",
    housingStock:
      "North Seattle is not one housing type. Closer to Greenwood and Phinney you still see Craftsman and bungalow streets; farther north, mid-century ramblers, split-levels, and some 1970s–1990s houses are more common, with newer apartments and townhouses around Northgate. Ramblers often have original windows, aging siding, and bathrooms that have had only surface updates. Older streets have the same exterior paint, trim, and ceiling issues you see in Greenwood. We look at the actual house, not a neighborhood average, when we put a quote together.",
    commonProjects: [
      {
        title: "Ceilings, drywall, and interior repairs",
        body:
          "Ceiling stains after a roof or plumbing leak, cracked drywall, and rooms that need to be closed back in after other work are regular North Seattle jobs. Planning bands for typical drywall repairs are in our drywall guide. Larger ceiling replacements are quoted from the conditions on site.",
        serviceSlug: "drywall",
        guideSlug: "drywall-repair-cost-seattle",
      },
      {
        title: "Exterior painting and siding",
        body:
          "Mid-century and older wood-sided houses in North Seattle often need paint, caulk, and siding repairs in the same visit. Exterior paint is priced after we see the surfaces. Whole-house siding replacement uses the ranges in the siding guide as a planning starting point.",
        serviceSlug: "paint",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Bathrooms and flooring",
        body:
          "A dated hall bath or a worn laminate floor is a common reason people call us in North Seattle. Those trades can be quoted together when you want one crew and one written scope.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Most of what people call North Seattle is still inside Seattle city limits, so SDCI issues the permits. Shoreline, Lake Forest Park, and other cities just across the line have their own departments — do not assume a Seattle tip sheet applies if the address is outside the city. For Seattle addresses, the usual rule holds: cosmetic finishes are often lighter or exempt, while structural, envelope, plumbing, and electrical work usually need permits. We confirm the jurisdiction from the address on your estimate request.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "drywall-repair-cost-seattle",
      "interior-painting-cost-seattle",
      "siding-replacement-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "laminate-flooring-cost-seattle",
    ],
    focusServices: ["drywall", "paint", "siding", "bathroom-remodels", "laminate"],
    nearbySlugs: ["greenwood", "ravenna", "ballard", "shoreline", "lake-forest-park", "wallingford"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding7.webp" },
      { trade: "fencing", file: "fencing1.webp" },
      { trade: "tile", file: "tile13.webp" },
      { trade: "laminate", file: "laminate11.webp" },
      { trade: "drywall", file: "drywall6.webp" },
    ],
  },
  {
    slug: "fremont",
    name: "Fremont",
    region: "seattle",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Fremont remodeling and repair contractor",
    seoTitle: "Fremont remodeling and repair contractor",
    seoDescription:
      "Siding, paint, tile and home repair in Fremont, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Fremont sits just east of our Ballard shop, along the ship canal and the hill up toward Phinney and Wallingford. We serve Fremont as part of Seattle and King County. All eight trades are available here; the written quote confirms the service area for your address.",
    intro2:
      "The neighborhood mixes older houses, small commercial streets, and odd additions on sloped lots. Tell us the property address and the trade when you request an estimate so we can plan access and parking before a visit.",
    housingStock:
      "Fremont's residential streets have early-1900s houses, some brick and industrial-adjacent buildings near the water, and newer infill mixed in. Lots can be small and sloped, with additions that do not quite match the original house. That shows up in siding transitions, stepped foundations, and interiors where floor levels or ceiling heights change from one room to the next. Older bathrooms and weathered exteriors are common reasons people call a contractor here.",
    commonProjects: [
      {
        title: "Siding and exterior repairs",
        body:
          "Additions, retained old siding, and walls close to the property line make Fremont exteriors a careful measuring job. We repair or replace siding and quote from the actual elevations and access.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Interior and exterior paint",
        body:
          "Paint is often paired with trim repair or drywall patches so the finish has a sound surface. Interior planning bands are in our painting guide. Exterior paint is quoted on site.",
        serviceSlug: "paint",
        guideSlug: "interior-painting-cost-seattle",
      },
      {
        title: "Tile and bathroom updates",
        body:
          "Compact Fremont bathrooms benefit from a planned shower or floor-tile scope rather than piece-by-piece fixes. Waterproofing is part of a shower tile job, not an extra we surprise you with later.",
        serviceSlug: "tile",
        guideSlug: "tile-installation-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Fremont is in Seattle, so SDCI handles building, electrical, and plumbing permits. Work near the ship canal or in a shoreline overlay can add review steps that a typical inland house would not have — that depends on the parcel, not the neighborhood name alone. Ordinary paint and flooring replacements are often lighter or exempt; opening a wet wall or changing the exterior usually is not. Confirm the current rules with SDCI for your address.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "interior-painting-cost-seattle",
      "tile-installation-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "fence-installation-cost-seattle",
    ],
    focusServices: ["siding", "paint", "tile", "bathroom-remodels", "fencing"],
    nearbySlugs: ["ballard", "wallingford", "greenwood", "queen-anne", "north-seattle", "magnolia"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding4.webp" },
      { trade: "fencing", file: "fencing2.webp" },
      { trade: "tile", file: "tile1.webp" },
      { trade: "laminate", file: "laminate2.webp" },
      { trade: "drywall", file: "drywall1.webp" },
    ],
  },
  {
    slug: "wallingford",
    name: "Wallingford",
    region: "seattle",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Wallingford remodeling and bathroom contractor",
    seoTitle: "Wallingford remodeling and bathroom contractor",
    seoDescription:
      "Bathroom remodels, tile and home repair in Wallingford, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Wallingford runs along 45th and the residential streets between Fremont, the University District, and Green Lake. We serve Wallingford as part of our Seattle and King County service area, with the same eight trades we offer elsewhere in the city.",
    intro2:
      "Many Wallingford houses are close together on established blocks, so protecting neighboring property and planning material drop-off is part of the job. Include your address on the estimate request. The written quote confirms we can take the work on.",
    housingStock:
      "Wallingford was built out as a streetcar neighborhood, and a lot of the housing is still early-1900s Craftsman, foursquare, and bungalow, with some brick and later infill. Interiors often have the original bath and kitchen footprints, picture rail or older trim, and plaster or early drywall. Street-facing porches and wood windows are part of the character, and they are also where paint and rot show up first. Alleys and narrow side yards affect how we stage siding or fence work.",
    commonProjects: [
      {
        title: "Bathroom remodels",
        body:
          "A Wallingford bath remodel is often a full rebuild of a small existing room: shower waterproofing, tile, a vanity wall, and fresh drywall and paint. Planning bands are in our Seattle bathroom guide.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Tile",
        body:
          "Shower walls, bathroom floors, and kitchen backsplashes are quoted by the area and the condition of the substrate. Shower waterproofing is usually a separate line from flat floor tile, as noted in the tile guide.",
        serviceSlug: "tile",
        guideSlug: "tile-installation-cost-seattle",
      },
      {
        title: "Interior paint and drywall",
        body:
          "Paint after repairs, or a whole-room refresh once cracks and patches are finished, is a typical Wallingford interior scope. See the interior painting and drywall guides for planning ranges.",
        serviceSlug: "paint",
        guideSlug: "interior-painting-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Wallingford is in Seattle; SDCI is the permit authority. A bathroom that stays in the same footprint may still need plumbing and construction permits if you change the shower, move fixtures, or open wet walls. Interior paint and like-for-like flooring often do not. If you are considering an ADU in the yard or basement, those follow Seattle's ADU rules, not a Wallingford-specific code. Confirm current SDCI guidance before demolition.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "Seattle accessory dwelling units",
          href: "https://www.seattle.gov/construction-and-inspections/permits/common-projects/accessory-dwelling-units",
        },
      ],
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "tile-installation-cost-seattle",
      "interior-painting-cost-seattle",
      "drywall-repair-cost-seattle",
      "fence-installation-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "tile", "paint", "drywall", "fencing"],
    nearbySlugs: ["fremont", "greenwood", "ravenna", "queen-anne", "north-seattle", "ballard"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding5.webp" },
      { trade: "fencing", file: "fencing4.webp" },
      { trade: "tile", file: "tile4.webp" },
      { trade: "laminate", file: "laminate3.webp" },
      { trade: "drywall", file: "drywall2.webp" },
    ],
  },
  {
    slug: "queen-anne",
    name: "Queen Anne",
    region: "seattle",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Queen Anne exterior and remodeling contractor",
    seoTitle: "Queen Anne exterior and remodeling contractor",
    seoDescription:
      "Exterior repair, siding, bathrooms and remodeling on Queen Anne, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Queen Anne is the hill just southeast of our Ballard shop, above the Interbay and Seattle Center. We serve Queen Anne as part of Seattle and King County: exterior work, bathrooms, drywall, flooring, and the rest of our eight trades.",
    intro2:
      "Steep streets, view lots, and limited parking change how we stage a job here. Please include the address and anything you already know about access or stairs when you request an estimate. The written quote confirms the service area and how we would reach the work.",
    housingStock:
      "Queen Anne has a wide mix: large early-1900s houses on the top of the hill, denser older buildings on the south slope, and mid-century homes on the north and west sides. Steep lots and retained views mean exterior work often needs scaffolding or careful ladder planning, and some siding faces more wind and weather than a sheltered North Seattle wall would. Older houses may still have original baths, plaster, and wood windows. Access from the street to the back of a lot can be the cost driver, not the square footage alone.",
    commonProjects: [
      {
        title: "Exterior siding and paint",
        body:
          "Height, slope, and exposure often matter as much as the siding type on Queen Anne. We quote exterior paint and siding after we see how we would reach each elevation. The siding guide has planning bands for whole-house replacement.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Bathrooms",
        body:
          "Older Queen Anne bathrooms may need a shower rebuild, new tile, and updates to walls that have taken moisture over time. Those trades are priced as one written project when they belong in the same scope.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Drywall and ceilings",
        body:
          "Settling on a hillside house can show up as cracks at corners and ceilings. We repair and finish drywall, and we paint when that is part of blending the repair into the room.",
        serviceSlug: "drywall",
        guideSlug: "drywall-repair-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Queen Anne is in Seattle, so SDCI issues permits. Exterior work that changes the weather envelope, or any structural repair, generally needs a construction permit. On steep or view lots, additional reviews can apply depending on the parcel — we do not assume that from the neighborhood name alone. Bathroom plumbing changes usually need permits; interior paint often does not. Confirm current SDCI requirements for your address before work starts.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "drywall-repair-cost-seattle",
      "interior-painting-cost-seattle",
      "deck-addition-cost-seattle",
    ],
    focusServices: ["siding", "paint", "bathroom-remodels", "drywall", "tile"],
    nearbySlugs: ["magnolia", "ballard", "fremont", "capitol-hill", "west-seattle", "wallingford"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding1.webp" },
      { trade: "fencing", file: "fencing5.webp" },
      { trade: "tile", file: "tile7.webp" },
      { trade: "laminate", file: "laminate6.webp" },
      { trade: "drywall", file: "drywall3.webp" },
    ],
  },
  {
    slug: "capitol-hill",
    name: "Capitol Hill",
    region: "seattle",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Capitol Hill remodeling and unit turns",
    seoTitle: "Capitol Hill remodeling and unit-turn contractor",
    seoDescription:
      "Bathroom tile, unit turns and remodeling on Capitol Hill, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Capitol Hill is Seattle's dense central neighborhood of older houses, small apartment buildings, and mixed-use streets. We serve it as part of Seattle and King County, with bathroom and tile work, unit turns, drywall, paint, flooring, and our other trades.",
    intro2:
      "Parking, shared entries, and occupied neighboring units are normal constraints here. Tell us the property address and whether the space will be vacant when you request an estimate. The written quote confirms the service area and the access assumptions we priced.",
    housingStock:
      "Capitol Hill has early-1900s houses, brick apartment buildings, and a large number of small multifamily properties. Bathrooms in older units are often compact, with aging tile, and many buildings still have original trim and plaster or early drywall. Owners and property managers here sometimes need a vacant unit turned quickly between tenants, rather than a full house remodel. Alleys, walk-up entries, and limited elevator access affect how materials move in and out.",
    commonProjects: [
      {
        title: "Unit turns",
        body:
          "A vacant apartment can be quoted as a make-ready, a standard refresh, or a fuller remodel, depending on what the unit needs. Our unit-turn guide lists planning bands per unit and typical timelines, assuming the unit is vacant and materials are on hand. The written estimate confirms the package for that unit.",
        serviceSlug: "unit-turns",
        guideSlug: "unit-turn-cost-seattle",
      },
      {
        title: "Bathrooms and shower tile",
        body:
          "Classic shower and bath tile work in older Capitol Hill units often means opening a failed surround, waterproofing, and setting new tile in a tight room. We quote that as one project, not a stack of hourly tasks.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "tile-installation-cost-seattle",
      },
      {
        title: "Paint, drywall, and flooring",
        body:
          "Turn work and small remodels usually include some mix of patching, paint, and flooring. Those trades can be combined in one written scope so the unit is ready at the same time.",
        serviceSlug: "paint",
        guideSlug: "interior-painting-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Capitol Hill is in Seattle, so SDCI is the permit agency. A finish-only unit turn (paint, flooring, and minor repairs) often does not need a building permit; adding or moving plumbing, opening a wet wall, or changing the layout usually does. Older buildings can have additional requirements if work touches fire protection, egress, or a change of use — that is reviewed against the specific building, not assumed from the neighborhood. Confirm current SDCI rules before you start.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "unit-turn-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "tile-installation-cost-seattle",
      "interior-painting-cost-seattle",
      "laminate-flooring-cost-seattle",
    ],
    focusServices: ["unit-turns", "bathroom-remodels", "tile", "paint", "laminate"],
    nearbySlugs: ["queen-anne", "wallingford", "ravenna", "west-seattle", "ballard", "fremont"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding6.webp" },
      { trade: "fencing", file: "fencing.webp" },
      { trade: "tile", file: "tile6.webp" },
      { trade: "laminate", file: "laminate8.webp" },
      { trade: "drywall", file: "drywall5.webp" },
    ],
  },
  {
    slug: "magnolia",
    name: "Magnolia",
    region: "seattle",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "Magnolia exterior and remodeling contractor",
    seoTitle: "Magnolia exterior painting and remodeling contractor",
    seoDescription:
      "Exterior painting, siding and remodeling in Magnolia, Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Magnolia is the peninsula west of Interbay, a short trip from our Ballard shop. We serve Magnolia as part of Seattle and King County, with exterior painting and siding, bathrooms, drywall, fencing, and our other trades.",
    intro2:
      "The neighborhood is a bit set apart from the rest of the city, and many lots are larger or more exposed to weather off the sound. Include the address on your estimate request. The written quote confirms the service area and any access notes for the site.",
    housingStock:
      "Magnolia has a large share of mid-century houses from the 1940s through the 1960s, along with some older homes and later remodels. Lots are often larger than in Ballard or Fremont, and many houses sit more in the open, so wind, salt air, and weather on west and south elevations can wear paint and siding faster than a sheltered street would. View lots and sloped yards affect scaffolding and deck work. Interiors in mid-century houses often still have the original bath layout and aging trim.",
    commonProjects: [
      {
        title: "Exterior painting and siding",
        body:
          "Weathered elevations are a common reason to paint or repair siding in Magnolia. We look at prep, height, and whether wood needs to be replaced before paint goes on. Whole-house siding replacement planning bands are in the siding guide. Exterior paint is quoted on site.",
        serviceSlug: "paint",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Decks and outdoor living",
        body:
          "Where a deck is part of the project, we quote it from the existing structure, height, and access. The deck guide has planning bands for new or replaced wood decks. Permit needs depend on height and the parcel.",
        guideSlug: "deck-addition-cost-seattle",
      },
      {
        title: "Bathrooms",
        body:
          "A mid-century Magnolia hall bath is often due for a shower and tile rebuild, with drywall and paint included in the same scope.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Magnolia is in Seattle, so SDCI issues permits. Portions of the peninsula are near shoreline or steep-slope areas, which can add review for exterior or foundation work on some parcels. A deck above a certain height, siding that changes the weather envelope, or a bathroom plumbing change typically needs a permit; interior paint often does not. Confirm the current rules and any environmentally critical area notes with SDCI for your address.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "interior-painting-cost-seattle",
      "deck-addition-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "fence-installation-cost-seattle",
    ],
    focusServices: ["paint", "siding", "bathroom-remodels", "fencing", "drywall"],
    nearbySlugs: ["ballard", "queen-anne", "fremont", "west-seattle", "greenwood", "wallingford"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding7.webp" },
      { trade: "fencing", file: "fencing1.webp" },
      { trade: "tile", file: "tile9.webp" },
      { trade: "laminate", file: "laminate4.webp" },
      { trade: "drywall", file: "drywall6.webp" },
    ],
  },
  {
    slug: "west-seattle",
    name: "West Seattle",
    region: "seattle",
    city: "Seattle",
    placeKind: "neighborhood",
    heroTitle: "West Seattle remodeling and repair contractor",
    seoTitle: "West Seattle bathroom and remodeling contractor",
    seoDescription:
      "Bathroom remodels, tile, paint and home repair in West Seattle. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "West Seattle sits across the Duwamish from the rest of the city, with its own commercial streets along California Avenue and a mix of hillside and beach-adjacent neighborhoods. We serve West Seattle as part of Seattle and King County, with all eight trades.",
    intro2:
      "Travel time from our Ballard shop is longer than for North Seattle jobs, and hillside access can affect staging. Tell us the address when you request an estimate. If we cannot take the job on, we will say so early rather than after a visit. The written quote confirms the service area.",
    housingStock:
      "West Seattle includes bungalows and early-1900s houses around the Junction and Admiral, mid-century homes on the hills, and later construction toward the south end. West-facing elevations and hillside lots take weather and drainage seriously. Many houses have decks, steep driveways, or limited side yards. Older bathrooms, aging exteriors, and small multifamily buildings are all part of the housing mix. Nearby White Center and unincorporated King County use different addresses and sometimes different permit offices — we confirm that from the property address, not the neighborhood name.",
    commonProjects: [
      {
        title: "Bathrooms and shower tile",
        body:
          "A West Seattle bathroom remodel is often a shower rebuild with new waterproofing and tile, plus the drywall and paint needed to close the room back up. Planning bands are in the Seattle bathroom and tile guides.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Paint and exterior repairs",
        body:
          "Weathered west elevations and older wood trim are a common pairing: repair first, then paint. Interior painting ranges are in our guide. Exterior paint is quoted after we see the house.",
        serviceSlug: "paint",
        guideSlug: "interior-painting-cost-seattle",
      },
      {
        title: "Unit turns and flooring",
        body:
          "Smaller residential buildings in West Seattle sometimes need a vacant unit refreshed between tenants. Flooring, paint, and punch-list trades can be quoted together. See the unit-turn guide for planning bands.",
        serviceSlug: "unit-turns",
        guideSlug: "unit-turn-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Addresses inside Seattle city limits, including most of West Seattle, go through SDCI. Parcels just south of the city line may be in Burien, unincorporated King County, or another jurisdiction — do not assume SDCI rules apply until we check the address. For Seattle properties, bathroom plumbing, envelope work, and many decks need permits; cosmetic paint often does not. Shoreline or slope reviews can apply on some west-facing parcels. Confirm current requirements with the correct department before demolition.",
      officialName: "Seattle Department of Construction & Inspections (SDCI)",
      officialHref: "https://www.seattle.gov/sdci",
      extra: [
        {
          name: "SDCI permits",
          href: "https://www.seattle.gov/construction-and-inspections/permits",
        },
      ],
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "tile-installation-cost-seattle",
      "interior-painting-cost-seattle",
      "unit-turn-cost-seattle",
      "siding-replacement-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "tile", "paint", "unit-turns", "siding"],
    nearbySlugs: ["burien", "queen-anne", "magnolia", "capitol-hill", "ballard", "renton"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding2.webp" },
      { trade: "fencing", file: "fencing3.webp" },
      { trade: "tile", file: "tile11.webp" },
      { trade: "laminate", file: "laminate7.webp" },
      { trade: "drywall", file: "drywall4.webp" },
    ],
  },
  {
    slug: "shoreline",
    name: "Shoreline",
    region: "north-king",
    city: "Shoreline",
    placeKind: "city",
    heroTitle: "Shoreline remodeling and repair contractor",
    seoTitle: "Shoreline remodeling and repair contractor",
    seoDescription:
      "Siding, bathrooms and home repair in Shoreline, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Shoreline is the city immediately north of Seattle's city line. We serve Shoreline as part of our Seattle and King County service area, with siding, bathrooms, paint, drywall, flooring, fencing, and our other trades.",
    intro2:
      "It is a short drive up from our North Seattle home turf, but it is not Seattle, and the permit office is different. Tell us the property address when you request an estimate. The written quote confirms the service area for your job.",
    housingStock:
      "Shoreline is largely mid-century residential, with many ramblers and split-level houses built from the 1940s through the 1960s, plus later infill and some older homes closer to the Seattle line. Original or aging siding, windows, and hall bathrooms are typical of that period. Lots are often a bit larger than in central Seattle, which can make fence and exterior staging easier, though mature landscaping is common. We treat Shoreline as its own city, not as an extension of a Seattle neighborhood.",
    commonProjects: [
      {
        title: "Siding and exterior paint",
        body:
          "Mid-century Shoreline houses often need siding repair or replacement and a new paint coat on the remaining trim and walls. See the siding guide for whole-house planning bands. Exterior paint is quoted on site.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Bathroom remodels",
        body:
          "A dated rambler bathroom is a frequent starting point: new waterproofing, tile, and a closed-up room with fresh drywall and paint.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Drywall and flooring",
        body:
          "Interior repairs, ceiling patches, and laminate or similar flooring can be quoted on their own or as part of a larger refresh.",
        serviceSlug: "drywall",
        guideSlug: "drywall-repair-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Shoreline is not in the City of Seattle. Do not use SDCI tip sheets for a Shoreline address. Building, plumbing, and electrical permits are issued by the City of Shoreline's Planning & Community Development department. Cosmetic paint and like-for-like surface flooring may be lighter or exempt, but thresholds are set by Shoreline, not Seattle. Confirm current rules with the city before you start. We identify the jurisdiction from your address and note likely permit needs in the written quote.",
      officialName: "City of Shoreline Planning & Community Development",
      officialHref: "https://www.shorelinewa.gov/government/departments/planning-community-development",
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "drywall-repair-cost-seattle",
      "interior-painting-cost-seattle",
      "laminate-flooring-cost-seattle",
    ],
    focusServices: ["siding", "bathroom-remodels", "drywall", "paint", "laminate"],
    nearbySlugs: ["north-seattle", "lake-forest-park", "greenwood", "bothell", "ravenna", "ballard"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding3.webp" },
      { trade: "fencing", file: "fencing6.webp" },
      { trade: "tile", file: "tile3.webp" },
      { trade: "laminate", file: "laminate10.webp" },
      { trade: "drywall", file: "drywall.webp" },
    ],
  },
  {
    slug: "lake-forest-park",
    name: "Lake Forest Park",
    region: "north-king",
    city: "Lake Forest Park",
    placeKind: "city",
    heroTitle: "Lake Forest Park remodeling and repair",
    seoTitle: "Lake Forest Park remodeling and repair contractor",
    seoDescription:
      "Siding, exteriors and home repair in Lake Forest Park, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Lake Forest Park is the wooded city on the north shore of Lake Washington, just beyond Seattle and next to Shoreline. We serve it as part of Seattle and King County, on a per-project basis confirmed in your written quote.",
    intro2:
      "Tree cover, longer driveways, and houses set back from the street are typical here. Please include the address and any notes about access or steep drives when you request an estimate.",
    housingStock:
      "Lake Forest Park is known for houses among trees, often mid-century, on larger and more irregular lots than a typical Seattle grid. Drainage, moss, shade, and access down a driveway can matter as much as the work itself. Exteriors see a lot of moisture and organic debris. Some homes have been added onto over time, with decks or lower levels tucked into a slope. We look at those site conditions during the estimate rather than pricing from a city average.",
    commonProjects: [
      {
        title: "Siding and exterior repairs",
        body:
          "Shaded walls and aging siding are a regular reason for a visit. Repair or replacement is quoted from the elevations we can see and how we would reach them.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Decks and fencing",
        body:
          "Sloped lots and tree-adjacent yards change how posts are set and how we protect existing landscaping. See the deck and fence guides for planning bands. Call 811 before any digging.",
        serviceSlug: "fencing",
        guideSlug: "fence-installation-cost-seattle",
      },
      {
        title: "Interior repairs",
        body:
          "Ceiling stains, drywall, paint, and bathrooms are quoted the same way as elsewhere: one written scope after we see the house.",
        serviceSlug: "drywall",
        guideSlug: "drywall-repair-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Lake Forest Park is its own city. Permits are not issued by Seattle SDCI. The City of Lake Forest Park Planning & Building department handles building and related permits, and some work may also involve environmentally critical area or tree rules that Seattle pages will not mention. Confirm current requirements with the city for your parcel, including before you dig fence or deck posts. We note the jurisdiction and likely permit needs in the written quote.",
      officialName: "City of Lake Forest Park Planning & Building",
      officialHref: "https://www.cityoffp.gov/165/Planning-Building",
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "deck-addition-cost-seattle",
      "fence-installation-cost-seattle",
      "drywall-repair-cost-seattle",
      "bathroom-remodel-cost-seattle",
    ],
    focusServices: ["siding", "fencing", "drywall", "bathroom-remodels", "paint"],
    nearbySlugs: ["shoreline", "north-seattle", "bothell", "kirkland", "ravenna", "greenwood"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding5.webp" },
      { trade: "fencing", file: "fencing4.webp" },
      { trade: "tile", file: "tile10.webp" },
      { trade: "laminate", file: "laminate12.webp" },
      { trade: "drywall", file: "drywall1.webp" },
    ],
  },
  {
    slug: "bothell",
    name: "Bothell",
    region: "north-king",
    city: "Bothell",
    placeKind: "city",
    heroTitle: "Bothell remodeling and repair contractor",
    seoTitle: "Bothell remodeling and repair contractor",
    seoDescription:
      "Bathrooms, siding and home repair in Bothell, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Bothell spans King County and Snohomish County. Our confirmed service area is Seattle and King County, so we look at the property address before we say yes. King County Bothell jobs are served on a per-project basis, confirmed in the written quote.",
    intro2:
      "If the address is on the Snohomish County side, tell us that when you request an estimate. We will say early whether we can take the job on, rather than after a visit.",
    housingStock:
      "Bothell has an older downtown, mid-century streets, and a large amount of 1990s–2000s housing in planned neighborhoods, including parts of the Canyon Park and North Creek areas depending on the address. That newer stock often means different siding products, HOA or plat rules, and bathrooms that are original to those houses and now due for a first major update. Older pockets closer to the river and downtown have a tighter, more traditional lot pattern. The county line runs through the city, so two houses a short distance apart can fall under different permit offices.",
    commonProjects: [
      {
        title: "Bathroom remodels",
        body:
          "Many Bothell baths from the 1990s and 2000s are ready for a shower and tile update, with drywall and paint included in one scope.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Siding and exterior paint",
        body:
          "Lap siding, panels, and trim on later houses still fail at joints and weather-exposed walls. We quote repair or replacement from what we see on site.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Flooring and interior paint",
        body:
          "A flooring replacement or interior paint refresh can be a stand-alone project or part of a larger remodel. See the laminate and interior painting guides for planning bands.",
        serviceSlug: "laminate",
        guideSlug: "laminate-flooring-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "The City of Bothell issues permits for work inside the city, and the county line matters: King County and Snohomish County addresses are not interchangeable. Do not use Seattle SDCI rules for a Bothell property. Some permit types are processed through the city's permit services and, where applicable, shared systems such as MyBuildingPermit.com. HOA or plat approvals, if any, are separate from the city permit. Confirm the current requirements with the City of Bothell for your address. We confirm the jurisdiction before we finalize a quote.",
      officialName: "City of Bothell Permits and Inspections",
      officialHref: "https://www.bothellwa.gov/181/Permits-and-Inspections",
      extra: [
        { name: "MyBuildingPermit", href: "https://www.mybuildingpermit.com/" },
      ],
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "siding-replacement-cost-seattle",
      "laminate-flooring-cost-seattle",
      "interior-painting-cost-seattle",
      "fence-installation-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "siding", "laminate", "paint", "fencing"],
    nearbySlugs: ["kirkland", "lake-forest-park", "shoreline", "redmond", "bellevue", "north-seattle"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding4.webp" },
      { trade: "fencing", file: "fencing2.webp" },
      { trade: "tile", file: "tile13.webp" },
      { trade: "laminate", file: "laminate11.webp" },
      { trade: "drywall", file: "drywall2.webp" },
    ],
  },
  {
    slug: "kirkland",
    name: "Kirkland",
    region: "eastside",
    city: "Kirkland",
    placeKind: "city",
    heroTitle: "Kirkland remodeling and repair contractor",
    seoTitle: "Kirkland remodeling and repair contractor",
    seoDescription:
      "Bathrooms, tile and home repair in Kirkland, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Kirkland is on the Eastside of Lake Washington, with a downtown waterfront and residential neighborhoods up the hills. We serve Kirkland as part of Seattle and King County, on a per-project basis confirmed in your written quote.",
    intro2:
      "It is a longer trip from our Ballard shop than North Seattle work, so we plan the visit around the address you give us. If we cannot take the job on, we will say so early.",
    housingStock:
      "Kirkland mixes older cottages and mid-century houses near the waterfront and downtown with later subdivisions farther inland, including areas that joined the city over time. Hills and view lots affect exterior access. Downtown-adjacent streets can be tight to stage; later neighborhoods often have HOA or plat standards for siding, paint colors, and fences. Bathrooms and kitchens in 1980s–2000s houses are often original to the building and due for a first full update.",
    commonProjects: [
      {
        title: "Bathrooms and tile",
        body:
          "A Kirkland bathroom remodel is quoted as one project: waterproofing, tile, and the drywall and paint that close the room. See the bathroom and tile guides for planning bands.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Siding and paint",
        body:
          "Exterior work is priced after we see the elevations, height, and any plat or HOA constraints you already know about. Bring those documents to the estimate if you have them.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Interior flooring and drywall",
        body:
          "Flooring replacements and drywall repairs can stand alone or be bundled with paint so the space is finished together.",
        serviceSlug: "laminate",
        guideSlug: "laminate-flooring-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Kirkland is not under Seattle SDCI. The City of Kirkland Planning and Building department issues permits, and many applications are submitted through MyBuildingPermit.com. Thresholds, ADU rules, and fence or deck standards are Kirkland's, not Seattle's. Confirm current requirements with the city for your address. We identify the jurisdiction from that address and include likely permit needs in the written quote when they apply.",
      officialName: "City of Kirkland Planning and Building",
      officialHref: "https://www.kirklandwa.gov/Government/Departments/Planning-and-Building",
      extra: [
        { name: "MyBuildingPermit", href: "https://www.mybuildingpermit.com/" },
      ],
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "tile-installation-cost-seattle",
      "siding-replacement-cost-seattle",
      "interior-painting-cost-seattle",
      "laminate-flooring-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "tile", "siding", "paint", "laminate"],
    nearbySlugs: ["bellevue", "redmond", "bothell", "lake-forest-park", "ravenna", "capitol-hill"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding6.webp" },
      { trade: "fencing", file: "fencing5.webp" },
      { trade: "tile", file: "tile2.webp" },
      { trade: "laminate", file: "laminate5.webp" },
      { trade: "drywall", file: "drywall3.webp" },
    ],
  },
  {
    slug: "bellevue",
    name: "Bellevue",
    region: "eastside",
    city: "Bellevue",
    placeKind: "city",
    heroTitle: "Bellevue remodeling and repair contractor",
    seoTitle: "Bellevue remodeling and repair contractor",
    seoDescription:
      "Bathroom remodels, tile and home repair in Bellevue, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Bellevue is the largest Eastside city in our King County service area. We take on bathrooms, tile, siding, paint, drywall, flooring, and our other trades here on a per-project basis, confirmed in the written quote.",
    intro2:
      "The city has its own development services department, and some neighborhoods have HOA rules on top of the city code. Include the property address, and any plat or HOA notes you already have, when you request an estimate.",
    housingStock:
      "Bellevue ranges from mid-century neighborhoods west of downtown, to later subdivisions, to much newer construction around Bellevue Square and the growing residential towers. Older single-family areas still have wood-sided ramblers and split-levels that need siding, paint, and bath updates. Later houses may be under HOA or design-review standards for exterior colors and materials. We do not assume a finish level from the city name; the quote is based on the house we see and the scope you want.",
    commonProjects: [
      {
        title: "Bathroom remodels and tile",
        body:
          "A Bellevue bathroom is quoted as one written project, from waterproofing through tile, drywall, and paint. Planning bands are in our Seattle bathroom and tile guides and apply as planning figures for King County work; the final price is after the on-site estimate.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Siding and exterior paint",
        body:
          "Exterior work follows the same process as in Seattle: we inspect the walls, talk through materials, and put one price on the agreed scope. HOA approval, if required, stays the owner's responsibility unless we agree otherwise in writing.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Interior paint and drywall",
        body:
          "Patches, texture match, and interior paint are often combined so repaired rooms are finished at the same time.",
        serviceSlug: "paint",
        guideSlug: "interior-painting-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Bellevue is not under Seattle SDCI. City of Bellevue Development Services issues building, plumbing, and electrical permits, and many applications go through MyBuildingPermit.com. ADU rules, permit thresholds, and inspection sequences are Bellevue's own. Confirm current requirements with the city before demolition or construction. We note the jurisdiction and likely permit needs in the written quote when they apply.",
      officialName: "City of Bellevue Development Services",
      officialHref: "https://bellevuewa.gov/city-government/departments/development-services",
      extra: [
        { name: "MyBuildingPermit", href: "https://www.mybuildingpermit.com/" },
      ],
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "tile-installation-cost-seattle",
      "siding-replacement-cost-seattle",
      "interior-painting-cost-seattle",
      "kitchen-remodel-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "tile", "siding", "paint", "drywall"],
    nearbySlugs: ["kirkland", "redmond", "renton", "west-seattle", "capitol-hill", "bothell"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding1.webp" },
      { trade: "fencing", file: "fencing.webp" },
      { trade: "tile", file: "tile8.webp" },
      { trade: "laminate", file: "laminate.webp" },
      { trade: "drywall", file: "drywall6.webp" },
    ],
  },
  {
    slug: "redmond",
    name: "Redmond",
    region: "eastside",
    city: "Redmond",
    placeKind: "city",
    heroTitle: "Redmond remodeling and repair contractor",
    seoTitle: "Redmond remodeling and repair contractor",
    seoDescription:
      "Bathrooms, siding and home repair in Redmond, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Redmond sits east of Kirkland and Bellevue, along the Sammamish River and into Education Hill, Grass Lawn, and the neighborhoods around downtown. We serve Redmond as part of Seattle and King County, confirmed in your written quote.",
    intro2:
      "Many Redmond streets are in later subdivisions with plat or HOA rules. Tell us the address and, if you have them, any exterior design guidelines that apply, when you request an estimate.",
    housingStock:
      "Redmond's housing is heavily 1970s through 2000s single-family and townhouse development, with an older downtown core and some earlier homes mixed in. That usually means plywood or lap siding of that period, attached garages, and bathrooms that have had one or two surface updates. HOA or plat rules on paint, fences, and siding are more common here than in older Seattle neighborhoods. We read those rules if you provide them; they can affect material choices and the schedule, but they do not replace a city permit.",
    commonProjects: [
      {
        title: "Bathroom remodels",
        body:
          "A first full bath remodel in a 1980s or 1990s Redmond house is a typical scope: shower, tile, and a finished room. Planning bands are in the bathroom guide.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Siding and fences",
        body:
          "Exterior replacements often have to match a plat standard or an approved color range. We quote the work after we see the house and any guidelines you share.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Flooring and paint",
        body:
          "Interior flooring and paint are quoted per room or per whole-house scope, using the planning bands in our laminate and painting guides as a starting point.",
        serviceSlug: "laminate",
        guideSlug: "laminate-flooring-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Redmond is not under Seattle SDCI. The City of Redmond Planning and Community Development department issues permits, and many applications are filed through MyBuildingPermit.com. Fence, deck, and ADU rules are the city's, and an HOA approval does not replace them. Confirm current requirements with Redmond for your address. We include likely permit needs in the written quote when they apply.",
      officialName: "City of Redmond Planning and Community Development",
      officialHref: "https://www.redmond.gov/144/Planning-Community-Development",
      extra: [
        { name: "MyBuildingPermit", href: "https://www.mybuildingpermit.com/" },
      ],
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "siding-replacement-cost-seattle",
      "fence-installation-cost-seattle",
      "laminate-flooring-cost-seattle",
      "interior-painting-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "siding", "fencing", "laminate", "paint"],
    nearbySlugs: ["kirkland", "bellevue", "bothell", "renton", "lake-forest-park", "capitol-hill"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding7.webp" },
      { trade: "fencing", file: "fencing1.webp" },
      { trade: "tile", file: "tile4.webp" },
      { trade: "laminate", file: "laminate3.webp" },
      { trade: "drywall", file: "drywall4.webp" },
    ],
  },
  {
    slug: "renton",
    name: "Renton",
    region: "south-king",
    city: "Renton",
    placeKind: "city",
    heroTitle: "Renton remodeling and repair contractor",
    seoTitle: "Renton remodeling and repair contractor",
    seoDescription:
      "Siding, bathrooms and home repair in Renton, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Renton sits at the south end of Lake Washington, between Seattle, Bellevue, and Kent. We serve Renton as part of our Seattle and King County service area, on a per-project basis confirmed in the written quote.",
    intro2:
      "The city includes an older downtown, hillside neighborhoods, and later subdivisions. Share the property address when you request an estimate so we can plan the trip and confirm we can take the job on.",
    housingStock:
      "Renton has mid-century houses near the valley and the lake, older streets around downtown, and a large amount of later housing on the hills toward Newcastle and the East Plateau. Hills mean access, retaining, and sometimes long carries for materials. Mid-century homes often need siding, windows, and a first or second bath remodel. Later subdivisions may have HOA rules. We price the actual house and the access we see, not a single Renton average.",
    commonProjects: [
      {
        title: "Siding and exterior paint",
        body:
          "Weathered elevations and aging mid-century siding are a common Renton call. Whole-house replacement planning bands are in the siding guide. Exterior paint is quoted on site.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Bathroom remodels",
        body:
          "Hall baths and primary baths are quoted as one project including tile, waterproofing, and the finishes needed to close the room.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Flooring, drywall, and paint",
        body:
          "Interior refresh work can be combined into one written scope so flooring, patches, and paint are finished together.",
        serviceSlug: "laminate",
        guideSlug: "laminate-flooring-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Renton is not under Seattle SDCI. The City of Renton Community and Economic Development department handles building and land-use permits, and many applications are submitted through MyBuildingPermit.com. Fence, deck, and plumbing thresholds are Renton's, not Seattle's. Confirm current requirements with the city for your address. We note the jurisdiction and likely permit needs in the written quote when they apply.",
      officialName: "City of Renton Building and Land Use",
      officialHref: "https://www.rentonwa.gov/city_hall/community_and_economic_development/building_and_land_use",
      extra: [
        { name: "MyBuildingPermit", href: "https://www.mybuildingpermit.com/" },
      ],
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "laminate-flooring-cost-seattle",
      "interior-painting-cost-seattle",
      "fence-installation-cost-seattle",
    ],
    focusServices: ["siding", "bathroom-remodels", "laminate", "paint", "fencing"],
    nearbySlugs: ["bellevue", "kent", "burien", "west-seattle", "redmond", "kirkland"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding2.webp" },
      { trade: "fencing", file: "fencing3.webp" },
      { trade: "tile", file: "tile7.webp" },
      { trade: "laminate", file: "laminate2.webp" },
      { trade: "drywall", file: "drywall.webp" },
    ],
  },
  {
    slug: "burien",
    name: "Burien",
    region: "south-king",
    city: "Burien",
    placeKind: "city",
    heroTitle: "Burien remodeling and repair contractor",
    seoTitle: "Burien remodeling and repair contractor",
    seoDescription:
      "Siding, bathrooms and home repair in Burien, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Burien is just south of West Seattle and White Center, a short trip from Seattle proper. We serve Burien as part of Seattle and King County, with siding, bathrooms, paint, flooring, drywall, fencing, and our other trades, confirmed in your written quote.",
    intro2:
      "Some nearby addresses are still unincorporated King County or White Center even when they feel like Burien. Tell us the exact property address so we can use the correct city and permit office.",
    housingStock:
      "Burien has a large mid-century housing stock, some older houses closer to the sound, and later infill around the town center. Lots are often a bit more open than in central Seattle. Aging siding, original baths, and worn flooring are typical reasons for a call. The city sits close to White Center and unincorporated pockets, so two houses on the same arterial can fall under different jurisdictions. We go by the legal address, not the informal neighborhood name.",
    commonProjects: [
      {
        title: "Siding and exterior paint",
        body:
          "Mid-century Burien exteriors often need siding repair or replacement and new paint on remaining wood. See the siding guide for planning bands. Exterior paint is quoted after we see the house.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Bathrooms and tile",
        body:
          "A hall-bath rebuild — waterproofing, tile, drywall, and paint — is quoted as one project, using the bathroom and tile guides as planning figures.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Interior flooring and paint",
        body:
          "Flooring and interior paint can be a stand-alone refresh or part of a larger remodel. Planning bands are in the laminate and painting guides.",
        serviceSlug: "laminate",
        guideSlug: "laminate-flooring-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Burien is not under Seattle SDCI. The City of Burien handles permits and licenses for work inside the city. Unincorporated King County parcels just outside the line use King County Permitting instead — that is why the exact address matters. Confirm current requirements with the correct department before you start. We identify the jurisdiction on the estimate and include likely permit needs in the written quote when they apply.",
      officialName: "City of Burien Permits and Licenses",
      officialHref: "https://www.burienwa.gov/city_hall/permits_and_licenses",
    },
    focusGuides: [
      "siding-replacement-cost-seattle",
      "bathroom-remodel-cost-seattle",
      "tile-installation-cost-seattle",
      "laminate-flooring-cost-seattle",
      "interior-painting-cost-seattle",
    ],
    focusServices: ["siding", "bathroom-remodels", "tile", "laminate", "paint"],
    nearbySlugs: ["west-seattle", "kent", "renton", "queen-anne", "ballard", "bellevue"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding3.webp" },
      { trade: "fencing", file: "fencing6.webp" },
      { trade: "tile", file: "tile1.webp" },
      { trade: "laminate", file: "laminate4.webp" },
      { trade: "drywall", file: "drywall5.webp" },
    ],
  },
  {
    slug: "kent",
    name: "Kent",
    region: "south-king",
    city: "Kent",
    placeKind: "city",
    heroTitle: "Kent remodeling and repair contractor",
    seoTitle: "Kent remodeling and repair contractor",
    seoDescription:
      "Bathrooms, siding and home repair in Kent, WA. Seattle MasterFix Precision Craftsmanship, WA #SEATTMP744NL. Free on-site estimate.",
    intro:
      "Kent is a South King County city in the Green River valley, with residential neighborhoods on the East Hill and around downtown. We serve Kent as part of Seattle and King County, on a per-project basis confirmed in your written quote.",
    intro2:
      "It is farther from our Ballard shop than most of the pages on this site, so we plan visits around the address you send. If we cannot take the job on, we will say so early rather than after a trip.",
    housingStock:
      "Kent includes mid-century and later houses on the East Hill, older streets near downtown, and a wide mix of later subdivisions. The valley and the hill have different access and, in some cases, different drainage conditions. Many houses from the 1970s through the 1990s still have their original baths and siding. Some neighborhoods have HOA or plat rules. We quote from the house and the site, not from a single city-wide figure.",
    commonProjects: [
      {
        title: "Bathroom remodels",
        body:
          "A full hall-bath or primary-bath remodel is quoted as one project, including tile and the finishes required to close the room. See the bathroom guide for planning bands.",
        serviceSlug: "bathroom-remodels",
        guideSlug: "bathroom-remodel-cost-seattle",
      },
      {
        title: "Siding and exterior paint",
        body:
          "Aging siding on later houses, and paint plus trim repair on remaining wood, are quoted after we see the elevations and how we would reach them.",
        serviceSlug: "siding",
        guideSlug: "siding-replacement-cost-seattle",
      },
      {
        title: "Flooring and interior paint",
        body:
          "Interior flooring and paint can be bundled so rooms are finished together. Planning bands are in the laminate and interior painting guides.",
        serviceSlug: "laminate",
        guideSlug: "laminate-flooring-cost-seattle",
      },
    ],
    permitNotes: {
      body:
        "Kent is not under Seattle SDCI, and it is not on the same permit portal as several Eastside cities. The City of Kent Economic and Community Development department issues permits through its own system. Do not assume MyBuildingPermit.com or Seattle tip sheets apply. Confirm current building, plumbing, and electrical requirements with the City of Kent for your address. We identify the jurisdiction on the estimate and include likely permit needs in the written quote when they apply.",
      officialName: "City of Kent Permits",
      officialHref: "https://www.kentwa.gov/departments/economic-and-community-development/permits",
    },
    focusGuides: [
      "bathroom-remodel-cost-seattle",
      "siding-replacement-cost-seattle",
      "laminate-flooring-cost-seattle",
      "interior-painting-cost-seattle",
      "fence-installation-cost-seattle",
    ],
    focusServices: ["bathroom-remodels", "siding", "laminate", "paint", "fencing"],
    nearbySlugs: ["renton", "burien", "bellevue", "west-seattle", "redmond", "kirkland"],
    job: { status: "todo" },
    photoFiles: [
      { trade: "siding", file: "siding5.webp" },
      { trade: "fencing", file: "fencing2.webp" },
      { trade: "tile", file: "tile12.webp" },
      { trade: "laminate", file: "laminate9.webp" },
      { trade: "drywall", file: "drywall2.webp" },
    ],
  },
];

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return neighbourhoods.find((n) => n.slug === slug);
}

export function neighbourhoodsInRegion(region: AreaRegion): Neighbourhood[] {
  return neighbourhoods.filter((n) => n.region === region);
}

export function homeTurfNeighbourhoods(): Neighbourhood[] {
  return neighbourhoodsInRegion("home-turf");
}

export function getNearbyNeighbourhoods(n: Neighbourhood): Neighbourhood[] {
  return n.nearbySlugs
    .map((slug) => getNeighbourhood(slug))
    .filter((x): x is Neighbourhood => Boolean(x));
}

export function areaServedLabel(n: Neighbourhood): string {
  return n.placeKind === "neighborhood" ? `${n.name}, Seattle, WA` : `${n.name}, WA`;
}

/** Runtime check so a typo in nearbySlugs cannot ship unnoticed. */
const knownSlugs = new Set(neighbourhoods.map((n) => n.slug));
for (const n of neighbourhoods) {
  for (const slug of n.nearbySlugs) {
    if (!knownSlugs.has(slug)) {
      throw new Error(`Unknown nearby slug "${slug}" on /service-area/${n.slug}/`);
    }
  }
  if (n.nearbySlugs.includes(n.slug)) {
    throw new Error(`Neighbourhood "${n.slug}" lists itself as nearby`);
  }
}
