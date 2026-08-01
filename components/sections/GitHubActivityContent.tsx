"use client";

import { Github, Star, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { formatRelativeDate } from "@/lib/utils";
import type { GitHubRepo } from "@/types";

interface GitHubActivityContentProps {
  repos: GitHubRepo[] | null;
  username: string;
}

export function GitHubActivityContent({ repos, username }: GitHubActivityContentProps) {
  const { t } = useLanguage();

  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow={t.github.eyebrow}
        title={t.github.title}
        description={`${t.github.description} (@${username})`}
      />

      {repos && repos.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <RevealOnScroll key={repo.name} delay={i * 0.06}>
              <GlassCard className="flex h-full flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {repo.name}
                  </h3>
                  <Github size={16} className="mt-1 shrink-0 text-text-muted" />
                </div>
                <p className="flex-1 text-sm leading-relaxed text-text-muted">
                  {repo.description ?? "No description provided."}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stars}
                  </span>
                  <span>{formatRelativeDate(repo.updatedAt)}</span>
                </div>
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-[color:var(--accent)]"
                >
                  {t.github.viewRepository} <ExternalLink size={13} />
                </a>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <RevealOnScroll>
          <GlassCard className="flex flex-col items-center gap-4 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
              <Github size={22} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">
                {t.github.fallbackTitle}
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-text-muted">
                {t.github.fallbackDescription}
              </p>
            </div>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-glass-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              {t.github.visitProfile} <ExternalLink size={14} />
            </a>
          </GlassCard>
        </RevealOnScroll>
      )}
    </section>
  );
}
