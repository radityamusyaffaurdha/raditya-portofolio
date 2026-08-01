"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Theme } from "@/types";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("monochrome");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "aurora-navy" || stored === "monochrome") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "aurora-navy" ? "monochrome" : "aurora-navy"));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

/**
 * Inline script injected before hydration so the correct theme attribute
 * is applied on the very first paint — this is what prevents the
 * light/dark flash on load.
 */
export const themeBootScript = `
(function() {
  try {
    var stored = window.localStorage.getItem('${STORAGE_KEY}');
    var theme = (stored === 'aurora-navy' || stored === 'monochrome') ? stored : 'monochrome';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('theme-ready');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'monochrome');
    document.documentElement.classList.add('theme-ready');
  }
})();
`;
