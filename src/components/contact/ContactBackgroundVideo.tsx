"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLocaleContext } from "@/context/LocaleProvider";
import type { ContactBackgroundVideo as ContactBackgroundVideoConfig } from "@/types";

interface ContactBackgroundVideoProps {
  video: ContactBackgroundVideoConfig;
  containerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Muted, looping background video that plays only while the Contact section
 * is actually in view (saves resources off-screen, and is what "autoplay
 * when the user reaches the page" means on a one-page site). Falls back to
 * a static branded gradient if the file isn't there yet or fails to load,
 * and respects prefers-reduced-motion by never auto-playing.
 */
export function ContactBackgroundVideo({ video, containerRef }: ContactBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useLocaleContext();
  const isInView = useInView(containerRef, { margin: "-20% 0px" });

  useEffect(() => {
    const el = videoRef.current;
    if (!el || hasError || prefersReducedMotion) return;

    if (isInView && !isUserPaused) {
      el.play().catch(() => {
        // Autoplay can still be rejected by some mobile browsers even when
        // muted — the poster frame / gradient stays visible either way.
      });
    } else {
      el.pause();
    }
  }, [isInView, isUserPaused, hasError, prefersReducedMotion]);

  const showGradientFallback = hasError || prefersReducedMotion;

  return (
    <div className="absolute inset-0">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {!showGradientFallback && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={video.poster}
            onError={() => setHasError(true)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        )}

        {showGradientFallback && (
          <div
            className="absolute inset-0"
            style={{ background: "var(--raw-gradient-hero)" }}
          />
        )}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,9,11,0.55) 0%, rgba(8,9,11,0.8) 70%, rgba(8,9,11,0.96) 100%)",
          }}
        />
      </div>

      {!showGradientFallback && (
        <button
          onClick={() => setIsUserPaused((paused) => !paused)}
          aria-label={isUserPaused ? t.contact.playVideo : t.contact.pauseVideo}
          className="absolute bottom-4 z-10 flex h-9 w-9 items-center justify-center rounded-full glass-hero text-hero-text transition-colors hover:text-hero-accent ltr:right-4 rtl:left-4"
        >
          {isUserPaused ? (
            <Play className="h-4 w-4" aria-hidden />
          ) : (
            <Pause className="h-4 w-4" aria-hidden />
          )}
        </button>
      )}
    </div>
  );
}
