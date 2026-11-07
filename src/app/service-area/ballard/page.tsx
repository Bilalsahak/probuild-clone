import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighbourhoodPageView } from "@/components/NeighbourhoodPage";
import { getNeighbourhood } from "@/content/neighbourhoods";

const slug = "ballard" as const;
const neighbourhood = getNeighbourhood(slug);

export const metadata: Metadata = {
  title: "Ballard remodeling & repair contractor | Seattle MasterFix",
  description:
    "Remodeling and repair in Ballard, Seattle — siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns, priced per written project quote.",
  alternates: { canonical: "/service-area/ballard/" },
};

export default function Page() {
  if (!neighbourhood) notFound();
  return <NeighbourhoodPageView neighbourhood={neighbourhood} />;
}
