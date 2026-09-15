"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/config";
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from "@/components/ui/icons/SocialIcons";
import { useLocaleContext } from "@/context/LocaleProvider";
import { EASE } from "@/lib/constants";
import type { SocialPlatform } from "@/types";

const socialIcons: Record<SocialPlatform, React.ComponentType<{ className?: string }>> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
  phone: Phone,
  email: Phone,
};

/**
 * The centerpiece of the Contact section — three equal, direct channels
 * (WhatsApp, Instagram, Call). No form, no email: the fastest path from
 * "interested" to "talking to Murtada" is a single tap.
 */
export function ContactChannels() {
  const { t } = useLocaleContext();

  return (
    <div>
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {t.contact.channelsLabel}
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {contactInfo.socials.map((social, index) => {
          const Icon = socialIcons[social.platform];
          return (
            <motion.a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE.out, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface/50 px-6 py-10 text-center transition-[color,background-color,border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-glow"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
                <Icon className="h-7 w-7" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl text-text">{social.label}</span>
                {social.detail && (
                  <span dir="ltr" className="text-sm text-text-muted">
                    {social.detail}
                  </span>
                )}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
