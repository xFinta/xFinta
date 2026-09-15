import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function Badge({ children, className, active }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
