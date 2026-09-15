"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLightbox } from "@/context/LightboxContext";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useLocaleContext } from "@/context/LocaleProvider";
import { LightboxImage } from "./LightboxImage";
import { LightboxControls } from "./LightboxControls";
import { LightboxInfoPanel } from "./LightboxInfoPanel";

export function Lightbox() {
  const { isOpen, items, currentIndex, direction, close, next, prev } = useLightbox();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, dir } = useLocaleContext();
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    containerRef.current?.focus();

    // Arrow keys follow the same mirrored reading direction as the
    // prev/next buttons (see LightboxControls) — physical Right advances
    // in LTR but goes back in RTL, and vice versa.
    const isRtl = dir === "rtl";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") (isRtl ? prev : next)();
      if (event.key === "ArrowLeft") (isRtl ? next : prev)();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close, next, prev, dir]);

  if (typeof document === "undefined") return null;

  const currentImage = items[currentIndex];

  return createPortal(
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          ref={containerRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={t.lightbox.ariaLabel(currentImage.title)}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 bg-ink/97 backdrop-blur-lg px-4 py-8 outline-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <LightboxControls
            onClose={close}
            onPrev={prev}
            onNext={next}
            currentIndex={currentIndex}
            total={items.length}
          />

          <div className="relative flex w-full flex-1 items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <LightboxImage
                key={currentImage.id}
                image={currentImage}
                direction={direction}
                onNext={next}
                onPrev={prev}
              />
            </AnimatePresence>
          </div>

          <LightboxInfoPanel image={currentImage} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
