import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
}

/** Ambient animated background glow used across sections for depth. */
export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl opacity-30 animate-pulse",
        className
      )}
      style={{
        background:
          "radial-gradient(circle, var(--raw-accent) 0%, transparent 70%)",
        animationDuration: "6s",
      }}
    />
  );
}
