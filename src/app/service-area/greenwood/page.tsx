import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighbourhoodPageView } from "@/components/NeighbourhoodPage";
import { getNeighbourhood } from "@/content/neighbourhoods";

const slug = "greenwood" as const;
const neighbourhood = getNeighbourhood(slug);

export const metadata: Metadata = {
  title: "Greenwood remodeling & repair contractor",
  description:
    "Remodeling and repair in Greenwood, Seattle — siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns, priced per written project quote.",
  alternates: { canonical: "/service-area/greenwood/" },
};

export default function Page() {
  if (!neighbourhood) notFound();
  return <NeighbourhoodPageView neighbourhood={neighbourhood} />;
}
