"use client";

import { useEffect } from "react";
import { useLenisContext } from "@/context/SmoothScrollProvider";

export function useLockBodyScroll(locked: boolean) {
  const { lenis } = useLenisContext();

  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [locked, lenis]);
}
