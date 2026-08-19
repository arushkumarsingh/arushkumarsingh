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
    default: "Arush Kumar Singh — Software Engineer & Product Builder",
    template: "%s | Arush Kumar Singh",
  },
  description:
    "Personal portfolio of Arush Kumar Singh, a full-stack software engineer building high-performance web applications and minimalist digital experiences.",
  keywords: [
    "Arush Kumar Singh",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Arush Kumar Singh" }],
  creator: "Arush Kumar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arushkumarsingh.com",
    title: "Arush Kumar Singh — Software Engineer & Product Builder",
    description:
      "Crafting clean, performance-first web applications and elegant user experiences.",
    siteName: "Arush Kumar Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arush Kumar Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arush Kumar Singh — Software Engineer",
    description:
      "Crafting clean, performance-first web applications and elegant user experiences.",
    creator: "@arushkumarsingh",
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
