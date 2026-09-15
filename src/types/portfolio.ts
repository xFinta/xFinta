export const PORTFOLIO_CATEGORIES = [
  "Product Photography",
  "Wedding Photography",
  // "Architecture Photography",
  // "Random",
] as const;
export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type ImageOrientation = "portrait" | "landscape" | "square";

export interface ExifData {
  camera?: string;
  lens?: string;
  focalLength?: string;
  aperture?: string;
  shutterSpeed?: string;
  iso?: string;
}

export interface PortfolioImage {
  id: string;
  slug: string;
  title: string;
  description?: string;
  category: PortfolioCategory;
  tags?: string[];
  orientation: ImageOrientation;
  featured?: boolean;
  exif?: ExifData;
  /** Populate once a real photo exists — PlaceholderImage falls back to a
   * generated gradient whenever this is undefined or fails to load. No
   * component changes needed to go live with real photography. */
  src?: string;
  alt: string;
}
