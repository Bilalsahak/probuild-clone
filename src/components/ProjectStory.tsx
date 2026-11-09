import Image from "next/image";
import type { ProjectStory as ProjectStoryType } from "@/content/projectStories";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export function ProjectStoryBlock({ story }: { story: ProjectStoryType }) {
  return (
    <article className="rounded-[2px] border border-ink/10 bg-paper p-6 md:p-8">
      <Reveal>
        <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-bronze-deep">
          Featured · {story.tradeLabel}
        </p>
        <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">{story.title}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal/85">{story.summary}</p>
        <p className="mt-2 text-caption text-charcoal/70">{story.caption}</p>
      </Reveal>

      <div className="mt-8">
        <h4 className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-ink">
          Before / during
        </h4>
        <Stagger className="mt-4 grid gap-5" stagger={0.06}>
          {story.pairs.map((pair) => (
            <StaggerItem key={pair.id}>
              <figure className="overflow-hidden rounded-[2px] bg-parchment ring-1 ring-ink/10">
                <div className="relative aspect-[2000/559] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={pair.photo.src}
                    alt={pair.photo.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 900px"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm text-charcoal/85">
                  <span>{pair.label}</span>
                  <span className="text-caption text-charcoal/65">{story.caption}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-10">
        <h4 className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-ink">
          Process
        </h4>
        <Stagger className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {story.processShots.map((shot) => (
            <StaggerItem key={shot.id}>
              <figure className="h-full overflow-hidden rounded-[2px] bg-parchment ring-1 ring-ink/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={shot.photo.src}
                    alt={shot.photo.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3 text-sm text-charcoal/85">{shot.label}</figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {story.awaitingAfter ? (
        <p className="mt-6 text-caption leading-relaxed text-charcoal/70">
          Finished photos will be added here when the job is done.
        </p>
      ) : null}
    </article>
  );
}
