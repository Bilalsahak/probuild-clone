import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { services } from "@/content/services";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Service area",
  description:
    "Seattle MasterFix works in Seattle and King County, WA — siding, fencing, tile, laminate flooring, drywall, paint, bathroom remodels and unit turns.",
  alternates: { canonical: "/service-area/" },
};

export default function ServiceAreaPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Service area</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Seattle and King County
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              We work in Seattle and King County, WA, for homes and light-commercial spaces.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="One service area, confirmed in your quote"
              body="Tell us your property address when you request an estimate. Your written quote confirms the service area for your job — we do not list individual neighbourhoods or towns as confirmed service areas on this site."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group rounded-[2px] border border-ink/10 bg-parchment p-7 transition hover:ring-1 hover:ring-ink/30"
              >
                <h2 className="font-display text-2xl text-ink">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze-deep transition group-hover:gap-3">
                  Learn more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Next step"
              title="Outside Seattle or King County?"
              body="Tell us where the property is when you request an estimate. If we cannot take the job on, we will say so early rather than after a visit."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact/" variant="primary" className="!bg-ink !text-parchment">
                Request an estimate
              </Button>
              <Button href="/faq/" variant="secondary">
                Read the FAQ
              </Button>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="rounded-[2px] bg-ink p-7 text-parchment md:p-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Registration
              </h2>
              <LicenseLine
                className="mt-4 text-sm leading-relaxed text-parchment/90"
                linkClassName="underline underline-offset-2 hover:text-bronze-light"
              />
              <p className="mt-4 text-sm leading-relaxed text-parchment/85">
                Call{" "}
                <a href={site.phoneHref} className="underline underline-offset-2">
                  {site.phone}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                  {site.email}
                </a>
                .
              </p>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
