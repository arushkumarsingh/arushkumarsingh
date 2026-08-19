import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  showIcon?: boolean;
  className?: string;
}

export function CustomLink({
  href,
  children,
  external = false,
  showIcon = false,
  className = "",
}: CustomLinkProps) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  const linkContent = (
    <span
      className={`animated-underline inline-flex items-center gap-0.5 font-medium text-neutral-900 transition-colors hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-indigo-400 ${className}`}
    >
      {children}
      {isExternal && showIcon && (
        <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className="group inline-flex items-center"
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} className="group inline-flex items-center">
      {linkContent}
    </Link>
  );
}
