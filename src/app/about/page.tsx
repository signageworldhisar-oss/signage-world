import type { Metadata } from "next";
import AboutHero from "@/components/pages/about/AboutHero";
import StatsBar from "@/components/pages/about/StatsBar";
import WhoWeAre from "@/components/pages/about/WhoWeAre";
import WhatWeDo from "@/components/pages/about/WhatWeDo";
import JourneyTimeline from "@/components/pages/about/JourneyTimeline";
import WhyTrustUs from "@/components/pages/about/WhyTrustUs";
import WorkshopCTA from "@/components/pages/about/WorkshopCTA";

export const metadata: Metadata = {
  title: "About Us | Signage World — Hisar's Trusted Signage Experts",
  description:
    "Learn about Signage World — a GST-registered Hisar-based signage and fabrication company with 10+ years of experience. Founded by Faheem, serving 1,000+ businesses across Haryana.",
  keywords:
    "about Signage World, Hisar signage company, Faheem signage, GST registered signage, Haryana fabrication",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <StatsBar />
      <WhoWeAre />
      <WhatWeDo />
      <JourneyTimeline />
      <WhyTrustUs />
      <WorkshopCTA />
    </main>
  );
}
