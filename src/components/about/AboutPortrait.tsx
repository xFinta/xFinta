"use client";

import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { siteConfig } from "@/config";
import { EASE } from "@/lib/constants";
import { useLocaleContext } from "@/context/LocaleProvider";

export function AboutPortrait() {
  const { t } = useLocaleContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: EASE.out }}
      className="relative"
    >
      {/* TODO: no real photo of you exists here yet — this always renders
          the generated gradient placeholder. Drop a real portrait in as
          public/media/about/portrait.jpg (create the folder) and it'll
          show up automatically, same swap-out pattern as everywhere else. 
          
          DONE
          */}
      
      <PlaceholderImage
        seed="about-portrait"
        category="Portrait"
        orientation="portrait"
        src="/media/about/portrait.jpeg"
        alt={t.about.portraitAlt(siteConfig.name)}
        className="rounded-2xl"
        priority
      />
      <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-surface p-5 shadow-xl sm:block">
        <p className="font-display text-3xl text-accent">{siteConfig.yearsActive}+</p>
        <p className="text-xs uppercase tracking-wide text-text-muted">{t.about.yearsCaption}</p>
      </div>
    </motion.div>
  );
}
