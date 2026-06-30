export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="section-header">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Who We Are
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            More Than Just a Signage Company
          </h2>
          <p className="text-sm md:text-lg text-muted leading-relaxed">
            Signage World is a Hisar-based signage and fabrication company
            serving businesses across Haryana. We design, manufacture, and
            install high-quality signage solutions — from ACP boards and LED
            signs to flex printing and acrylic letters — helping local
            businesses stand out and attract more customers.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-8">
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl text-center">
            We are GST registered, locally rooted, and backed by over a decade
            of hands-on experience in the signage industry.
          </p>
          <div className="inline-flex items-center gap-3 bg-surface-light border border-border-light px-5 py-3.5 rounded-2xl shrink-0">
            <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-charcoal uppercase tracking-wider">GST Registered Business</p>
              <p className="text-xs text-muted font-semibold mt-0.5">GSTIN: 06AFCPF8723Q1Z3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
