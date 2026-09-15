import type { NavLink } from "@/types";
import { SECTION_IDS } from "@/lib/constants";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: SECTION_IDS.home },
  { label: "Gallery", href: "#gallery", sectionId: SECTION_IDS.gallery },
  { label: "Services", href: "#services", sectionId: SECTION_IDS.services },
  { label: "About", href: "#about", sectionId: SECTION_IDS.about },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  //   sectionId: SECTION_IDS.testimonials,
  // },
  { label: "Contact", href: "#contact", sectionId: SECTION_IDS.contact },
];
