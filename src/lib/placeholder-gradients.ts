/**
 * Deterministic gradient generator for placeholder media.
 *
 * Every gallery/video item gets a stable, seed-derived gradient so the grid
 * reads as intentional art direction rather than random noise, while still
 * staying inside the site's cool blue/charcoal palette. Swapping a real photo
 * in later never touches this file — see PortfolioImage.src / VideoSource.
 */

export interface PlaceholderStyle {
  background: string;
  angle: number;
  grainOpacity: number;
}

function hashString(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Hue-bias per category keeps every category visually distinct while staying
// inside the cool blue / charcoal family — no rainbow placeholders.
const CATEGORY_HUE_BIAS: Record<string, [number, number]> = {
  Portrait: [206, 8],
  Wedding: [220, 6],
  Nature: [212, 14],
  Street: [202, 4],
  Events: [216, 10],
  Commercial: [198, 6],
  Travel: [208, 12],
  Lifestyle: [214, 8],
};

const BASE_LIGHTNESS_PAIRS: Array<[number, number]> = [
  [14, 26],
  [10, 22],
  [16, 30],
  [8, 20],
  [12, 24],
];

export function getPlaceholderStyle(
  seed: string,
  category?: string
): PlaceholderStyle {
  const hash = hashString(seed);
  const [baseHue, hueRange] = CATEGORY_HUE_BIAS[category ?? ""] ?? [208, 10];
  const hue = baseHue + (hash % hueRange);
  const [lFrom, lTo] = BASE_LIGHTNESS_PAIRS[hash % BASE_LIGHTNESS_PAIRS.length];
  const satFrom = 35 + (hash % 15);
  const satTo = 20 + (hash % 10);
  const angle = 100 + (hash % 100);

  const from = `hsl(${hue} ${satFrom}% ${lFrom}%)`;
  const to = `hsl(${hue + 6} ${satTo}% ${lTo}%)`;

  return {
    background: `linear-gradient(${angle}deg, ${from} 0%, #0a0b0e 100%), linear-gradient(${angle + 40}deg, ${to} 0%, transparent 60%)`,
    angle,
    grainOpacity: 0.035 + ((hash % 5) / 200),
  };
}
