"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { categories, projects } from "@/lib/projects";
import Button from "@/components/Button";
import ProjectCard from "@/components/common/ProjectCard";
import Image from "next/image";

export default function ProjectsPage() {
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
      <main className="flex-grow pt-20 bg-white">

        {/* Page Hero */}
        <div className="bg-charcoal text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 70% 50%, var(--color-accent) 0%, transparent 60%)" }}
          />
          <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-semibold mb-8 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            {/* <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
              Full Portfolio
            </span> */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-4">
              All Our Projects
            </h1>
            <p className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed">
              Browse our complete gallery of signage and fabrication work — filtered by category.
              Click any project to view it in full detail.
            </p>
            <p className="text-white/30 text-sm mt-3">{projects.length} completed projects</p>
          </div>
        </div>

        {/* Filter + Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16">

          {/* Filter tabs */}
          <div className="flex overflow-x-auto justify-start md:justify-center items-center gap-2 mb-10 pb-2.5 w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`px-5 py-2.5 flex-none rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-accent text-white shadow-md shadow-accent/20 border border-transparent"
                    : "bg-surface-light text-muted hover:text-charcoal border border-border-light hover:bg-border-light/30"
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
      </main>

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
