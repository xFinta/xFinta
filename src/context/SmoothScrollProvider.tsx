"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type Lenis from "lenis";
import { createLenis } from "@/lib/lenis";
import { gsap, ScrollTrigger, ensureGsapRegistered } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: object) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useLenisContext() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    ensureGsapRegistered();
    const instance = createLenis();
    // Lenis requires the DOM, so it's created here and its handle exposed via
    // context for consumers (Navbar, BackToTopButton, useLockBodyScroll).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance);

    const onScroll = () => ScrollTrigger.update();
    instance.on("scroll", onScroll);

    const tickerCallback = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      gsap.ticker.remove(tickerCallback);
      instance.off("scroll", onScroll);
      resizeObserver.disconnect();
      instance.destroy();
      setLenis(null);
    };
  }, [prefersReducedMotion]);

  const scrollTo: SmoothScrollContextValue["scrollTo"] = (target, options) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: -80, ...options });
    } else if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
