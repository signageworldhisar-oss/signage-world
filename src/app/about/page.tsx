import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Signage World — Hisar's Trusted Signage Experts",
  description:
    "Learn about Signage World — a GST-registered Hisar-based signage and fabrication company with 10+ years of experience. Founded by Faheem, serving 1,000+ businesses across Haryana.",
  keywords:
    "about Signage World, Hisar signage company, Faheem signage, GST registered signage, Haryana fabrication",
};

const stats = [
  { value: "10+", label: "Years of industry experience" },
  { value: "1,000+", label: "Clients served across Haryana" },
  { value: "15", label: "New clients served every month" },
  { value: "2017", label: "Rooted in Hisar since" },
];

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

const storyMilestones = [
  {
    year: "2017",
    title: "Learning the Craft",
    description:
      "Faheem began his journey studying graphic design and visual arts at Mahatma Gandhi Sakasharta Mission near Bus Stand, Hisar. What started as a skill became a calling.",
  },
  {
    year: "2017 – 2020",
    title: "Hands-On Mastery",
    description:
      "He joined a signage and printing shop near Taliyan Pull, Gausala, Hisar — spending 3 years mastering on-the-ground fabrication and learning what businesses truly need to make their brand visible.",
  },
  {
    year: "2020 – 2025",
    title: "Industry Leadership",
    description:
      "Faheem joined Sanya Advertisers, one of the established names in local signage, where he worked for 8 years sharpening skills in fabrication, client handling, large-format printing, and project management.",
  },
  {
    year: "2025",
    title: "Signage World Founded",
    description:
      "After 10+ years of dedication to the trade, Faheem took the leap and founded Signage World — his own company, his own vision. Built on real-world experience, honest pricing, and a commitment to quality.",
  },
];

export default function AboutPage() {
  const whatsappLink = getWhatsAppLink(
    "Hello! I'd like to learn more about Signage World and get a free quote."
  );

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-20 sm:pt-28 pb-16 bg-charcoal text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, var(--color-accent) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-semibold mb-8 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
       
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-white leading-tight">
            {"Hisar's Trusted Signage & Fabrication Experts"}
          </h1>
          <p className="text-sm md:text-lg text-white/70 leading-relaxed max-w-2xl font-medium">
            GST registered. Locally rooted. Backed by 10+ years of hands-on
            experience. Serving businesses across Haryana since 2017.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/20">
            {stats.map((stat, i) => (
              <div key={i} className="px-6 py-8 text-center text-white">
                <p className="text-3xl md:text-4xl font-black">{stat.value}</p>
                <p className="text-xs md:text-sm font-semibold text-white/80 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
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

      {/* What We Do */}
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


      {/* Our Story */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="section-header">
            <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
              Our Story
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
              Every Great Business Starts With a Passion
            </h2>
            <p className="text-sm md:text-lg text-muted leading-relaxed">
              Ours started in 2017 — with one person, one craft, and an
              unwavering commitment to quality.
            </p>
          </div>

          {/* Timeline — mobile-friendly vertical list */}
          <div className="mt-10 space-y-5">
            {storyMilestones.map((milestone, i) => (
              <div
                key={i}
                className="flex gap-5 bg-white border border-border-light rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
              >
                {/* Dot + line */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-md block mt-1" />
                  {i < storyMilestones.length - 1 && (
                    <span className="flex-1 w-px bg-border-light" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <span className="text-accent font-black text-xs uppercase tracking-widest">
                    {milestone.year}
                  </span>
                  <h3 className="text-base font-extrabold text-charcoal mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
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

      {/* Workshop & CTA */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Workshop Details */}
            <div>
              <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
                Our Workshop
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
                Visit Us in Hisar
              </h2>
              <p className="text-sm md:text-lg text-muted leading-relaxed mb-8">
                We operate from our workshop in Mohalla Sainiyan, Hisar —
                equipped with CNC laser cutting machines, computerized aluminum
                benders, and a full fabrication setup to handle projects of any size.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white border border-border-light rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-charcoal uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-muted leading-relaxed">
                      Shop No. 1337, Police Choki, Mohalla Sainiyan,<br />Hisar, Haryana — 125001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-border-light rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-charcoal uppercase tracking-wider mb-1">Phone</p>
                    <a href={PHONE_TEL} className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-border-light rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-charcoal uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-sm text-muted">Monday to Saturday</p>
                    <p className="text-sm font-semibold text-charcoal">9:30 AM – 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-border-light rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-charcoal uppercase tracking-wider mb-1">GST Registered Business</p>
                    <p className="text-sm font-mono font-semibold text-charcoal">06AFCPF8723Q1Z3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-charcoal rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/15 px-4 py-1.5 rounded-full">
                  Ready to Work With Us?
                </span>
                <h3 className="text-2xl md:text-3xl font-black mt-5 mb-3 leading-tight">
                  From a Simple Name Plate to a Complete Shopfront
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8">
                  Whether you need a simple name plate or a complete shopfront
                  branding solution — we are ready to help. Contact us on
                  WhatsApp for a free quote, or visit our workshop directly in Hisar.
                </p>
                <div className="space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full bg-accent hover:bg-accent-hover text-white font-bold text-sm py-4 px-6 rounded-2xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.053 1.002 11.99 1.002c-5.438 0-9.864 4.372-9.868 9.8.001 2.01.527 3.971 1.53 5.714l-.993 3.624 3.743-.981z" />
                    </svg>
                    Get a Free Quote on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm py-4 px-6 rounded-2xl transition-all duration-300"
                  >
                    Send Us a Message
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  {["GST Registered", "10+ Years Experience", "Free Quote"].map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
