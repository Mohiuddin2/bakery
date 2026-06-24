import type { Metadata } from "next";
import {
  Playfair_Display,
  Manrope,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saffron — Modern Mediterranean Dining",
  description:
    "Saffron is a contemporary Mediterranean restaurant serving seasonal, ingredient-led plates in the heart of the city. Book a table and taste the difference.",
  keywords: [
    "restaurant",
    "fine dining",
    "Mediterranean",
    "book a table",
    "Saffron",
  ],
  openGraph: {
    title: "Saffron — Modern Mediterranean Dining",
    description:
      "Seasonal, ingredient-led plates in the heart of the city. Book a table at Saffron.",
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
      className={`${playfair.variable} ${manrope.variable} ${greatVibes.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
