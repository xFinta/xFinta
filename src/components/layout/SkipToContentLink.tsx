"use client";

import { useLocaleContext } from "@/context/LocaleProvider";

export function SkipToContentLink() {
  const { t } = useLocaleContext();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-ink focus:font-semibold ltr:focus:left-4 rtl:focus:right-4"
    >
      {t.common.skipToContent}
    </a>
  );
}
