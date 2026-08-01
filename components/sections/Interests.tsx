"use client";

import { Code2, Globe, Palette } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { interests } from "@/data/hobbies";

const ICONS = [Code2, Globe, Palette];

export function Interests() {
  const { t } = useLanguage();

  return (
    <section id="interests" className="section-shell">
      <SectionHeading eyebrow={t.interests.eyebrow} title={t.interests.title} />
      <div className="grid gap-4 sm:grid-cols-3">
        {interests.map((interest, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <RevealOnScroll key={interest} delay={i * 0.08}>
              <GlassCard className="flex flex-col items-start gap-4 py-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <Icon size={20} />
                </span>
                <p className="font-display text-lg font-semibold">{interest}</p>
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
