"use client";

import { useMemo } from "react";
import { portfolioImages, videos, services } from "@/config";
import { useLocaleContext } from "@/context/LocaleProvider";
import { localizeContent, portfolioContentAr, videoContentAr, serviceContentAr } from "@/lib/content-translations";
import type { PortfolioImage, VideoItem, Service } from "@/types";

export function useLocalizedPortfolioImages(): PortfolioImage[] {
  const { locale } = useLocaleContext();
  return useMemo(
    () => portfolioImages.map((image) => localizeContent(image, portfolioContentAr, locale)),
    [locale]
  );
}

export function useLocalizedVideos(): VideoItem[] {
  const { locale } = useLocaleContext();
  return useMemo(() => videos.map((video) => localizeContent(video, videoContentAr, locale)), [locale]);
}

export function useLocalizedServices(): Service[] {
  const { locale } = useLocaleContext();
  return useMemo(
    () => services.map((service) => localizeContent(service, serviceContentAr, locale)),
    [locale]
  );
}
