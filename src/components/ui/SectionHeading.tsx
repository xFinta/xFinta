"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion-variants";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={fadeUp}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      {eyebrow && (
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text">
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-xl text-text-muted", align === "center" ? "mx-auto" : "")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
