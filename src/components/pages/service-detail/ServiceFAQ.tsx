"use client";

import { useState } from "react";
import { FAQItem } from "@/lib/helper";

interface ServiceFAQProps {
  faqs?: FAQItem[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-surface-light border-t border-border-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-accent font-extrabold text-xs uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-charcoal tracking-tight mt-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-sm md:text-base text-muted mt-2 max-w-2xl mx-auto">
            Clear details about materials, timelines, and custom signage
            fabrication at our Hisar workshop.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl shadow-xs transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-accent/30 shadow-sm" : "border-border-light"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`cursor-pointer w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 focus:outline-none transition-colors duration-300 ${
                    isOpen ? "bg-accent/4" : "hover:bg-accent/2"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-sm md:text-base text-charcoal leading-snug">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-surface-light flex items-center justify-center border border-border-light text-charcoal/70 transition-transform duration-200">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-accent" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 md:p-6 bg-surface-light/30 border-t border-border-light">
                      <p className="text-xs md:text-sm text-muted leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
