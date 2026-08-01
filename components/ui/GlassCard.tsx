"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -8, scale: 1.015, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }
          : undefined
      }
      className={cn(
        "glass rounded-2xl p-6 transition-shadow duration-300",
        hover && "hover:shadow-glow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
