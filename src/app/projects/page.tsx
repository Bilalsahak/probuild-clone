import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { PHOTO_NOTE } from "@/content/photos";
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
              Photos from job sites below. Case studies with real Seattle jobs — trade, scope,
              duration, location and date — will be added here once Bill supplies them. Nothing
              on this page is a made-up project.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-parchment py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Photos" title="From job sites" />
          </Reveal>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/85">
            Filter by trade and select a photo to enlarge it. These are photos of work by
            members of our crew; they are not labelled as Seattle MasterFix projects, and no
            location or date is claimed for any photo.
          </p>
          <div className="mt-10">
            <ProjectGallery />
          </div>
          {/* The photo-honesty note lives here once, as a small footnote —
              not as a heading body on every gallery section. The case-study
              slots (src/content/caseStudies.ts) stay hidden until Bill
              supplies a real job; they are not shown as empty cards. */}
          <p className="mt-10 max-w-2xl text-caption leading-relaxed text-charcoal/70">
            {PHOTO_NOTE}
          </p>
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
            <Button href="/contact/" variant="dark" className="mt-6">
              Request an estimate
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
