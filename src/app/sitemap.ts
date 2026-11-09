import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { guides } from "@/content/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    ...services.map((s) => `/services/${s.slug}/`),
    "/guides/",
    ...guides.map((g) => `/guides/${g.slug}/`),
    "/projects/",
    "/property-managers/",
    "/how-we-work/",
    "/faq/",
    "/service-area/",
    "/service-area/ballard/",
    "/service-area/greenwood/",
    "/service-area/ravenna/",
    "/service-area/north-seattle/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
}
