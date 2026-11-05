import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { site } from "@/config/site";
import { processSteps, services } from "@/content/services";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — a Washington-registered remodeling contractor in Seattle and King County: siding, fencing, tile, laminate flooring, drywall and paint.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>About</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              A Washington-registered remodeling contractor for Seattle and King County.
              {` ${site.tagline}`}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="Trade work, planned around the weather and the people living through it"
              body="We focus on trade work: siding, fencing, tile, laminate flooring, drywall and paint, plus bathroom remodels and unit turns — for homes and light-commercial spaces in Seattle and King County."
            />
            <div className="mt-10 space-y-3 text-charcoal/85">
              <p>
                <strong className="text-ink">Business:</strong> {site.registeredName}
              </p>
              <p>
                <strong className="text-ink">Address:</strong> {site.address.full}
              </p>
              <p>
                <strong className="text-ink">Phone:</strong>{" "}
                <a href={site.phoneHref} className="underline underline-offset-2">
                  {site.phone}
                </a>
              </p>
              <p>
                <strong className="text-ink">Email:</strong>{" "}
                <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                  {site.email}
                </a>
              </p>
              <p>
                <strong className="text-ink">Service area:</strong> {site.serviceArea}
              </p>
            </div>
            <div className="mt-10 rounded-[2px] border border-dashed border-ink/30 bg-parchment p-7">
              <h2 className="font-display text-2xl text-ink">
                Photo and introduction — to be added
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
                A photo of Bill and the crew, and a short introduction, will go here once Bill
                adds them. Nothing here is invented: no years in business, no biography and no
                crew photo are claimed on this page.
              </p>
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
                We offer a 1-year labor warranty. The details are in the signed contract for
                your job.
              </p>
              <Button href="/contact/" variant="primary" className="mt-6 w-full">
                Request an estimate
              </Button>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How we work" title="From first call to closeout" />
          </Reveal>
          <div className="mt-12">
            <ProcessTimeline />
          </div>
          <Reveal className="mt-10">
            <Button href="/how-we-work/" variant="secondary">
              See the full process
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Trades" title="What we do" />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="rounded-[2px] border border-ink/10 bg-parchment p-6">
                <Link href={`/services/${s.slug}/`} className="font-display text-xl text-ink hover:underline">
                  {s.name}
                </Link>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/85">{s.summary}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-charcoal/80">
            Process steps above:{" "}
            {processSteps.map((s) => s.title).join(" · ")}. Estimates are non-binding until a
            written contract is signed.
          </p>
        </Container>
      </section>
    </>
  );
}
