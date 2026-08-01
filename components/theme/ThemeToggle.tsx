"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isAurora = theme === "aurora-navy";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isAurora ? "Monochrome Elegance" : "Aurora Navy"} theme`}
      aria-pressed={!isAurora}
      className="relative flex h-9 w-16 items-center rounded-full border border-glass-border bg-glass-bg px-1 transition-colors duration-300"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--bg)] shadow-glow"
        style={{ marginLeft: isAurora ? 0 : "auto" }}
      >
        {isAurora ? <Moon size={14} strokeWidth={2.5} /> : <Sun size={14} strokeWidth={2.5} />}
      </motion.span>
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
