import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { PHOTO_NOTE } from "@/content/photos";
import { caseStudies } from "@/content/caseStudies";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and job-site photos from Seattle MasterFix — siding, fencing, tile, laminate flooring, drywall and paint in Seattle and King County.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 text-parchment md:pb-20 md:pt-40">
        <Container>
          <Reveal>
            <Eyebrow light>Projects</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Case studies and job-site photos
            </h1>
            <p className="mt-5 max-w-2xl text-parchment/85">
              Each case study will show the trade, the scope, how long the work took, and where
              and when it was done. The first three are ready to be filled in with real Seattle
              jobs.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-14 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Case studies"
              title="Real jobs, with the details that matter"
              body="No job is listed here until Bill adds it with its real trade, scope, duration, location and date. Nothing on this page is a made-up project."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article
                key={c.id}
                className="flex h-full flex-col rounded-[2px] border border-dashed border-ink/30 bg-parchment p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-bronze-deep">
                  {c.trade}
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink">{c.title}</h2>
                <dl className="mt-5 space-y-3 text-sm text-charcoal/85">
                  <div>
                    <dt className="font-semibold text-ink">Scope</dt>
                    <dd>{c.scope}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Duration</dt>
                    <dd>{c.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Location and date</dt>
                    <dd>{c.locationAndDate}</dd>
                  </div>
                </dl>
                <p className="mt-auto pt-6 text-xs leading-relaxed text-charcoal/70">
                  Placeholder — a real job, with before and after photos, will replace this card
                  once Bill supplies it.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-parchment py-14 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Photos" title="From job sites" body={PHOTO_NOTE} />
          </Reveal>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/80">
            Filter by trade and select a photo to enlarge it. These are photos of work by
            members of our crew; they are not labelled as Seattle MasterFix projects, and no
            location or date is claimed for any photo.
          </p>
          <div className="mt-10">
            <ProjectGallery />
          </div>
          <Reveal className="mt-12">
            <p className="text-charcoal/85">
              Have a project in mind? Call{" "}
              <a href={site.phoneHref} className="font-semibold text-ink underline">
                {site.phone}
              </a>{" "}
              or{" "}
              <Link href="/contact/" className="font-semibold text-ink underline">
                request an estimate
              </Link>
              .
            </p>
            <Button href="/contact/" variant="primary" className="mt-6 !bg-ink !text-parchment">
              Request an estimate
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
