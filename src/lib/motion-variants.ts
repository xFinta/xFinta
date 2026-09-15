import type { Variants } from "framer-motion";
import { EASE } from "./constants";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE.out },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE.out } },
};

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE.out },
  },
};

export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.5, ease: EASE.out } },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: EASE.out },
  },
};
