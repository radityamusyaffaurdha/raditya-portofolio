"use client";

import { useLanguage } from "@/components/language/LanguageProvider";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-glass-border">
      <div className="section-shell flex flex-col items-center gap-2 py-8 text-center">
        <p className="font-display text-sm font-semibold">
          Rad<span className="text-gradient">.</span>
        </p>
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
