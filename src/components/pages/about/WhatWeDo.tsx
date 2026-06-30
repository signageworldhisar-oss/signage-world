const services = [
  "ACP Sign Boards & Cladding",
  "LED Backlit & 3D Letter Boards",
  "Flex & Banner Printing",
  "Acrylic Signage & Name Plates",
  "Glow Sign Boards",
  "Vehicle Wraps & Vinyl Branding",
  "Office & Building Signage",
  "Wayfinding & Direction Boards",
];

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="section-header">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            What We Do
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            End-to-End Signage Solutions
          </h2>
          <p className="text-sm md:text-lg text-muted leading-relaxed">
            From design to fabrication to installation — we handle everything
            under one roof for shops, offices, showrooms, restaurants,
            hospitals, schools, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-border-light rounded-2xl px-5 py-4 hover:border-accent/40 hover:shadow-sm transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-charcoal">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
