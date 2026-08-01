"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Gamepad2, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import type { GameProject } from "@/types";

interface GameEntry extends GameProject {
  imageAvailable: boolean;
}

/**
 * Elegant gradient placeholder thumbnail — shown whenever a game doesn't
 * have a screenshot on disk yet (checked server-side, see GameProjects.tsx).
 */
function GamePlaceholder({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 animate-aurora-drift opacity-70"
        style={{
          background:
            index % 2 === 0
              ? "radial-gradient(circle at 30% 30%, var(--aurora-2), transparent 65%), radial-gradient(circle at 70% 70%, var(--aurora-1), transparent 60%)"
              : "radial-gradient(circle at 70% 30%, var(--aurora-3), transparent 65%), radial-gradient(circle at 30% 70%, var(--aurora-1), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-[color:var(--bg)] opacity-30" />
      <Gamepad2
        size={36}
        className="relative text-[color:var(--accent)] opacity-90"
      />
    </div>
  );
}

export function GameProjectsContent({ games }: { games: GameEntry[] }) {
  const { t } = useLanguage();

  return (
    <section id="games" className="section-shell">
      <SectionHeading
        eyebrow={t.games.eyebrow}
        title={t.games.title}
        description={t.games.description}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {games.map((game, i) => (
          <RevealOnScroll key={game.title} delay={i * 0.1}>
            <GlassCard className="flex h-full flex-col gap-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-glass-border">
                {game.imageAvailable && game.image ? (
                  <motion.div
                    className="h-full w-full"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                ) : (
                  <GamePlaceholder index={i} />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">
                  {game.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {game.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-glass-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] py-2.5 text-sm font-semibold text-[color:var(--bg)] shadow-glow"
              >
                <Play size={15} /> Play Now
              </motion.a>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
