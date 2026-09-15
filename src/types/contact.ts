export type SocialPlatform =
  | "instagram"
  | "tiktok"
  | "facebook"
  | "whatsapp"
  | "email"
  | "phone";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Shown as a subtitle under the label (handle, number, etc.) so the
   *  channel reads clearly at a glance instead of just a generic name. */
  detail?: string;
  href: string;
}

export interface ContactInfo {
  locationLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  socials: SocialLink[];
}

export interface ContactBackgroundVideo {
  /** Path under /public/media — see public/media/contact/README.md */
  src: string;
  poster?: string;
}
