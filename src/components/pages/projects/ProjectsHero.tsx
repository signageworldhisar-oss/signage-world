import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsHero() {
  return (
    <div className="bg-charcoal text-white pb-10 pt-21 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, var(--color-accent) 0%, transparent 60%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-semibold md:mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
       
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
  );
}
