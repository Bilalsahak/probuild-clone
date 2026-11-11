import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NeighbourhoodPageView } from "@/components/NeighbourhoodPage";
import { getNeighbourhood, neighbourhoods } from "@/content/neighbourhoods";

export function generateStaticParams() {
  return neighbourhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const neighbourhood = getNeighbourhood(slug);
  if (!neighbourhood) return {};
  return {
    title: neighbourhood.seoTitle,
    description: neighbourhood.seoDescription,
    alternates: { canonical: `/service-area/${neighbourhood.slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighbourhood = getNeighbourhood(slug);
  if (!neighbourhood) notFound();
  return <NeighbourhoodPageView neighbourhood={neighbourhood} />;
}
