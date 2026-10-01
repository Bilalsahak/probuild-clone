import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    ...services.map((s) => `/services/${s.slug}/`),
    "/projects/",
    "/how-we-work/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
