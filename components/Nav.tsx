"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export const NAV_ITEMS = [
  { label: "overview", id: "overview" },
  { label: "projects", id: "projects" },
  { label: "experience", id: "experience" },
  { label: "writing", id: "writing" },
  { label: "books", id: "books" },
  { label: "contact", id: "contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Listen for custom open-section events and hashchange
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (NAV_ITEMS.some((item) => item.id === hash)) {
        setActiveSection(hash);
      } else if (!hash) {
        setActiveSection(null);
      }
    };

    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string | null>;
      setActiveSection(customEvent.detail ?? null);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener("open-section", handleCustomEvent as EventListener);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("open-section", handleCustomEvent as EventListener);
    };
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (activeSection === id) {
      // Toggle closed if clicked again
      history.pushState(null, "", window.location.pathname);
      window.dispatchEvent(new CustomEvent("open-section", { detail: null }));
      setActiveSection(null);
    } else {
      window.location.hash = id;
      window.dispatchEvent(new CustomEvent("open-section", { detail: id }));
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.pushState(null, "", window.location.pathname);
    window.dispatchEvent(new CustomEvent("open-section", { detail: null }));
    setActiveSection(null);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="layout-container flex items-center justify-between h-14">
        {/* Brand logo & tagline indicator */}
        <a
          href="/"
          onClick={handleBrandClick}
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-indigo-700 dark:hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <span>
            <span className="font-light">Arush Kumar</span> <span className="font-bold">Singh</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono font-normal text-neutral-500 dark:text-neutral-400">
            · portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-mono lowercase font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`transition-colors cursor-pointer ${
                  isActive
                    ? "text-indigo-700 dark:text-cyan-400 font-bold underline underline-offset-4"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-indigo-700 dark:hover:text-cyan-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`block py-1.5 font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-indigo-700 dark:text-cyan-400 font-bold underline underline-offset-4"
                    : "text-neutral-800 dark:text-neutral-200 hover:text-indigo-700 dark:hover:text-cyan-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
