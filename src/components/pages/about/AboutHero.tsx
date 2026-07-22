import Link from "next/link";
import { CITY, GST_STATUS, EXPERIENCE_YEARS, STATE, FOUNDED_YEAR } from "@/lib/constants";

export default function AboutHero() {
  return (
    <section className="pt-20 sm:pt-28 pb-5 md:pb-16 bg-charcoal text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, var(--color-accent) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-semibold md:mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-white leading-tight">
          {`${CITY}'s Trusted Signage & Fabrication Experts`}
        </h1>
        <p className="text-sm md:text-lg text-white/70 leading-relaxed max-w-2xl font-medium">
          {`${GST_STATUS}. Locally rooted. Backed by ${EXPERIENCE_YEARS}+ years of hands-on experience. Serving businesses across ${STATE} since ${FOUNDED_YEAR}.`}
        </p>
      </div>
    </section>
  );
}
