"use client";

import { useRef, type PointerEvent } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 });

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}
