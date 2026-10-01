import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { TradeMarquee } from "@/components/ui/Marquee";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CrewFeedback } from "@/components/legal/CrewFeedback";
import { site } from "@/config/site";
import { PHOTO_NOTE, photoByFile } from "@/content/photos";
import { services } from "@/content/services";

// Homepage hero: owner's bathroom photo from the Paint gallery set (see photos.ts, project-1).
// Responsive WebP renditions live in public/images/hero/ (640/1024/1600/2400 px wide).
const hero = photoByFile("paint", "project-1.webp");
const heroSizes = [640, 1024, 1600, 2400];
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const heroSrcSet = heroSizes.map((w) => `${base}/images/hero/home-${w}.webp ${w}w`).join(", ");

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative isolate min-h-[100dvh] overflow-hidden bg-ink text-parchment">
        <div className="absolute inset-0 overflow-hidden">
          <div className="ken-burns absolute inset-[-4%] h-[108%] w-[108%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${base}/images/hero/home-1600.webp`}
              srcSet={heroSrcSet}
              sizes="(max-width: 1024px) 1600px, 100vw"
              alt={hero.alt}
              width={2400}
              height={1339}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[64%_50%] md:object-[56%_50%] lg:object-center"
            />
          </div>
          {/* Scrims keep the text AA-legible over the bright photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/45 md:from-ink/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink/50" />
        </div>

        <Container className="relative flex min-h-[100dvh] flex-col justify-end pb-28 pt-28 md:justify-center md:pb-32 lg:pt-44">
          <Reveal className="max-w-4xl">
            <Eyebrow light>Seattle &amp; King County · Remodeling</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,9.5vw,5.25rem)] leading-[0.98] tracking-tight text-parchment">
              Built on trust.
              <br />
              <span className="text-bronze-light">Executed with precision.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-parchment/90 md:text-lg">
              Siding, fencing, tile, laminate flooring, drywall, and paint for Seattle-area homes
              and light-commercial spaces. A crew that plans around the rain, keeps you in the
              loop, and pays attention to the details.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Button href="/contact/" variant="primary">
                Request an estimate
              </Button>
              <Button href="/projects/" variant="ghost">
                View photos
              </Button>
            </div>
            {/* Glass info bar (solid fallback when backdrop-filter is unsupported) */}
            <p className="mt-8 inline-block max-w-full rounded-[2px] border border-white/25 bg-ink/80 px-4 py-3 text-[11px] uppercase leading-relaxed tracking-[0.16em] text-parchment supports-[backdrop-filter]:bg-ink/55 supports-[backdrop-filter]:backdrop-blur-md">
              Washington-registered contractor · No. {site.registrationNo}
            </p>
          </Reveal>
        </Container>

        <div aria-hidden className="absolute bottom-8 right-5 hidden text-right md:block lg:right-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-parchment/80">Scroll</p>
          <div className="ml-auto mt-2 h-12 w-px bg-gradient-to-b from-bronze to-transparent" />
        </div>
      </section>

      <TradeMarquee items={["Siding", "Fencing", "Tile", "Laminate flooring", "Drywall", "Paint", "Seattle", "King County"]} />

      {/* Approach */}
      <section className="bg-gradient-to-b from-paper to-parchment py-20 md:py-28">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
                Remodeling that respects Pacific Northwest weather, and the people living through
                the work.
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.1}>
              <p className="text-base leading-relaxed text-charcoal/85 md:text-lg">
                We are a Washington-registered general contractor focused on trade work: plumb
                posts, flat floors, watertight flashing, and a tidy handoff. We try to explain
                what we are doing and why, and to tell you early when conditions change.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2px] bg-ink/10 sm:grid-cols-3">
            {[
              { k: "01", t: "Planning", d: "We talk through scope, budget and timing before work is scheduled." },
              { k: "02", t: "Craft", d: "Layout, prep and the hidden details, like flashing and waterproofing, that keep water out." },
              { k: "03", t: "Communication", d: "Clear updates on progress, schedule and any change in conditions." },
            ].map((item) => (
              <Reveal key={item.k} className="bg-paper p-7 md:p-9">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-deep">
                  {item.k}
                </span>
                <h3 className="mt-3 font-display text-2xl text-ink">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-b from-parchment to-parchment-deep py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="From first conversation to final walkthrough"
              body="Four stages, so you know what comes next and what we need from you."
            />
          </Reveal>
          <div className="mt-16 md:mt-20">
            <ProcessTimeline />
          </div>
          <Reveal className="mt-14">
            <Button href="/how-we-work/" variant="secondary">
              See the full process
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Trades */}
      <section className="bg-gradient-to-b from-parchment-deep to-paper py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Trades"
              title="What we do"
              body="Each trade page covers typical timelines, what drives cost, common mistakes, and photos from job sites."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {services.map((s) => {
              const photo = s.heroFile
                ? photoByFile(s.slug, s.heroFile)
                : undefined;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group relative block h-full overflow-hidden rounded-[2px] bg-ink-soft ring-1 ring-white/10"
                  >
                    {photo ? (
                      <div className="relative aspect-[5/4] overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width:768px) 100vw, 33vw"
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/20 to-transparent opacity-90" />
                      </div>
                    ) : (
                      <div
                        aria-hidden
                        className="flex aspect-[5/4] items-end bg-gradient-to-br from-ink-mid to-ink-soft p-5"
                      >
                        <span className="font-display text-6xl text-parchment/15">Paint</span>
                      </div>
                    )}
                    <div className={`relative px-5 pb-6 pt-2 ${photo ? "-mt-16" : ""}`}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                        {s.shortName}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-parchment">{s.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-parchment/80">{s.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze-light transition group-hover:gap-3">
                        Learn more
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Photo strip */}
      <section className="bg-paper py-16 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Photos"
                title="From job sites"
                body={PHOTO_NOTE}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/projects/" variant="secondary">
                Browse photos
              </Button>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" stagger={0.06}>
            {(
              [
                ["siding", "siding5.webp"],
                ["tile", "tile8.webp"],
                ["fencing", "fencing5.webp"],
                ["drywall", "drywall5.webp"],
              ] as const
            ).map(([trade, file]) => {
              const photo = photoByFile(trade, file);
              return (
                <StaggerItem key={file}>
                  <Link
                    href={`/projects/?trade=${trade}`}
                    className="group relative block aspect-[3/4] overflow-hidden rounded-[2px]"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/40" />
                    <span className="absolute bottom-4 left-4 rounded-[2px] bg-ink/85 px-2 py-1 supports-[backdrop-filter]:bg-ink/65 supports-[backdrop-filter]:backdrop-blur-sm text-[11px] font-semibold uppercase tracking-[0.18em] text-parchment">
                      {trade}
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Optional, disabled by default: see README "Crew feedback" */}
      <CrewFeedback />

      {/* CTA band (gradient strip eases paper into ink) */}
      <div aria-hidden className="h-20 bg-gradient-to-b from-paper to-ink-soft md:h-28" />
      <section className="relative overflow-hidden bg-gradient-to-b from-ink-soft to-ink py-20 text-parchment md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(196,137,58,0.18),transparent_65%)]"
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                light
                eyebrow="Ready when you are"
                title="Start with a conversation"
                body="Tell us about the property and what you want done. We will follow up about next steps and, where it makes sense, a site visit."
              />
              <ul className="mt-8 space-y-3 text-sm text-parchment/85">
                <li className="flex gap-3">
                  <span aria-hidden className="text-bronze-light">—</span>
                  Washington-registered contractor, No. {site.registrationNo}
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-bronze-light">—</span>
                  Homeowners, property managers and general contractors welcome
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="text-bronze-light">—</span>
                  Estimates are non-binding until a written contract is signed
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[2px] border border-white/20 bg-ink-mid/60 p-6 supports-[backdrop-filter]:bg-white/[0.07] supports-[backdrop-filter]:backdrop-blur-md sm:p-8 md:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-light">
                  Next step
                </p>
                <p className="mt-4 font-display text-3xl leading-snug text-parchment md:text-4xl">
                  Request an estimate or book a consultation.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact/" variant="primary">
                    Request an estimate
                  </Button>
                  <Button href="/contact/#book" variant="ghost">
                    Book a consultation
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
