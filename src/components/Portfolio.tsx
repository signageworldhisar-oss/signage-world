"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "acp", name: "ACP Sign Boards" },
  { id: "led", name: "LED Signage" },
  { id: "acrylic", name: "Acrylic Signs" },
  { id: "shopfront", name: "Shopfront Branding" },
  { id: "office", name: "Office Signage" },
  { id: "fabrication", name: "Fabrication Projects" },
];

const projects = [
  { id: 1, title: "Premium Retail Storefront", category: "acp", image: "/images/project-1.jpeg" },
  { id: 2, title: "Mall Entrance ACP Cladding", category: "acp", image: "/images/project-2.jpeg" },
  { id: 3, title: "Illuminated 3D LED Letters", category: "led", image: "/images/project-3.jpeg" },
  { id: 4, title: "Outdoor Glow Lightbox Sign", category: "led", image: "/images/project-4.jpeg" },
  { id: 5, title: "Corporate Reception Acrylic", category: "acrylic", image: "/images/project-5.jpeg" },
  { id: 6, title: "Modern Showroom Fascia Sign", category: "shopfront", image: "/images/project-6.jpeg" },
  { id: 7, title: "Office Wall Mounted Logo", category: "office", image: "/images/project-7.jpeg" },
  { id: 8, title: "Retail Outlet Window Branding", category: "shopfront", image: "/images/project-8.jpeg" },
  { id: 9, title: "Double Sided Glowing Box", category: "led", image: "/images/project-9.jpeg" },
  { id: 10, title: "Commercial Wayfinding Signs", category: "office", image: "/images/project-10.jpeg" },
  { id: 11, title: "Stainless Steel Letters board", category: "acrylic", image: "/images/project-11.jpeg" },
  { id: 12, title: "Heavy Steel Signage Frame", category: "fabrication", image: "/images/project-12.jpeg" },
  { id: 13, title: "Brushed Brass Corporate Wall", category: "acrylic", image: "/images/project-13.jpeg" },
  { id: 14, title: "Showroom Front LED Channel", category: "led", image: "/images/project-14.jpeg" },
  { id: 15, title: "Safety & Emergency Signages", category: "office", image: "/images/project-15.jpeg" },
  { id: 16, title: "Aluminum Panel Cladding work", category: "acp", image: "/images/project-16.jpeg" },
  { id: 17, title: "Frosted Glass Privacy Graphics", category: "office", image: "/images/project-17.jpeg" },
  { id: 18, title: "Digital Vinyl Glass Graphics", category: "shopfront", image: "/images/project-18.jpeg" },
  { id: 19, title: "Exhibition Fabricated Canopy", category: "fabrication", image: "/images/project-19.jpeg" },
  { id: 20, title: "Corporate Lobby LED signage", category: "office", image: "/images/project-20.jpeg" },
  { id: 21, title: "Bespoke Steel Signboard Frame", category: "fabrication", image: "/images/project-21.jpeg" },
  { id: 22, title: "Automated Profile Metal bending", category: "fabrication", image: "/images/project-22.jpeg" },
  { id: 23, title: "High-Visibility Shop Board", category: "shopfront", image: "/images/project-23.jpeg" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  }, [selectedProjectIndex, filteredProjects.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredProjects.length
    );
  }, [selectedProjectIndex, filteredProjects.length]);

  const handleClose = useCallback(() => {
    setSelectedProjectIndex(null);
  }, []);

  useEffect(() => {
    if (selectedProjectIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProjectIndex, handlePrev, handleNext, handleClose]);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Explore some of our completed signage and fabrication projects for retail stores, restaurants, offices, showrooms, and commercial properties.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-accent text-white shadow-md shadow-accent/10"
                  : "bg-surface-light text-muted hover:text-charcoal border border-border-light hover:bg-border-light/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectIndex(idx)}
              className="group relative h-[250px] md:h-[280px] rounded-2xl overflow-hidden shadow-md border border-border-light bg-surface-light transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay (always showing title slightly on mobile, slides up on desktop hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent font-bold text-xs uppercase tracking-widest mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {categories.find((c) => c.id === project.category)?.name || ""}
                </span>
                <h3 className="text-white text-base md:text-lg font-bold leading-snug transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>

              {/* Mobile details strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xs p-3 border-t border-border-light flex items-center justify-between group-hover:opacity-0 transition-opacity duration-200 lg:hidden">
                <span className="text-[13px] font-bold text-charcoal truncate">{project.title}</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded-full shrink-0">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button
            href="#contact"
            variant="dark"
            size="md"
            rounded="xl"
          >
            View Full Portfolio
          </Button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Close gallery"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex flex-col items-center justify-center animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] max-w-[85vw] max-h-[75vh]">
              <Image
                src={filteredProjects[selectedProjectIndex].image}
                alt={filteredProjects[selectedProjectIndex].title}
                fill
                sizes="90vw"
                priority
                className="object-contain select-none transition-transform duration-300 scale-100"
              />
            </div>

            {/* Image Details */}
            <div className="mt-4 text-center text-white px-4">
              <p className="text-xs text-white/50 mt-1.5">
                Project {selectedProjectIndex + 1} of {filteredProjects.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
