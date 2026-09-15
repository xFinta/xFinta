"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, t, toggleLocale } = useLocaleContext();
  const isEnglish = locale === "en";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={isEnglish ? t.language.toArabic : t.language.toEnglish}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold tracking-wide text-text transition-colors hover:bg-surface-2/70",
        className
      )}
    >
      {isEnglish ? "عربي" : "EN"}
    </button>
  );
}
