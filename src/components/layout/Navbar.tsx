"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useLenisContext } from "@/context/SmoothScrollProvider";
import { useLocaleContext } from "@/context/LocaleProvider";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollTo, lenis } = useLenisContext();
  const { t } = useLocaleContext();
  const sectionIds = navLinks.map((link) => link.sectionId);
  const activeId = useScrollSpy(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 20);
    setIsHidden(latest > 200 && latest > previous);
  });

  const handleNavigate = (sectionId: string) => {
    // The mobile menu calls lenis.stop() while open (see useLockBodyScroll).
    // If the menu's link is tapped, this runs before that stop is undone by
    // React's effect cleanup, so Lenis must be resumed here first — otherwise
    // lenis.scrollTo() silently no-ops while isStopped is still true.
    lenis?.start();
    scrollTo(`#${sectionId}`);
  };

  const isHeaderHidden = isHidden && !isMobileMenuOpen;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[80] flex justify-center px-4 pt-4"
        animate={{ y: isHeaderHidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            isScrolled ? "glass shadow-lg" : "bg-transparent"
          )}
        >
          <button
            onClick={() => handleNavigate("home")}
            className={cn(
              "font-display text-lg tracking-[0.15em]",
              isScrolled ? "text-text" : "text-hero-text"
            )}
          >
            {siteConfig.logoText}
          </button>

          <NavLinks
            links={navLinks}
            activeId={activeId}
            onNavigate={handleNavigate}
            isScrolled={isScrolled}
            className="hidden md:flex"
          />

          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageToggle
              className={isScrolled ? undefined : "text-hero-text hover:bg-white/10"}
            />
            <ThemeToggle
              className={isScrolled ? undefined : "text-hero-text hover:bg-white/10"}
            />

            <button
              onClick={() => handleNavigate("contact")}
              className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              {t.nav.bookSession}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label={t.nav.openMenu}
              className={cn("md:hidden", isScrolled ? "text-text" : "text-hero-text")}
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={navLinks}
        activeId={activeId}
        onNavigate={handleNavigate}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {isMobileMenuOpen && (
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label={t.nav.closeMenu}
          className="fixed top-6 z-[96] text-text md:hidden ltr:right-6 rtl:left-6"
        >
          <X className="h-7 w-7" aria-hidden />
        </button>
      )}
    </>
  );
}
