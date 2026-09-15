"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config";
import { SECTION_IDS } from "@/lib/constants";
import { TextReveal } from "@/components/ui/TextReveal";
import { useLocaleContext } from "@/context/LocaleProvider";
import { HeroBackground } from "./HeroBackground";
import { HeroCTAGroup } from "./HeroCTAGroup";

export function Hero() {
  const { t } = useLocaleContext();

  return (
    <section
      id={SECTION_IDS.home}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
      aria-label={t.hero.ariaLabel}
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.3em] text-hero-accent"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {t.hero.eyebrow}
        </motion.span>

        <TextReveal
          as="h1"
          text={siteConfig.brandName}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] hero-gradient-accent"
          delay={0.1}
          wordDelay={0.08}
        />

        <motion.p
          className="text-sm sm:text-base font-medium uppercase tracking-[0.2em] text-hero-text-muted"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {siteConfig.name} — {t.site.role}
        </motion.p>

        <motion.p
          className="max-w-xl text-balance text-base sm:text-lg text-hero-text-muted"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.site.tagline} {t.site.shortBio}
        </motion.p>

        <div className="mt-4">
          <HeroCTAGroup />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
