import { ImageResponse } from "next/og";
import { siteConfig } from "@/config";

export const alt = `${siteConfig.brandName} — ${siteConfig.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated on the fly — no image asset required. Next's file convention
 * automatically wires this up as the og:image / twitter:image for every
 * page that doesn't define its own.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08090b",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(91,147,209,0.22) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(91,147,209,0.14) 0%, transparent 60%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#5b93d1",
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          Photography &amp; Video Production
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 700,
            color: "#f0f2f4",
            letterSpacing: -2,
          }}
        >
          {siteConfig.brandName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9aa3ab",
            marginTop: 20,
            letterSpacing: 2,
          }}
        >
          {siteConfig.name} — {siteConfig.role}
        </div>
      </div>
    ),
    { ...size }
  );
}
