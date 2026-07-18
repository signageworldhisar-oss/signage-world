"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Reviews() {
  const [swiper, setSwiper] = useState<any>(null);

  const testimonials = [
    {
      quote:
        "Excellent workmanship and timely delivery. The signage transformed our storefront completely, bringing in double the walk-in customers.",
      author: "Satanjeev Kumar Jha",
      role: "Retail Store Owner",
      rating: 5,
      initials: "SK",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      quote:
        "Professional team and great communication throughout the project. The 3D LED backlit letters look extremely luxury and build immediate trust.",
      author: "Shweta Yadav",
      role: "Corporate Marketing Director",
      rating: 5,
      initials: "SY",
      gradient: "from-blue-600 to-indigo-500",
    },
    {
      quote:
        "Highly recommended for quality signage and fabrication services. They handled the complex structural framing installation cleanly and safely.",
      author: "Rakesh Malhotra",
      role: "Operations Head, Airia Mall",
      rating: 5,
      initials: "RM",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      quote:
        "Mr. Tomar and the fabrication crew are masters of detail. They delivered our double-sided ACP glowing signs perfectly within our tight budget.",
      author: "Sunil Kohli",
      role: "Restaurant Franchise Owner",
      rating: 5,
      initials: "SK",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="reviews" className="py-12 md:py-24 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <div className=" justify-between items-center flex sm:flex-row flex-col">
          <div className="mb-5 text-center sm:text-left md:mb-10">
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm max-w-[600px] md:text-lg text-muted leading-relaxed">
              We take pride in delivering top-tier fabrication standards and
              excellent communication to every single brand partner.
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            {/* Prev Button */}
            <button
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-charcoal shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
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
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 rounded-full bg-white border border-border-light flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white text-charcoal shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
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
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Slider Card */}
        <div className="w-full mx-auto relative">
          {/* Main Card Container */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-border-light shadow-xl shadow-charcoal/5 relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />

            {/* Big quote mark icon */}
            <div className="text-accent/10 absolute top-8 left-8 text-8xl font-serif pointer-events-none">
              “
            </div>

            {/* Testimonial Active Slide */}
            <div className="relative z-10 w-full overflow-hidden">
              <Swiper
                onSwiper={setSwiper}
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".reviews-pagination",
                  bulletClass:
                    "w-2.5 h-2.5 rounded-full bg-charcoal/20 cursor-pointer transition-all duration-300 inline-block mx-1.5",
                  bulletActiveClass: "!bg-accent !w-6",
                }}
                className="w-full"
              >
                {testimonials.map((testimonial, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full flex flex-col items-center text-center px-4">
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-amber-500 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote text */}
                      <p className="text-base md:text-xl font-medium text-charcoal leading-relaxed mb-8 max-w-2xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      {/* Client Info Block */}
                      <div className="flex flex-col items-center">
                        {/* Avatar with Initials Gradient */}
                        <div
                          className={`w-14 h-14 rounded-full bg-linear-to-tr ${testimonial.gradient} flex items-center justify-center text-white font-extrabold text-lg shadow-md mb-3`}
                        >
                          {testimonial.initials}
                        </div>
                        <h4 className="text-charcoal font-bold text-base tracking-tight">
                          {testimonial.author}
                        </h4>
                        <p className="text-xs text-muted font-semibold uppercase tracking-wider mt-0.5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Navigation Controllers (Horizontal Row Below Card) */}
          <div className="flex items-center justify-center my-4 sm:mt-8 px-4">
            {/* Slide Indicators */}
            <div className="reviews-pagination flex sm:hidden justify-center gap-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
