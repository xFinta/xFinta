"use client";

import { cn } from "@/lib/utils";
import { useLocaleContext } from "@/context/LocaleProvider";
import type { NavLink } from "@/types";

interface NavLinksProps {
  links: NavLink[];
  activeId: string;
  onNavigate: (sectionId: string) => void;
  className?: string;
  /** True once the navbar has its glass background (theme-colored surface).
   *  False means the navbar is transparent over the always-dark Hero, so
   *  inactive links need theme-independent light text instead of the
   *  normal (theme-aware) muted token. */
  isScrolled?: boolean;
}

export function NavLinks({
  links,
  activeId,
  onNavigate,
  className,
  isScrolled = true,
}: NavLinksProps) {
  const { t } = useLocaleContext();

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {links.map((link) => {
        const isActive = link.sectionId === activeId;
        return (
          <li key={link.sectionId} className="relative">
            <button
              onClick={() => onNavigate(link.sectionId)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                isActive
                  ? "text-accent"
                  : isScrolled
                    ? "text-text-muted hover:text-text"
                    : "text-hero-text-muted hover:text-hero-text"
              )}
            >
              {t.navLabels[link.sectionId]}
              {isActive && (
                <span className="absolute bottom-0.5 left-4 right-4 h-px bg-accent" aria-hidden />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
