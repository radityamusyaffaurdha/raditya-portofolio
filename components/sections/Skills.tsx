"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgrammingSkillsBlock } from "@/components/sections/ProgrammingSkillsBlock";
import { LanguageSkillsBlock } from "@/components/sections/LanguageSkillsBlock";
import { OtherSkillsBlock } from "@/components/sections/OtherSkillsBlock";
import { useLanguage } from "@/components/language/LanguageProvider";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />
      <div className="flex flex-col gap-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProgrammingSkillsBlock />
          <LanguageSkillsBlock />
        </div>
        <OtherSkillsBlock />
      </div>
    </section>
  );
}
