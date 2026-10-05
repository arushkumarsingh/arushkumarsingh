"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="layout-container flex items-center justify-between h-14">
        {/* al-folio brand logo / name */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-indigo-700 dark:hover:text-cyan-400 transition-colors"
        >
          <span className="font-light">Arush Kumar</span> <span className="font-bold">Singh</span>
        </Link>

        {/* Header Theme Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
