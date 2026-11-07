/**
 * Neighbourhood pages — Ballard, Greenwood, Ravenna, North Seattle.
 * These are the only neighbourhoods shown as our home turf (approved by Bill
 * 2026-11-06). Copy is deliberately plain: no local history, no housing-stock
 * claims, no jobs claimed in any neighbourhood, no locations or dates for any
 * photo. Photos are real crew work from the existing library, captioned by
 * trade — never labelled as a job in the neighbourhood on the page.
 */
import type { PhotoTrade } from "@/content/services";

export type Neighbourhood = {
  slug: string;
  name: string;
  /** Short intro shown under the hero heading. */
  intro: string;
  /** Second intro paragraph: how an estimate works for this area. */
  intro2: string;
  /** One representative photo per trade (paint excluded — no paint-specific
   * photos exist yet; Bill to supply them). */
  photoFiles: { trade: PhotoTrade; file: string }[];
};

export const neighbourhoods: Neighbourhood[] = [
  {
    slug: "ballard",
    name: "Ballard",
    intro:
      "We work in Ballard, one of the neighbourhoods on our home turf in Seattle. Siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns — the same eight trades we do across Seattle and King County.",
    intro2:
      "Tell us your property address when you request an estimate and your written quote confirms the service area for your job. If we cannot take the job on, we will say so early rather than after a visit.",
    photoFiles: [
      { trade: "siding", file: "siding6.webp" },
      { trade: "fencing", file: "fencing.webp" },
      { trade: "tile", file: "tile8.webp" },
      { trade: "laminate", file: "laminate.webp" },
      { trade: "drywall", file: "drywall.webp" },
    ],
  },
  {
    slug: "greenwood",
    name: "Greenwood",
    intro:
      "We work in Greenwood, one of the neighbourhoods on our home turf in Seattle. Siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns — the same eight trades we do across Seattle and King County.",
    intro2:
      "Tell us your property address when you request an estimate and your written quote confirms the service area for your job. If we cannot take the job on, we will say so early rather than after a visit.",
    photoFiles: [
      { trade: "siding", file: "siding2.webp" },
      { trade: "fencing", file: "fencing3.webp" },
      { trade: "tile", file: "tile2.webp" },
      { trade: "laminate", file: "laminate5.webp" },
      { trade: "drywall", file: "drywall4.webp" },
    ],
  },
  {
    slug: "ravenna",
    name: "Ravenna",
    intro:
      "We work in Ravenna, one of the neighbourhoods on our home turf in Seattle. Siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns — the same eight trades we do across Seattle and King County.",
    intro2:
      "Tell us your property address when you request an estimate and your written quote confirms the service area for your job. If we cannot take the job on, we will say so early rather than after a visit.",
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
    intro:
      "We work in North Seattle, one of the neighbourhoods on our home turf in Seattle. Siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns — the same eight trades we do across Seattle and King County.",
    intro2:
      "Tell us your property address when you request an estimate and your written quote confirms the service area for your job. If we cannot take the job on, we will say so early rather than after a visit.",
    photoFiles: [
      { trade: "siding", file: "siding7.webp" },
      { trade: "fencing", file: "fencing1.webp" },
      { trade: "tile", file: "tile13.webp" },
      { trade: "laminate", file: "laminate11.webp" },
      { trade: "drywall", file: "drywall6.webp" },
    ],
  },
];

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return neighbourhoods.find((n) => n.slug === slug);
}
