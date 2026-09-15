"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocaleContext } from "@/context/LocaleProvider";

export function StarRating({ rating }: { rating: number }) {
  const { t } = useLocaleContext();

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={t.testimonials.ratingAriaLabel(rating)}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating ? "fill-accent text-accent" : "text-border"
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}
