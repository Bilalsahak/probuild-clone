import Image from "next/image";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { FencingNotice } from "@/components/legal/FencingNotice";
import { OlderHomeNotice } from "@/components/legal/OlderHomeNotice";
import { PermitNotice } from "@/components/legal/PermitNotice";
import { site } from "@/config/site";
import { PHOTO_NOTE, heroPhoto, photosFor } from "@/content/photos";
import type { Service } from "@/content/services";

export function ServicePageView({ service }: { service: Service }) {
  const hero = heroPhoto(service.slug, service.heroFile);
  const gallery = photosFor(service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-ink to-ink-soft text-parchment">
        <Container className="relative grid min-h-[68dvh] items-end gap-10 pb-14 pt-32 lg:grid-cols-12 lg:items-center lg:pb-20">
          <Reveal className="lg:col-span-7">
            <Eyebrow light>Service · {service.shortName}</Eyebrow>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-parchment/85">{service.headline}</p>
          </Reveal>
          {hero ? (
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-h-[60dvh] w-full max-w-md overflow-hidden rounded-[2px] ring-1 ring-white/15 lg:max-w-none">
                <div className="ken-burns absolute inset-[-3%] h-[106%] w-[106%]">
                  <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-gradient-to-b from-paper to-parchment py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">{service.intro}</p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2px] border border-ink/10 bg-parchment p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-deep">
                  Typical timeline
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{service.timeline}</p>
              </div>
              <div className="rounded-[2px] border border-ink/10 bg-parchment p-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-deep">
                  Materials
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-charcoal/85">
                  {service.materials.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span aria-hidden className="text-bronze-deep">·</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 space-y-5">
              {service.notices.includes("older-home") ? <OlderHomeNotice /> : null}
              {service.notices.includes("fencing-811") ? <FencingNotice /> : null}
              {service.notices.includes("permits") ? <PermitNotice /> : null}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside className="h-full rounded-[2px] border border-ink/10 bg-ink-soft p-7 text-parchment md:p-8">
              <h2 className="font-display text-2xl">Cost drivers</h2>
              <p className="mt-2 text-sm text-parchment/80">
                What typically moves the price. We talk through these early, before work starts.
              </p>
              <ul className="mt-6">
                {service.costDrivers.map((c) => (
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

      <section className="bg-gradient-to-b from-parchment to-paper py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Avoid these"
              title="Common mistakes on this trade"
              body="Things worth watching for on any job, ours or someone else's."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {service.mistakes.map((m, i) => (
              <StaggerItem key={m.title}>
                <article className="h-full rounded-[2px] border border-ink/10 bg-paper p-7">
                  <span className="font-display text-3xl text-bronze-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-ink">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{m.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-paper to-parchment-deep py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="On site" title="How we typically work" />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <li key={p.title} className="relative h-full overflow-hidden rounded-[2px] bg-parchment p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-deep">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/85">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-parchment-deep py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Photos"
              title={
                service.slug === "paint"
                  ? "Project photos"
                  : `${service.shortName}: photos from job sites`
              }
              body={
                gallery.length > 0
                  ? service.slug === "paint"
                    ? `${PHOTO_NOTE} These are general project photos and are not all paint work.`
                    : PHOTO_NOTE
                  : undefined
              }
            />
          </Reveal>
          <div className="mt-10">
            {gallery.length > 0 ? (
              <ProjectGallery images={gallery} showFilters={false} />
            ) : (
              <p className="max-w-2xl text-charcoal/85">
                We have not published photos for this trade yet. Ask us about recent paint work
                when you request an estimate.
              </p>
            )}
          </div>
        </Container>
      </section>

      <div aria-hidden className="h-16 bg-gradient-to-b from-parchment-deep to-ink-soft md:h-24" />
      <section className="bg-ink-soft py-16 text-parchment md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">
              Thinking about {service.shortName.toLowerCase()}?
            </h2>
            <p className="mt-3 text-parchment/80">
              Call {site.phone} or send an estimate request.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={site.phoneHref} variant="ghost">
              Call now
            </Button>
            <Button href="/contact/" variant="primary">
              Request an estimate
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
