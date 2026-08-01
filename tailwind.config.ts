import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-elevated": "var(--bg-elevated)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        aurora1: "var(--aurora-1)",
        aurora2: "var(--aurora-2)",
        aurora3: "var(--aurora-3)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "aurora-drift": "aurora-drift 22s ease-in-out infinite",
        "aurora-drift-slow": "aurora-drift 34s ease-in-out infinite reverse",
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 10s ease-in-out infinite",
        swing: "swing 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate(-5%, -5%) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(5%, 8%) rotate(8deg) scale(1.08)" },
          "66%": { transform: "translate(-8%, 4%) rotate(-6deg) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 40px -8px var(--accent-soft)",
        "glow-lg": "0 0 80px -12px var(--accent-soft)",
        glass: "0 8px 32px rgba(0,0,0,0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
