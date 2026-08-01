"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Signature hero element: a physically-plausible hanging ID card.
 * Three independent motion layers compose together:
 *  1. Drop-in entrance (spring, with a small overshoot/bounce)
 *  2. Continuous pendulum swing around the lanyard clip
 *  3. Mouse-follow 3D tilt on the card face itself
 */
export function IDCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18 });
  const glowX = useTransform(springRotateY, [-10, 10], [0, 100]);
  const glowY = useTransform(springRotateX, [10, -10], [0, 100]);
  const glowBackground = useTransform([glowX, glowY], (latest) => {
    const [gx, gy] = latest as number[];
    return `radial-gradient(circle at ${gx}% ${gy}%, var(--accent-soft), transparent 60%)`;
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 18);
    rotateX.set((0.5 - py) * 14);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ y: -320, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 11, mass: 1, delay: 0.3 }}
      className="relative mx-auto flex w-fit flex-col items-center"
      style={{ perspective: 1200 }}
    >
      {/* Lanyard straps */}
      <div className="relative h-24 w-40 sm:h-28 sm:w-48">
        <span
          className="absolute left-[30%] top-0 h-full w-4 origin-top -rotate-[10deg] rounded-full shadow-md"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, var(--lanyard-1) 0px, var(--lanyard-1) 8px, var(--lanyard-2) 8px, var(--lanyard-2) 16px, var(--lanyard-3) 16px, var(--lanyard-3) 18px), repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 4px)",
          }}
        />
        <span
          className="absolute right-[30%] top-0 h-full w-4 origin-top rotate-[10deg] rounded-full shadow-md"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, var(--lanyard-1) 0px, var(--lanyard-1) 8px, var(--lanyard-2) 8px, var(--lanyard-2) 16px, var(--lanyard-3) 16px, var(--lanyard-3) 18px), repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 4px)",
          }}
        />
      </div>

      {/* Swinging pivot: clip + card — draggable like it's on a real strap */}
      <motion.div
        className="relative flex cursor-grab flex-col items-center active:cursor-grabbing"
        style={{ transformOrigin: "50% 0%", touchAction: "none" }}
        animate={{ rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.35}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 320, bounceDamping: 20 }}
        whileDrag={{ rotate: 0, scale: 1.03 }}
      >
        {/* Metal connector: swivel ring + clip body with a shine highlight */}
        <div className="z-10 -mb-2 flex flex-col items-center">
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#9aa1ad] bg-gradient-to-br from-[#f0f2f5] to-[#a8aeb8] shadow-sm">
            <div className="h-2 w-2 rounded-full bg-[color:var(--bg)]" />
          </div>
          <div className="relative h-3 w-2 bg-gradient-to-b from-[#c7ccd6] to-[#9aa1ad]" />
          <div className="relative h-5 w-9 overflow-hidden rounded-b-lg rounded-t-sm bg-gradient-to-b from-[#e8ebf0] via-[#c7ccd6] to-[#9aa1ad] shadow-sm">
            <div className="absolute inset-y-0 left-1 w-1 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Tilting card face */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
          }}
          className="glass relative w-[260px] overflow-hidden rounded-3xl border border-glass-border p-5 shadow-glow-lg sm:w-[300px]"
        >
          {/* Rim glow that reacts to tilt */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: glowBackground }}
          />

          <div className="relative mb-4 flex justify-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-glass-border shadow-glow sm:h-32 sm:w-32">
              <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover scale-125"
/>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-1 text-center">
            <p className="font-display text-lg font-semibold leading-tight">
              {profile.name}
            </p>
            <span className="eyebrow rounded-full border border-glass-border px-2.5 py-1">
              {profile.role}
            </span>
            <p className="mt-2 text-sm text-text-muted">{profile.school}</p>
            <p className="flex items-center gap-1 text-xs text-text-muted">
              <MapPin size={12} />
              {profile.location}
            </p>
          </div>

          <div className="relative mt-5 flex items-center justify-center gap-[3px] opacity-60">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="bg-[color:var(--text)]"
                style={{
                  width: i % 3 === 0 ? 2 : 1,
                  height: i % 4 === 0 ? 18 : 12,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
