import type { GalleryMediaItem, PortfolioImage, VideoItem } from "@/types";

const MAX_SHOWCASE_ITEMS = 12;

// Take the arrays as params (rather than importing config directly) so
// callers can pass already-locale-translated arrays — see
// useLocalizedPortfolioImages/useLocalizedVideos.
export function getAllMediaItems(
  portfolioImages: PortfolioImage[],
  videos: VideoItem[]
): GalleryMediaItem[] {
  return [
    ...portfolioImages.map((data): GalleryMediaItem => ({ kind: "photo", data })),
    ...videos.map((data): GalleryMediaItem => ({ kind: "video", data })),
  ];
}

/**
 * Curated, deterministic sequence for the cinematic "All" stage — featured
 * items first, then the remaining items interleaved round-robin by category
 * so the rotation reads as art-directed rather than one category in a row
 * (and never random/shuffled, per the brief).
 */
export function getShowcaseItems(
  portfolioImages: PortfolioImage[],
  videos: VideoItem[]
): GalleryMediaItem[] {
  const all = getAllMediaItems(portfolioImages, videos);
  const featured = all.filter((item) => item.data.featured);
  const rest = all.filter((item) => !item.data.featured);

  const byCategory = new Map<string, GalleryMediaItem[]>();
  for (const item of rest) {
    const key = item.data.category;
    const bucket = byCategory.get(key) ?? [];
    bucket.push(item);
    byCategory.set(key, bucket);
  }

  const interleaved: GalleryMediaItem[] = [];
  let addedInPass = true;
  while (interleaved.length + featured.length < MAX_SHOWCASE_ITEMS && addedInPass) {
    addedInPass = false;
    for (const bucket of byCategory.values()) {
      if (interleaved.length + featured.length >= MAX_SHOWCASE_ITEMS) break;
      const next = bucket.shift();
      if (next) {
        interleaved.push(next);
        addedInPass = true;
      }
    }
  }

  return [...featured, ...interleaved].slice(0, MAX_SHOWCASE_ITEMS);
}
