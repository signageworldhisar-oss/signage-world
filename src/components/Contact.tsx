"use client";

import Button from "@/components/Button";

// Pre-filled WhatsApp templates
const PHONE = "918295567765";
const getWhatsAppLink = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const actions = [
  {
    label: "Request a Price Quote",
    tag: "Fast Quote",
    message: "Hello! I'd like to request a price quote for custom signage.",
  },
  {
    label: "Share Blueprints / Drawings",
    tag: "Send Files",
    message:
      "Hello! I want to share our store facade drawings/blueprints to plan signage work.",
  },
  {
    label: "Request a Design Consultation",
    tag: "Free Call",
    message:
      "Hello! I want to request a customized design consultation for our shop branding.",
  },
];

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Direct Call",
    value: "+91 82955 67765",
    href: "tel:+918295567765",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working Hours",
    value: "Mon – Sat, 9 AM – 6 PM",
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Workshop",
    value: "Mohalla Sainiyan, Hisar, Haryana",
    href: "#location",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Ready to Upgrade Your Business Visibility?
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Skip the forms — talk directly with our signage experts on WhatsApp.
            Get a quote, send blueprints, or book a free consultation instantly.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-charcoal text-white rounded-xl lg:rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — WhatsApp Actions */}
            <div className="p-6 md:p-8 md:p-12 relative overflow-hidden">
              {/* Decorative blob */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-accent/10 rounded-bl-full pointer-events-none" />

              {/* Live badge */}
              <div className="flex items-center gap-2 mb-8">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Online &amp; Active Now
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight leading-tight">
                Connect Instantly on<br />
                <span className="text-accent">WhatsApp</span>
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-sm">
                Choose a topic below and we&apos;ll open a pre-filled WhatsApp message straight to our signage team.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {actions.map((action, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppLink(action.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-white/5 hover:bg-accent border border-white/10 hover:border-accent rounded-xl px-5 py-4 transition-all duration-250 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* WhatsApp icon */}
                      <svg className="w-5 h-5 text-emerald-400 group-hover:text-white shrink-0 transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-sm font-semibold text-white">{action.label}</span>
                    </div>
                    <span className="text-[11px] font-bold bg-white/10 group-hover:bg-white/20 text-white/80 group-hover:text-white px-2.5 py-1 rounded-full shrink-0 transition-all duration-200">
                      {action.tag}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Contact Info + Specialist */}
            <div className="p-8 md:p-12 bg-white/[0.03] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between gap-10">

             
              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest">Other Ways to Reach Us</h4>
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-white/40 uppercase tracking-wider font-bold mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-white hover:text-accent transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main WhatsApp CTA */}
              <Button
                href={getWhatsAppLink("Hello! I'd like to get in touch with Signage World.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                rounded="xl"
                className="w-full flex items-center justify-center gap-2.5"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </Button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
