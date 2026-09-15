"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLocaleContext } from "@/context/LocaleProvider";
import { cn } from "@/lib/utils";

interface LightboxControlsProps {
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export function LightboxControls({
  onClose,
  onPrev,
  onNext,
  currentIndex,
  total,
}: LightboxControlsProps) {
  const { t, dir } = useLocaleContext();
  const isRtl = dir === "rtl";
  // "Previous"/"next" mirror with reading direction — previous sits toward
  // the start (right in RTL) and next toward the end (left in RTL), with
  // matching chevrons, rather than staying pinned to physical left/right.
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <>
      <button
        onClick={onClose}
        aria-label={t.lightbox.close}
        className="absolute top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full glass text-text transition-colors hover:text-accent sm:top-6 ltr:right-4 ltr:sm:right-6 rtl:left-4 rtl:sm:left-6"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>

      <button
        onClick={onPrev}
        aria-label={t.lightbox.previous}
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass text-text transition-colors hover:text-accent ltr:left-2 ltr:sm:left-6 rtl:right-2 rtl:sm:right-6"
      >
        <PrevIcon className="h-5 w-5" aria-hidden />
      </button>

      <button
        onClick={onNext}
        aria-label={t.lightbox.next}
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full glass text-text transition-colors hover:text-accent ltr:right-2 ltr:sm:right-6 rtl:left-2 rtl:sm:left-6"
      >
        <NextIcon className="h-5 w-5" aria-hidden />
      </button>

      {/* dir="ltr" fixes the digit-pair bidi reordering — but that means
          this element itself now satisfies Tailwind's `ltr:` selector
          *and* `rtl:` (via the <html dir="rtl"> ancestor) at the same
          time, so positioning here uses a plain JS conditional instead
          of ltr:/rtl: variants to avoid both rules applying at once. */}
      <span
        dir="ltr"
        className={cn(
          "absolute top-4 z-10 font-mono text-xs tracking-widest text-text-muted sm:top-6",
          isRtl ? "right-4 sm:right-6" : "left-4 sm:left-6"
        )}
      >
        {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </>
  );
}
