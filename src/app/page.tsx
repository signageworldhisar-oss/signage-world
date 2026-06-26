import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import SEOSection from "@/components/SEOSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Sections in reference website flow */}
        <Hero />
        <Portfolio />
        <WhyChooseUs />
        <Services />
        <Process />
        <Reviews />
        <Contact />
        <SEOSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
