"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/images/project-1.jpeg",
    "/images/project-3.jpeg",
    "/images/project-5.jpeg",
    "/images/project-12.jpeg",
    "/images/project-14.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);


  return (
    <section
      id="home"
      className="relative min-h-screen pt-25 sm:pt-28 pb-16 flex items-center overflow-hidden bg-charcoal"
    >
      {/* Background Image Carousel (Full Screen & Highly Visible) */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-75" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Signage project showcase ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}
        {/* Dark gradient overlay for high text legibility on the left side */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content (Left-aligned Overlay matching screenshot format) */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full relative z-10 flex flex-col items-start text-left">
        
       

        {/* Left-Aligned Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4 sm:mb-6 max-w-4xl animate-fade-in-up">
          Custom Signage Solutions That Make Your{" "}
          <span className="text-accent text-shadow-glow">
            Brand Stand Out
          </span>
        </h1>

        {/* Left-Aligned Subheadline */}
        <p className="text-sm md:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up [animation-delay:100ms]">
          From shopfront signage and ACP cladding to LED signs and fabrication work,{" "}
          <span className="font-semibold text-white">Signage World</span> delivers high-quality branding solutions
          designed to attract attention and grow your business.
        </p>

        {/* Left-Aligned Action CTAs (Solid White & Transparent outline options) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto animate-fade-in-up [animation-delay:200ms]">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            rounded="full"
            className="w-full sm:w-auto shadow-lg"
          >
            Get a Free Quote
          </Button>
          <Button
            href="#services"
            variant="outline"
            size="md"
            rounded="full"
            className="w-full sm:w-auto"
          >
            Explore Services
          </Button>
        </div>

        {/* Left-Aligned Carousel indicators */}
        <div className="flex gap-2.5 mb-8 animate-fade-in-up [animation-delay:250ms]">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "bg-accent scale-110" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Trust Badges Bar (Bottom Visual Transition Anchor) */}
      {/* <div className="absolute bottom-0 left-0 right-0 py-6 bg-white border-t border-border-light z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex gap-3 hover:translate-x-1 transition-all duration-200 justify-center sm:justify-start">
                <div className="mt-0.5 shrink-0 bg-accent/10 w-9 h-9 rounded-lg flex items-center justify-center">
                  {badge.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal tracking-wide">{badge.title}</h3>
                  <p className="text-xs text-muted font-normal">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
