"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number;
  delay?: number;
}

export function ProgressBar({ label, value, delay = 0 }: ProgressBarProps) {
  return (
    <div className="group">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-medium text-text">{label}</span>
        <span className="font-mono text-sm text-text-muted">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-glass-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[color:var(--aurora-2)] to-[color:var(--accent)] shadow-glow transition-transform duration-300 group-hover:scale-y-125"
        />
      </div>
    </div>
  );
}
