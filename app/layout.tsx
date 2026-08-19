import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Arush Kumar Singh — Aerospace Engineer & AI Infrastructure",
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
    url: "https://arushkumarsingh.com",
    title: "Arush Kumar Singh — Aerospace Engineer & AI Infrastructure",
    description:
      "Aerospace engineer building at the edge of hardware and AI. IIT Kanpur graduate working across AI infrastructure, real-time telemetry, aerospace, and physical systems.",
    siteName: "Arush Kumar Singh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arush Kumar Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arush Kumar Singh — Aerospace Engineer",
    description: "Aerospace engineer building at the edge of hardware and AI.",
    creator: "@Arushkumarsing3",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-neutral-900 selection:bg-indigo-500 selection:text-white dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
