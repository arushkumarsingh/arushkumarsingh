"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/50 bg-white/75 backdrop-blur-md transition-colors dark:border-neutral-800/50 dark:bg-neutral-950/75">
      <div className="layout-container flex h-16 items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-base font-bold tracking-tight text-neutral-900 transition-colors hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400"
        >
          Arush Kumar Singh
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-l border-neutral-200 pl-2 dark:border-neutral-800">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="space-y-2 border-b border-neutral-200 bg-white px-4 py-3 sm:hidden dark:border-neutral-800 dark:bg-neutral-950">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-neutral-700 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
