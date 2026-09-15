"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";

export function BackToTopButton() {
  const { scrollY } = useScroll();
  const { scrollTo } = useLenisContext();
  const { t } = useLocaleContext();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 800);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => scrollTo(0)}
          aria-label={t.backToTop}
          className="fixed bottom-6 z-[70] flex h-12 w-12 items-center justify-center rounded-full glass text-accent shadow-lg ltr:right-6 rtl:left-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
