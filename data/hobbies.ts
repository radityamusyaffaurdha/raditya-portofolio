import type { HobbyItem, FeaturedHobby } from "@/types";

export const hobbies: HobbyItem[] = [
  { label: "Mengaji", icon: "BookOpen" },
  { label: "Listening Music", icon: "Music" },
  { label: "Designing", icon: "PenTool" },
  { label: "Coding", icon: "Code2" },
  { label: "Learning New Things", icon: "Sparkles" },
  { label: "Watching Formula 1", icon: "Flag" },
  { label: "Listening to Podcasts", icon: "Podcast" },
];

export const interests = ["Programming", "Web Development", "UI/UX Design"];

/**
 * Larger, dedicated hobby cards shown below the main hobbies grid —
 * for hobbies personal enough to deserve their own spotlight.
 */
export const featuredHobbies: FeaturedHobby[] = [
  {
    title: "Formula 1 Enthusiast",
    description:
      "I enjoy watching Formula 1 races and following the latest developments in the sport.",
    icon: "Flag",
    meta: "Favorite Driver: George Russell",
  },
  {
    title: "Podcast Listener",
    description:
      "I enjoy listening to educational, technology, productivity, and self-development podcasts.",
    icon: "Podcast",
  },
];
