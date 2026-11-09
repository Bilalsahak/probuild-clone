import Link from "next/link";
import { Container, Eyebrow, Hairline, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { site } from "@/config/site";
import { formatGuideMoney, type Guide } from "@/content/guides";

function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function GuidePageView({ guide }: { guide: Guide }) {
  const pageUrl = `${site.url}/guides/${guide.slug}/`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: guide.title,
    serviceType: guide.keyword,
    url: pageUrl,
    areaServed: site.serviceArea,
    provider: {
      "@type": "GeneralContractor",
      name: site.name,
      legalName: site.registeredName,
      telephone: site.phoneE164,
      email: site.email,
      url: `${site.url}/`,
      identifier: `WA Contractor Registration ${site.registrationNo}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
      areaServed: site.serviceArea,
    },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "USD",
      description:
        "Public 2025–26 planning estimates from cited sources — not a MasterFix fixed quote. Request a written estimate for your property.",
    },
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <JsonLd data={serviceLd} />

      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Cost guide · Seattle &amp; King County</Eyebrow>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {guide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              Public 2025–26 planning estimates for homeowners and property managers in{" "}
              {site.serviceArea}. These figures describe published report scopes —{" "}
              <strong className="font-semibold text-parchment">not a MasterFix quote</strong>.
              Every job is priced as one written project estimate for the agreed scope.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-soft text-parchment" aria-label="Registration">
        <Container>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5 text-sm">
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">
                —
              </span>
              Washington-registered contractor · No. {site.registrationNo}
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">
                —
              </span>
              {site.address.full}
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">
                —
              </span>
              {site.serviceArea}
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-paper to-parchment py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Planning ranges"
              title="Public 2025–26 estimates"
              body="Cited market benchmarks for budgeting — not Seattle MasterFix's price list."
            />
            <p className="mt-4 rounded-[2px] border border-bronze/30 bg-parchment px-4 py-3 text-sm text-charcoal/90">
              Public 2025–26 estimates, not a MasterFix quote. Sources are linked below. Washington
              sales tax may apply on a signed contract.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2px] border border-ink/10 bg-paper">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink text-parchment">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Band</th>
                    <th className="px-4 py-3 font-semibold">Amount</th>
                    <th className="px-4 py-3 font-semibold">What it represents</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal/90">
                  <tr className="border-t border-ink/10">
                    <td className="px-4 py-3">Low</td>
                    <td className="px-4 py-3 font-semibold">
                      {formatGuideMoney(guide.low)}
                      <span className="ml-1 font-normal text-charcoal/60">/{guide.unit}</span>
                    </td>
                    <td className="px-4 py-3">{guide.lowLabel}</td>
                  </tr>
                  <tr className="border-t border-ink/10 bg-parchment/60">
                    <td className="px-4 py-3">Typical</td>
                    <td className="px-4 py-3 font-semibold">
                      {formatGuideMoney(guide.typical)}
                      <span className="ml-1 font-normal text-charcoal/60">/{guide.unit}</span>
                    </td>
                    <td className="px-4 py-3">{guide.typicalLabel}</td>
                  </tr>
                  <tr className="border-t border-ink/10">
                    <td className="px-4 py-3">High</td>
                    <td className="px-4 py-3 font-semibold">
                      {formatGuideMoney(guide.high)}
                      <span className="ml-1 font-normal text-charcoal/60">/{guide.unit}</span>
                    </td>
                    <td className="px-4 py-3">{guide.highLabel}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/85">{guide.notes}</p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="h-full rounded-[2px] border border-ink/10 bg-ink-soft p-7 text-parchment md:p-8">
              <h2 className="font-display text-2xl">What usually moves the price</h2>
              <ul className="mt-6">
                {guide.costDrivers.map((c) => (
                  <li
                    key={c}
                    className="border-b border-white/10 py-3.5 text-sm text-parchment/90 last:border-0"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <Button href="/contact/" variant="primary" className="mt-8 w-full">
                Request an estimate
              </Button>
              <p className="mt-4 text-sm text-parchment/75">
                Or call{" "}
                <a href={site.phoneHref} className="underline underline-offset-2">
                  {site.phone}
                </a>
                .
              </p>
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Full general contracting, Ballard-based"
              body={guide.fitsCore}
            />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-charcoal/85">
              {site.name} ({site.registeredName}) is a Washington-registered contractor #
              {site.registrationNo}, based at {site.address.full}. Service area: {site.serviceArea}.
              Related pages:{" "}
              {guide.relatedServices.map((href, i) => (
                <span key={href}>
                  {i > 0 ? " · " : null}
                  <Link href={href} className="font-semibold text-bronze-deep underline underline-offset-2">
                    {href}
                  </Link>
                </span>
              ))}
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-parchment to-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Common questions" />
          </Reveal>
          <div className="mt-10 space-y-5">
            {guide.faqs.map((f) => (
              <article
                key={f.q}
                className="rounded-[2px] border border-ink/10 bg-paper p-6 md:p-7"
              >
                <h3 className="font-display text-xl text-ink">{f.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{f.a}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment-deep py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Photos"
              title="Photo slots for this guide"
              body="Placeholder slots for project photos. No images are claimed here until real job photos are added."
            />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guide.photoSlots.map((slot) => (
              <li
                key={slot}
                className="flex min-h-40 flex-col justify-end rounded-[2px] border border-dashed border-ink/20 bg-paper p-5"
              >
                <span className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep">
                  Photo slot
                </span>
                <span className="mt-2 text-sm leading-relaxed text-charcoal/85">{slot}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Sources"
              title="Where the planning numbers come from"
              body="Open sources used for the ranges on this page. Always verify current figures before you budget."
            />
          </Reveal>
          <ol className="mt-8 list-decimal space-y-3 pl-5 text-sm text-charcoal/90">
            {guide.sources.map((url) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all underline underline-offset-2 hover:text-bronze-deep"
                >
                  {url}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-charcoal/70">
            Estimates are non-binding until a written contract is signed. Compare two or three
            written bids on the same scope, and verify any contractor on WA L&amp;I before you
            sign.
          </p>
        </Container>
      </section>

      <Hairline />
      <section className="bg-ink-soft py-20 text-parchment md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl">Want a number for your property?</h2>
            <p className="mt-3 max-w-xl text-parchment/85">
              Call {site.phone} or send an estimate request. We will walk the scope and write a
              project quote — never an hourly guess.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.phoneHref} variant="ghost">
                Call now
              </Button>
              <Button href="/contact/" variant="primary">
                Request an estimate
              </Button>
            </div>
            <p className="mt-6 text-sm text-parchment/70">
              More guides:{" "}
              <Link href="/guides/" className="underline underline-offset-2">
                /guides/
              </Link>
              {" · "}
              <Link href={guide.serviceLink} className="underline underline-offset-2">
                Related service
              </Link>
            </p>
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
              <p className="mt-4 text-sm leading-relaxed text-parchment/85">
                {site.address.full}
                <br />
                {site.phone} · {site.email}
                <br />
                Service area: {site.serviceArea}
              </p>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
