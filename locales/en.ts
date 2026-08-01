import type { Translations } from "./types";

/**
 * English (US) — default language. These strings mirror what's already
 * hardcoded across the site's components, moved here so they can be
 * swapped at runtime. Personal data (names, project details, certificate
 * info, etc.) stays in /data — this file only covers UI chrome and the
 * two long-form content blocks (hero tagline, about paragraphs) that
 * needed a full alternate-language version.
 */
export const en: Translations = {
  common: {
    languageLabel: "Language",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    certificates: "Certificates",
    contact: "Contact",
  },
  hero: {
    badge: "Available for learning & collaboration",
    tagline:
      "A student developer passionate about software engineering, programming, and continuous learning.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    scroll: "Scroll",
  },
  about: {
    eyebrow: "Get to know me",
    title: "About Me",
    paragraphs: [
      "Hi, I'm Raditya Musyaffa Urdha — a Grade 11 student in the Software Engineering program at SMK Muhammadiyah 1 Yogyakarta with a strong interest in technology, programming, and software development.",
      "I'm currently learning Python, HTML, CSS, and basic C++, along with core algorithm concepts to sharpen my problem-solving skills.",
      "So far, alhamdulillah, I've memorized 8 juz of the Qur'an — Juz 30, 29, 28, 27, 26, 25, 24, and Juz 1.",
      "Outside of technology, I enjoy reciting the Qur'an, listening to music, watching Formula 1 (George Russell is my favorite driver), designing, coding, listening to podcasts, and always learning new things.",
    ],
    roleLabel: "Role",
    schoolLabel: "School",
    locationLabel: "Location",
  },
  hobbies: {
    eyebrow: "Beyond the screen",
    title: "Hobbies",
  },
  interests: {
    eyebrow: "What drives me",
    title: "Interests",
  },
  skills: {
    eyebrow: "What I bring",
    title: "Skills",
    description: "A snapshot of where I'm at right now — always growing.",
    programmingTitle: "Programming Skills",
    languagesTitle: "Languages",
    otherTitle: "Other Skills",
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects",
    description:
      "A few things I've built while learning — more are added as I go.",
    code: "Code",
    liveDemo: "Live Demo",
  },
  games: {
    eyebrow: "Built for fun",
    title: "Game Projects",
    description:
      "Small browser games made in Construct 3 — a playful side of the same problem-solving mindset.",
    playNow: "Play Now",
  },
  github: {
    eyebrow: "Recent activity",
    title: "GitHub",
    description: "Live from GitHub — recently updated public repositories.",
    viewRepository: "View Repository",
    fallbackTitle: "GitHub showcase",
    fallbackDescription:
      "Repositories couldn't be loaded right now — this section connects automatically to the public GitHub API and will populate as soon as it's reachable.",
    visitProfile: "Visit GitHub Profile",
  },
  education: {
    eyebrow: "The path so far",
    title: "Education Timeline",
    currentlyStudying: "Currently Studying",
    programLabel: "Program",
  },
  achievements: {
    eyebrow: "Milestones",
    title: "Achievements",
  },
  certificates: {
    eyebrow: "Verified credentials",
    title: "Certificates",
    description: "Each certificate links to its official verification page.",
    verify: "Verify Certificate",
  },
  university: {
    eyebrow: "Dream University",
    targetIntake: "Target intake",
  },
  contact: {
    eyebrow: "Let's connect",
    title: "Contact",
    description:
      "Feel free to reach out — I'm always open to learning, feedback, and new connections.",
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript & Framer Motion.",
  },
};
