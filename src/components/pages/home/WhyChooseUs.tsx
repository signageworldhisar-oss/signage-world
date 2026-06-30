"use client";

import FeatureCard from "@/components/common/FeatureCard";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Quality You Can Trust",
      description:
        "We use marine-grade aluminum composite panels (ACP), Samsung LED modules, and IP67 waterproof power suppliers for extreme durability.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Customized Solutions",
      description:
        "Tailored visual designs optimized to match your corporate logo, branding identity guidelines, and structural shop facade requirements.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Professional Installation",
      description:
        "Licensed technician crew handles structural anchor framing, electrical wiring, height rigging safety, and final lighting calibration.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Fast Turnaround",
      description:
        "Streamlined production pipeline with high-speed automated laser cutting cutters ensuring quick delivery within committed timelines.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Competitive Pricing",
      description:
        "Direct-from-factory pricing with transparent estimates. No hidden subcontractor markups, giving you the best price value possible.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V5"
          />
        </svg>
      ),
    },
    {
      title: "End-to-End Service",
      description:
        "We handle your entire branding project journey from initial blueprint drawing and fabrication to installation, cleaning, and maintenance.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89L21 9m-1.5-1.5h.352a1.5 1.5 0 001.06-.44l2-2A1.5 1.5 0 0022 3.5v-.352a1.5 1.5 0 00-.44-1.06l-2-2A1.5 1.5 0 0018.5 0h-.352a1.5 1.5 0 00-1.06.44l-2 2A1.5 1.5 0 0015 3.5v.352a1.5 1.5 0 00.44 1.06l2 2A1.5 1.5 0 0018.5 8.5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-12 md:py-24 bg-surface-light relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Trusted Signage Partner for Businesses
          </h2>
          <p className="text-sm md:text-lg text-muted leading-relaxed">
            At Signage World, we combine creative design, precision fabrication,
            and professional installation to deliver signage that creates
            lasting impressions.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <FeatureCard
              key={index}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
