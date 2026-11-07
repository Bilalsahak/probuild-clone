import Link from "next/link";
import { Container, Eyebrow, Hairline, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Stars } from "@/components/Stars";
import { LicenseLine } from "@/components/legal/LicenseLine";
import { site } from "@/config/site";
import { photoByFile, PHOTO_NOTE } from "@/content/photos";
import { services } from "@/content/services";
import { googleListing } from "@/content/reviews";
import type { Neighbourhood } from "@/content/neighbourhoods";

/** Generic cost drivers for a neighbourhood page — the same drivers the
 * service pages use. No dollar amounts, no ranges, never hourly; every job
 * is priced as one written project quote for the agreed scope. */
const costDrivers = [
  "Size and scope of the job",
  "Condition of what is already there, and access",
  "Materials and finish you choose",
  "How much prep or repair is needed first",
  "Permits, where they apply",
];

export function NeighbourhoodPageView({ neighbourhood }: { neighbourhood: Neighbourhood }) {
  const photos = neighbourhood.photoFiles.map((f) => photoByFile(f.trade, f.file));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.name,
    legalName: site.registeredName,
    url: `${site.url}/service-area/${neighbourhood.slug}/`,
    telephone: site.phoneE164,
    email: site.email,
    logo: `${site.url}/logos/seattle-masterfix-logo-1024.png`,
    identifier: `WA Contractor Registration ${site.registrationNo}`,
    sameAs: [site.linkedin, site.businessProfileUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: [`${neighbourhood.name}, Seattle, WA`, "Seattle and King County, WA"],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${site.url}/services/${s.slug}/`,
        provider: { "@type": "GeneralContractor", name: site.name },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Service area · {neighbourhood.name}</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {neighbourhood.name} remodeling &amp; repair contractor
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">{neighbourhood.intro}</p>
            <p className="mt-4 max-w-2xl text-lg text-parchment/85">{neighbourhood.intro2}</p>
          </Reveal>
        </Container>
      </section>

      {/* Trust strip — same highlights as the homepage, so the rating and
          licence are visible on mobile too. */}
      <section className="bg-ink-soft text-parchment" aria-label="Trust highlights">
        <Container>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5 text-sm">
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">—</span>
              Washington-registered contractor · No. {site.registrationNo}
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">—</span>
              1-year labor warranty
            </li>
            <li className="flex items-center gap-2">
              <Stars rating={googleListing.rating} size={14} className="text-bronze" />
              <span>
                {`${googleListing.rating.toFixed(1)} out of 5 · ${googleListing.reviewCount} review${googleListing.reviewCount === 1 ? "" : "s"} on Google`}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">—</span>
              Seattle &amp; King County
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Eight trades. One crew."
              title={`What we do in ${neighbourhood.name}`}
              body="Every trade below is available in this neighbourhood, priced as one written project quote for the agreed scope — never by the hour."
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
                <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep transition group-hover:gap-3">
                  Learn more <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
            <Link
              href="/service-area/"
              className="group rounded-[2px] border border-ink/10 bg-ink p-7 text-parchment transition hover:ring-1 hover:ring-ink/30"
            >
              <h2 className="font-display text-2xl">All of Seattle &amp; King County</h2>
              <p className="mt-3 text-sm leading-relaxed text-parchment/85">
                Our full service area, and the other neighbourhoods on our home turf.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-light transition group-hover:gap-3">
                Service area <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-paper to-parchment py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="How we typically work"
              title="From first call to finished work"
              body="The same four steps on every job, in every neighbourhood we serve."
            />
            <div className="mt-12">
              <ProcessTimeline dense />
            </div>
          </Reveal>
          <Reveal className="self-start lg:col-span-5" delay={0.1}>
            <aside className="rounded-[2px] border border-ink/10 bg-ink-soft p-7 text-parchment md:p-8">
              <h2 className="font-display text-2xl">What drives cost</h2>
              <p className="mt-2 text-sm text-parchment/85">
                What typically moves the price. We talk through these early, before work starts.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-parchment/85">
                Every job is priced as one written project quote for the agreed scope — never by
                the hour. There are no fixed prices on this site; the items below are what we
                look at when we put your quote together.{" "}
                <Link
                  href="/faq/#pricing"
                  className="font-semibold text-bronze-light underline underline-offset-2"
                >
                  How pricing works
                </Link>
              </p>
              <ul className="mt-6">
                {costDrivers.map((c) => (
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
            </aside>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment-deep py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Photos"
              title="Photos from job sites"
              body="Photos of work by members of our crew. They are not labelled as jobs in this neighbourhood, and no location or date is claimed for any photo."
            />
          </Reveal>
          <div className="mt-10">
            <ProjectGallery images={photos} showFilters={false} layout="grid" />
          </div>
          <p className="mt-10 max-w-2xl text-caption leading-relaxed text-charcoal/70">
            {PHOTO_NOTE}
          </p>
        </Container>
      </section>

      <Hairline />
      <section className="bg-ink-soft py-20 text-parchment md:py-28">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl">
              Working on a home in {neighbourhood.name}?
            </h2>
            <p className="mt-3 max-w-xl text-parchment/85">
              Call {site.phone} — we usually reply within 1 hour — or send an estimate request.
              Tell us your property address and the trade, and your written quote confirms the
              service area for your job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.phoneHref} variant="ghost">
                Call now
              </Button>
              <Button href="/contact/" variant="primary">
                Book a free estimate
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
