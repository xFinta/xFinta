"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "@/types";
import { dirForLocale } from "@/types";
import { translations, type Dictionary } from "@/lib/translations";

interface LocaleContextValue {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  dir: "ltr",
  t: translations.en,
  toggleLocale: () => {},
});

export function useLocaleContext() {
  return useContext(LocaleContext);
}

export const LOCALE_STORAGE_KEY = "finta-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Starts "en" to match the server-rendered HTML exactly (same reasoning
  // as ThemeProvider): a lazy localStorage read here would diverge from
  // the server on the very first client render and fail hydration across
  // nearly every component on the page (almost everything renders
  // translated text) — far worse than the single-icon mismatch theme had.
  // The no-FOUC inline script in layout.tsx already fixed <html>'s
  // lang/dir before paint, so only the *text* lags one tick behind for a
  // returning Arabic visitor, not the layout direction itself.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === "ar") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState("ar");
    }
  }, []);

  const toggleLocale = () => {
    const next: Locale = locale === "en" ? "ar" : "en";
    const dir = dirForLocale(next);
    document.documentElement.lang = next;
    document.documentElement.dir = dir;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    setLocaleState(next);
  };

  return (
    <LocaleContext.Provider
      value={{ locale, dir: dirForLocale(locale), t: translations[locale], toggleLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
