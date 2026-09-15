"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { contactBackgroundVideo } from "@/config";
import { useLocaleContext } from "@/context/LocaleProvider";
import { ContactBackgroundVideo } from "./ContactBackgroundVideo";

/**
 * Cinematic band that autoplays a muted, looped background video once this
 * section scrolls into view (see ContactBackgroundVideo). Purely atmospheric
 * — the actual contact form sits on the normal background just below,
 * fully readable and unaffected by the moving video.
 */
export function ContactVideoBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const { t } = useLocaleContext();

  return (
    <div
      ref={bandRef}
      className="relative mb-16 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl sm:min-h-[360px]"
    >
      <ContactBackgroundVideo video={contactBackgroundVideo} containerRef={bandRef} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7 }}
        className="relative z-[5] flex flex-col items-center gap-3 px-6 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-hero-accent">
          {t.contact.videoBandEyebrow}
        </span>
        <h3 className="max-w-xl font-display text-2xl sm:text-3xl text-hero-text">
          {t.contact.videoBandHeading}
        </h3>
      </motion.div>
    </div>
  );
}
