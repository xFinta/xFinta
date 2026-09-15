import type { Metadata } from "next";
import { Playfair_Display, Manrope, Amiri, Cairo } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { siteConfig } from "@/config";
import { SmoothScrollProvider } from "@/context/SmoothScrollProvider";
import { LoadingProvider } from "@/context/LoadingProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LocaleProvider } from "@/context/LocaleProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { SkipToContentLink } from "@/components/layout/SkipToContentLink";
import "./globals.css";

const displayFont = Playfair_Display({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Arabic equivalents — Amiri is an elegant Naskh serif (the Arabic analogue
// of Playfair Display's editorial feel), Cairo a clean geometric sans (the
// Arabic analogue of Manrope). Both load unconditionally but only apply via
// the [dir="rtl"] font-family rules in globals.css, so there's no extra
// request for LTR visitors beyond the initial font file fetch.
const displayFontAr = Amiri({
  variable: "--font-display-ar-src",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const bodyFontAr = Cairo({
  variable: "--font-body-ar-src",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`dark ${displayFont.variable} ${bodyFont.variable} ${displayFontAr.variable} ${bodyFontAr.variable} min-h-screen antialiased`}
    >
      <head>
        {/* Runs synchronously during HTML parsing, before first paint, so a
            returning visitor's saved theme/language never flashes the
            "dark"/English defaults baked into the attributes above.
            suppressHydrationWarning on <html> tells React to accept
            whatever this script sets. Locale's *text* still lags one tick
            behind (corrected by LocaleProvider post-mount, see its
            comment) — this only fixes the instant, layout-affecting parts
            (theme colors, RTL direction, font family). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var root=document.documentElement;var t=localStorage.getItem("finta-theme");var theme=t==="light"?"light":"dark";root.classList.remove("dark","light");root.classList.add(theme);var loc=localStorage.getItem("finta-locale");if(loc==="ar"){root.lang="ar";root.dir="rtl"}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ink text-text">
        <SkipToContentLink />
        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <LocaleProvider>
              <LoadingProvider>
                <SmoothScrollProvider>
                  <LoadingScreen />
                  <ScrollProgressBar />
                  <Navbar />
                  {children}
                  <Footer />
                  <BackToTopButton />
                </SmoothScrollProvider>
              </LoadingProvider>
            </LocaleProvider>
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
