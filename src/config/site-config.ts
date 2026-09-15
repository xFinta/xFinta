import type { SiteConfig } from "@/types";

/**
 * Single source of truth for identity + SEO defaults.
 * Update this file to rebrand the entire site.
 *
 * `name` is the professional/legal name (About section, footer copyright,
 * formal CTAs). `brandName` is the creative identity shown in the logo,
 * navigation, and the big Hero headline.
 */
export const siteConfig: SiteConfig = {
  name: "Murtada AlHajari",
  brandName: "xFinta",
  logoText: "XFINTA",
  role: "Photographer & Filmmaker",
  tagline: "Cinematic stories, frame by frame.",
  shortBio:
    "Photographer and video producer crafting cinematic content across product, wedding, and architecture photography — plus B-roll, interviews, and branded video production.",
  // TODO: `bio`, `tagline`, and `shortBio` above are AI-drafted placeholder
  // copy (written before any real content existed) — read them over and
  // rewrite in your own voice/wording before launch. They currently show up
  // in the Hero, About section, and Footer.
  bio: "I'm Murtada AlHajari, working under the creative name xFinta. I specialize in two things: photography that makes a product, a building, or a wedding day look like it belongs in a magazine, and video production that gives brands and stories real cinematic weight — B-roll, interviews, and the intros/outros that tie a video together. Every project gets the same standard: clean composition, honest light, and a final result that feels premium, not templated.",
  // Note: not currently rendered anywhere on the site (kept for future
  // use) — contactInfo.locationLabel in contact-config.ts is the one that
  // actually shows up in the Contact section and Footer.
  location: "Available for projects worldwide",
  yearsActive: 10,
  seo: {
    title: "xFinta | Murtada AlHajari",
    titleTemplate: "%s | xFinta",
    description:
      "xFinta is the creative studio of Murtada AlHajari — professional photography and video production covering product, wedding, and architecture photography, plus B-roll, interviews, and cinematic video production.",
    keywords: [
      "xFinta",
      "Murtada AlHajari",
      "video production",
      "B-roll videos",
      "interview videography",
      "product photography",
      "wedding photography",
      "architecture photography",
      "cinematic video",
    ],
    // TODO: "xfinta.com" is a made-up placeholder domain — I don't know if
    // you own this domain or plan to use a different one. This value feeds
    // the sitemap, robots.txt, canonical URLs, and Open Graph tags, so it
    // needs to match wherever the site actually ends up deployed.
    siteUrl: "https://xfinta.com",
  },
};
