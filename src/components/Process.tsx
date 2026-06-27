"use client";

import { useState } from "react";
import { IconConsultation, IconDesignApproval, IconFabrication } from "@/components/icons";

const steps = [
  {
    title: "Consultation",
    description:
      "We understand your requirements, branding, and project goals.",
    icon: <IconConsultation className="w-8 h-8" />,
  },
  {
    title: "Design & Approval",
    description:
      "Our team creates signage concepts for your review and approval.",
    icon: <IconDesignApproval className="w-8 h-8" />,
  },
  {
    title: "Fabrication",
    description:
      "Using high-quality materials, we manufacture your signage with precision.",
    icon: <IconFabrication className="w-8 h-8" />,
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-12 md:py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Large Rounded Content Box */}
        <div className="bg-[#F8F9FB] border border-neutral-100 rounded-xl md:rounded-[48px] px-3 md:px-6 py-5 md:py-10 md:p-20 shadow-xs relative overflow-hidden flex flex-col items-center">

          {/* Subtle decorative bg blob */}
          <div
            className="pointer-events-none absolute rounded-full bg-accent/5 blur-3xl transition-all duration-700 ease-in-out"
            style={{
              width: 320,
              height: 320,
              left: `calc(${(activeStep / 3) * 100}% - 160px + ${activeStep === 0 ? "80px" : activeStep === 3 ? "-80px" : "0px"})`,
              top: "30%",
            }}
          />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
              Our Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
              Your Vision. Our Precision. A Seamless Process.
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Creating custom signage boards doesn&apos;t have to be overwhelming.
              At Signage World, we transform what feels complex into a clear,
              step-by-step journey.
            </p>
          </div>

        

          {/* Horizontal Steps Timeline */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center cursor-pointer"
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step Connector Line (Desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] right-[calc(-50%+2.5rem)] -translate-y-1/2 z-0">
                      <div className="relative w-full h-0.5 bg-neutral-200 overflow-hidden rounded-full">
                        <div
                          className="absolute inset-y-0 left-0 bg-accent rounded-full"
                          style={{
                            width: isPast ? "100%" : "0%",
                            transition: "width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        />
                      </div>
                      {/* Arrow tip */}
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 rotate-45 transition-colors duration-500"
                        style={{
                          borderColor: isPast ? "var(--color-accent)" : "#d4d4d4",
                        }}
                      />
                    </div>
                  )}


                  {/* Icon Circle Container */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center relative z-10"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-accent)"
                        : isPast
                        ? "color-mix(in srgb, var(--color-accent) 15%, white)"
                        : "color-mix(in srgb, var(--color-accent) 5%, white)",
                      color: isActive ? "#fff" : "var(--color-accent)",
                      boxShadow: isActive
                        ? "0 8px 25px -4px color-mix(in srgb, var(--color-accent) 40%, transparent)"
                        : "none",
                      transform: isActive ? "scale(1.12)" : "scale(1)",
                      outline: isActive
                        ? "3px solid color-mix(in srgb, var(--color-accent) 25%, transparent)"
                        : "3px solid transparent",
                      outlineOffset: "3px",
                      transition:
                        "transform 450ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 400ms ease, box-shadow 400ms ease, outline 400ms ease",
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Step Title */}
                  <h3
                    className="text-[15px] font-extrabold tracking-tight mt-5 mb-1.5"
                    style={{
                      color: isActive ? "var(--color-accent)" : "#1a1a2e",
                      transition: "color 350ms ease",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description — always visible, no expand */}
                  <p className="text-xs text-muted max-w-[180px] mx-auto leading-relaxed pt-0.5">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active step label (mobile) */}
          <div className="mt-10 md:hidden text-center relative z-10">
            <div
              className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full"
              style={{ transition: "all 350ms ease" }}
            >
              <span className="text-accent font-bold text-xs uppercase tracking-wider">
                Step {activeStep + 1} of {steps.length}
              </span>
              <span className="text-accent font-semibold text-xs">
                — {steps[activeStep].title}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
