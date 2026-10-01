import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { photoByFile } from "@/content/photos";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Siding, fencing, tile, laminate flooring, drywall, and paint in Seattle and King County, WA.",
  alternates: { canonical: "/services/" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-ink pb-20 pt-32 text-parchment md:pb-28 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Services</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Six trades.
              <br />
              One crew.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-parchment/85">
              Exterior work that keeps the weather out and interior finishes that hold up to daily
              life, for homes and light-commercial spaces in Seattle and King County.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Pick a trade" title="Explore by trade" />
          </Reveal>
          <Stagger className="mt-12 space-y-5" stagger={0.08}>
            {services.map((s, idx) => {
              const photo = s.heroFile ? photoByFile(s.slug, s.heroFile) : undefined;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group grid overflow-hidden rounded-[2px] bg-paper ring-1 ring-ink/10 transition hover:ring-ink/30 md:grid-cols-5"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink md:col-span-2 md:aspect-auto md:min-h-[240px]">
                      {photo ? (
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width:768px) 100vw, 40vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <span aria-hidden className="absolute inset-0 flex items-end bg-gradient-to-br from-ink-mid to-ink-soft p-5 font-display text-6xl text-parchment/15">
                          Paint
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col justify-center p-7 md:col-span-3 md:p-11">
                      <span aria-hidden className="font-display text-3xl text-bronze-deep">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-2 font-display text-2xl text-ink md:text-4xl">{s.name}</h2>
                      <p className="mt-3 max-w-xl text-charcoal/85">{s.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition group-hover:gap-3">
                        Open {s.shortName.toLowerCase()} page <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
