import {
  Film,
  Clapperboard,
  Mic,
  Sparkles,
  Package,
  Heart,
  // Building2, // only used by the commented-out Architecture Photography service below
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "s-video-production",
    title: "Video Production",
    description:
      "End-to-end video production — concept, shoot, edit, and color — for brands that want their story told with real cinematic weight.",
    icon: Film,
    ctaLabel: "Book",
  },
  {
    id: "s-broll",
    title: "B-roll Video",
    description:
      "Supporting footage that shows off a product, a space, or a moment in motion — the most effective way to hold attention and deliver a message.",
    icon: Clapperboard,
    ctaLabel: "Book",
  },
  {
    id: "s-aroll",
    title: "A-roll & Interviews",
    description:
      "Straight-to-camera interviews and testimonials, lit and directed to feel natural — built to carry the narrative of your video.",
    icon: Mic,
    ctaLabel: "Book",
  },
  {
    id: "s-intro-outro",
    title: "Intro / Outro Design",
    description:
      "Branded intro and outro sequences that open and close your videos with a consistent, professional identity.",
    icon: Sparkles,
    ctaLabel: "Book",
  },
  {
    id: "s-product",
    title: "Product Photography",
    description:
      "Clean, precise studio product shots built for e-commerce, packaging, and campaign use.",
    icon: Package,
    ctaLabel: "Book",
  },
  {
    id: "s-wedding",
    title: "Wedding Photography",
    description:
      "Delivered as a story, not a checklist.",
    icon: Heart,
    ctaLabel: "Book",
  },
  // {
  //   id: "s-architecture",
  //   title: "Architecture Photography",
  //   description:
  //     "Twilight exteriors and bright, true-to-space interiors for real estate, hospitality, and commercial listings.",
  //   icon: Building2,
  //   ctaLabel: "Book",
  // },
];
