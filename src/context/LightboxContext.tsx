"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { PortfolioImage } from "@/types";

interface LightboxContextValue {
  isOpen: boolean;
  items: PortfolioImage[];
  currentIndex: number;
  direction: number;
  open: (items: PortfolioImage[], startIndex: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<PortfolioImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const value = useMemo<LightboxContextValue>(
    () => ({
      isOpen,
      items,
      currentIndex,
      direction,
      open: (nextItems, startIndex) => {
        setItems(nextItems);
        setCurrentIndex(startIndex);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
      next: () => {
        setDirection(1);
        setCurrentIndex((i) => (i + 1) % items.length);
      },
      prev: () => {
        setDirection(-1);
        setCurrentIndex((i) => (i - 1 + items.length) % items.length);
      },
    }),
    [isOpen, items, currentIndex, direction]
  );

  return <LightboxContext.Provider value={value}>{children}</LightboxContext.Provider>;
}
