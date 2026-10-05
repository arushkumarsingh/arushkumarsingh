import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-neutral-200/80 dark:border-neutral-800/80 py-8">
      <div className="layout-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div>
          <p>© {currentYear} Arush Kumar Singh. All rights reserved.</p>
          <p className="mt-0.5 text-neutral-400 dark:text-neutral-500">Powered by Next.js & al-folio theme design.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/arushkumarsingh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/arush-kumar-singh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/Arushkumarsing3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="p-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:arush17kvbasti.2014@gmail.com"
            aria-label="Email"
            className="p-1.5 rounded-md hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
