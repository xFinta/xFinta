"use client";

import { useLocaleContext } from "@/context/LocaleProvider";

export function YouTubePlayer({ videoId }: { videoId: string }) {
  const { t } = useLocaleContext();

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-surface">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={t.video.youtubeTitle}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
