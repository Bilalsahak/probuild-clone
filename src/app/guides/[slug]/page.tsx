import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageView } from "@/components/GuidePage";
import { getGuide, guides } from "@/content/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: { canonical: `/guides/${guide.slug}/` },
  };
}

export default async function GuideSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuidePageView guide={guide} />;
}
