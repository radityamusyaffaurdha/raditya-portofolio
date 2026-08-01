"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { profile } from "@/data/profile";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <RevealOnScroll delay={0.1} className="glass rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-text-muted sm:text-base">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-text" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="glass flex flex-col justify-center gap-6 rounded-3xl p-8">
          <div>
            <p className="eyebrow mb-1">{t.about.roleLabel}</p>
            <p className="font-display text-lg font-semibold">{profile.role}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">{t.about.schoolLabel}</p>
            <p className="font-display text-lg font-semibold">{profile.school}</p>
          </div>
          <div>
            <p className="eyebrow mb-1">{t.about.locationLabel}</p>
            <p className="font-display text-lg font-semibold">{profile.location}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
