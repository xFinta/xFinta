export type VideoSourceType = "youtube" | "vimeo" | "local";

export interface VideoSource {
  type: VideoSourceType;
  /** YouTube/Vimeo ID, or a path under /public/media for local files. */
  src: string;
}

export const VIDEO_SUBCATEGORIES = [
  "B-roll Videos",
  "A-roll Videos and Interviews",
  "Intro/Outro",
] as const;
export type VideoSubcategory = (typeof VIDEO_SUBCATEGORIES)[number];

export interface VideoItem {
  id: string;
  title: string;
  category: VideoSubcategory;
  description?: string;
  durationSeconds: number;
  source: VideoSource;
  /** Seed for the deterministic gradient placeholder thumbnail. */
  thumbnailSeed: string;
  /** Populate once a real thumbnail image exists — falls back to the
   * generated gradient whenever undefined or if the file fails to load. */
  posterSrc?: string;
  featured?: boolean;
}
