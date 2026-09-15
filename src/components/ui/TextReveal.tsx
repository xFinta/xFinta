"use client";

import { motion, type Variants } from "framer-motion";
import { EASE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  wordDelay?: number;
}

const containerVariants = (delay: number, wordDelay: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: wordDelay, delayChildren: delay },
  },
});

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: EASE.out },
  },
};

/**
 * Word-by-word reveal animation for hero/section headlines.
 *
 * The `whileInView` trigger lives on the outer, unclipped wrapper — not on
 * the individual masked words. IntersectionObserver factors in ancestor
 * `overflow-hidden` clipping, and each word starts translated fully outside
 * its own clip box; observing the word itself would report zero
 * intersection forever and `once: true` would never fire. Children instead
 * inherit the hidden/visible animation state via Framer Motion's variant
 * propagation.
 */
export function TextReveal({
  text,
  className,
  as: Component = "span",
  delay = 0,
  wordDelay = 0.08,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Component className={cn("inline-block", className)}>
      <motion.span
        className="inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={containerVariants(delay, wordDelay)}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-block overflow-hidden align-top"
          >
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
              {index < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
