"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { dreamUniversity } from "@/data/university";
import type { GalleryImage } from "@/types";

interface BackdropImage extends GalleryImage {
  available: boolean;
}

interface DreamUniversityContentProps {
  images: BackdropImage[];
}

/**
 * Layout positions for the collage — deliberately offset and rotated so
 * overlapping images (or their placeholder equivalents) read as one
 * cohesive backdrop rather than a grid.
 */
const COLLAGE_LAYOUT = [
  { top: "10%", left: "0%", width: "33%", rotate: 0 },
  { top: "10%", left: "33.5%", width: "33%", rotate: 0 },
  { top: "10%", left: "67%", width: "33%", rotate: 0 },
];

export function DreamUniversityContent({ images }: DreamUniversityContentProps) {
  const { t } = useLanguage();

  return (
    <section id="dream-university" className="section-shell">
      <RevealOnScroll>
        <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20">
          {/* Blurred UGM image / placeholder collage backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80">
            {images.map((image, i) => {
              const layout = COLLAGE_LAYOUT[i % COLLAGE_LAYOUT.length];
              return (
                <motion.div
                  key={image.src}
                  className="absolute aspect-[4/3] overflow-hidden rounded-2xl"
                  style={{ ...layout, filter: "none" }}
                  animate={{ y: [0, i % 2 === 0 ? -14 : 14, 0] }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {image.available ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 60vw, 30vw"
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background:
                          i % 2 === 0
                            ? "radial-gradient(circle at 30% 30%, var(--aurora-2), transparent 70%), radial-gradient(circle at 70% 70%, var(--aurora-1), transparent 65%)"
                            : "radial-gradient(circle at 70% 40%, var(--aurora-3), transparent 70%), radial-gradient(circle at 30% 70%, var(--aurora-1), transparent 65%)",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
            {/* Glass wash so the backdrop stays subtle behind the content */}
            <div className="absolute inset-0 bg-[color:var(--bg)] opacity-70" />
          </div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, var(--aurora-2), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
              <GraduationCap size={26} />
            </span>
            <p className="eyebrow">{t.university.eyebrow}</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {dreamUniversity.name}
            </h2>
            <p className="text-text-muted">
              {t.university.targetIntake} {dreamUniversity.targetYear} &middot;{" "}
              {dreamUniversity.major}
            </p>
            <p className="font-display text-xl italic text-gradient">
              &ldquo;{dreamUniversity.quote}&rdquo;
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
