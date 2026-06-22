import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPTION =
  "Iowa-registered B2B supply company sourcing and coordinating everyday consumer goods for local businesses, offices, retailers, distributors, and commercial accounts across the United States.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Flip Dynasty Holdings LLC | Consumer Goods & Business Supply",
    template: "%s | Flip Dynasty Holdings LLC",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "B2B supply",
    "wholesale consumer goods",
    "business supply company",
    "Iowa LLC",
    "general merchandise distributor",
    "commercial accounts",
    "product sourcing",
    "order coordination",
    "replenishment",
    "home and kitchen supply",
    "grocery pantry supply",
    "pet supplies wholesale",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: "es_US",
    title: "Flip Dynasty Holdings LLC | Consumer Goods & Business Supply",
    description:
      "B2B everyday consumer goods and supply coordination for commercial clients across the United States.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flip Dynasty Holdings LLC | Consumer Goods & Business Supply",
    description:
      "B2B everyday consumer goods and supply coordination for commercial clients across the United States.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f3a2e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${hanken.variable}`}>
      <body>
        <JsonLd />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
