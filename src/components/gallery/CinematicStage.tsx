"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PlaceholderVideo } from "@/components/ui/PlaceholderVideo";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLocaleContext } from "@/context/LocaleProvider";
import { formatDuration } from "@/lib/utils";
import { EASE } from "@/lib/constants";
import type { GalleryMediaItem } from "@/types";

const SLIDE_DURATION_MS = 5000;

interface CinematicStageProps {
  items: GalleryMediaItem[];
  onSelect: (item: GalleryMediaItem) => void;
}

/**
 * The "premium visual playlist" — an auto-advancing crossfade through a
 * curated sequence of photos and videos from every category. Deterministic
 * order (see lib/gallery-showcase.ts), never shuffled/random.
 */
export function CinematicStage({ items, onSelect }: CinematicStageProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t, dir } = useLocaleContext();
  const isRtl = dir === "rtl";
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  useEffect(() => {
    if (prefersReducedMotion || isPaused || items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion, isPaused, items.length]);

  if (items.length === 0) return null;

  const current = items[index];
  const { title } = current.data;
  const categoryLabel =
    current.kind === "photo"
      ? t.gallery.categoryLabels[current.data.category]
      : t.gallery.subcategoryLabels[current.data.category];

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div
      className="group/stage relative overflow-hidden rounded-2xl bg-surface"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9] cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={t.gallery.openMediaAriaLabel(categoryLabel, title)}
        onClick={() => onSelect(current)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(current);
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.data.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: EASE.out }}
            className="absolute inset-0"
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1 }}
              animate={prefersReducedMotion ? {} : { scale: 1.06 }}
              transition={{ duration: SLIDE_DURATION_MS / 1000 + 1, ease: "linear" }}
            >
              {current.kind === "photo" ? (
                <PlaceholderImage
                  seed={current.data.id}
                  category={current.data.category}
                  orientation="landscape"
                  src={current.data.src}
                  alt={current.data.alt}
                  className="h-full w-full"
                  priority={index === 0}
                />
              ) : (
                <PlaceholderVideo
                  seed={current.data.thumbnailSeed}
                  category={current.data.category}
                  label={current.data.title}
                  posterSrc={current.data.posterSrc}
                  className="h-full w-full"
                />
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {categoryLabel}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-text">{title}</h3>
          </div>
          {current.kind === "video" && (
            <span className="hidden sm:flex items-center gap-1.5 rounded-full bg-ink/50 px-3 py-1.5 text-xs text-text backdrop-blur-sm">
              <Play className="h-3.5 w-3.5" aria-hidden />
              {formatDuration(current.data.durationSeconds)}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={goPrev}
        aria-label={t.gallery.prev}
        className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass text-text opacity-70 transition-opacity hover:opacity-100 hover:text-accent ltr:left-3 rtl:right-3"
      >
        <PrevIcon className="h-5 w-5" aria-hidden />
      </button>
      <button
        onClick={goNext}
        aria-label={t.gallery.next}
        className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full glass text-text opacity-70 transition-opacity hover:opacity-100 hover:text-accent ltr:right-3 rtl:left-3"
      >
        <NextIcon className="h-5 w-5" aria-hidden />
      </button>

      <div className="absolute top-4 left-4 right-4 flex gap-1.5" aria-hidden>
        {items.map((item, i) => (
          <div key={item.data.id} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/20">
            {i === index && !prefersReducedMotion && !isPaused && (
              <motion.div
                key={`${item.data.id}-progress-${index}`}
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION_MS / 1000, ease: "linear" }}
              />
            )}
            {i < index && <div className="h-full w-full bg-accent/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}
