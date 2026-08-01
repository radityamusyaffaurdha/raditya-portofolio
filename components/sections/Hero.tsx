"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { IDCard } from "@/components/ui/IDCard";
import { useLanguage } from "@/components/language/LanguageProvider";
import { profile } from "@/data/profile";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center gap-14 pt-32 pb-20"
    >
      <div className="section-shell flex flex-col items-center gap-14 !py-0 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex max-w-xl flex-col items-center gap-6 text-center lg:items-start lg:text-left"
        >
          <span className="eyebrow rounded-full border border-glass-border px-3 py-1">
            {t.hero.badge}
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {profile.heroGreeting.replace(".", "")}
            <span className="text-gradient">.</span>
          </h1>

          <p className="text-balance text-lg text-text-muted">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--bg)] shadow-glow transition-transform duration-300 hover:scale-[1.03]"
            >
              {t.hero.viewProjects}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-text transition-transform duration-300 hover:scale-[1.03]"
            >
              <Mail size={16} />
              {t.hero.contactMe}
            </a>
          </div>
        </motion.div>

        <IDCard />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">{t.hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-current opacity-40"
        />
      </motion.div>
    </section>
  );
}
