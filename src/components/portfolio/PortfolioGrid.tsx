"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import { useLightbox } from "@/context/LightboxContext";
import { useLocaleContext } from "@/context/LocaleProvider";
import type { PortfolioImage } from "@/types";

interface PortfolioGridProps {
  images: PortfolioImage[];
}

export function PortfolioGrid({ images }: PortfolioGridProps) {
  const { open } = useLightbox();
  const { t } = useLocaleContext();

  if (images.length === 0) {
    return <p className="py-24 text-center text-text-muted">{t.gallery.noPhotosEmpty}</p>;
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.div key={image.id} exit={{ opacity: 0, scale: 0.96 }}>
            <PortfolioCard image={image} onOpen={() => open(images, index)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
