"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

/**
 * Single-image preview modal — used for certificate (and any other
 * single-image) previews. Closes on Escape, backdrop click, or the
 * close button; mobile-friendly (tap backdrop to dismiss).
 */
export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const isOpen = src !== null;

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-contain bg-black"
            />
          </motion.div>

          <button
            type="button"
            aria-label="Close preview"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
