"use client";

import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { achievements } from "@/data/achievements";

export function Achievements() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="section-shell">
      <SectionHeading eyebrow={t.achievements.eyebrow} title={t.achievements.title} />
      <div className="grid gap-6 sm:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = (Icons as any)[item.icon] ?? Icons.Award;
          return (
            <RevealOnScroll key={item.title} delay={i * 0.1}>
              <GlassCard className="flex h-full flex-col items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <Icon size={20} />
                </span>
                <p className="font-medium leading-snug">{item.title}</p>
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
