import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Signage World | Custom Premium Signage & Fabrication Solutions",
  description: "High-quality custom signage solutions including ACP sign boards, LED displays, acrylic letters, metal boards, and commercial branding fabrication. Serving retail, office, and business projects.",
  keywords: "premium signage, ACP sign board, LED sign board, Acrylic letters, Metal lettering, shopfront branding, signage fabrication, Signage World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
