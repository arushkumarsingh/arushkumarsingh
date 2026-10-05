import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "pill";
  size?: "sm" | "md";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = "primary", size = "md", href, external, children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none cursor-pointer";

  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white rounded-md shadow-xs",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 rounded-md",
    outline:
      "border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md",
    pill: "border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10 rounded-full font-mono text-xs px-3 py-1",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${variant !== "pill" ? sizes[size] : ""} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
