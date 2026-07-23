"use client";

import { useState, useEffect, useCallback } from "react";
import { categories, projects } from "@/lib/projects";
import Button from "@/components/Button";
import ProjectCard from "@/components/common/ProjectCard";
import Image from "next/image";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  // Restore filter from localStorage after hydration
  useEffect(() => {
    const saved = localStorage.getItem("projects-filter");
    if (saved) setActiveFilter(saved);
    // Preload all images
    projects.forEach((p) => {
      const img = new window.Image();
      img.src = p.image;
    });
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    localStorage.setItem("projects-filter", id);
    setSelectedProjectIndex(null);
  };

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (selectedProjectIndex === null) return;
      setSelectedProjectIndex((prev) =>
        prev === null ? null : (prev - 1 + filteredProjects.length) % filteredProjects.length,
      );
    },
    [selectedProjectIndex, filteredProjects.length],
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (selectedProjectIndex === null) return;
      setSelectedProjectIndex((prev) =>
        prev === null ? null : (prev + 1) % filteredProjects.length,
      );
    },
    [selectedProjectIndex, filteredProjects.length],
  );

  const handleClose = useCallback(() => setSelectedProjectIndex(null), []);

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
    <>
      {/* Filter + Grid */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12 py-6 sm:py-12 md:py-16">
        {/* Filter tabs */}
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center items-center gap-4 sm:gap-2 mb-5 md:mb-10 pb-2.5 w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`flex-none text-sm font-semibold transition-all duration-200 cursor-pointer px-2 pb-1.5 pt-1 rounded-none bg-transparent border-t-0 border-x-0 border-b-2 ${
                activeFilter === cat.id
                  ? "text-accent border-accent sm:bg-accent sm:text-white sm:shadow-md sm:shadow-accent/20 sm:border-0 sm:px-5 sm:py-2.5 sm:rounded-full"
                  : "text-muted hover:text-charcoal border-transparent sm:bg-surface-light sm:border sm:border-border-light sm:hover:bg-border-light/30 sm:px-5 sm:py-2.5 sm:rounded-full"
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-[11px] font-bold opacity-60">
                ({cat.id === "all" ? projects.length : projects.filter((p) => p.category === cat.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProjectIndex(idx)}
              categoryName={categories.find((c) => c.id === project.category)?.name || ""}
              showFeaturedBadge={true}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-charcoal rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 50% 0%, var(--color-accent) 0%, transparent 60%)" }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Like What You See?</h2>
            <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
              Let&apos;s create something exceptional for your business. Get in touch with our team today.
            </p>
            <Button href="/#contact" variant="primary" size="md" rounded="xl">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProjectIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={handleClose}
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative max-w-[90vw] max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] max-w-[85vw] max-h-[75vh]">
              <Image
                src={filteredProjects[selectedProjectIndex].image}
                alt={filteredProjects[selectedProjectIndex].title}
                fill
                sizes="90vw"
                priority
                className="object-contain select-none"
              />
            </div>
            <div className="mt-4 text-center text-white px-4">
              <h3 className="text-base font-bold">{filteredProjects[selectedProjectIndex].title}</h3>
              <p className="text-xs text-white/50 mt-1">
                {selectedProjectIndex + 1} of {filteredProjects.length}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
