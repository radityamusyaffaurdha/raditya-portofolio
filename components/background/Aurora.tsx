"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * Layered, infinitely-animating blurred gradient blobs plus a couple of
 * slow-rotating abstract polygon shapes (mesh-gradient feel). Blend mode
 * and opacity for both are handled per-theme in globals.css via the
 * .aurora-blob / .aurora-shape classes — screen (glow) on the dark
 * theme, multiply (soft ink) on the light theme.
 * Moves slower than page content on scroll (parallax depth cue).
 */
export function Aurora() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      <div
        className="aurora-blob absolute left-[-10%] top-[-15%] h-[60vw] w-[60vw] max-h-[720px] max-w-[720px] animate-aurora-drift rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--aurora-2), transparent 65%)",
        }}
      />
      <div
        className="aurora-blob absolute right-[-15%] top-[10%] h-[50vw] w-[50vw] max-h-[620px] max-w-[620px] animate-aurora-drift-slow rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, var(--aurora-3), transparent 65%)",
        }}
      />
      <div
        className="aurora-blob absolute bottom-[-20%] left-[20%] h-[55vw] w-[55vw] max-h-[680px] max-w-[680px] animate-aurora-drift rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--aurora-1), transparent 70%)",
          animationDelay: "-6s",
        }}
      />

      {/* Abstract rotating polygon shapes — adds mesh-gradient depth,
          most noticeable (and needed) on the monochrome theme */}
      <motion.div
        className="aurora-shape absolute left-[8%] top-[35%] h-[38vw] w-[38vw] max-h-[440px] max-w-[440px] blur-[90px]"
        style={{
          background:
            "conic-gradient(from 90deg, var(--aurora-1), var(--aurora-2), var(--aurora-3), var(--aurora-1))",
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 70% 100%, 20% 90%, 0% 45%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="aurora-shape absolute bottom-[5%] right-[10%] h-[34vw] w-[34vw] max-h-[400px] max-w-[400px] blur-[80px]"
        style={{
          background:
            "conic-gradient(from 200deg, var(--aurora-3), var(--aurora-1), var(--aurora-2), var(--aurora-3))",
          clipPath: "polygon(30% 0%, 100% 15%, 85% 75%, 45% 100%, 0% 60%)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
