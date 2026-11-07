import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { services } from "@/content/services";
import { neighbourhoods } from "@/content/neighbourhoods";
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

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="One service area, confirmed in your quote"
              body="Seattle and King County, WA. Our home turf is Ballard, Greenwood, Ravenna and North Seattle — tell us your property address when you request an estimate and your written quote confirms the service area for your job."
            />
          </Reveal>
          <Reveal className="mt-10">
            <h2 className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-bronze-deep">
              Home turf
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.homeTurf.map((n) => (
                <li
                  key={n}
                  className="rounded-[2px] border border-ink/15 bg-parchment px-4 py-2 text-sm font-medium text-ink"
                >
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/85">
              Elsewhere in Seattle or King County? Tell us where the property is when you
              request an estimate — if we cannot take the job on, we will say so early rather
              than after a visit. King County towns beyond these neighbourhoods are served on a
              per-project basis; your written quote confirms the service area for your job.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {neighbourhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/service-area/${n.slug}/`}
                className="group rounded-[2px] border border-ink/10 bg-ink p-7 text-parchment transition hover:ring-1 hover:ring-ink/30"
              >
                <h2 className="font-display text-2xl">{n.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-parchment/85">
                  Remodeling and repair in {n.name}, Seattle — all eight trades, priced per
                  written project quote.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-light transition group-hover:gap-3">
                  Visit page <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group rounded-[2px] border border-ink/10 bg-parchment p-7 transition hover:ring-1 hover:ring-ink/30"
              >
                <h2 className="font-display text-2xl text-ink">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep transition group-hover:gap-3">
                  Learn more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Next step"
              title="Outside Seattle or King County?"
              body="Tell us where the property is when you request an estimate. If we cannot take the job on, we will say so early rather than after a visit."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact/" variant="dark">
                Request an estimate
              </Button>
              <Button href="/faq/" variant="secondary">
                Read the FAQ
              </Button>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="rounded-[2px] bg-ink p-7 text-parchment md:p-8">
              <h2 className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Registration
              </h2>
              <LicenseLine
                className="mt-4 text-sm leading-relaxed text-parchment/90"
                linkClassName="underline underline-offset-2 hover:text-bronze-light"
              />
              <h3 className="mt-6 text-eyebrow font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Hours
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-parchment/90">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex gap-2">
                    <span className="w-20 shrink-0">{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
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
