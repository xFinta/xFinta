"use client";

import { motion, type PanInfo } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { PortfolioImage } from "@/types";

interface LightboxImageProps {
  image: PortfolioImage;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
}

const orientationRatio: Record<PortfolioImage["orientation"], string> = {
  portrait: "3 / 4",
  landscape: "4 / 3",
  square: "1 / 1",
};

const SWIPE_THRESHOLD = 60;

export function LightboxImage({ image, direction, onNext, onPrev }: LightboxImageProps) {
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      onNext();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      onPrev();
    }
  };

  return (
    <motion.div
      key={image.id}
      custom={direction}
      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      className="relative mx-auto max-w-[90vw] touch-pan-y"
      style={{ height: "min(65vh, 700px)", aspectRatio: orientationRatio[image.orientation] }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <PlaceholderImage
        seed={image.id}
        category={image.category}
        orientation={image.orientation}
        src={image.src}
        alt={image.alt}
        className="h-full w-full rounded-lg shadow-2xl"
      />
    </motion.div>
  );
}
