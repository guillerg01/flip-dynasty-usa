import type { Metadata } from "next";
import { Source_Serif_4, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://flipdynastyusa.com"),
  title: "Flip Dynasty Holdings LLC | Consumer Goods & Business Supply",
  description:
    "Iowa-registered B2B supply company sourcing and coordinating everyday consumer goods for local businesses, offices, retailers, and commercial accounts across the United States.",
  openGraph: {
    title: "Flip Dynasty Holdings LLC | Consumer Goods & Business Supply",
    description:
      "B2B everyday consumer goods and supply coordination for commercial clients across the United States.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${hanken.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
