"use client";

import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={`mb-12 flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="relative inline-block font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -bottom-1.5 left-0 h-[3px] w-2/3 origin-left rounded-full bg-gradient-to-r from-[color:var(--accent)] to-transparent"
        />
      </h2>
      {description && (
        <p className="max-w-2xl text-text-muted">{description}</p>
      )}
    </RevealOnScroll>
  );
}
