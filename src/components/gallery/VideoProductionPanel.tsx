"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { VIDEO_SUBCATEGORIES } from "@/types";
import type { VideoItem, VideoSubcategory } from "@/types";
import { VideoCard } from "@/components/videos/VideoCard";
import { ScrollTrigger } from "@/lib/gsap";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { useLocalizedVideos } from "@/hooks/useLocalizedContent";
import { cn } from "@/lib/utils";

const VideoPlayerModal = dynamic(
  () => import("@/components/videos/VideoPlayerModal").then((mod) => mod.VideoPlayerModal),
  { ssr: false }
);

type VideoSubFilter = VideoSubcategory | "All Videos";

const SUB_TABS: VideoSubFilter[] = ["All Videos", ...VIDEO_SUBCATEGORIES];

export function VideoProductionPanel() {
  const [activeSub, setActiveSub] = useState<VideoSubFilter>("All Videos");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const { lenis } = useLenisContext();
  const { t } = useLocaleContext();
  const videos = useLocalizedVideos();

  const filteredVideos = useMemo(() => {
    if (activeSub === "All Videos") return videos;
    return videos.filter((video) => video.category === activeSub);
  }, [activeSub, videos]);

  useEffect(() => {
    lenis?.resize();
    ScrollTrigger.refresh();
  }, [filteredVideos.length, lenis]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {SUB_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSub(tab)}
            aria-pressed={activeSub === tab}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300",
              activeSub === tab
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-muted hover:border-accent hover:text-accent"
            )}
          >
            {tab === "All Videos" ? t.gallery.allVideosTab : t.gallery.subcategoryLabels[tab]}
          </button>
        ))}
      </div>

      {filteredVideos.length === 0 ? (
        <p className="py-24 text-center text-text-muted">{t.gallery.noVideosEmpty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={() => setActiveVideo(video)} />
          ))}
        </div>
      )}

      <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
