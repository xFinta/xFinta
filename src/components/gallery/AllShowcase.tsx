"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useLightbox } from "@/context/LightboxContext";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { VideoCard } from "@/components/videos/VideoCard";
import { ScrollTrigger } from "@/lib/gsap";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocalizedPortfolioImages, useLocalizedVideos } from "@/hooks/useLocalizedContent";
import { getAllMediaItems, getShowcaseItems } from "@/lib/gallery-showcase";
import type { GalleryMediaItem, VideoItem } from "@/types";
import { CinematicStage } from "./CinematicStage";

const VideoPlayerModal = dynamic(
  () => import("@/components/videos/VideoPlayerModal").then((mod) => mod.VideoPlayerModal),
  { ssr: false }
);

export function AllShowcase() {
  const { open: openLightbox } = useLightbox();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const { lenis } = useLenisContext();
  const portfolioImages = useLocalizedPortfolioImages();
  const videos = useLocalizedVideos();

  const showcaseItems = useMemo(
    () => getShowcaseItems(portfolioImages, videos),
    [portfolioImages, videos]
  );
  const allItems = useMemo(
    () => getAllMediaItems(portfolioImages, videos),
    [portfolioImages, videos]
  );

  useEffect(() => {
    lenis?.resize();
    ScrollTrigger.refresh();
  }, [allItems.length, lenis]);

  const handleSelect = (item: GalleryMediaItem) => {
    if (item.kind === "photo") {
      const startIndex = portfolioImages.findIndex((image) => image.id === item.data.id);
      openLightbox(portfolioImages, Math.max(startIndex, 0));
    } else {
      setActiveVideo(item.data);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <CinematicStage items={showcaseItems} onSelect={handleSelect} />

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {allItems.map((item) =>
          item.kind === "photo" ? (
            <PortfolioCard
              key={item.data.id}
              image={item.data}
              onOpen={() => handleSelect(item)}
            />
          ) : (
            <div key={item.data.id} className="mb-4 break-inside-avoid">
              <VideoCard video={item.data} onPlay={() => handleSelect(item)} />
            </div>
          )
        )}
      </div>

      <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
