"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ScrollTrigger } from "@/lib/gsap";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { useLocalizedPortfolioImages } from "@/hooks/useLocalizedContent";
import type { PortfolioCategory } from "@/types";

interface PhotoCategoryGridProps {
  category: PortfolioCategory;
}

export function PhotoCategoryGrid({ category }: PhotoCategoryGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { lenis } = useLenisContext();
  const { t } = useLocaleContext();
  const categoryLabel = t.gallery.categoryLabels[category];
  const portfolioImages = useLocalizedPortfolioImages();

  const filteredImages = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return portfolioImages.filter((image) => {
      if (image.category !== category) return false;
      if (!query) return true;
      const haystack = [image.title, image.description, ...(image.tags ?? [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [category, searchQuery, portfolioImages]);

  useEffect(() => {
    lenis?.resize();
    ScrollTrigger.refresh();
  }, [filteredImages.length, lenis]);

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <div className="relative w-full max-w-sm">
          <Search
            className="pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted ltr:left-3 rtl:right-3"
            aria-hidden
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.gallery.searchPlaceholder(categoryLabel)}
            aria-label={t.gallery.searchAriaLabel(categoryLabel)}
            className="w-full rounded-full border border-border bg-transparent py-2 text-sm text-text placeholder:text-text-muted focus:border-accent ltr:pl-9 ltr:pr-4 rtl:pr-9 rtl:pl-4"
          />
        </div>
      </div>
      <PortfolioGrid images={filteredImages} />
    </div>
  );
}
