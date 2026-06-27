import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import SEOSection from "@/components/SEOSection";
import MapSection from "@/components/MapSection";

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
