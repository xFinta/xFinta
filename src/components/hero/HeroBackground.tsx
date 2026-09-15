"use client";

import { useEffect, useRef } from "react";
import { gsap, ensureGsapRegistered } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Stands in for a fullscreen cinematic background video/photo. GSAP drives a
 * slow parallax + scale on scroll (owns this element's transform — Framer
 * Motion never touches it, per the parallax/scrub division of labor).
 *
 * TODO: unlike the rest of the site, this one is still a pure CSS gradient
 * with no swap-in path at all — the original brief asked for a fullscreen
 * hero photo or looping video here, but I never wired that up. This is the
 * single most visible element on the whole site (the very first thing a
 * visitor sees), so it's worth prioritizing. Adding it is a small code
 * change (swap this div's background for an <img>/<video> + poster,
 * following the same pattern as ContactBackgroundVideo.tsx), not just a
 * config edit — let me know if you want me to build it once you have the
 * photo or video clip ready.
 */
export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !layerRef.current) return;

    ensureGsapRegistered();
    const ctx = gsap.context(() => {
      gsap.to(layerRef.current, {
        yPercent: 18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={layerRef}
        className="absolute inset-0 scale-110"
        style={{ background: "var(--raw-gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 20%, rgba(91,147,209,0.16) 0%, transparent 60%), radial-gradient(50% 40% at 80% 70%, rgba(91,147,209,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,9,11,0.2) 0%, rgba(8,9,11,0.55) 75%, rgba(8,9,11,0.95) 100%)",
        }}
      />
    </div>
  );
}
