import React from "react";

const trustPoints = [
  {
    title: "We are from Hisar",
    description:
      "We understand the local market, local budgets, and what works for businesses here. No corporate markup, no middlemen — you deal directly with Faheem and his team.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "10+ Years of Proven Experience",
    description:
      "Our experience spans hundreds of businesses — from small kirana shops to large showrooms and commercial complexes across Hisar and nearby districts.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "We Deliver On Time",
    description:
      "We know your business cannot wait. Our streamlined production process ensures fast turnaround without compromising on quality.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Honest Pricing",
    description:
      "We give you a clear quote upfront. No hidden charges, no surprises. What we quote is what you pay.",
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
];

export default function WhyTrustUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="section-header">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Why Local Businesses Trust Signage World
          </h2>
          <p className="text-sm md:text-lg text-muted leading-relaxed">
            We are not just vendors — we are your local branding partners who
            care about your business as much as you do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {trustPoints.map((point, i) => (
            <div
              key={i}
              className="flex gap-5 bg-surface-light border border-border-light rounded-2xl p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300">
                {point.icon}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-charcoal mb-1.5">
                  {point.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
