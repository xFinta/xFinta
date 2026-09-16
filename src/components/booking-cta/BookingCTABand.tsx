"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/TextReveal";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { SECTION_IDS } from "@/lib/constants";

export function BookingCTABand() {
  const { scrollTo } = useLenisContext();
  const { t } = useLocaleContext();

  return (
    <section className="relative overflow-hidden py-32 sm:py-40" aria-label={t.booking.ariaLabel}>
      {/* TODO: no real image here yet — always renders the generated
          gradient. Drop a striking, wide shot in as
          public/media/about/booking-band.jpg (create the folder if it
          doesn't exist) and it'll show up automatically. This is a
          full-bleed background band, so pick something that still reads
          well when darkened by the overlay below and cropped to any
          screen width. */}
      <PlaceholderImage
        seed="booking-cta-band"
        category="Commercial"
        orientation="landscape"
        src="/media/about/booking-band.jpg"
        alt=""
        className="absolute inset-0 h-full w-full"
      />
      {/* Unlike the Hero, this band follows the site theme (dark overlay in
          dark mode, light/white overlay in light mode) rather than staying
          permanently cinematic-dark — only the Hero ("first page") is
          pinned dark in both themes. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/55 to-ink/85"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {t.booking.eyebrow}
        </span>

        <TextReveal
          as="h2"
          text={t.booking.heading}
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-text"
        />

        <motion.p
          className="max-w-lg text-text-muted"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t.booking.body}
        </motion.p>

        <MagneticButton
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            scrollTo(`#${SECTION_IDS.contact}`);
          }}
          href={`#${SECTION_IDS.contact}`}
          className="mt-2"
        >
          {t.booking.cta}
          <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
        </MagneticButton>
      </div>
    </section>
  );
}
