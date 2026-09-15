import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Lets next/image optimize YouTube's own thumbnail images, used as the
    // automatic posterSrc for YouTube-hosted videos (see videos-data.ts) —
    // no local thumbnail upload needed for those.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
