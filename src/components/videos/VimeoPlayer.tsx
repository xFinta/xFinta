"use client";

import { useLocaleContext } from "@/context/LocaleProvider";

export function VimeoPlayer({ videoId }: { videoId: string }) {
  const { t } = useLocaleContext();

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-surface">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
        title={t.video.vimeoTitle}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
