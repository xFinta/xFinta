export function LocalVideoPlayer({ src }: { src: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-surface">
      <video
        src={src}
        controls
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
