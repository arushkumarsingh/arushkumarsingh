import React from "react";

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-10 sm:py-14 scroll-mt-16 ${className}`}>
      <div className="layout-container">
        {(title || subtitle) && (
          <div className="mb-6 pb-2 border-b border-neutral-200 dark:border-neutral-800">
            {title && <h2 className="text-h2 text-neutral-900 dark:text-neutral-100 tracking-tight lowercase">{title}</h2>}
            {subtitle && <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
