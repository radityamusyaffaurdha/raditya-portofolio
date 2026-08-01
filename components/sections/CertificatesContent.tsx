"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { useLanguage } from "@/components/language/LanguageProvider";
import type { CertificateItem } from "@/types";

interface CertEntry extends CertificateItem {
  imageAvailable: boolean;
}

export function CertificatesContent({ certificates }: { certificates: CertEntry[] }) {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useLanguage();

  return (
    <section id="certificates" className="section-shell">
      <SectionHeading
        eyebrow={t.certificates.eyebrow}
        title={t.certificates.title}
        description={t.certificates.description}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <RevealOnScroll key={cert.verifyUrl} delay={i * 0.08}>
            <GlassCard className="flex h-full flex-col gap-4">
              {cert.imageAvailable && cert.image ? (
                <motion.button
                  type="button"
                  onClick={() => setPreview({ src: cert.image!, alt: cert.title })}
                  whileHover={{ scale: 1.02 }}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-glass-border"
                  aria-label={`Open ${cert.title} certificate preview`}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                    <ZoomIn className="text-white" size={22} />
                  </span>
                </motion.button>
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <BadgeCheck size={20} />
                </span>
              )}

              <div className="flex-1">
                <h3 className="font-display text-base font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-text-muted">{cert.year}</p>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-full border border-glass-border py-2.5 text-sm font-medium transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                {t.certificates.verify} <ExternalLink size={14} />
              </a>
            </GlassCard>
          </RevealOnScroll>
        ))}
      </div>

      <ImageLightbox
        src={preview?.src ?? null}
        alt={preview?.alt ?? ""}
        onClose={() => setPreview(null)}
      />
    </section>
  );
}
