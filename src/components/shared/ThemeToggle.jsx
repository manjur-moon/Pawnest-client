"use client";

import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, themeReady, toggleTheme } = useTheme();
  if (!themeReady) return <div className="h-10 w-10 animate-pulse rounded-full bg-orange-100"></div>;

  return (
    <button type="button" onClick={toggleTheme} className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-100 bg-slate-950 text-orange-400 shadow-lg shadow-slate-900/10 transition hover:scale-105 hover:bg-slate-900" aria-label="Toggle theme" title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
