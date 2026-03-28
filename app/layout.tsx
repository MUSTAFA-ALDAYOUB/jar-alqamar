import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { site } from "@/config/site";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: site.brand,
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}