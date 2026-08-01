"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/language/LanguageProvider";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onNavigate: () => void;
}

export function MobileMenu({ isOpen, navItems, onNavigate }: MobileMenuProps) {
  const { t } = useLanguage();

  function navLabel(href: string, fallback: string) {
    const key = href.replace("#", "") as keyof typeof t.nav;
    return t.nav[key] ?? fallback;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="glass overflow-hidden md:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-glass-border hover:text-text"
              >
                {navLabel(item.href, item.label)}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
