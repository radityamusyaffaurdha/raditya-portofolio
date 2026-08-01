export type Theme = "aurora-navy" | "monochrome";

export interface NavItem {
  label: string;
  href: string;
}

export interface HobbyItem {
  label: string;
  icon: string;
}

export interface FeaturedHobby {
  title: string;
  description: string;
  icon: string;
  meta?: string;
}

export interface SkillItem {
  label: string;
  value: number;
}

export interface OtherSkillItem {
  label: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface GameProject {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface EducationItem {
  school: string;
  period: string;
  program?: string;
  current?: boolean;
}

export interface AchievementItem {
  title: string;
  icon: string;
}

export interface CertificateItem {
  title: string;
  year: string;
  verifyUrl: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  htmlUrl: string;
  stars: number;
  language: string | null;
  updatedAt: string;
}
