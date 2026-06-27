"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { categories, featuredProjects } from "@/lib/projects";
import ProjectCard from "@/components/common/ProjectCard";
import Image from "next/image";

export default function Portfolio() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (selectedProjectIndex === null) return;
      setSelectedProjectIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + featuredProjects.length) % featuredProjects.length,
      );
    },
    [selectedProjectIndex],
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (selectedProjectIndex === null) return;
      setSelectedProjectIndex((prev) =>
        prev === null ? null : (prev + 1) % featuredProjects.length,
      );
    },
    [selectedProjectIndex],
  );

  const handleClose = useCallback(() => {
    setSelectedProjectIndex(null);
  }, []);

  // Preload featured images on mount
  useEffect(() => {
    featuredProjects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image;
    });
  }, []);

  // Keyboard navigation for lightbox
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
    <section id="portfolio" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Our Best Work
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            A curated selection of our finest signage and fabrication projects
            — from LED displays to ACP cladding and shopfront branding.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProjectIndex(idx)}
              categoryName={categories.find((c) => c.id === project.category)?.name || ""}
            />
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/projects" variant="primary" size="md" rounded="xl">
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={handleClose}
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Close gallery"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={handlePrev}
            className="absolute left-6 z-55 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] max-w-[85vw] max-h-[75vh]">
              <Image
                src={featuredProjects[selectedProjectIndex].image}
                alt={featuredProjects[selectedProjectIndex].title}
                fill
                sizes="90vw"
                priority
                className="object-contain select-none"
              />
            </div>
            <div className="mt-4 text-center text-white px-4">
              <h3 className="text-base font-bold">{featuredProjects[selectedProjectIndex].title}</h3>
              <p className="text-xs text-white/50 mt-1">
                {selectedProjectIndex + 1} of {featuredProjects.length}
              </p>
            </div>
          </div>

          {/* Next */}
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
