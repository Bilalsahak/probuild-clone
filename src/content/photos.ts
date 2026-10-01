/**
 * Project photo catalogue — the ONLY place images are listed, so a missing or
 * un-vetted file can never be referenced by accident.
 *
 * Alt text describes what is visible. Captions never say "completed" or imply a location/date.
 * The owner confirmed all photos are from his camera roll and show real work by members of his
 * crew (who have also worked in other states), so never describe any photo as a Seattle or
 * Washington project.
 */
import type { ServiceSlug } from "@/content/services";

export type Photo = {
  src: string;
  trade: ServiceSlug;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

const p = (
  trade: ServiceSlug,
  file: string,
  width: number,
  height: number,
  alt: string,
  caption: string
): Photo => ({ src: `/images/services/${trade}/${file}`, trade, width, height, alt, caption });

export const photos: Photo[] = [
  // Siding
  p("siding", "siding1.webp", 598, 1280, "Side wall of a house with bare plywood sheathing and two extension ladders leaning against it.", "Bare sheathing and ladders"),
  p("siding", "siding2.webp", 960, 1280, "House wall with white house wrap above three windows and new beige lap siding below, with scaffolding in the foreground.", "House wrap with lap siding going on"),
  p("siding", "siding3.webp", 1280, 598, "Blue lap siding around white doors on the left and a wall covered in yellow house wrap on the right, with tools and a ladder on the ground.", "Blue lap siding beside house wrap"),
  p("siding", "siding4.webp", 598, 1280, "House corner with yellow lap siding above and black weather-resistant barrier below, and an extension ladder against the wall.", "Siding removed down to the weather barrier"),
  p("siding", "siding5.webp", 598, 1280, "Tall multi-story wall clad in tan lap siding with metal scaffolding up its full height in late-afternoon light.", "Scaffolding along a tall wall of lap siding"),
  p("siding", "siding6.webp", 1280, 720, "Two-story house exterior with tan lap siding on the lower floor and dark siding above, seen behind a white picket fence.", "Two-tone lap siding"),
  p("siding", "siding7.webp", 1280, 960, "Entry corner of a house with beige lap siding above a white trim board and natural cedar shingles below, white stairs and a blue front door.", "Lap siding over cedar shingles at an entry"),

  // Fencing
  p("fencing", "fencing.webp", 467, 1000, "New horizontal-slat wood fence running beside a concrete walkway and a yellow house.", "Horizontal-slat wood fence"),
  p("fencing", "fencing1.webp", 598, 1280, "The horizontal-slat fence and concrete walkway beside a yellow house, seen from further along the path.", "Fence and walkway, longer view"),
  p("fencing", "fencing2.webp", 598, 1280, "Fence line with posts set and horizontal slats partly installed, with scrap wood on the ground to the left.", "Slats partly installed"),
  p("fencing", "fencing3.webp", 598, 1280, "Long run of horizontal-slat wood fence along an unpaved alley or driveway at dusk or under overcast sky.", "Long fence run along an alley"),
  p("fencing", "fencing4.webp", 598, 1280, "Wooden fence posts set in the ground along a narrow dirt and gravel path beside a light-grey house.", "Posts set, before rails and slats"),
  p("fencing", "fencing5.webp", 598, 1280, "Several sections of horizontal cedar slats being attached to vertical fence posts.", "Cedar slats going onto posts"),
  p("fencing", "fencing6.webp", 598, 1280, "Vertical fence posts installed along a gravel path beside a white house, with a rake and shovel leaning on the wall.", "Posts along a gravel path"),

  // Tile
  p("tile", "tile1.webp", 960, 1280, "Bathroom remodel in progress with a freestanding white tub, large marble-look floor tile and a wall partly tiled behind the tub.", "Bathroom tile in progress"),
  p("tile", "tile2.webp", 960, 1280, "Bathroom with a glass walk-in shower, freestanding white tub, dark double vanity with round lit mirrors, and large marble-look tile on floor and walls.", "Bathroom with large-format tile"),
  p("tile", "tile3.webp", 960, 1280, "Overhead view of large-format white floor tile with grey veining, with the edge of a white tub in the corner.", "Large-format floor tile"),
  p("tile", "tile4.webp", 720, 1280, "Alcove bathtub under a window with light-grey large-format tile on the surrounding walls.", "Tiled tub alcove"),
  p("tile", "tile6.webp", 960, 1280, "Small half-bath with floor-to-ceiling white marble-pattern tile, a pedestal sink, toilet and white paneled door.", "Tiled half-bath"),
  p("tile", "tile7.webp", 960, 1280, "Bathroom tub surround being tiled with white marble-look tile; a blue stepladder, bucket and tools are in view.", "Tub surround being tiled"),
  p("tile", "tile8.webp", 598, 1280, "Large marble-pattern tile being set on a bathroom wall with a red laser line projected across it.", "Setting wall tile to a laser line"),
  p("tile", "tile9.webp", 960, 1280, "Freestanding white oval bathtub against marble-look tiled walls and floor.", "Freestanding tub with tiled walls"),
  p("tile", "tile10.webp", 598, 1280, "Small room with patched, unfinished walls and plumbing outlets exposed in the floor, at an early stage of work.", "Early-stage room before tile"),
  p("tile", "tile11.webp", 721, 1280, "Alcove bathtub with large white wall tile partly installed and a horizontal band of blue and grey mosaic tile.", "Tub wall with mosaic band"),
  p("tile", "tile12.webp", 1280, 598, "White subway tile backsplash being installed above a white countertop and beneath white cabinets, with a level line visible.", "Backsplash tile going on"),
  p("tile", "tile13.webp", 1280, 598, "Kitchen with white cabinets and countertops, a tile backsplash, new appliances and an orange work bucket on the wood-look floor.", "Kitchen with tile backsplash"),

  // Laminate
  p("laminate", "laminate.webp", 625, 833, "Open living and dining area with grey-brown wood-look laminate flooring and large sliding glass doors.", "Laminate in an open living area"),
  p("laminate", "laminate2.webp", 721, 1280, "Long narrow room with new laminate flooring, a work light on a tripod and unfinished trim leaning against the wall.", "Long room, flooring down, trim still to go"),
  p("laminate", "laminate3.webp", 721, 1280, "Small room with laminate flooring, light walls and dark wood trim around the door and window.", "Laminate in a small room"),
  p("laminate", "laminate4.webp", 721, 1280, "Kitchen during installation with appliances covered in plastic and loose laminate planks on the floor.", "Planks staged in a kitchen"),
  p("laminate", "laminate5.webp", 960, 1280, "Bright kitchen and living area with laminate flooring throughout, a white stone-pattern island and black track lighting.", "Laminate through a kitchen and living area"),
  p("laminate", "laminate6.webp", 960, 1280, "Close-up of laminate plank pattern in a corner where two white walls meet.", "Plank pattern up close"),
  p("laminate", "laminate7.webp", 598, 1280, "Room mid-renovation with new kitchen cabinets partly installed and laminate being laid over the subfloor; tools on the floor.", "Flooring going down beside new cabinets"),
  p("laminate", "laminate8.webp", 598, 1280, "Long room during flooring installation with boxes of flooring, tools and offcuts on the floor.", "Mid-installation"),
  p("laminate", "laminate9.webp", 598, 1280, "Staircase with steps finished in laminate planks, white risers and a white banister.", "Laminate on stairs"),
  p("laminate", "laminate10.webp", 598, 1280, "Room with laminate flooring partly installed and unfinished taped drywall seams on the walls.", "Flooring partly installed"),
  p("laminate", "laminate11.webp", 960, 1280, "Hallway looking into a kitchen and dining space with continuous laminate flooring, white cabinets and dark countertops.", "Flooring continuous from hall to kitchen"),
  p("laminate", "laminate12.webp", 598, 1280, "Entry hallway toward a glass-paneled door with laminate in place and a vacuum cleaner and debris on the floor.", "Hallway with cleanup still under way"),

  // Paint gallery: general project photos (owner request). They are NOT necessarily paint work,
  // and no location, date or "completed" claim is made.
  p("paint", "project-1.webp", 2752, 1536, "Bathroom with a freestanding white tub, glass shower enclosure, double vanity with round mirrors, and dark large-format floor tile.", "Project photo"),
  p("paint", "project-2.webp", 1250, 584, "Wide view of a house with blue lap siding and a wood deck with outdoor furniture and potted plants.", "Project photo"),
  p("paint", "project-3.webp", 667, 889, "Bathtub alcove with white marble-pattern tile on the walls and a shower curtain pulled aside.", "Project photo"),
  p("paint", "project-4.webp", 598, 1280, "People laying large paving stones for a patio beside a swimming pool.", "Project photo"),
  p("paint", "project-5.webp", 1280, 960, "Kitchen with a white island, white countertop and wood-look flooring beside white cabinets and a stainless refrigerator.", "Project photo"),
  p("paint", "project-6.webp", 389, 833, "Overhead view of a gray wood-grain deck beside a house with light yellow siding, a white railing and planters.", "Project photo"),
  p("paint", "project-7.webp", 1280, 960, "Wood deck at night with a white railing, black balusters and lit post caps.", "Project photo"),

  // Drywall
  p("drywall", "drywall.webp", 831, 1600, "Room with drywall taped and mudded, floor covered in protective paper with blue tape, and a trowel on the floor.", "Taped and mudded walls"),
  p("drywall", "drywall1.webp", 721, 1280, "View through a rough wooden doorway into a small room with partly drywalled, mudded walls and a bucket and wood scraps on a concrete floor.", "Small room being drywalled"),
  p("drywall", "drywall2.webp", 598, 1280, "Small room with painted white walls and new light wood-look laminate floor; a work light and some debris remain on the floor.", "Finished walls, cleanup still to do"),
  p("drywall", "drywall3.webp", 598, 1280, "Narrow space with one finished white drywall wall and the other still being taped and mudded; floor covered in plastic sheeting.", "Finished wall beside a wall in progress"),
  p("drywall", "drywall4.webp", 598, 1280, "Large room with joint compound over seams on walls and ceiling, a portable work light and a broom on the protected floor.", "Joint compound on walls and ceiling"),
  p("drywall", "drywall5.webp", 960, 1280, "Bright hallway with white walls, several white doors and light grey wood-look flooring laid at a diagonal.", "Finished hallway"),
  p("drywall", "drywall6.webp", 960, 1280, "Empty finished room with white walls, diagonal wood-look flooring, open doorways and a black rectangular ceiling light.", "Finished empty room"),
];

/**
 * Shown wherever photos appear. The owner confirmed the photos are real work by members of
 * his crew, taken from his camera roll; the crew has also worked in other states, so we do
 * not say where or when any photo was taken.
 */
export const PHOTO_NOTE =
  "Photos of work by members of our crew. Not all are Seattle MasterFix or Washington projects. Locations and dates are not listed.";

export function photosFor(trade: ServiceSlug): Photo[] {
  return photos.filter((x) => x.trade === trade);
}

export function heroPhoto(trade: ServiceSlug, file?: string): Photo | undefined {
  return file ? photoByFile(trade, file) : undefined;
}

export function photoByFile(trade: ServiceSlug, file: string): Photo {
  const found = photos.find((x) => x.trade === trade && x.src.endsWith(`/${file}`));
  if (!found) throw new Error(`Photo not in catalogue: ${trade}/${file}`);
  return found;
}
