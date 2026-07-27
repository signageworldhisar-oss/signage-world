import type { Metadata } from "next";
import Hero from "@/components/pages/home/Hero";
import WhyChooseUs from "@/components/pages/home/WhyChooseUs";
import Portfolio from "@/components/pages/home/Portfolio";
import Services from "@/components/pages/home/Services";
import Process from "@/components/pages/home/Process";
import Reviews from "@/components/pages/home/Reviews";
import Contact from "@/components/pages/home/Contact";
import SEOSection from "@/components/pages/home/SEOSection";
import MapSection from "@/components/pages/home/MapSection";

export const metadata: Metadata = {
  title: {
    absolute:
      "Signage World | Custom Premium Signage & Fabrication Solutions Hisar",
  },
  description:
    "High-quality custom signage solutions including ACP sign boards, LED displays, acrylic letters, metal boards, and commercial branding fabrication. Serving retail, office, and business projects in Hisar, Haryana.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* Sections in reference website flow */}
      <Hero />
      <SEOSection />
      <Portfolio />
      <WhyChooseUs />
      <Services />
      <Process />
      <Reviews />
      <Contact />
      <MapSection />
    </>
  );
}
