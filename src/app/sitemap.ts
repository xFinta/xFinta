import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";

// Required for `output: "export"` — this route calls `new Date()`, which
// Next can't otherwise prove is static at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
