"use client";

import Link from "next/link";
import { siteConfig } from "@/config";
import { useLocaleContext } from "@/context/LocaleProvider";

export default function NotFound() {
  const { t } = useLocaleContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-display text-7xl text-accent">404</span>
      <h1 className="font-display text-2xl text-text">{t.notFound.heading}</h1>
      <p className="max-w-sm text-text-muted">{t.notFound.body(siteConfig.name)}</p>
      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
      >
        {t.notFound.cta}
      </Link>
    </main>
  );
}
