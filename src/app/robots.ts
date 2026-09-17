import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";

// Required for `output: "export"` — declares this route as static so it
// prerenders to a plain robots.txt file at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.seo.siteUrl}/sitemap.xml`,
  };
}
