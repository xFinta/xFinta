import { youtubeThumbnailUrl } from "@/lib/utils";
import type { VideoItem } from "@/types";

/**
 * Central video catalog for xFinta / Murtada AlHajari's video production work.
 *
 * Every `source.src` already points at its final expected file under
 * public/media/video-production/<subcategory-folder>/ — see the README.md
 * in each folder for the exact filename list. Until a real file exists,
 * the player will simply show nothing to play; the thumbnail (PlaceholderVideo)
 * still renders a branded gradient so the grid never looks broken.
 *
 * Thumbnails: `posterSrc` is the real thumbnail image shown on the video
 * card — NOT `thumbnailSeed` (that's just a short string used to generate
 * the gradient fallback color, never a file path). YouTube-hosted entries
 * get their poster automatically via youtubeThumbnailUrl() — no upload
 * needed. Local entries need a real image dropped into the matching
 * public/media/video-production/<folder>/ path — see each folder's README.
 */
export const videos: VideoItem[] = [
  // ---- B-roll Videos (public/media/video-production/b-roll/) ----
  // All 5 thumbnails now exist, and titles/descriptions below have been
  // verified against them. durationSeconds is still a guess for every
  // entry below (I can see a thumbnail frame, not play the clip) — confirm
  // the real lengths if you want the on-card duration badges accurate.
  {
    // Title card reading "البراحة" (Al-Baraha) / "البيت القطيفي" (The
    // Qatifi House), a heritage/traditional architecture piece.
    id: "broll-01",
    title: "Al-Baraha — The Qatifi House",
    category: "B-roll Videos",
    description: "B-roll footage of a traditional Qatifi heritage house.",
    durationSeconds: 59,
    source: {
      type: "local",
      src: "/media/video-production/b-roll/b-roll-01.mp4",
    },
    thumbnailSeed: "broll-01",
    posterSrc: "/media/video-production/b-roll/b-roll-01.png",
    featured: true,
  },
  {
    // Thumbnail shows "PURE" humidifier-booster bottles + a Black+Decker
    // humidifier (Arabic label: "تكنولوجيا الرذاذ" — spray technology).
    id: "broll-02",
    title: "Pure Commercial Product Video",
    category: "B-roll Videos",
    description: "Pure humidifier booster products studio shoot.",
    durationSeconds: 22,
    source: {
      type: "local",
      src: "/media/video-production/b-roll/b-roll-02.mp4",
    },
    thumbnailSeed: "broll-02",
    posterSrc: "/media/video-production/b-roll/b-roll-02.png",
  },
  {
    // Thumbnail shows a blurred storefront sign reading "INNOVATION TASTE
    // — 4TH ANNIVERSARY" — a coffee-shop anniversary promo, not a plain
    // architecture walkthrough.
    id: "broll-03",
    title: "Innovation Coffee Shop Aesthetic Tour",
    category: "B-roll Videos",
    description: "Smooth footage of the coffee shop",
    durationSeconds: 59,
    source: {
      type: "local",
      src: "/media/video-production/b-roll/b-roll-03.mp4",
    },
    thumbnailSeed: "broll-03",
    posterSrc: "/media/video-production/b-roll/b-roll-03.png",
  },
  {
    // Thumbnail confirms the "JO'S BAKERY" logo seal — matches the title.
    id: "broll-04",
    title: "Jo's Cinematic Pastry Craft",
    category: "B-roll Videos",
    description:
      "A visually stunning B-roll showcase capturing the artistry of pastry making. Features high-framerate slow motion, dramatic macro close-ups of ingredients, and warm, cinematic lighting that highlights Chef Jo's precision and craftsmanship.",

    durationSeconds: 33,
    source: {
      type: "local",
      src: "/media/video-production/b-roll/b-roll-04.mp4",
    },
    thumbnailSeed: "broll-04",
    posterSrc: "/media/video-production/b-roll/b-roll-04.png",
  },
  {
    // Thumbnail confirms coconut-flake soft-serve with an "xFinta" watermark
    // — matches the title.
    id: "broll-05",
    title: "Al Bahaar's Vibrant Ice Cream",
    category: "B-roll Videos",
    description:
      "A refreshing and high-energy commercial B-roll sequence showcasing Al Bahaar's signature ice cream. Utilizing ultra-slow motion to capture texture",
    durationSeconds: 17, // TODO: guessed, replace with the real duration
    source: {
      type: "local",
      src: "/media/video-production/b-roll/b-roll-05.mp4",
    },
    thumbnailSeed: "broll-05",
    posterSrc: "/media/video-production/b-roll/b-roll-05.png",
  },

  // ---- A-roll Videos and Interviews ----
  // Hosted on YouTube (Unlisted) rather than as local files — these run
  // 2+ minutes, and self-hosting that much video weight isn't practical.
  // See public/media/video-production/a-roll-interviews/README.md.
  // Thumbnails are pulled automatically from YouTube — nothing to upload.
  // TODO: durationSeconds for all 3 below are still estimates (YouTube's
  // oEmbed endpoint doesn't expose duration) — replace with the real
  // lengths if you want the on-card duration badge to be accurate.
  {
    id: "aroll-01",
    title: "Maas Interview",
    category: "A-roll Videos and Interviews",
    description: "On-camera interview segment.",
    durationSeconds: 206, // TODO: estimated, confirm real duration
    source: { type: "youtube", src: "XO1nI6JCQnI" },
    thumbnailSeed: "aroll-01",
    posterSrc: youtubeThumbnailUrl("XO1nI6JCQnI"),
    featured: true,
  },
  {
    id: "aroll-02",
    title: "Misk X Mismar",
    category: "A-roll Videos and Interviews",
    description: "Brand collaboration interview piece.",
    durationSeconds: 162, // TODO: estimated, confirm real duration
    source: { type: "youtube", src: "l0cT4NwNnGM" },
    thumbnailSeed: "aroll-02",
    posterSrc: youtubeThumbnailUrl("l0cT4NwNnGM"),
  },
  {
    id: "aroll-03",
    title: "Qatif Race — Nashita 2023",
    category: "A-roll Videos and Interviews",
    description: "On-the-ground coverage of the Qatif Nashita race event.",
    durationSeconds: 123, // TODO: estimated, confirm real duration
    source: { type: "youtube", src: "VXuXg1_qeQw" },
    thumbnailSeed: "aroll-03",
    posterSrc: youtubeThumbnailUrl("VXuXg1_qeQw"),
  },

  // ---- Intro/Outro (public/media/video-production/intro-outro/) ----
  {
    // CORRECTED: the thumbnail is Arabic calligraphy reading what looks
    // like "أهل البيت" (Ahl Al-Bayt) in gold/teal on a dark background —
    // this is a CLIENT's branded intro, not xFinta's own (the old title
    // was wrong — xFinta's own wordmark is the Latin "xFinta" logotype
    // used elsewhere on this site, not Arabic calligraphy). Double-check
    // the exact client/project name — calligraphic text can be ambiguous
    // to read — and correct if this guess is off.
    id: "introoutro-01",
    title: "Ahl Al-Bayt — Client Intro",
    category: "Intro/Outro",
    description: "Branded animated intro created for a client's video project.",
    durationSeconds: 10, // TODO: guessed, replace with the real duration
    source: {
      type: "local",
      src: "/media/video-production/intro-outro/intro-01.mp4",
    },
    thumbnailSeed: "introoutro-01",
    posterSrc: "/media/video-production/intro-outro/intro-01.png",
    featured: true,
  },
];
