# B-roll Videos

Drop your B-roll clips (and their thumbnails) here using these exact
filenames — each one is already wired up in `src/config/videos-data.ts`.

| Video file | Thumbnail file | Config entry (id) | Title | Status |
|---|---|---|---|---|
| b-roll-01.mp4 | b-roll-01.png | broll-01 | Al-Baraha — The Qatifi House | ✅ video + thumbnail uploaded, title verified from the real thumbnail |
| b-roll-02.mp4 | b-roll-02.png | broll-02 | Pure Commercial Product Video | ✅ video + thumbnail uploaded, title verified from the real thumbnail |
| b-roll-03.mp4 | b-roll-03.png | broll-03 | Innovation Coffee Shop Aesthetic Tour | ✅ video + thumbnail uploaded, title verified from the real thumbnail |
| b-roll-04.mp4 | b-roll-04.png | broll-04 | Jo's Cinematic Pastry Craft | ✅ video + thumbnail uploaded, title verified from the real thumbnail |
| b-roll-05.mp4 | b-roll-05.png | broll-05 | Al Bahaar's Vibrant Ice Cream | ✅ video + thumbnail uploaded, title verified from the real thumbnail |

All 5 durations in `videos-data.ts` are still unverified guesses (a thumbnail confirms the *subject*, not the *length*) — confirm the real lengths if you want the on-card duration badges accurate.

Every entry above already has its `posterSrc` pointed at the matching
`.png` filename in `videos-data.ts` — drop the image in with that exact
name and the real thumbnail shows up automatically, no code changes.

## Thumbnails — `posterSrc`, not `thumbnailSeed`

Each video card's thumbnail is a **real image file**, wired up via the
`posterSrc` field — **not** `thumbnailSeed`. Those are two different things:

- `thumbnailSeed` — just a short text label (e.g. `"broll-01"`) used to
  generate a deterministic *gradient color* for the placeholder box. It is
  never a file path, and every entry already has one — nothing to do here.
- `posterSrc` — the actual path to a real thumbnail image, e.g.
  `/media/video-production/b-roll/b-roll-01.png`. This is what shows a real
  picture instead of the gradient. All 5 entries in this category already
  have this field pointed at their expected filename — you just need to
  drop the image in.

```ts
{
  id: "broll-01",
  // ...
  thumbnailSeed: "broll-01",                                    // gradient seed, already set, ignore
  posterSrc: "/media/video-production/b-roll/b-roll-01.png",    // drop a real image here
}
```

Once a video has a real `posterSrc`, I can actually read its thumbnail
image and correct the title/description against it (like I did for
broll-01, which turned out to be "Al-Baraha — The Qatifi House," not
"Product Line B-roll"). I can't do the same for raw `.mp4` files — I can
only view images, not play video — so a thumbnail is the fastest way to
get an accurate title without you typing it in yourself.

**Format:** `.mp4` (H.264) for video, `.jpg`/`.png`/`.webp` for thumbnails
— a frame grabbed from the video itself works great.
