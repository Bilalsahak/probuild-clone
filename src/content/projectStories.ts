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
