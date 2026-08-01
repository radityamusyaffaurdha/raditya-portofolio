"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/components/language/LanguageProvider";
import { socialLinks } from "@/data/social";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        align="center"
      />
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
        {socialLinks.map((link, i) => {
          const Icon = (Icons as any)[link.icon] ?? Icons.Link;
          return (
            <RevealOnScroll key={link.label} delay={i * 0.06}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="glass group flex flex-col items-center gap-3 rounded-2xl py-8 text-center transition-shadow duration-300 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <p className="text-sm font-medium">{link.label}</p>
              </motion.a>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
