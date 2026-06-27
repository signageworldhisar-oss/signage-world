"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ServiceCard from "@/components/common/ServiceCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  IconFlexPrinting,
  IconLEDBoard,
  IconAcrylicSignage,
  IconACPBoard,
  IconVehicleWrap,
  IconGlowSign
} from "@/components/icons";

export default function Services() {
  const services = [
    {
      title: "Flex printing",
      slug: "flex-printing",
      description: "High-resolution, durable banner and flex prints. Perfect for outdoor billboards, exhibitions, hoarding signs, and large-scale marketing displays.",
      image: "/images/office-photos/flex-printing.jpeg",
      icon: <IconFlexPrinting className="w-5 h-5 text-accent" />,
    },
    {
      title: "LED boards",
      slug: "led-boards",
      description: "Energy-efficient, bright 3D illuminated letters and channel boards. Custom front-lit, back-lit (halo effect), and neon signs with premium LED modules.",
      image: "/images/project-18.jpeg",
      icon: <IconLEDBoard className="w-5 h-5 text-accent" />,
    },
    {
      title: "Acrylic signage",
      slug: "acrylic-signage",
      description: "Laser-cut premium solid acrylic letters, logo plaques, and corporate signs. Elegant design ideal for receptions, boardrooms, and indoor branding.",
      image: "/images/project-5.jpeg",
      icon: <IconAcrylicSignage className="w-5 h-5 text-accent" />,
    },
    {
      title: "ACP boards",
      slug: "acp-boards",
      description: "Premium Aluminium Composite Panel cladding and route-cut signs. Exceptionally durable, weather-resistant, and perfect for modern storefront facades.",
      image: "/images/project-3.jpeg",
      icon: <IconACPBoard className="w-5 h-5 text-accent" />,
    },
    {
      title: "Vehicle wraps",
      slug: "vehicle-wraps",
      description: "Custom high-quality vinyl wrapping for commercial fleets, delivery vehicles, and cars. Turn your vehicles into mobile billboards with weather-proof branding.",
      image: "/images/project-1.jpeg",
      icon: <IconVehicleWrap className="w-5 h-5 text-accent" />,
    },
    {
      title: "Glow signs",
      slug: "glow-signs",
      description: "Illuminated double-sided lightboxes, vacuum-formed glow boards, and signs. High-visibility promotion for shops and showrooms both day and night.",
      image: "/images/project-11.jpeg",
      icon: <IconGlowSign className="w-5 h-5 text-accent" />,
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Complete Signage & Fabrication Services
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            We help businesses create a strong visual presence with durable, professionally crafted signage solutions.
          </p>
        </div>

        {/* Services Swiper Container */}
        <div className="relative group/swiper px-2 sm:px-4 md:px-6">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".services-pagination",
              bulletClass: "w-2.5 h-2.5 rounded-full bg-charcoal/20 cursor-pointer transition-all duration-300 inline-block mx-1.5",
              bulletActiveClass: "!bg-accent !w-6",
            }}
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <button className="services-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-2 z-20 w-11 h-11 rounded-full bg-white border border-border-light shadow-md flex items-center justify-center text-charcoal hover:bg-accent hover:text-white hover:border-accent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="services-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 w-11 h-11 rounded-full bg-white border border-border-light shadow-md flex items-center justify-center text-charcoal hover:bg-accent hover:text-white hover:border-accent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="services-pagination flex justify-center mt-10"></div>

      </div>
    </section>
  );
}

