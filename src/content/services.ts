/**
 * Service/trade copy. Written for this site in our own words (the old homepage
 * process copy was word-for-word from another contractor and has been removed).
 *
 * Rules for editing: no "guaranteed", "flawless", "premier", "warrantied",
 * ratings or customer counts. Warranty terms belong in the signed contract.
 */

export type ServiceSlug = "siding" | "fencing" | "tile" | "laminate" | "drywall" | "paint";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  headline: string;
  summary: string;
  intro: string;
  /** File name inside public/images/services/<slug>/ — undefined = typographic hero. */
  heroFile?: string;
  timeline: string;
  costDrivers: string[];
  materials: string[];
  mistakes: { title: string; body: string }[];
  process: { title: string; body: string }[];
  /** Extra notice blocks shown under the intro. */
  notices: ("older-home" | "fencing-811" | "permits")[];
};

export const processSteps = [
  {
    step: "01",
    title: "Preconstruction",
    body: "We look at the space, talk through what you want, and go over budget and timing before any work is scheduled, so the scope is clear from the start.",
  },
  {
    step: "02",
    title: "Permitting coordination",
    body: "Where a permit is required for the work we perform, we help prepare and submit the application and coordinate inspections. We do not provide architectural or engineering services; if drawings or structural engineering are needed, independent licensed professionals prepare them.",
  },
  {
    step: "03",
    title: "Construction",
    body: "Our crew carries out the agreed scope and keeps you posted on progress, schedule, and any change in conditions.",
  },
  {
    step: "04",
    title: "Closeout",
    body: "A final walkthrough, a punch list for anything left to finish, and a handoff of paperwork and any inspection sign-offs.",
  },
] as const;

export const services: Service[] = [
  {
    slug: "siding",
    name: "Exterior siding",
    shortName: "Siding",
    headline: "Siding details that keep water out in the Pacific Northwest",
    summary: "Lap siding and trim installed over proper house wrap and flashing for Seattle's wet climate.",
    intro:
      "In Seattle, siding has to keep shedding rain through wet winters. How the wall is flashed and wrapped matters as much as the boards you see. We install siding over a weather-resistive barrier with flashing at openings, and follow the manufacturer's installation instructions for the product you choose.",
    heroFile: "siding6.webp",
    timeline: "Typically 1–4 weeks, depending on how many walls, how much repair is needed, and the weather. Your written contract sets the actual schedule.",
    costDrivers: [
      "Square footage and number of walls",
      "Sheathing or rot repair found once old siding comes off",
      "Siding material (fiber cement, engineered wood, vinyl)",
      "Trim complexity, number of windows and doors, and scaffolding access",
      "Permit and rain-screen requirements, where they apply",
    ],
    materials: [
      "Fiber cement, engineered wood, or vinyl siding",
      "House wrap and, where specified, rain-screen furring",
      "Flashing, trim, and corner systems",
    ],
    mistakes: [
      {
        title: "Skipping moisture management",
        body: "In our climate, the weather barrier, flashing and drainage gap behind the siding do much of the work. Leaving them out is a common reason walls rot.",
      },
      {
        title: "Covering damaged sheathing",
        body: "New siding over soft or wet sheathing hides a problem that gets more expensive. We check for it when old siding comes off.",
      },
      {
        title: "Wrong fasteners or flashing",
        body: "Fastener type and spacing, and flashing at windows, doors and penetrations, are set by the manufacturer. Following them helps the wall perform as intended.",
      },
    ],
    process: [
      { title: "Evaluate", body: "Look at existing siding, sheathing and moisture points before writing a scope." },
      { title: "Protect", body: "House wrap and flashing go on first, the part nobody sees but everybody depends on." },
      { title: "Install", body: "Boards cut, aligned and fastened for a consistent reveal." },
      { title: "Finish", body: "Corners, window trim and transitions finished and cleaned up." },
    ],
    notices: ["older-home", "permits"],
  },
  {
    slug: "fencing",
    name: "Fencing",
    shortName: "Fencing",
    headline: "Wood fences and gates built to stand through wet winters",
    summary: "Wood fences and gates with posts set to a proper depth, built for wind and wet ground.",
    intro:
      "A fence has to stay straight through wind and soggy soil, and look good doing it. We set posts in concrete, choose lumber suited to ground contact versus panels, and hang gates on hardware matched to their size and weight.",
    heroFile: "fencing3.webp",
    timeline: "Typically 3–10 days for residential runs, depending on length, terrain and weather. Your written contract sets the actual schedule.",
    costDrivers: [
      "Length of the fence and terrain",
      "Post depth, soil conditions and footing size",
      "Material (cedar, pressure-treated, mixed)",
      "Number and width of gates and the hardware used",
      "Height, setback and HOA rules that apply",
    ],
    materials: ["Cedar and pressure-treated lumber", "Concrete footings", "Gate hinges and latches sized to the gate"],
    mistakes: [
      {
        title: "Guessing at property lines",
        body: "Confirm your boundary before posts go in. A survey may be worth it if the line is unclear; boundary disputes with neighbors are expensive.",
      },
      {
        title: "Shallow posts",
        body: "A fence is only as strong as what's below grade. Depth and drainage help keep it from leaning.",
      },
      {
        title: "Underbuilt gates",
        body: "Sagging gates are a common complaint. Hinges and bracing should match the gate's weight.",
      },
    ],
    process: [
      { title: "Layout", body: "Mark the line and gate locations and confirm boundary and utility questions." },
      { title: "Posts", body: "Set to depth in concrete footings suited to the soil." },
      { title: "Rails and slats", body: "Installed level and plumb with consistent spacing." },
      { title: "Gates", body: "Hung, squared and fitted with hardware sized for daily use." },
    ],
    notices: ["fencing-811", "permits"],
  },
  {
    slug: "tile",
    name: "Tile",
    shortName: "Tile",
    headline: "Tile for bathrooms, kitchens, and floors",
    summary: "Floor, wall, shower and backsplash tile, with flat substrates and waterproofing in wet areas.",
    intro:
      "Every seam and grout joint stays visible for as long as the tile does. We flatten the substrate, plan the layout before setting anything, and put waterproofing behind tile in wet areas.",
    heroFile: "tile2.webp",
    timeline: "Typically 3–14 days, depending on the area, pattern and cure times. Your written contract sets the actual schedule.",
    costDrivers: [
      "Square footage and pattern complexity",
      "Subfloor leveling and waterproofing needs",
      "Tile size (large-format tile needs flatter surfaces)",
      "Grout type (epoxy or cement-based)",
      "Niches, curbs and transitions",
    ],
    materials: ["Porcelain, ceramic and natural stone", "Waterproof membranes for wet areas", "Thinset, grout and leveling systems"],
    mistakes: [
      {
        title: "Skipping waterproofing",
        body: "In a shower the waterproofing behind the tile keeps leaks out, not the grout on the surface.",
      },
      {
        title: "Ignoring flatness",
        body: "Uneven tile edges (lippage) usually trace back to an uneven surface underneath. Leveling comes first.",
      },
      {
        title: "Rushing large-format tile",
        body: "Large tile needs proper bedding and cure time; rushing can cause cracks months later.",
      },
    ],
    process: [
      { title: "Prep", body: "Level the surface and apply waterproofing in wet areas." },
      { title: "Layout", body: "Plan the full layout before adhesive goes down to avoid awkward cuts." },
      { title: "Set", body: "Use leveling systems to keep edges flush and grout lines even." },
      { title: "Finish", body: "Grout, clean and, where specified, seal." },
    ],
    notices: ["older-home", "permits"],
  },
  {
    slug: "laminate",
    name: "Laminate flooring",
    shortName: "Laminate",
    headline: "Laminate flooring installed to handle daily wear and damp weather",
    summary: "Floating laminate floors with underlayment and proper expansion gaps.",
    intro:
      "Laminate floors move with humidity, so the details matter. We let the planks acclimate, check the subfloor for flatness and moisture, lay the right underlayment, and leave expansion gaps at the edges.",
    heroFile: "laminate5.webp",
    timeline: "Typically 1–5 days for most homes, depending on room count and subfloor condition. Your written contract sets the actual schedule.",
    costDrivers: [
      "Square footage and number of rooms",
      "Subfloor repair and leveling",
      "Wear rating of the product for how the room is used",
      "Underlayment and moisture-barrier needs",
      "Transitions, stairs and trim",
    ],
    materials: ["Laminate planks rated for the room's use", "Underlayment for sound and moisture", "Vapor barrier over concrete slabs"],
    mistakes: [
      {
        title: "Skipping acclimation",
        body: "Planks need to adjust to the room's humidity before install; skipping it is a common cause of gaps or buckling.",
      },
      {
        title: "No moisture barrier on a slab",
        body: "Moisture coming up through concrete can damage flooring from below.",
      },
      {
        title: "Tight edges",
        body: "Floating floors need gaps at the walls so seasonal movement doesn't push the floor up.",
      },
    ],
    process: [
      { title: "Assess", body: "Check flatness and moisture, and make repairs first." },
      { title: "Acclimate", body: "Let the planks adjust to the room's temperature and humidity." },
      { title: "Underlay", body: "Lay underlayment suited to the subfloor and sound needs." },
      { title: "Install", body: "Stagger the seams and leave expansion gaps at the perimeter." },
    ],
    notices: ["older-home", "permits"],
  },
  {
    slug: "drywall",
    name: "Drywall",
    shortName: "Drywall",
    headline: "Hanging, taping, and finishing drywall ready for paint",
    summary: "Hang, tape, mud and texture, with repairs matched to existing walls where possible.",
    intro:
      "Good drywall work disappears once the room is painted. We hang board with the right fastener pattern, build the joints up over several coats, match texture on repairs where we can, and contain dust so the rest of your home stays clean.",
    heroFile: "drywall5.webp",
    timeline: "Typically 3–10 days including drying time between coats. Your written contract sets the actual schedule.",
    costDrivers: [
      "Square footage to hang versus finish only",
      "Level of finish (smooth and paint-ready, or textured)",
      "Fire-rated or moisture-resistant board requirements",
      "Matching texture on existing walls",
      "Dust containment and whether the space is occupied",
    ],
    materials: ["Standard, moisture-resistant and fire-rated gypsum board", "Joint compound suited to the coat schedule", "Corner bead and texture materials"],
    mistakes: [
      {
        title: "Rushing coats",
        body: "Joints are typically built up over several coats with drying time between each. Rushing shows up as seams under paint.",
      },
      {
        title: "Ignoring raking light",
        body: "Light from windows and fixtures reveals flaws. Checking the finish under the room's real lighting helps.",
      },
      {
        title: "Wrong board type",
        body: "Garages, baths and shared walls often call for fire- or moisture-rated board under the building code.",
      },
    ],
    process: [
      { title: "Hang", body: "Board fastened tight to framing at the right spacing." },
      { title: "Tape", body: "Seams and corners taped and coated to build a flat surface." },
      { title: "Feather", body: "Additional coats widened to blend joints into the wall." },
      { title: "Texture and sand", body: "Sand smooth, or match the texture of existing walls." },
    ],
    notices: ["older-home", "permits"],
  },
  {
    slug: "paint",
    name: "Interior and exterior paint",
    shortName: "Paint",
    headline: "Painting where preparation does most of the work",
    summary: "Interior and exterior painting with careful prep, matched primers, and exterior work planned around the weather.",
    intro:
      "A paint job is only as good as the prep under it. We clean, sand, patch and prime to suit the surface, then cut in the edges by hand. Exterior work is scheduled around Seattle's dry spells so coatings can cure.",
    timeline: "Typically 2–7 days, depending on the number of rooms or exterior walls and the weather. Your written contract sets the actual schedule.",
    costDrivers: [
      "Interior square footage versus exterior walls",
      "Surface condition and amount of patching",
      "Color changes that need extra coats",
      "Sheen and product grade for how the room is used",
      "Extra precautions on homes built before 1978",
    ],
    materials: ["Primers matched to the surface and existing coatings", "Interior and exterior paints", "Caulk, patching compound and masking"],
    mistakes: [
      {
        title: "Skipping prep",
        body: "Cleaning, sanding, patching and priming take most of the effort, and they are what makes a finish last.",
      },
      {
        title: "Wrong primer",
        body: "New drywall, oil-painted surfaces and bare wood need different primers. The wrong one can lead to peeling.",
      },
      {
        title: "Fighting the weather",
        body: "Exterior paint needs the right temperature and dry conditions. We plan around Seattle's weather, not only the calendar.",
      },
    ],
    process: [
      { title: "Prep", body: "Clean, sand, patch and mask." },
      { title: "Prime", body: "Use a primer matched to the surface and any previous coating." },
      { title: "Cut in and roll", body: "Edges cut by hand; fields rolled or sprayed for even coverage." },
      { title: "Second coat and walkthrough", body: "Second coat, touch-ups, cleanup and a walkthrough with you." },
    ],
    notices: ["older-home", "permits"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const servicesWithPhotos = services.filter((s) => s.slug !== "paint");
