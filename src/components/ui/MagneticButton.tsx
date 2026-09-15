"use client";

import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type MagneticButtonVariant = "primary" | "outline";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: MagneticButtonVariant;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<MagneticButtonVariant, string> = {
  primary: "bg-accent text-ink shadow-glow",
  // Only ever used over the permanently-dark Hero (see HeroCTAGroup), hence
  // the theme-independent border/text — matches that section's palette.
  outline: "border border-white/25 text-hero-text hover:border-accent hover:bg-white/5",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
}: MagneticButtonProps) {
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic(0.35);

  const sharedClassName = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-[color,background-color,border-color] duration-300",
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={{ x, y }}
        className={sharedClassName}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ x, y }}
      className={sharedClassName}
    >
      {children}
    </motion.button>
  );
}
