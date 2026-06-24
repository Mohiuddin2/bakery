import type { Metadata } from "next";
import { Fraunces, Nunito, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K Bakery — Freshly Baked, Every Day | Chattogram",
  description:
    "K Bakery is the largest food chain in Chattogram — cakes, pastries, cookies, sweets, snacks and more, baked fresh every single day across 30+ outlets.",
  keywords: [
    "K Bakery",
    "bakery Chattogram",
    "cake shop",
    "pastry",
    "custom cakes",
    "fresh bread",
  ],
  openGraph: {
    title: "K Bakery — Freshly Baked, Every Day",
    description:
      "Cakes, pastries, cookies, sweets and snacks baked fresh daily across Chattogram. Order from K Bakery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
