import type { PortfolioCategory } from "./portfolio";
import type { PortfolioImage } from "./portfolio";
import type { VideoItem } from "./video";

export const GALLERY_CATEGORIES = [
  "Video Production",
  "Product Photography",
  "Wedding Photography",
  // "Architecture Photography",
  // "Random",
  // "All",
] as const;
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const PHOTO_GALLERY_CATEGORIES: readonly GalleryCategory[] = [
  "Product Photography",
  "Wedding Photography",
  // "Architecture Photography",
  // "Random",
];

/** True when a top-level gallery tab maps 1:1 onto a PortfolioImage category. */
export function isPhotoCategory(category: GalleryCategory): category is PortfolioCategory {
  return (PHOTO_GALLERY_CATEGORIES as readonly string[]).includes(category);
}

/**
 * Unified item used only by the cinematic "All" showcase, which mixes
 * photos and videos in one auto-rotating stage + grid.
 */
export type GalleryMediaItem =
  | { kind: "photo"; data: PortfolioImage }
  | { kind: "video"; data: VideoItem };
