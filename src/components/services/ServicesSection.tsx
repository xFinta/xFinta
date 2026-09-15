"use client";

import { SECTION_IDS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocaleContext } from "@/context/LocaleProvider";
import { useLocalizedServices } from "@/hooks/useLocalizedContent";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const { t } = useLocaleContext();
  const services = useLocalizedServices();

  return (
    <section
      id={SECTION_IDS.services}
      className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
      aria-label={t.services.ariaLabel}
    >
      <SectionHeading
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
        className="mb-14"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
