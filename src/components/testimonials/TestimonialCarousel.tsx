"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { testimonials } from "@/config";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLocaleContext } from "@/context/LocaleProvider";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLocaleContext();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    prefersReducedMotion ? [] : [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Syncs initial selected index from Embla's instance — the documented
    // Embla + React pattern, since the snap position isn't known until the
    // carousel initializes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label={t.testimonials.previous}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        {/* <div className="flex" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                aria-hidden
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === selectedIndex ? "w-6 bg-accent" : "w-1.5 bg-border"
                )}
              />
            </button>
          ))}
        </div> */}

        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label={t.testimonials.next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
