import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { formatGuideMoney, guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Seattle remodeling cost guides",
  description:
    "Public 2025–26 planning estimates for Seattle & King County remodeling costs — kitchens, baths, ADUs, siding, fencing, and more. Not MasterFix quotes.",
  alternates: { canonical: "/guides/" },
};

export default function GuidesIndexPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Cost guides</Eyebrow>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Seattle &amp; King County remodeling cost guides
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              Public 2025–26 planning estimates with cited sources. These are market benchmarks —
              not {site.shortName} fixed quotes. Every job is priced as a written project estimate.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="15 guides"
              title="Pick a project type"
              body={`${site.name} · WA #${site.registrationNo} · ${site.serviceArea}`}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}/`}
                className="group rounded-[2px] border border-ink/10 bg-parchment p-7 transition hover:ring-1 hover:ring-ink/30"
              >
                <h2 className="font-display text-2xl text-ink">{g.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">
                  Typical public estimate: {formatGuideMoney(g.typical)}{" "}
                  <span className="text-charcoal/60">/{g.unit}</span>
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep transition group-hover:gap-3">
                  Open guide <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact/" variant="primary">
              Request an estimate
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
