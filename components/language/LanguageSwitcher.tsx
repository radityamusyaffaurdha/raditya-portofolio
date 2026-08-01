"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageProvider";

/**
 * Compact EN / ID toggle for the navbar. Switches instantly — no page
 * reload, since it just flips a React context value.
 */
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center rounded-full border border-glass-border bg-glass-bg p-0.5 text-xs font-semibold"
    >
      {(["en", "id"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className="relative z-10 rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-200"
          style={{ color: language === lang ? "var(--bg)" : "var(--text-muted)" }}
        >
          {language === lang && (
            <motion.span
              layoutId="language-pill"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute inset-0 -z-10 rounded-full bg-[color:var(--accent)]"
            />
          )}
          {lang}
        </button>
      ))}
    </div>
  );
}
