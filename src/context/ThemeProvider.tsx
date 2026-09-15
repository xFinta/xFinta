"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  /** False until after the first client render commits. Consumers that
   *  render theme-dependent markup (e.g. a sun/moon icon) must gate on this
   *  and render a neutral placeholder while false — the CSS theme itself
   *  already applies instantly via the no-FOUC inline script in layout.tsx,
   *  but React's own render output must stay identical to the server's
   *  "dark" default until after hydration, or React treats the divergence
   *  as a hydration failure and discards the script's DOM fix. */
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  mounted: false,
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

const STORAGE_KEY = "finta-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(current);
    setMounted(true);
  }, []);

  const setTheme = (next: Theme) => {
    const root = document.documentElement;
    root.classList.remove(next === "dark" ? "light" : "dark");
    root.classList.add(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    setThemeState(next);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
