export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const SECTION_IDS = {
  home: "home",
  gallery: "gallery",
  services: "services",
  about: "about",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
  cinematic: 1.4,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
};
