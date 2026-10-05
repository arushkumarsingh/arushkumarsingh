"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "overview", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "writing", href: "#writing" },
  { label: "books", href: "#books" },
  { label: "contact", href: "#contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="layout-container flex items-center justify-between h-14">
        {/* Brand logo & tagline indicator */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-indigo-700 dark:hover:text-cyan-400 transition-colors"
        >
          <span>
            <span className="font-light">Arush Kumar</span> <span className="font-bold">Singh</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono font-normal text-neutral-500 dark:text-neutral-400">
            · archive
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-mono lowercase font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-700 dark:hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pl-2 border-l border-neutral-200 dark:border-neutral-800">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-1.5 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3 space-y-2 text-xs font-mono lowercase">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 font-medium text-neutral-800 dark:text-neutral-200 hover:text-indigo-700 dark:hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
