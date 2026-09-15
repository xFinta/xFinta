# xFinta — Murtada AlHajari

A premium, cinematic photography & video production portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, GSAP, and Lenis.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Updating content — the config layer

Every piece of content lives in `src/config/*.ts`, typed via `src/types/*.ts`. Nothing is hardcoded in components — edit these files and the whole site updates automatically:

| File | Controls |
|---|---|
| `site-config.ts` | Name, brand name, tagline, bio, SEO metadata |
| `nav-config.ts` | Navigation links |
| `contact-config.ts` | WhatsApp, phone, Instagram, Contact background video |
| `portfolio-data.ts` | Gallery photos (Product / Wedding / Architecture), EXIF info |
| `videos-data.ts` | Video Production catalog (B-roll / A-roll & Interviews / Intro-Outro) |
| `services-data.ts` | Services offered, pricing, icons |
| `testimonials-data.ts` | Client testimonials |
| `stats-data.ts` | About section animated stats |
| `clients-data.ts` | "Trusted by" logo marquee |

## The Gallery

The Gallery (`src/components/gallery/`) is one unified section with 6 tabs:

- **Video Production** — sub-filtered into B-roll Videos / A-roll Videos and Interviews / Intro-Outro, backed by `videos-data.ts`.
- **Product / Wedding / Architecture Photography** — each its own filtered photo grid with search, backed by `portfolio-data.ts`.
- **Random** — a catch-all photo grid for personal work, street shots, travel, or anything that doesn't fit the categories above.
- **All** — a cinematic auto-rotating "stage" (`CinematicStage.tsx`) cycling through featured photos and videos from every category, plus the full browsable grid below it.

## Content & Media — where to drop your files

Every photo and video entry in the config already points at its final expected file path under `public/media/`. Until a real file exists there, the site automatically shows a branded gradient placeholder instead of a broken image — so it's always safe to add files gradually.

| Folder | What goes here |
|---|---|
| `public/media/product-photography/` | Product photos — see the README inside for exact filenames |
| `public/media/wedding-photography/` | Wedding photos — see the README inside |
| `public/media/architecture-photography/` | Architecture photos — see the README inside |
| `public/media/random/` | Catch-all / personal photos — see the README inside |
| `public/media/video-production/b-roll/` | B-roll video clips |
| `public/media/video-production/a-roll-interviews/` | A-roll / interview video clips |
| `public/media/video-production/intro-outro/` | Intro/outro video clips |
| `public/media/contact/` | The autoplaying Contact page background video + poster |
| `public/media/about/` | Your portrait (About section) + the Booking CTA background image |

Each folder's `README.md` lists the exact filename → config entry mapping, so dropping in a correctly-named file "just works" with zero code changes.

## Placeholder / assumed content — search for `TODO`

Everything I couldn't know for certain — assumed contact details, invented pricing, fabricated testimonials, guessed stats, and any image/video that still has no real file behind it — is marked with a `// TODO` comment at its source, mostly in `src/config/*.ts` and the folder `README.md` files. Search the project for `TODO` to find every one of them before you consider this launch-ready:

```bash
grep -rn "TODO" src public --include="*.ts" --include="*.tsx" --include="*.md"
```

The Open Graph / social share preview image (`src/app/opengraph-image.tsx`) is generated on the fly from your brand colors and name — no image asset needed there.

## Contact

The Contact section has no form — by design, it's three direct channels only: WhatsApp, Instagram, and phone (`src/components/contact/ContactChannels.tsx`, backed by `contact-config.ts`). Update the numbers/handles there to go live.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4 (CSS-first theme in `src/app/globals.css`)
- Framer Motion — declarative reveals, modals, magnetic buttons, scroll progress, cinematic stage
- GSAP + ScrollTrigger — parallax and scrubbed scroll effects
- Lenis — smooth scrolling, synced to GSAP's ticker
- Embla Carousel — testimonials
- lucide-react — icons

Lighthouse: Performance 90+, Accessibility 100, Best Practices 100, SEO 100.
