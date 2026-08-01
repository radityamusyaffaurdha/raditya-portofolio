"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Pure black-and-white greeting montage — deliberately independent of
 * the site's EN/ID language switcher, since cycling through many
 * languages is the whole point of this screen.
 */
const GREETINGS = [
  "Halo",
  "Hello",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Bonjour",
  "Hola",
  "مرحبا",
  "Привет",
  "Guten Tag",
];

const SESSION_KEY = "portfolio-loaded";
const TOTAL_DURATION = 6000; // exactly 6 seconds, per spec
const STEP_DURATION = TOTAL_DURATION / GREETINGS.length;

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const alreadyLoaded = window.sessionStorage.getItem(SESSION_KEY);
    if (alreadyLoaded) {
      setShouldRender(false);
      return;
    }

    setShouldRender(true);
    setVisible(true);

    const interval = window.setInterval(() => {
      setGreetingIndex((prev) => {
        if (prev >= GREETINGS.length - 1) {
          window.clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, STEP_DURATION);

    const timeout = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, "true");
      setVisible(false);
    }, TOTAL_DURATION);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={greetingIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl"
            >
              {GREETINGS[greetingIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
