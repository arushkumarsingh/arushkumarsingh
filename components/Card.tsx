import React from "react";
import { ArrowUpRight } from "lucide-react";

export interface CardProps {
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  githubUrl?: string;
  role?: string;
  period?: string;
  className?: string;
}

export function Card({ title, description, tags, link, githubUrl, role, period, className = "" }: CardProps) {
  return (
    <div
      className={`group relative rounded-lg border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/60 p-5 transition-all duration-200 hover:border-neutral-300 dark:hover:border-neutral-700 z-depth-1 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-h3 text-neutral-900 dark:text-neutral-100 font-semibold group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5">
            {title}
            {link && link !== "#" && (
              <ArrowUpRight className="w-4 h-4 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            )}
          </h3>

          {role && (
            <p className="mt-0.5 text-xs font-medium text-indigo-600 dark:text-cyan-400">
              {role} {period ? `· ${period}` : ""}
            </p>
          )}
        </div>
      </div>

      {description && <p className="mt-2.5 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{description}</p>}

      {tags && tags.length > 0 && (
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(link || githubUrl) && (
        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs font-mono">
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 rounded border border-indigo-500/30 text-indigo-600 dark:text-cyan-400 hover:bg-indigo-500/10 transition-colors"
            >
              [code]
            </a>
          )}

          {link && link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 rounded border border-indigo-500/30 text-indigo-600 dark:text-cyan-400 hover:bg-indigo-500/10 transition-colors"
            >
              [link]
            </a>
          )}
        </div>
      )}
    </div>
  );
}
