"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config";
import { SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/constants";
import { useLocaleContext } from "@/context/LocaleProvider";
import { AboutPortrait } from "./AboutPortrait";
import { StatsCounter } from "./StatsCounter";
// import { ClientLogoMarquee } from "./ClientLogoMarquee";

export function AboutSection() {
  const { t } = useLocaleContext();

  return (
    <section
      id={SECTION_IDS.about}
      className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
      aria-label={t.about.ariaLabel}
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <AboutPortrait />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: EASE.out }}
          className="flex flex-col gap-6"
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {t.about.eyebrow(siteConfig.name)}
          </span>
          {/* Was hardcoded as "a decade" but siteConfig.yearsActive is 6 —
              tied to the config now so it can't drift out of sync again
              once you correct that TODO in site-config.ts. */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text">
            {t.about.heading(siteConfig.yearsActive)}
          </h2>
          <p className="text-text-muted leading-relaxed">{t.site.bio}</p>

          <div className="mt-4">
            <StatsCounter />
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        {/* <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-text-muted">
          Trusted by
        </p> */}
        {/* <ClientLogoMarquee /> */}
      </div>
    </section>
  );
}
