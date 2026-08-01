"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useLanguage } from "@/components/language/LanguageProvider";
import { languageSkills } from "@/data/skills";

export function LanguageSkillsBlock() {
  const { t } = useLanguage();

  return (
    <div>
      <RevealOnScroll className="mb-6">
        <h3 className="font-display text-xl font-semibold">{t.skills.languagesTitle}</h3>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <GlassCard hover={false} className="flex flex-col gap-6">
          {languageSkills.map((skill, i) => (
            <ProgressBar
              key={skill.label}
              label={skill.label}
              value={skill.value}
              delay={i * 0.1}
            />
          ))}
        </GlassCard>
      </RevealOnScroll>
    </div>
  );
}
