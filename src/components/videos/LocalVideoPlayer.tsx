import { withBasePath } from "@/lib/base-path";

export function LocalVideoPlayer({ src }: { src: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-surface">
      <video
        src={withBasePath(src)}
        controls
        autoPlay
        playsInline
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
