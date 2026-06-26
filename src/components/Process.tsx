"use client";

import { useState } from "react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(1); // Set Step 2 (Design & Approval) active by default like in the reference image

  const steps = [
    {
      title: "Consultation",
      description: "Understand requirements, brand guides, and prepare custom estimates.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: "Design & Approval",
      description: "Develop 2D layouts and 3D digital scaling concepts for approval.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: "Fabrication",
      description: "Precision CNC laser cutting, bending, and assembly work.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Installation",
      description: "Complete structural rigging, mounting, and final cleanup.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Large Rounded Content Box */}
        <div className="bg-[#F8F9FB] border border-neutral-100 rounded-[32px] md:rounded-[48px] px-6 py-16 md:p-20 shadow-xs relative overflow-hidden flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
              Your Vision. Our Precision. A Seamless Process.
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Creating custom signage boards doesn&apos;t have to be overwhelming. At Signage World, we transform what feels complex into a clear, step-by-step journey.
            </p>
          </div>

          {/* Horizontal Steps Timeline */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              
              return (
                <div 
                  key={idx} 
                  className="relative flex flex-col items-center text-center group cursor-pointer"
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  
                  {/* Step Connector Line (Desktop only, connects to next item) */}
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] -translate-y-1/2 z-0">
                      <div 
                        className={`border-t-2 border-dashed w-full transition-colors duration-300 relative ${
                          activeStep > idx ? "border-accent" : "border-neutral-300"
                        }`}
                      >
                        <div 
                          className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 rotate-45 transition-colors duration-300 ${
                            activeStep > idx ? "border-accent" : "border-neutral-400"
                          }`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Icon Circle Container */}
                  <div 
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 relative z-10 ${
                      isActive 
                        ? "bg-accent text-white shadow-lg shadow-accent/25 scale-110" 
                        : "bg-accent/5 text-accent border border-accent/15 group-hover:bg-accent/15 group-hover:scale-105"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-extrabold text-charcoal mt-6 mb-2 tracking-tight transition-colors duration-200 group-hover:text-accent">
                    {step.title}
                  </h3>

                  {/* Step Subtitle / Description */}
                  <p className="text-xs md:text-[13px] text-muted max-w-[200px] leading-relaxed">
                    {step.description}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
