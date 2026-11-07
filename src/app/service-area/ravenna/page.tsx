import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighbourhoodPageView } from "@/components/NeighbourhoodPage";
import { getNeighbourhood } from "@/content/neighbourhoods";

const slug = "ravenna" as const;
const neighbourhood = getNeighbourhood(slug);

export const metadata: Metadata = {
  title: "Ravenna remodeling & repair contractor",
  description:
    "Remodeling and repair in Ravenna, Seattle — siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns, priced per written project quote.",
  alternates: { canonical: "/service-area/ravenna/" },
};

export default function Page() {
  if (!neighbourhood) notFound();
  return <NeighbourhoodPageView neighbourhood={neighbourhood} />;
}
