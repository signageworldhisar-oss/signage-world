import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, getWhatsAppLink } from "@/lib/constants";

export default function WorkshopCTA() {
  const whatsappLink = getWhatsAppLink(
    "Hello! I'd like to learn more about Signage World and get a free quote."
  );

  return (
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
  );
}
