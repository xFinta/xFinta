"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Registers ScrollTrigger exactly once. GSAP owns all pinned/scrubbed scroll
 * timelines; Framer Motion owns simple declarative reveals. Never animate the
 * same CSS property of the same element with both systems.
 */
export function ensureGsapRegistered() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
