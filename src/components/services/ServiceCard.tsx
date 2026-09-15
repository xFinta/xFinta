"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { SECTION_IDS } from "@/lib/constants";
import { EASE } from "@/lib/constants";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const { scrollTo } = useLenisContext();
  const { t } = useLocaleContext();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: EASE.out }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between rounded-2xl border border-border bg-surface/50 p-7 transition-[color,background-color,border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-glow"
    >
      <div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="mt-5 font-display text-xl text-text">{service.title}</h3>
        <p className="mt-2 text-sm text-text-muted">{service.description}</p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={() => scrollTo(`#${SECTION_IDS.contact}`)}
          className="flex items-center gap-1 text-sm font-medium text-accent transition-transform duration-300 ltr:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
        >
          {service.ctaLabel ?? t.services.bookFallback}
          <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
        </button>
      </div>
    </motion.div>
  );
}
