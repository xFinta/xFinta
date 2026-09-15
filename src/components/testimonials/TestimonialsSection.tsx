// "use client";

// import dynamic from "next/dynamic";
// import { SECTION_IDS } from "@/lib/constants";
// import { SectionHeading } from "@/components/ui/SectionHeading";

// const TestimonialCarousel = dynamic(
//   () => import("./TestimonialCarousel").then((mod) => mod.TestimonialCarousel),
//   { ssr: false }
// );

// export function TestimonialsSection() {
//   return (
//     <section
//       id={SECTION_IDS.testimonials}
//       className="mx-auto max-w-7xl px-6 py-28 sm:py-36"
//       aria-label="Testimonials"
//     >
//       <SectionHeading
//         eyebrow="Kind Words"
//         title="Stories From the People I've Worked With"
//         className="mb-14"
//       />
//       <TestimonialCarousel />
//     </section>
//   );
// }
