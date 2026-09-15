"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { GALLERY_CATEGORIES, isPhotoCategory } from "@/types";
import type { GalleryCategory } from "@/types";
import { SECTION_IDS } from "@/lib/constants";
import { ScrollTrigger } from "@/lib/gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LightboxProvider } from "@/context/LightboxContext";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { GalleryFilterBar } from "./GalleryFilterBar";
import { PhotoCategoryGrid } from "./PhotoCategoryGrid";
import { VideoProductionPanel } from "./VideoProductionPanel";
// "All" tab is disabled for now — see GALLERY_CATEGORIES in src/types/gallery.ts.
// import { AllShowcase } from "./AllShowcase";

// Only ever mounts once a photo is clicked — split out of the main bundle.
const Lightbox = dynamic(
  () => import("@/components/portfolio/Lightbox").then((mod) => mod.Lightbox),
  { ssr: false }
);

// Video Production leads the category order and keeps the initial paint
// light — the heavier "All" cinematic showcase renders on demand once a
// visitor actually selects it, not on every page load.
const DEFAULT_CATEGORY: GalleryCategory = GALLERY_CATEGORIES[0];

function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(DEFAULT_CATEGORY);
  const { lenis } = useLenisContext();

  useEffect(() => {
    // Switching tabs can change the page's total height dramatically (e.g.
    // the "All" showcase adds dozens of items) — nudge both GSAP's and
    // Lenis's own scroll-height caches so scrolling/nav links never clamp
    // to a stale, shorter limit. Lenis has its own ResizeObserver too, but
    // it's debounced 250ms; this keeps things correct immediately.
    const timer = setTimeout(() => {
      lenis?.resize();
      ScrollTrigger.refresh();
    }, 80);
    return () => clearTimeout(timer);
  }, [activeCategory, lenis]);

  return (
    <>
      <GalleryFilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="mt-12">
        {activeCategory === "Video Production" && <VideoProductionPanel />}
        {/* {activeCategory === "All" && <AllShowcase />} */}
        {isPhotoCategory(activeCategory) && (
          <PhotoCategoryGrid key={activeCategory} category={activeCategory} />
        )}
      </div>

      <Lightbox />
    </>
  );
}

export function GallerySection() {
  const { t } = useLocaleContext();

  return (
    <section
      id={SECTION_IDS.gallery}
      className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
      aria-label={t.gallery.ariaLabel}
    >
      <SectionHeading
        eyebrow={t.gallery.eyebrow}
        title={t.gallery.title}
        description={t.gallery.description}
        className="mb-14"
      />
      <LightboxProvider>
        <GalleryContent />
      </LightboxProvider>
    </section>
  );
}
