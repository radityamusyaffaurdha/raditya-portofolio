"use client";

import { Aurora } from "@/components/background/Aurora";
import { Wave } from "@/components/background/Wave";
import { FloatingGlass } from "@/components/background/FloatingGlass";
import { MouseGlow } from "@/components/background/MouseGlow";

export function BackgroundLayers() {
  return (
    <>
      <Aurora />
      <Wave />
      <FloatingGlass />
      <MouseGlow />
    </>
  );
}