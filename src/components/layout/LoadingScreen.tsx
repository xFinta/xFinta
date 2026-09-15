"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config";
import { useLoadingContext } from "@/context/LoadingProvider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function LoadingScreen() {
  const { isLoadingComplete, completeLoading } = useLoadingContext();
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      completeLoading();
      return;
    }

    let frame: number;
    const start = performance.now();
    const durationMs = 1100;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(completeLoading, 150);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {!isLoadingComplete && (
        <motion.div
          className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-ink"
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          <motion.span
            className="font-display text-2xl sm:text-3xl tracking-[0.2em] text-text"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {siteConfig.logoText}
          </motion.span>

          <div className="mt-8 h-px w-48 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.span
            className="mt-4 font-mono text-xs tracking-widest text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress.toString().padStart(3, "0")}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
