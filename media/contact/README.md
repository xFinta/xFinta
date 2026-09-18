# Contact Page Background Video

This is the muted, looping video that autoplays behind the Contact section
once a visitor scrolls to it (see `src/components/contact/ContactBackgroundVideo.tsx`).

| Filename | Used as | Status |
|---|---|---|
| background.mp4 | The looping background video | ✅ uploaded |
| poster.jpg | Poster frame shown before the video loads | ❌ **missing** — TODO: add this |

Wired up in `src/config/contact-config.ts` (`contactBackgroundVideo`).

**Tips:**
- Keep it short (10–30s) and loop-friendly — no hard cuts at the start/end.
- Landscape orientation, ideally 1920×1080 or larger.
- Keep the file size reasonable (a few MB) since it loads on every visit —
  compress with something like Handbrake if it's large.
- No audio needed; the video is always muted.

Until poster.jpg exists, the video still plays fine — you just won't have a
poster frame shown during the brief moment before it loads. If a file is
ever missing entirely, the section gracefully falls back to a static
branded gradient instead of looking broken.
