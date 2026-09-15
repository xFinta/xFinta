import type { ContactBackgroundVideo, ContactInfo } from "@/types";

// TODO: confirm this is the number you want displayed/dialed from the site.
const PHONE_DISPLAY = "+966 57 078 0499";
const PHONE_HREF = "tel:+966570780499";
const WHATSAPP_HREF = "https://wa.me/966570780499";
const INSTAGRAM_HANDLE = "@x.finta";

/**
 * Instagram, WhatsApp, and phone are the only contact channels shown —
 * no email, by design (faster replies, fewer places to check). Update
 * hrefs/handles with real values.
 */
export const contactInfo: ContactInfo = {
  // TODO: "Based in the Gulf region" is a generic placeholder — replace with
  // a real city/region if you want to be more specific (or leave as-is if
  // you'd rather not disclose an exact location).
  locationLabel: "Based in the Gulf region",
  phoneDisplay: PHONE_DISPLAY,
  phoneHref: PHONE_HREF,
  whatsappHref: WHATSAPP_HREF,
  socials: [
    {
      platform: "whatsapp",
      label: "WhatsApp",
      detail: PHONE_DISPLAY,
      href: WHATSAPP_HREF,
    },
    {
      platform: "instagram",
      label: "Instagram",
      detail: INSTAGRAM_HANDLE,
      href: "https://instagram.com/x.finta",
    },
    {
      platform: "phone",
      label: "Call",
      detail: PHONE_DISPLAY,
      href: PHONE_HREF,
    },
  ],
};

/**
 * Autoplays (muted, looped) once the Contact section scrolls into view.
 * background.mp4 has been added — TODO: still missing poster.jpg (the
 * fallback frame shown before the video loads). See the README in
 * public/media/contact/ for details.
 */
export const contactBackgroundVideo: ContactBackgroundVideo = {
  src: "/media/contact/background.mp4",
  poster: "/media/contact/poster.jpg",
};
