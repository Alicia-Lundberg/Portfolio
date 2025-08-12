import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Min portfolio utvecklad i Next.js och TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
