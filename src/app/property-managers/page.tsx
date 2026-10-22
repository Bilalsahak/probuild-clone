import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { TrustLine } from "@/components/legal/TrustLine";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Property Managers & General Contractors",
  description:
    "Unit turns, punch lists and bulk or recurring repair work for Seattle-area property managers and general contractors. Request a walkthrough and written quote.",
  alternates: { canonical: "/property-managers/" },
};

const offers = [
  {
    t: "Unit turns",
    d: "Drywall patching, interior paint, flooring and small tile repairs between tenants, from a written scope.",
    href: "/services/unit-turns/",
  },
  {
    t: "Punch lists",
    d: "Finishing items left at the end of a project or after an inspection: touch-ups, trim, patches and fixes.",
  },
  {
    t: "Bulk and recurring work",
    d: "Several units or properties at once, or a standing arrangement for repeat work. We agree scope and pricing in writing.",
  },
  {
    t: "Trade work for GCs",
    d: "Drywall, paint, tile, laminate flooring, siding and fencing scopes on your projects.",
    href: "/services/",
  },
];

const steps = [
  { t: "Send the request", d: "Use the estimate form or call. Tell us the property, the number of units and what you need." },
  { t: "Walkthrough", d: "We walk the unit or site with you or your on-site contact and note each item." },
  { t: "Written quote", d: "You receive a written estimate for the agreed scope. Estimates are non-binding until a contract is signed." },
  { t: "Schedule and handoff", d: "We schedule around access and building rules, then check the work against the scope with you." },
];

export default function PropertyManagersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-ink to-ink-soft pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Eyebrow light>Property managers · General contractors</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
            Unit turns, punch lists and repeat repair work
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-parchment/85">
            A Washington-registered contractor crew for rentals, small commercial spaces and GC
            projects in Seattle and King County. Clear written scopes and direct contact with the
            people doing the work.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <Button href="/contact/" variant="primary">Request a walkthrough</Button>
            <Button href={site.calendly} external variant="ghost">
              Book free estimate<span className="sr-only"> (opens Calendly in a new tab)</span>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-paper to-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What we handle" title="Work we take on for managers and GCs" />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {offers.map((o) => (
              <li key={o.t} className="rounded-[2px] border border-ink/10 bg-paper p-7">
                <h2 className="font-display text-2xl text-ink">{o.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{o.d}</p>
                {o.href ? (
                  <Link href={o.href} className="mt-4 inline-flex min-h-11 items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze-deep underline-offset-2 hover:underline">
                    Learn more <span aria-hidden>&nbsp;→</span>
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-parchment to-parchment-deep py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="How to start" title="Requesting a walkthrough" />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="h-full rounded-[2px] bg-parchment p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-deep">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <div aria-hidden className="h-16 bg-gradient-to-b from-parchment-deep to-ink-soft md:h-24" />
      <section className="bg-ink-soft py-16 text-parchment md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Have a unit or punch list coming up?</h2>
            <p className="mt-3 text-parchment/80">
              Call <a href={site.phoneHref} className="underline underline-offset-2">{site.phone}</a> or email{" "}
              <a href={`mailto:${site.email}`} className="underline underline-offset-2">{site.email}</a>.
            </p>
            <TrustLine className="mt-4 text-sm text-parchment/85" linkClassName="underline underline-offset-2 hover:text-bronze-light" />
          </div>
          <Button href="/contact/" variant="primary">Request a quote</Button>
        </Container>
      </section>
    </>
  );
}
