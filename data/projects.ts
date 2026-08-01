import type { ProjectItem } from "@/types";

/**
 * Add new projects here — each card is generated automatically from this array.
 * githubUrl / liveUrl / image / status are all optional.
 */
export const projects: ProjectItem[] = [
  {
    title: "Portfolio Website",
    description:
      "This site — a dual-theme, animation-driven portfolio built with Next.js, TypeScript, and Framer Motion to showcase skills, projects, and achievements.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "In Development",
    githubUrl: "https://github.com/radityamusyaffaurdha",
  },
  {
    title: "Python Learning Projects",
    description:
      "A growing collection of small Python programs and exercises used to build core programming fundamentals from the ground up.",
    tags: ["Python", "Fundamentals"],
    status: "Ongoing",
    githubUrl: "https://github.com/radityamusyaffaurdha",
  },
  {
    title: "Competitive Programming Journey",
    description:
      "Problem-solving practice across algorithms and data structures, aimed at sharpening speed and accuracy for competitive programming.",
    tags: ["Algorithms", "C++", "Problem Solving"],
    status: "Active",
    githubUrl: "https://github.com/radityamusyaffaurdha",
  },
  {
    title: "Frontend Practice Projects",
    description:
      "Hands-on practice with HTML, CSS, and UI layout techniques to strengthen frontend fundamentals and design instincts.",
    tags: ["HTML", "CSS", "UI/UX"],
    status: "Ongoing",
  },
  {
    title: "School Software Projects",
    description:
      "Software Engineering coursework projects from SMK Muhammadiyah 1 Yogyakarta, applying classroom concepts to practical builds.",
    tags: ["Rekayasa Perangkat Lunak", "Coursework"],
    status: "Coming Soon",
  },
];
