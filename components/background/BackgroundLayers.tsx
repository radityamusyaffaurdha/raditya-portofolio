"use client";

import { Aurora } from "@/components/background/Aurora";
import { Wave } from "@/components/background/Wave";
import { Particles } from "@/components/background/Particles";
import { FloatingGlass } from "@/components/background/FloatingGlass";
import { MouseGlow } from "@/components/background/MouseGlow";

/**
 * Combines all ambient background layers behind the page content.
 * Rendered once in the root layout so every section shares the same
 * continuous atmosphere as the user scrolls.
 */
export function BackgroundLayers() {
  return (
    <div className="fixed inset-0 -z-30 bg-bg transition-colors duration-500">
      <Aurora />
      <Wave />
      <Particles />
      <FloatingGlass />
      <MouseGlow />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
    </div>
  );
}
