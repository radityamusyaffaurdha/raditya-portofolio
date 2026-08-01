"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useLanguage } from "@/components/language/LanguageProvider";
import { navItems } from "@/data/social";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function navLabel(href: string, fallback: string) {
    const key = href.replace("#", "") as keyof typeof t.nav;
    return t.nav[key] ?? fallback;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-3 max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-glass-border bg-glass-bg shadow-glass backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight text-text"
          >
            Rad<span className="text-gradient">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
              >
                {navLabel(item.href, item.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border text-text md:hidden"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={mobileOpen}
          navItems={navItems}
          onNavigate={() => setMobileOpen(false)}
        />
      </div>
    </motion.header>
  );
}
