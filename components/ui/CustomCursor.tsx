"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, [data-cursor-hover]";

/**
 * Minimalist monochrome cursor: a small circle that trails the real
 * cursor with a slight spring delay, and gently scales up over
 * interactive elements. Desktop only — disabled on touch devices where
 * there's no persistent pointer.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    function handleMove(e: MouseEvent) {
    setVisible(true);
    
    const target = e.target as HTMLElement;
    setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
}

    function handleLeave() {
      setVisible(false);
    }

    document.documentElement.classList.add("custom-cursor-active");
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full border border-[color:var(--text)] mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: hovering ? 44 : 18,
        height: hovering ? 44 : 18,
        opacity: visible ? 1 : 0,
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
      }}
    />
  );
}
