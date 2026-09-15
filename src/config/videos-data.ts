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
  // TODO: b-roll-02 through 05 have real .mp4 files now, but their titles/
  // descriptions/durations below are still placeholder text I wrote before
  // any real file existed — I can't watch video content, so these are
  // unverified guesses. broll-01 has been corrected using its real
  // thumbnail as a reference; add a matching posterSrc image for the rest
  // (see the README in this folder) so I can verify/correct those too.
  {
    // Corrected from the real thumbnail — it's a title card reading
    // "البراحة" (Al-Baraha) / "البيت القطيفي" (The Qatifi House), a
    // heritage/traditional architecture piece, not "Product Line B-roll".
    // TODO: durationSeconds is still a guess (58s) — confirm the real length.
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
    // TODO: no posterSrc yet — add b-roll-02.png to this folder (see the
    // README) and I can verify/correct this title & description from it,
    // same as broll-01.
    id: "broll-02",
    title: "Pure Commercial Product Video",
    category: "B-roll Videos",
    description: "Puer products studio shoot.",
    durationSeconds: 22,
    source: {
      type: "local",
      src: "/media/video-production/b-roll/b-roll-02.mp4",
    },
    thumbnailSeed: "broll-02",
    posterSrc: "/media/video-production/b-roll/b-roll-02.png",
  },
  {
    // TODO: no posterSrc yet — add b-roll-03.png to this folder.
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
    // TODO: no posterSrc yet — add b-roll-04.png to this folder.
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
    // TODO: b-roll-05.mp4 exists in public/media/video-production/b-roll/
    // but had no config entry at all, so it wasn't showing up anywhere on
    // the site — I added this entry so it's at least visible, but the
    // title, description, and durationSeconds below are complete guesses
    // since I don't know what's actually in the clip. Add b-roll-05.png
    // for a real thumbnail and I can fix the title/description from it.
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
    // TODO: intro-01.mp4 now exists, but the title/description below were
    // written before the real file existed — add intro-01.png (see the
    // README) so I can verify/correct them from the real thumbnail.
    id: "introoutro-01",
    title: "xFinta Signature Intro",
    category: "Intro/Outro",
    description: "Branded animated intro used to open client video projects.",
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
