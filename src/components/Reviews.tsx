"use client";

import { useState } from "react";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Excellent workmanship and timely delivery. The signage transformed our storefront completely, bringing in double the walk-in customers.",
      author: "Satanjeev Kumar Jha",
      role: "Retail Store Owner",
      rating: 5,
      initials: "SK",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      quote: "Professional team and great communication throughout the project. The 3D LED backlit letters look extremely luxury and build immediate trust.",
      author: "Shweta Yadav",
      role: "Corporate Marketing Director",
      rating: 5,
      initials: "SY",
      gradient: "from-blue-600 to-indigo-500",
    },
    {
      quote: "Highly recommended for quality signage and fabrication services. They handled the complex structural framing installation cleanly and safely.",
      author: "Rakesh Malhotra",
      role: "Operations Head, Airia Mall",
      rating: 5,
      initials: "RM",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      quote: "Mr. Tomar and the fabrication crew are masters of detail. They delivered our double-sided ACP glowing signs perfectly within our tight budget.",
      author: "Sunil Kohli",
      role: "Restaurant Franchise Owner",
      rating: 5,
      initials: "SK",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            We take pride in delivering top-tier fabrication standards and excellent communication to every single brand partner.
          </p>
        </div>

        {/* Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Card Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border-light shadow-xl shadow-charcoal/5 relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
            
            {/* Big quote mark icon */}
            <div className="text-accent/10 absolute top-8 left-8 text-8xl font-serif pointer-events-none">
              “
            </div>

            {/* Testimonial Active Slide */}
            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg md:text-xl font-medium text-charcoal leading-relaxed mb-8 max-w-2xl">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Client Info Block */}
              <div className="flex flex-col items-center">
                {/* Avatar with Initials Gradient */}
                <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${testimonials[currentIndex].gradient} flex items-center justify-center text-white font-extrabold text-lg shadow-md mb-3`}>
                  {testimonials[currentIndex].initials}
                </div>
                <h4 className="text-charcoal font-bold text-base tracking-tight">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-xs text-muted font-semibold uppercase tracking-wider mt-0.5">
                  {testimonials[currentIndex].role}
                </p>
              </div>

            </div>
          </div>

          {/* Navigation Controllers (Horizontal Row Below Card) */}
          <div className="flex items-center justify-between mt-8 px-4">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-charcoal shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-250 cursor-pointer ${
                    currentIndex === idx ? "bg-accent w-6" : "bg-border-light hover:bg-muted/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-charcoal shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
          </div>

        </div>

        {/* View reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-charcoal hover:text-accent transition-colors duration-200"
          >
            Read More Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
