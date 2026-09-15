"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/context/ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-text transition-colors hover:bg-surface-2/70",
        className
      )}
    >
      {/* Until mounted, render nothing theme-specific — the real (possibly
          light) theme is applied to the DOM instantly via the no-FOUC
          script, but this component's own output must match the server's
          "dark" render on first client paint or hydration fails. */}
      {mounted ? (
        isDark ? (
          <Sun className="h-[18px] w-[18px]" aria-hidden />
        ) : (
          <Moon className="h-[18px] w-[18px]" aria-hidden />
        )
      ) : (
        <span className="h-[18px] w-[18px]" aria-hidden />
      )}
    </button>
  );
}
