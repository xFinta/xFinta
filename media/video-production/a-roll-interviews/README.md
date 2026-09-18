# A-roll Videos and Interviews

Unlike B-roll and Intro/Outro, these run 2+ minutes — too heavy to
self-host as local files (large downloads, no adaptive quality, bloats
the deployed project). Instead they're hosted on **YouTube (Unlisted)**
and embedded — not public/searchable, but playable anywhere the link or
video ID is used, which is exactly what the site does.

Wired up in `src/config/videos-data.ts` as `source: { type: "youtube", src: "<video id>" }`,
where `<video id>` is the part after `v=` in the YouTube URL
(e.g. `https://www.youtube.com/watch?v=XO1nI6JCQnI` → `XO1nI6JCQnI`).

| Config entry (id) | Title | YouTube ID |
|---|---|---|
| aroll-01 | Maas Interview | XO1nI6JCQnI |
| aroll-02 | Misk X Mismar | l0cT4NwNnGM |
| aroll-03 | Qatif Race — Nashita 2023 | VXuXg1_qeQw |

**To add or replace one:** upload the video to YouTube as **Unlisted**,
copy its ID from the URL, and update (or add) the matching entry's
`source.src` in `videos-data.ts`. Double-check `durationSeconds` matches
the real length — it drives the duration badge on the video card.

**Thumbnails are automatic** — no upload needed. Each entry's `posterSrc`
is generated from the YouTube ID via `youtubeThumbnailUrl()` (see
`src/lib/utils.ts`), which points at YouTube's own thumbnail image
(`https://img.youtube.com/vi/<id>/hqdefault.jpg`). As soon as you add a
video with a real ID, its real YouTube thumbnail shows up automatically —
you never need to create or drop in a thumbnail file for this category.
