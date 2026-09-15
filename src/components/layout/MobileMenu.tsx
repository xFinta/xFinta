"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";
import { useLocaleContext } from "@/context/LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLink[];
  activeId: string;
  onNavigate: (sectionId: string) => void;
  onClose: () => void;
}

export function MobileMenu({ isOpen, links, activeId, onNavigate, onClose }: MobileMenuProps) {
  useLockBodyScroll(isOpen);
  const { t } = useLocaleContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[95] flex flex-col bg-ink/98 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.ul
            className="flex flex-1 flex-col items-center justify-center gap-5 overflow-y-auto py-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.07, 0.1)}
          >
            {links.map((link) => (
              <motion.li key={link.sectionId} variants={fadeUp}>
                <button
                  onClick={() => {
                    onNavigate(link.sectionId);
                    onClose();
                  }}
                  className={cn(
                    "font-display text-2xl sm:text-3xl transition-colors",
                    link.sectionId === activeId ? "text-accent" : "text-text hover:text-accent"
                  )}
                >
                  {t.navLabels[link.sectionId]}
                </button>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex justify-center gap-3 pb-10">
            <LanguageToggle className="border border-border" />
            <ThemeToggle className="border border-border" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
