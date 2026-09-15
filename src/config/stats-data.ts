import type { StatItem } from "@/types";
import { siteConfig } from "./site-config";

// TODO: all 4 numbers below are guesses I made up as placeholders — none
// are based on real data. Replace with your actual counts before launch
// (these animate as a count-up in the About section, so they're prominent).
export const stats: StatItem[] = [
  {
    id: "st-years",
    label: "Years of Experience",
    value: siteConfig.yearsActive,
    suffix: "+",
  },
  { id: "st-projects", label: "Projects Delivered", value: 100, suffix: "+" },
  { id: "st-clients", label: "Happy Clients", value: 90, suffix: "+" },
  { id: "st-videos", label: "Videos Produced", value: 60, suffix: "+" },
];
