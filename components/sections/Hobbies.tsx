"use client";

import * as Icons from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { hobbies, featuredHobbies } from "@/data/hobbies";

export function Hobbies() {
  const { t } = useLanguage();

  return (
    <section id="hobbies" className="section-shell">
      <SectionHeading eyebrow={t.hobbies.eyebrow} title={t.hobbies.title} />

      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {hobbies.map((hobby, i) => {
          const Icon = (Icons as any)[hobby.icon] ?? Icons.Sparkles;
          return (
            <RevealOnScroll key={hobby.label} delay={i * 0.06}>
              <GlassCard className="flex h-full flex-col items-center gap-3 py-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <Icon size={22} />
                </span>
                <p className="text-sm font-medium">{hobby.label}</p>
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {featuredHobbies.map((item, i) => {
          const Icon = (Icons as any)[item.icon] ?? Icons.Sparkles;
          return (
            <RevealOnScroll key={item.title} delay={i * 0.1}>
              <GlassCard className="flex h-full flex-col gap-4 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
                {item.meta && (
                  <span className="eyebrow w-fit rounded-full border border-glass-border px-3 py-1">
                    {item.meta}
                  </span>
                )}
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
