"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft radial glow that trails the cursor with smooth spring
 * interpolation. Disabled on touch devices (no persistent cursor).
 */
export function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 90, mass: 0.6 });
  const springY = useSpring(y, { damping: 30, stiffness: 90, mass: 0.6 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[480px] w-[480px] rounded-full opacity-60 blur-[90px] md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, var(--accent-soft), transparent 70%)",
      }}
    />
  );
}
