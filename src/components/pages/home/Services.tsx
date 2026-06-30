"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
  IconGlowSign,
} from "@/components/icons";

export default function Services() {
  const [swiper, setSwiper] = useState<any>(null);

  const services = [
    {
      title: "Flex printing",
      slug: "flex-printing",
      description:
        "High-resolution, durable banner and flex prints. Perfect for outdoor billboards, exhibitions, hoarding signs, and large-scale marketing displays.",
      image: "/images/flex-printing.jpeg",
      images: [
        "/images/flex-printing.jpeg",
        "/images/flex-work.jpeg",
        "/images/project-18.jpeg",
        "/images/shop-flex-board.jpeg"
      ],
      icon: <IconFlexPrinting className="w-5 h-5 text-accent" />,
    },
    {
      title: "LED boards",
      slug: "led-boards",
      description:
        "Energy-efficient, bright 3D illuminated letters and channel boards. Custom front-lit, back-lit (halo effect), and neon signs with premium LED modules.",
      image: "/images/project-18.jpeg",
      images: [
        "/images/project-18.jpeg",
        "/images/glowing-board.jpeg",
        "/images/glowing-board-2.jpeg",
        "/images/glowing-board-3.jpeg"
      ],
      icon: <IconLEDBoard className="w-5 h-5 text-accent" />,
    },
    {
      title: "Acrylic signage",
      slug: "acrylic-signage",
      description:
        "Laser-cut premium solid acrylic letters, logo plaques, and corporate signs. Elegant design ideal for receptions, boardrooms, and indoor branding.",
      image: "/images/name-plate.jpeg",
      images: [
        "/images/name-plate.jpeg",
        "/images/name-plate.jpeg",
        "/images/name-plate-2.jpeg",
        "/images/name-plate-4.jpeg"
      ],
      icon: <IconAcrylicSignage className="w-5 h-5 text-accent" />,
    },
    {
      title: "ACP boards",
      slug: "acp-boards",
      description:
        "Premium Aluminium Composite Panel cladding and route-cut signs. Exceptionally durable, weather-resistant, and perfect for modern storefront facades.",
      image: "/images/acp-work-3.jpeg",
      images: [
        "/images/acp-work-3.jpeg",
        "/images/acp-work-1.jpeg",
        "/images/acp-work-2.jpeg",
        "/images/acp-work-3.jpeg"
      ],
      icon: <IconACPBoard className="w-5 h-5 text-accent" />,
    },
    {
      title: "Vehicle wraps",
      slug: "vehicle-wraps",
      description:
        "Custom high-quality vinyl wrapping for commercial fleets, delivery vehicles, and cars. Turn your vehicles into mobile billboards with weather-proof branding.",
      image: "/images/project-1.jpeg",
      images: [
        "/images/project-1.jpeg",
        "/images/project-23.jpeg",
        "/images/project-18.jpeg",
        "/images/flex-work.jpeg"
      ],
      icon: <IconVehicleWrap className="w-5 h-5 text-accent" />,
    },
    {
      title: "Glow signs",
      slug: "glow-signs",
      description:
        "Illuminated double-sided lightboxes, vacuum-formed glow boards, and signs. High-visibility promotion for shops and showrooms both day and night.",
      image: "/images/project-11.jpeg",
      images: [
        "/images/project-11.jpeg",
        "/images/glowing-board-4.jpeg",
        "/images/glowing-board-5.jpeg",
        "/images/glowing-board-6.jpeg"
      ],
      icon: <IconGlowSign className="w-5 h-5 text-accent" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-12 md:py-24 bg-surface-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="justify-between items-end flex sm:flex-row flex-col">
          <div className="mb-5 text-center sm:text-left ">
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
              Our Services
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
              Complete Signage & Fabrication Services
            </h2>
            <p className="text-sm max-w-[600px] md:text-lg text-muted leading-relaxed">
              We help businesses create a strong visual presence with durable,
              professionally crafted signage solutions.
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="services-prev w-12 h-12 rounded-full bg-white border border-border-light shadow-md flex items-center justify-center text-charcoal hover:bg-accent hover:text-white hover:border-accent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              aria-label="Previous service"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="services-next w-12 h-12 rounded-full bg-white border border-border-light shadow-md flex items-center justify-center text-charcoal hover:bg-accent hover:text-white hover:border-accent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
              aria-label="Next service"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Services Swiper Container */}
        <div className="relative group/swiper  md:mt-10 px-2 sm:px-4 md:px-0">
          <Swiper
            onSwiper={setSwiper}
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".services-pagination",
              bulletClass:
                "w-2.5 h-2.5 rounded-full bg-charcoal/20 cursor-pointer transition-all duration-300 inline-block mx-1.5",
              bulletActiveClass: "!bg-accent !w-6",
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
        </div>

        {/* Pagination Dots */}
        <div className="services-pagination flex sm:hidden justify-center mt-4 md:mt-10"></div>
      </div>
    </section>
  );
}
