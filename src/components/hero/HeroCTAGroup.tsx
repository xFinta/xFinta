"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { SECTION_IDS } from "@/lib/constants";

export function HeroCTAGroup() {
  const { scrollTo } = useLenisContext();
  const { t } = useLocaleContext();

  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <MagneticButton
        variant="primary"
        onClick={(e) => {
          e.preventDefault();
          scrollTo(`#${SECTION_IDS.gallery}`);
        }}
        href={`#${SECTION_IDS.gallery}`}
      >
        {t.hero.viewGallery}
        <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
      </MagneticButton>

      <MagneticButton
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          scrollTo(`#${SECTION_IDS.contact}`);
        }}
        href={`#${SECTION_IDS.contact}`}
      >
        {t.hero.bookSession}
        <Calendar className="h-4 w-4" aria-hidden />
      </MagneticButton>
    </motion.div>
  );
}
