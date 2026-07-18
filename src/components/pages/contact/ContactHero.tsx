import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-charcoal text-white py-6 sm:py-10 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 75% 50%, var(--color-accent) 0%, transparent 60%)"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-semibold md:mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Contact
        </Link>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-4">
          Get a Custom Quote
        </h1>
        <p className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed">
          Fill out the form and we will open WhatsApp with your details pre-filled — ready to send directly to our workshop for an instant quote.
        </p>
      </div>
    </section>
  );
}
