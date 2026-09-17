"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { getPlaceholderStyle } from "@/lib/placeholder-gradients";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/utils";
import type { ImageOrientation } from "@/types";

interface PlaceholderImageProps {
  seed: string;
  category?: string;
  orientation?: ImageOrientation;
  label?: string;
  className?: string;
  /** Populate once a real photo exists — renders next/image instead of the
   * generated gradient. This is the entire swap-out contract. */
  src?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

/** Exported so callers can reserve the exact same box before this component
 * mounts (e.g. a lazy-reveal placeholder) — reusing one aspect ratio avoids
 * a layout shift/reflow when the real content swaps in. */
export const orientationAspect: Record<ImageOrientation, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function PlaceholderImage({
  seed,
  category,
  orientation = "landscape",
  label,
  className,
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <div className={cn("relative overflow-hidden", orientationAspect[orientation], className)}>
        <Image
          src={withBasePath(src)}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          draggable={false}
          className="object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  const style = getPlaceholderStyle(seed, category);
  const isDecorative = alt === "";

  return (
    <div
      role={isDecorative ? undefined : "img"}
      aria-label={isDecorative ? undefined : alt}
      aria-hidden={isDecorative || undefined}
      className={cn(
        "relative overflow-hidden select-none",
        orientationAspect[orientation],
        className
      )}
      style={{ background: style.background }}
    >
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: style.grainOpacity,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {label && (
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-text-muted/70 text-xs tracking-wide">
          <Camera className="h-3.5 w-3.5" aria-hidden />
          {label}
        </div>
      )}
    </div>
  );
}
