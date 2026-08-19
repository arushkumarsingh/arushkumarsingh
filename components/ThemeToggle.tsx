"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div className="h-9 w-9 rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900" />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-neutral-100/80 text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-white"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 scale-100 rotate-0 text-amber-400 transition-transform duration-200" />
      ) : (
        <Moon className="h-4 w-4 scale-100 rotate-0 text-neutral-700 transition-transform duration-200" />
      )}
    </button>
  );
}
