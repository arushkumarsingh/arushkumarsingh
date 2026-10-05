import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Arush Kumar Singh | Aerospace Engineer & AI Infrastructure",
    template: "%s | Arush Kumar Singh",
  },
  description:
    "Aerospace engineer building at the edge of hardware and AI. IIT Kanpur graduate working across AI infrastructure, real-time telemetry, aerospace, and physical systems.",
  keywords: [
    "Arush Kumar Singh",
    "Aerospace Engineer",
    "IIT Kanpur",
    "AI Infrastructure",
    "Hardware Telemetry",
    "Real-Time AI",
    "XpectraFlow",
    "ButterCut.ai",
  ],
  authors: [{ name: "Arush Kumar Singh" }],
  creator: "Arush Kumar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arushkumarsingh.github.io",
    title: "Arush Kumar Singh | Aerospace Engineer & AI Infrastructure",
    description:
      "Aerospace engineer building at the edge of hardware and AI. IIT Kanpur graduate working across AI infrastructure, real-time telemetry, aerospace, and physical systems.",
    siteName: "Arush Kumar Singh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arush Kumar Singh | Aerospace Engineer",
    description: "Aerospace engineer building at the edge of hardware and AI.",
    creator: "@Arushkumarsing3",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-indigo-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
