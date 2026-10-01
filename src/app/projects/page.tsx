import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Container, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PHOTO_NOTE } from "@/content/photos";

export const metadata: Metadata = {
  title: "Project photos",
  description:
    "Job-site photos by trade: siding, fencing, tile, laminate flooring, and drywall.",
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
              Photos from job sites
            </h1>
            <p className="mt-5 max-w-2xl text-parchment/85">
              Filter by trade and select a photo to enlarge it. {PHOTO_NOTE}
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="bg-parchment py-14 md:py-20">
        <Container>
          <ProjectGallery />
        </Container>
      </section>
    </>
  );
}
