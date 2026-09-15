"use client";

import { Phone, Mail } from "lucide-react";
import { navLinks, siteConfig, contactInfo } from "@/config";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/icons/SocialIcons";
import type { SocialPlatform } from "@/types";

const socialIcons: Record<SocialPlatform, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
  phone: Phone,
  email: Mail,
};

export function Footer() {
  const { scrollTo } = useLenisContext();
  const { t } = useLocaleContext();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div>
            <button
              onClick={() => scrollTo("#home")}
              className="font-display text-2xl tracking-[0.15em] text-text"
            >
              {siteConfig.logoText}
            </button>
            <p className="mt-3 max-w-xs text-sm text-text-muted">{t.site.tagline}</p>
          </div>

          <nav aria-label={t.footer.navAriaLabel}>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollTo(`#${link.sectionId}`)}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {t.navLabels[link.sectionId]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-4">
            {contactInfo.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target={social.platform === "email" || social.platform === "phone" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-text-muted sm:flex-row">
          <span>{t.footer.copyright(year, siteConfig.name)}</span>
          <span>{contactInfo.locationLabel}</span>
        </div>
      </div>
    </footer>
  );
}
