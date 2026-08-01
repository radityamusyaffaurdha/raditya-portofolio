"use client";

import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { projects } from "@/data/projects";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={t.projects.description}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.title} delay={i * 0.08}>
            <GlassCard className="flex h-full flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="eyebrow shrink-0 rounded-full border border-glass-border px-2.5 py-1">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-glass-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-[color:var(--accent)]"
                    >
                      <Github size={15} /> {t.projects.code}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-[color:var(--accent)]"
                    >
                      <ExternalLink size={15} /> {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              )}
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
