import type { NextConfig } from "next";

// Single source of truth for the GitHub Pages repo subpath — update this
// one line if the repo is ever renamed/moved. Also read by
// src/lib/base-path.ts (via the `env` block below) since raw <video>/
// <source>/poster paths and next/image `src` don't get this prefix
// automatically the way next/link does.
const BASE_PATH = "/xFinta";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS export — GitHub Pages has no Node.js server to run
  // Next's default SSR/ISR/image-optimization pipeline.
  output: "export",
  basePath: BASE_PATH,

  images: {
    // No server available on GitHub Pages to run Next's image optimizer —
    // next/image falls back to plain <img> tags with the original file.
    unoptimized: true,
    // Lets next/image reference YouTube's own thumbnail images, used as
    // the automatic posterSrc for YouTube-hosted videos (see
    // videos-data.ts) — no local thumbnail upload needed for those.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
