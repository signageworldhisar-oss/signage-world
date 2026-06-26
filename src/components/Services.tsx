"use client";

import Image from "next/image";
import Button from "@/components/Button";

export default function Services() {
  const services = [
    {
      title: "ACP Sign Boards",
      description: "Aluminum Composite Panel signage featuring route-cut detailing, back-lit acrylic logos, and weather-proof metallic finishes.",
      image: "/images/project-1.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "LED Sign Boards",
      description: "Energy-efficient illuminated signs using high-quality Samsung LED modules. Custom 3D front-lit and halo backlit options.",
      image: "/images/project-3.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Acrylic Signage",
      description: "Premium laser-cut solid acrylic letters and logo plaques. Ideal for reception lobbies, corporate boardrooms, and showrooms.",
      image: "/images/project-5.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Glow Sign Boards",
      description: "Double-sided illuminated flex lightboxes and vacuum-formed glow boards for high-visibility storefront promotion night and day.",
      image: "/images/project-4.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Metal Letter Signage",
      description: "High-end 3D titanium brass, brushed copper, and mirror-finish stainless steel letters. Non-corrosive luxury branding.",
      image: "/images/project-11.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      title: "Fabrication Works",
      description: "Industrial-grade structural MS / GI signage pylons, totems, building canopy frames, and retail metal kiosk brackets.",
      image: "/images/project-12.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Vinyl Graphics & Branding",
      description: "High-resolution digital printing on frosted, reflective, and calendar films. Glass manifestation, rollup standees, and vehicle wraps.",
      image: "/images/project-18.jpeg",
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-surface-light relative">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border-light shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
            >
              {/* Visual Card Image Header */}
              <div className="relative h-52 sm:h-52 w-full overflow-hidden bg-charcoal">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Visual hover effect and overlay (like play button style) */}
                {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div> */}
                {/* Floating Icon Badge in top-left */}
                {/* <div className="absolute top-4.5 left-4.5 bg-white/90 backdrop-blur-xs w-9 h-9 rounded-xl flex items-center justify-center shadow-md">
                  {service.icon}
                </div> */}
              </div>

              {/* Card content and detail info */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Tag and Rating stars inline */}
                  <div className="flex items-center justify-between mb-3 text-xs font-bold text-accent uppercase tracking-wider">
                    <span>{service.title.split(" ")[0]} Product</span>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold text-charcoal mb-2.5 group-hover:text-accent transition-colors duration-200 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Standardized inquiry button */}
                {/* <div>
                  <Button
                    href="#contact"
                    variant="outline"
                    size="sm"
                    className="w-full text-xs font-bold uppercase tracking-wider text-charcoal border-border-light hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-xl"
                  >
                    Inquire Now
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

