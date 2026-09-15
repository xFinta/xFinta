import { Quote } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StarRating } from "./StarRating";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface/50 p-8">
      <Quote className="h-8 w-8 text-accent/40" aria-hidden />
      <p className="flex-1 text-lg leading-relaxed text-text">&ldquo;{testimonial.quote}&rdquo;</p>
      <StarRating rating={testimonial.rating} />
      <div className="flex items-center gap-3">
        <PlaceholderImage
          seed={testimonial.avatarSeed}
          orientation="square"
          src={testimonial.avatarSrc}
          alt={testimonial.clientName}
          className="h-12 w-12 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-text">{testimonial.clientName}</p>
          {testimonial.clientRole && (
            <p className="text-xs text-text-muted">{testimonial.clientRole}</p>
          )}
        </div>
      </div>
    </div>
  );
}
