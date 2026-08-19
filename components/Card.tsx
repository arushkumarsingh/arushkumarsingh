import React from "react";

export interface CardProps {
  title?: string;
  description?: string;
  tags?: string[];
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({
  title,
  description,
  tags,
  children,
  footer,
  className = "",
  href,
}: CardProps) {
  const content = (
    <div
      className={`group relative rounded-xl border border-neutral-200/80 bg-neutral-50/50 p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm sm:p-6 dark:border-neutral-800/80 dark:bg-neutral-900/50 dark:hover:border-neutral-700 ${
        href ? "cursor-pointer" : ""
      } ${className}`}
    >
      {title && (
        <h3 className="text-h3 text-neutral-900 transition-colors group-hover:text-indigo-600 dark:text-neutral-100 dark:group-hover:text-indigo-400">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-body mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}

      {children && <div className="mt-4">{children}</div>}

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-neutral-200/60 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {footer && (
        <div className="mt-5 border-t border-neutral-200/60 pt-4 dark:border-neutral-800/60">
          {footer}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-inherit no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}
