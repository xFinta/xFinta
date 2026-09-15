"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { getPlaceholderStyle } from "@/lib/placeholder-gradients";
import { useLocaleContext } from "@/context/LocaleProvider";
import { cn } from "@/lib/utils";

interface PlaceholderVideoProps {
  seed: string;
  category?: string;
  label?: string;
  className?: string;
  /** Populate once a real thumbnail exists — falls back to the generated
   * gradient whenever undefined or if the file fails to load. */
  posterSrc?: string;
}

export function PlaceholderVideo({
  seed,
  category,
  label,
  className,
  posterSrc,
}: PlaceholderVideoProps) {
  const [hasError, setHasError] = useState(false);
  const style = getPlaceholderStyle(seed, category);
  const showPoster = posterSrc && !hasError;
  const { t } = useLocaleContext();

  return (
    <div
      role="img"
      aria-label={label ?? t.placeholderVideo.thumbnailAlt}
      className={cn("relative aspect-video overflow-hidden select-none", className)}
      style={showPoster ? undefined : { background: style.background }}
    >
      {showPoster && (
        <Image
          src={posterSrc}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      )}
      {!showPoster && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 motion-safe:animate-[shimmer_5s_linear_infinite]"
          style={{
            backgroundImage:
              "linear-gradient(100deg, transparent 30%, rgba(91,147,209,0.35) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/40 backdrop-blur-sm ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
          <Play className="h-5 w-5 translate-x-0.5 fill-text text-text" aria-hidden />
        </div>
      </div>
    </div>
  );
}
