import React from "react";

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-12 sm:py-16 ${className}`}>
      <div className="layout-container">
        {(title || subtitle) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-h2 tracking-tight text-neutral-900 dark:text-neutral-100">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-body mt-2 text-neutral-600 dark:text-neutral-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
