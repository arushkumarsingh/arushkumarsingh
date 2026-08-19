import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200/60 py-10 dark:border-neutral-800/60">
      <div className="layout-container flex flex-col items-center justify-between gap-4 text-xs text-neutral-500 sm:flex-row dark:text-neutral-400">
        <div>
          <p>© {currentYear} Arush Kumar Singh. All rights reserved.</p>
          <p className="mt-1 text-neutral-400 dark:text-neutral-500">
            Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/arushkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md p-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/arush-kumar-singh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/Arushkumarsing3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="rounded-md p-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:arush17kvbasti.2014@gmail.com"
            aria-label="Email"
            className="rounded-md p-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
