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
import { getService, services } from "@/content/services";
import { formatGuideMoney, getGuide, type Guide } from "@/content/guides";
import { googleListing } from "@/content/reviews";
import {
  areaServedLabel,
  getNearbyNeighbourhoods,
  neighbourhoods,
  type Neighbourhood,
} from "@/content/neighbourhoods";
import { ProjectStoryBlock } from "@/components/ProjectStory";
import { recentSeattleWorkFor } from "@/content/projectStories";

/** Generic cost drivers for a neighbourhood page — the same drivers the
 * service pages use. No hourly rates; every job is priced as one written
 * project quote for the agreed scope. */
const costDrivers = [
  "Size and scope of the job",
  "Condition of what is already there, and access",
  "Materials and finish you choose",
  "How much prep or repair is needed first",
  "Permits, where they apply",
];

function unitSuffix(unit: string): string {
  return unit.startsWith("per ") ? ` ${unit}` : `/${unit}`;
}

function GuideRangeCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}/`}
      className="group flex flex-col rounded-[2px] border border-ink/10 bg-parchment p-6 transition hover:ring-1 hover:ring-ink/30"
    >
      <h3 className="font-display text-xl text-ink">{guide.title}</h3>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div>
          <dt className="text-caption uppercase tracking-[0.14em] text-charcoal/60">Starting</dt>
          <dd className="mt-1 font-semibold text-ink">
            {formatGuideMoney(guide.mfStarting)}
            <span className="block text-caption font-normal text-charcoal/60">{unitSuffix(guide.unit).trim()}</span>
          </dd>
        </div>
        <div>
          <dt className="text-caption uppercase tracking-[0.14em] text-charcoal/60">Typical</dt>
          <dd className="mt-1 font-semibold text-ink">
            {formatGuideMoney(guide.mfTypical)}
            <span className="block text-caption font-normal text-charcoal/60">{unitSuffix(guide.unit).trim()}</span>
          </dd>
        </div>
        <div>
          <dt className="text-caption uppercase tracking-[0.14em] text-charcoal/60">High</dt>
          <dd className="mt-1 font-semibold text-ink">
            {formatGuideMoney(guide.mfHigh)}
            <span className="block text-caption font-normal text-charcoal/60">{unitSuffix(guide.unit).trim()}</span>
          </dd>
        </div>
      </dl>
      <span className="mt-4 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep transition group-hover:gap-3">
        Full guide <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

export function NeighbourhoodPageView({ neighbourhood }: { neighbourhood: Neighbourhood }) {
  const photos = neighbourhood.photoFiles.map((f) => photoByFile(f.trade, f.file));
  const pageIndex = neighbourhoods.findIndex((n) => n.slug === neighbourhood.slug);
  const recentWork = recentSeattleWorkFor(neighbourhood.slug, pageIndex);
  const nearby = getNearbyNeighbourhoods(neighbourhood);
  const focusGuides = neighbourhood.focusGuides
    .map((slug) => getGuide(slug))
    .filter((g): g is Guide => Boolean(g));
  const focusServices = neighbourhood.focusServices
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const area = areaServedLabel(neighbourhood);
  const pageUrl = `${site.url}/service-area/${neighbourhood.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "GeneralContractor"],
        name: site.name,
        legalName: site.registeredName,
        url: pageUrl,
        telephone: site.phoneE164,
        email: site.email,
        logo: `${site.url}/logos/seattle-masterfix-logo-1024.png`,
        image: `${site.url}/logos/seattle-masterfix-logo-1024.png`,
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
        areaServed: [
          { "@type": "Place", name: area },
          { "@type": "Place", name: site.serviceArea },
        ],
      },
      {
        "@type": "Service",
        name: `${neighbourhood.name} remodeling and repair`,
        url: pageUrl,
        provider: {
          "@type": "GeneralContractor",
          name: site.name,
          telephone: site.phoneE164,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.state,
            postalCode: site.address.zip,
            addressCountry: "US",
          },
        },
        areaServed: { "@type": "Place", name: area },
        serviceType: services.map((s) => s.name),
      },
    ],
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
            <Eyebrow light>
              Service area · {neighbourhood.name}
              {neighbourhood.placeKind === "neighborhood" ? ", Seattle" : ", WA"}
            </Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {neighbourhood.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">{neighbourhood.intro}</p>
            <p className="mt-4 max-w-2xl text-lg text-parchment/85">{neighbourhood.intro2}</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink-soft text-parchment" aria-label="Trust highlights">
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
              1-year labor warranty
            </li>
            <li className="flex items-center gap-2">
              <Stars rating={googleListing.rating} size={14} className="text-bronze" />
              <span>
                {`${googleListing.rating.toFixed(1)} out of 5 · ${googleListing.reviewCount} review${googleListing.reviewCount === 1 ? "" : "s"} on Google`}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden className="text-bronze-light">
                —
              </span>
              {site.address.full}
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Work we take on here"
              title={`Common projects in ${neighbourhood.name}`}
              body="These are the kinds of jobs the housing in this area often needs — not a list of projects we claim to have already completed at a specific address here."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {neighbourhood.commonProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2px] border border-ink/10 bg-parchment p-7"
              >
                <h2 className="font-display text-2xl text-ink">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{project.body}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {project.serviceSlug ? (
                    <Link
                      href={`/services/${project.serviceSlug}/`}
                      className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep"
                    >
                      {getService(project.serviceSlug)?.name ?? "Service"} →
                    </Link>
                  ) : null}
                  {project.guideSlug ? (
                    <Link
                      href={`/guides/${project.guideSlug}/`}
                      className="text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep"
                    >
                      Cost guide →
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          {focusServices.length ? (
            <p className="mt-8 text-sm text-charcoal/80">
              Related trades:{" "}
              {focusServices.map((s, i) => (
                <span key={s.slug}>
                  {i > 0 ? ", " : ""}
                  <Link href={`/services/${s.slug}/`} className="underline underline-offset-2">
                    {s.name}
                  </Link>
                </span>
              ))}
              .
            </p>
          ) : null}
        </Container>
      </section>

      <section className="bg-parchment py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Housing in this area"
              title={`What the houses in ${neighbourhood.name} are often like`}
              body="This is general context for the neighborhood or city, not a claim about a specific property we have already worked on."
            />
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-charcoal/90">
              {neighbourhood.housingStock}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Recent Seattle-area work"
              title="Commercial ceiling and drywall"
              body="A Seattle MasterFix commercial ceiling and drywall project in the Seattle area. These photos are not a job in this neighborhood or city. The client is unnamed, and no street address is listed. Photos show before and during work only."
            />
          </Reveal>
          <div className="mt-10">
            <ProjectStoryBlock story={recentWork} />
          </div>
          <p className="mt-6">
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-[0.18em] text-bronze-deep"
            >
              See all project photos <span aria-hidden>→</span>
            </Link>
          </p>
        </Container>
      </section>

      {focusGuides.length ? (
        <section className="bg-paper py-20 md:py-28">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Planning ranges"
                title={`What ${neighbourhood.name} projects typically cost`}
                body={`${focusGuides[0].mfLabel}. Ranges come from our current cost guides and apply as planning figures; the final price is after a free on-site estimate.`}
              />
            </Reveal>
            <p className="mt-6 max-w-3xl rounded-[2px] border border-bronze/30 bg-parchment px-4 py-3 text-sm font-medium text-charcoal/90">
              {focusGuides[0].mfLabel}
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {focusGuides.map((guide) => (
                <GuideRangeCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-parchment-deep py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Permits"
              title={`Permit notes for ${neighbourhood.name}`}
              body="Educational only — not legal advice. Rules change. Verify with the jurisdiction before work starts."
            />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-charcoal/90">
              {neighbourhood.permitNotes.body}
            </p>
          </Reveal>
          <Reveal className="self-start lg:col-span-5" delay={0.1}>
            <aside className="rounded-[2px] border border-ink/10 bg-paper p-7 md:p-8">
              <h2 className="text-eyebrow font-semibold uppercase tracking-[0.22em] text-bronze-deep">
                Official sources
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={neighbourhood.permitNotes.officialHref}
                    className="font-semibold text-ink underline underline-offset-2"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {neighbourhood.permitNotes.officialName}
                  </a>
                </li>
                {neighbourhood.permitNotes.extra?.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-charcoal/90 underline underline-offset-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </Container>
      </section>

      {nearby.length ? (
        <section className="bg-paper py-16 md:py-20">
          <Container>
            <h2 className="font-display text-3xl text-ink">Nearby areas we serve</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/service-area/${n.slug}/`}
                    className="inline-block rounded-[2px] border border-ink/15 bg-parchment px-4 py-2 text-sm font-medium text-ink transition hover:ring-1 hover:ring-ink/30"
                  >
                    {n.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-area/"
                  className="inline-block rounded-[2px] border border-ink/15 bg-ink px-4 py-2 text-sm font-medium text-parchment transition hover:ring-1 hover:ring-ink/30"
                >
                  All service areas
                </Link>
              </li>
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Eight trades. One crew."
              title={`What we do in ${neighbourhood.name}`}
              body="Every trade below is available in this area, priced as one written project quote for the agreed scope — never by the hour."
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
                Our full service area, home turf, and the other neighborhood and city pages.
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
              body="The same four steps on every job, in every area we serve."
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
                the hour. Planning ranges on this page use our current guide figures, always
                labelled as typical Seattle MasterFix project ranges, with the final price after a
                free on-site estimate.{" "}
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
              body="Photos of work by members of our crew. They are not labelled as jobs in this area, and no location or date is claimed for any photo on this page."
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
                Seattle MasterFix Precision Craftsmanship
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-parchment/90">
                {site.address.full}
                <br />
                <a href={site.phoneHref} className="underline underline-offset-2">
                  {site.phone}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                  {site.email}
                </a>
              </p>
              <h3 className="mt-6 text-eyebrow font-semibold uppercase tracking-[0.22em] text-bronze-light">
                Registration
              </h3>
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
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
