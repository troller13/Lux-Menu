import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"]
});

const script = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"]
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Conacul Domnesc — Restaurant tradițional moldovenesc",
  description:
    "Conacul Domnesc — bucătărie tradițională moldovenească într-un cadru luxos, în inima Chișinăului.",
  keywords: [
    "restaurant Chișinău",
    "bucătărie moldovenească",
    "Conacul Domnesc",
    "sarmale",
    "plăcinte"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${display.variable} ${script.variable} ${sans.variable}`}>
      <body className="font-sans bg-bg text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
