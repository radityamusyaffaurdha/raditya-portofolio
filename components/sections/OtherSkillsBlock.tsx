"use client";

import * as Icons from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/components/language/LanguageProvider";
import { otherSkills } from "@/data/otherSkills";

export function OtherSkillsBlock() {
  const { t } = useLanguage();

  return (
    <div>
      <RevealOnScroll className="mb-6">
        <h3 className="font-display text-xl font-semibold">{t.skills.otherTitle}</h3>
      </RevealOnScroll>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {otherSkills.map((skill, i) => {
          const Icon = (Icons as any)[skill.icon] ?? Icons.Sparkles;
          return (
            <RevealOnScroll key={skill.label} delay={i * 0.06}>
              <GlassCard className="flex h-full flex-col items-center gap-3 py-7 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <Icon size={20} />
                </span>
                <p className="text-sm font-medium">{skill.label}</p>
              </GlassCard>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
