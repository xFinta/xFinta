// import { clientLogos } from "@/config";

// export function ClientLogoMarquee() {
//   const doubled = [...clientLogos, ...clientLogos];

//   return (
//     <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//       <div className="flex w-max gap-16 motion-safe:animate-[marquee_28s_linear_infinite]">
//         {doubled.map((client, index) => (
//           <span
//             key={`${client.id}-${index}`}
//             className="whitespace-nowrap font-display text-xl text-text-muted/70"
//           >
//             {client.name}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
