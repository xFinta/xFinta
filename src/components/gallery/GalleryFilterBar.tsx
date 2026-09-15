"use client";

import { GALLERY_CATEGORIES } from "@/types";
import type { GalleryCategory } from "@/types";
import { useLocaleContext } from "@/context/LocaleProvider";
import { cn } from "@/lib/utils";

interface GalleryFilterBarProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

export function GalleryFilterBar({ activeCategory, onCategoryChange }: GalleryFilterBarProps) {
  const { t } = useLocaleContext();

  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label={t.gallery.filterAriaLabel}
    >
      {GALLERY_CATEGORIES.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={activeCategory === category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "rounded-full border px-5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors duration-300",
            activeCategory === category
              ? "border-accent bg-accent text-ink"
              : "border-border text-text-muted hover:border-accent hover:text-accent"
          )}
        >
          {t.gallery.categoryLabels[category]}
        </button>
      ))}
    </div>
  );
}
