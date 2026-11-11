/**
 * Featured project stories shown on /projects/. Only real Seattle MasterFix
 * jobs with owner-approved photos. No client names, street addresses, or
 * invented scopes. "after" slots stay empty until finished photos land.
 */
import { photoByFile, type Photo } from "@/content/photos";

export type ProjectStoryPair = {
  id: string;
  label: string;
  photo: Photo;
};

export type ProjectStoryShot = {
  id: string;
  label: string;
  photo: Photo;
};

export type ProjectStory = {
  id: string;
  title: string;
  tradeLabel: string;
  summary: string;
  /** Shared caption Bill approved for this set. */
  caption: string;
  pairs: ProjectStoryPair[];
  processShots: ProjectStoryShot[];
  /** True until finished after/ photos are added. */
  awaitingAfter: boolean;
};

const CAPTION = "Seattle-area commercial ceiling & drywall";

export const projectStories: ProjectStory[] = [
  {
    id: "seattle-commercial-ceiling-drywall",
    title: "Commercial ceiling and drywall",
    tradeLabel: "Drywall",
    summary:
      "Open ceiling cavities closed in with new board, then taped and mudded. Photos show before and during only — finished shots will be added when the job is done. Client unnamed.",
    caption: CAPTION,
    pairs: [
      {
        id: "room-a",
        label: "Before → during",
        photo: photoByFile("drywall", "ceiling-room2-before-during.webp"),
      },
      {
        id: "room-b",
        label: "Before → during",
        photo: photoByFile("drywall", "ceiling-room3-before-during.webp"),
      },
      {
        id: "room-c",
        label: "Before → during",
        photo: photoByFile("drywall", "ceiling-room5-before-during.webp"),
      },
    ],
    processShots: [
      {
        id: "open-hallway",
        label: "Open ceiling",
        photo: photoByFile("drywall", "ceiling-before-hallway.webp"),
      },
      {
        id: "hang",
        label: "Hang",
        photo: photoByFile("drywall", "ceiling-during-hang.webp"),
      },
      {
        id: "tape",
        label: "Tape and mud",
        photo: photoByFile("drywall", "ceiling-during-tape.webp"),
      },
      {
        id: "protect",
        label: "Protect finishes",
        photo: photoByFile("drywall", "ceiling-during-protect.webp"),
      },
    ],
    awaitingAfter: true,
  },
];

function rotate<T>(items: T[], start: number, count: number): T[] {
  if (!items.length || count <= 0) return [];
  return Array.from({ length: Math.min(count, items.length) }, (_, i) => items[(start + i) % items.length]);
}

/**
 * A varied slice of the Seattle-area commercial ceiling & drywall story for
 * location pages. Captions stay "Seattle-area" — never a job in that town.
 */
export function recentSeattleWorkFor(slug: string, pageIndex: number): ProjectStory {
  const story = projectStories[0];
  const pairStart = pageIndex % story.pairs.length;
  const processStart = pageIndex % story.processShots.length;
  const processCount = 2 + (pageIndex % 2);
  // After the 12 unique 2-pair combinations, show all three before/during
  // pairs so later pages are not repeats of earlier ones.
  const pairCount = pageIndex < story.pairs.length * story.processShots.length ? 2 : story.pairs.length;
  return {
    ...story,
    id: `${story.id}-${slug}`,
    pairs: rotate(story.pairs, pairStart, pairCount),
    processShots: rotate(story.processShots, processStart, processCount),
  };
}
