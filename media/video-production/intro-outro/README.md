# Intro / Outro

Drop your intro/outro clips (and their thumbnails) here using these exact
filenames — wired up in `src/config/videos-data.ts`.

| Video file | Thumbnail file | Config entry (id) | Title | Status |
|---|---|---|---|---|
| intro-01.mp4 | intro-01.png | introoutro-01 | Ahl Al-Bayt — Client Intro | ✅ video + thumbnail uploaded — TODO: confirm the exact client/project name (the thumbnail is Arabic calligraphy, my reading of it is a best guess) and the real duration |

`posterSrc` for this entry is already pointed at `intro-01.png` in
`videos-data.ts` — the thumbnail turned out to be a **client's** branded
intro (Arabic calligraphy reading roughly "أهل البيت"), not xFinta's own —
the title was corrected from "xFinta Signature Intro" accordingly.

Only one entry exists right now — there was an "outro" placeholder here
before, but it had no real file behind it and was removed. If you have a
separate outro clip, tell me and I'll add a new entry for it (same
pattern: a `.mp4` + a `.png` thumbnail, both dropped in this folder).

**Format:** `.mp4` (H.264) for video, `.jpg`/`.png`/`.webp` for the
thumbnail — a frame grabbed from the video itself works great.
