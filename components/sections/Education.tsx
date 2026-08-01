"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { education } from "@/data/education";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />
      <div className="relative flex flex-col gap-10 pl-8 sm:pl-10">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-[color:var(--aurora-2)] via-[color:var(--glass-border)] to-transparent sm:left-[9px]" />
        {education.map((item, i) => (
          <RevealOnScroll key={item.school} delay={i * 0.1} className="relative">
            <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[color:var(--accent)] bg-bg sm:-left-10">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </span>
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs tracking-wide text-[color:var(--accent)]">
                  {item.period}
                </p>
                {item.current && (
                  <span className="relative flex items-center gap-1.5 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#22c55e] shadow-[0_0_12px_-2px_#22c55e]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                    </span>
                    {t.education.currentlyStudying}
                  </span>
                )}
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold">
                {item.school}
              </h3>
              {item.program && (
                <p className="mt-1 text-sm text-text-muted">
                  {t.education.programLabel}: {item.program}
                </p>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
