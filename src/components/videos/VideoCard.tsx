"use client";

import { motion } from "framer-motion";
import { PlaceholderVideo } from "@/components/ui/PlaceholderVideo";
import { formatDuration } from "@/lib/utils";
import { EASE } from "@/lib/constants";
import { useLocaleContext } from "@/context/LocaleProvider";
import type { VideoItem } from "@/types";

interface VideoCardProps {
  video: VideoItem;
  onPlay: () => void;
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  const { t } = useLocaleContext();

  return (
    <motion.button
      onClick={onPlay}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE.out }}
      className="group relative flex flex-col overflow-hidden rounded-lg text-start"
      aria-label={t.video.play(video.title)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <PlaceholderVideo
          seed={video.thumbnailSeed}
          category={video.category}
          label={video.title}
          posterSrc={video.posterSrc}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span className="absolute bottom-3 right-3 rounded bg-ink/70 px-2 py-1 font-mono text-xs text-text backdrop-blur-sm">
          {formatDuration(video.durationSeconds)}
        </span>
      </div>

      <div className="mt-3">
        <p className="text-xs uppercase tracking-wide text-accent">
          {t.gallery.subcategoryLabels[video.category]}
        </p>
        <p className="font-display text-lg text-text transition-colors group-hover:text-accent">
          {video.title}
        </p>
        {video.description && (
          <p className="mt-1 line-clamp-2 text-sm text-text-muted">{video.description}</p>
        )}
      </div>
    </motion.button>
  );
}
