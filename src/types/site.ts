export interface SeoConfig {
  title: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  siteUrl: string;
}

export interface SiteConfig {
  /** Professional legal name — used in About, footer copyright, formal CTAs. */
  name: string;
  /** Creative brand identity — used in the logo, nav, hero headline. */
  brandName: string;
  logoText: string;
  /** Short professional title shown under the brand name in the Hero. */
  role: string;
  tagline: string;
  shortBio: string;
  bio: string;
  location: string;
  yearsActive: number;
  seo: SeoConfig;
}
