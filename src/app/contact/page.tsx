import type { Metadata } from "next";
import { EstimateForm } from "@/components/EstimateForm";
import { CalendlyEmbed } from "@/components/consent/CalendlyEmbed";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { Container, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact and estimate requests",
  description: `Request an estimate or book a consultation with ${site.shortName}. Call ${site.phone}.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-parchment md:pb-20 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Request an estimate
            </h1>
            <p className="mt-5 max-w-2xl text-parchment/85">
              Tell us about your project in a few short steps. Or call, email, or book a time to
              talk.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <EstimateForm />
          </Reveal>
          <div className="space-y-5 lg:col-span-2">
            <Reveal delay={0.08}>
              <aside className="rounded-[2px] border border-ink/10 bg-paper p-7">
                <h2 className="font-display text-2xl text-ink">Talk to us directly</h2>
                <ul className="mt-5 space-y-3 text-sm text-charcoal/90">
                  <li>
                    <a className="font-semibold text-ink underline" href={site.phoneHref}>
                      {site.phone}
                    </a>
                  </li>
                  <li>
                    <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                  <li>
                    <a className="underline" href={`mailto:${site.estimatesEmail}`}>{site.estimatesEmail}</a>
                  </li>
                  <li className="pt-1">{site.address.full}</li>
                </ul>
              </aside>
            </Reveal>
            <Reveal delay={0.12}>
              <aside id="book" className="scroll-mt-28 rounded-[2px] border border-ink/10 bg-paper p-7">
                <h2 className="font-display text-2xl text-ink">Book a consultation</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/90">
                  Pick a time that works for you on Calendly.
                </p>
                <div className="mt-5">
                  <CalendlyEmbed />
                </div>
              </aside>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="rounded-[2px] bg-ink p-7 text-parchment">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                  Registration
                </h2>
                <LicenseLine
                  className="mt-4 text-sm leading-relaxed text-parchment/90"
                  linkClassName="underline underline-offset-2 hover:text-bronze-light"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
