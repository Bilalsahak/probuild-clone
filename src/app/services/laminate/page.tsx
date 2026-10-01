import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/ServicePage";
import { getService } from "@/content/services";

const slug = "laminate" as const;
const service = getService(slug);

export const metadata: Metadata = {
  title: service?.name ?? "Service",
  description: service?.summary,
  alternates: { canonical: `/services/${slug}/` },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
