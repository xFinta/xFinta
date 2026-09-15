"use client";

import { SECTION_IDS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocaleContext } from "@/context/LocaleProvider";
import { ContactChannels } from "./ContactChannels";
import { ContactVideoBand } from "./ContactVideoBand";

export function ContactSection() {
  const { t } = useLocaleContext();

  return (
    <section
      id={SECTION_IDS.contact}
      className="mx-auto max-w-5xl px-6 py-28 sm:py-36"
      aria-label={t.contact.ariaLabel}
    >
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        className="mb-14"
      />

      <ContactVideoBand />

      <ContactChannels />
    </section>
  );
}
