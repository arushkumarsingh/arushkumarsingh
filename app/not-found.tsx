import Link from "next/link";

export default function NotFound() {
  return (
    <div className="layout-container py-24 text-center space-y-4">
      <h1 className="text-4xl font-bold font-mono">404</h1>
      <p className="text-neutral-600 dark:text-neutral-400">Page not found</p>
      <div>
        <Link
          href="/"
          className="text-sm font-mono text-indigo-700 dark:text-cyan-400 underline underline-offset-4"
        >
          return home ↗
        </Link>
      </div>
    </div>
  );
}
