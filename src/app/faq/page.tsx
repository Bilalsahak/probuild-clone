import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { faqGroups, faqItems } from "@/content/faq";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "How estimates and pricing work, typical timelines, permits, warranty, service area and preparing for work — Seattle MasterFix, Seattle and King County.",
  alternates: { canonical: "/faq/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>FAQ</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              How estimates and pricing work, typical timelines, permits, warranty and service
              area — in plain language. Anything not covered here, ask us directly.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            {faqGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="mt-14 font-display text-3xl text-ink first:mt-0 md:text-4xl">
                  {group.title}
                </h2>
                <div className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <article
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-28 rounded-[2px] border border-ink/10 bg-parchment p-6 md:p-7"
                    >
                      <h3 className="font-display text-xl text-ink md:text-2xl">{item.q}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-charcoal/85 md:text-base">
                        {item.a}
                      </p>
                      {item.link ? (
                        <p className="mt-3 text-sm">
                          <Link
                            href={item.link.href}
                            className="font-semibold text-ink underline underline-offset-2"
                          >
                            {item.link.label}
                          </Link>
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.1}>
            <aside className="rounded-[2px] border border-ink/10 bg-ink-soft p-7 text-parchment md:p-8 lg:sticky lg:top-28">
              <h2 className="font-display text-2xl">Still have a question?</h2>
              <p className="mt-3 text-sm leading-relaxed text-parchment/85">
                Call us, email, or send an estimate request. We follow up about next steps.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                <li>
                  <a href={site.phoneHref} className="font-semibold underline underline-offset-2">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                    {site.email}
                  </a>
                </li>
              </ul>
              <Button href="/contact/" variant="primary" className="mt-6 w-full">
                Request an estimate
              </Button>
              <p className="mt-6 text-xs leading-relaxed text-parchment/70">
                Estimates are non-binding until a written contract is signed. Prices are per
                written project quote, never by the hour — see{" "}
                <Link href="/how-we-work/" className="underline underline-offset-2">
                  How we work
                </Link>
                .
              </p>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-20 md:py-28">
        <Container>
          <LicenseLine className="max-w-3xl text-sm leading-relaxed text-charcoal/85" />
        </Container>
      </section>
    </>
  );
}
