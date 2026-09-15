"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import type { PortfolioImage } from "@/types";

export function LightboxInfoPanel({ image }: { image: PortfolioImage }) {
  const { t } = useLocaleContext();
  const exifEntries = image.exif
    ? Object.entries(image.exif).filter(([, value]) => Boolean(value))
    : [];

  return (
    <div className="flex flex-col gap-3 text-center sm:text-start">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {t.gallery.categoryLabels[image.category]}
        </span>
        <h3 className="font-display text-2xl text-text">{image.title}</h3>
        {image.description && (
          <p className="mt-1 max-w-md text-sm text-text-muted">{image.description}</p>
        )}
      </div>

      {exifEntries.length > 0 && (
        <dl className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-text-muted sm:justify-start">
          {exifEntries.map(([key, value]) => (
            <div key={key} className="flex gap-1">
              <dt className="capitalize text-text-muted/70">{key}:</dt>
              <dd className="text-text">{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
