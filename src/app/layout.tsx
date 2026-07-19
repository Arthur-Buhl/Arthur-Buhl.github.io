import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Renseigne l'URL finale du site (utile pour le SEO / Open Graph).
const SITE_URL = "https://arthur-buhl.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  authors: [{ name: site.name }],
  keywords: ["Arthur Buhl", "portfolio", "EPITA", "développeur", "ingénieur"],
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.tagline,
    url: SITE_URL,
    siteName: `${site.name} — Portfolio`,
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
