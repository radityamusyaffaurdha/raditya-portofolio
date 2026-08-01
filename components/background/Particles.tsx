"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

/**
 * Canvas-based floating particle field. Drawn imperatively (not via React
 * state) so there is zero hydration mismatch and animation stays smooth.
 * Particle count scales down on small screens for performance.
 */
export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let animationFrame: number;

    function getParticleColor() {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue("--particle-color").trim() || "148, 197, 255";
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 640 ? 26 : width < 1280 ? 42 : 60;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12 - 0.03,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.008 + 0.004,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const color = getParticleColor();

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const flicker = (Math.sin(p.pulse) + 1) / 2;
        const alpha = p.opacity * (0.5 + flicker * 0.5);

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color}, ${alpha})`;
        ctx!.shadowBlur = p.radius * 4;
        ctx!.shadowColor = `rgba(${color}, ${alpha})`;
        ctx!.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      draw();
      cancelAnimationFrame(animationFrame);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
