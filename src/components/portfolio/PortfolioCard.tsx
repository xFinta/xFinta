"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { PlaceholderImage, orientationAspect } from "@/components/ui/PlaceholderImage";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { useLocaleContext } from "@/context/LocaleProvider";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { PortfolioImage } from "@/types";

interface PortfolioCardProps {
  image: PortfolioImage;
  onOpen: () => void;
}

export function PortfolioCard({ image, onOpen }: PortfolioCardProps) {
  const { ref, isVisible } = useIntersectionReveal<HTMLDivElement>();
  const { t } = useLocaleContext();

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE.out }}
      className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={t.lightbox.openAriaLabel(image.title)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {isVisible ? (
        <PlaceholderImage
          seed={image.id}
          category={image.category}
          orientation={image.orientation}
          src={image.src}
          alt={image.alt}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      ) : (
        // Same aspect ratio the real content will use once revealed, so
        // swapping in the image never shifts the page's scroll height.
        <div className={cn(orientationAspect[image.orientation], "bg-surface")} />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <p className="font-display text-lg text-text">{image.title}</p>
          <p className="text-xs uppercase tracking-wide text-accent">
            {t.gallery.categoryLabels[image.category]}
          </p>
        </div>
        <Expand className="h-5 w-5 text-text" aria-hidden />
      </div>
    </motion.div>
  );
}
