import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";
import { GallerySection } from "@/components/gallery/GallerySection";

// Below-the-fold sections are still server-rendered for content/SEO, but
// split into separate chunks so they don't add to the critical initial
// JS bundle that has to parse/execute before the Hero becomes interactive.
const ServicesSection = dynamic(() =>
  import("@/components/services/ServicesSection").then((mod) => mod.ServicesSection)
);
const AboutSection = dynamic(() =>
  import("@/components/about/AboutSection").then((mod) => mod.AboutSection)
);
// const TestimonialsSection = dynamic(() =>
//   import("@/components/testimonials/TestimonialsSection").then((mod) => mod.TestimonialsSection)
// );
const ContactSection = dynamic(() =>
  import("@/components/contact/ContactSection").then((mod) => mod.ContactSection)
);
const BookingCTABand = dynamic(() =>
  import("@/components/booking-cta/BookingCTABand").then((mod) => mod.BookingCTABand)
);

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <GallerySection />
      <ServicesSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <BookingCTABand />
    </main>
  );
}
