"use client";

import Button from "@/components/Button";

export default function MapSection() {
  const address =
    "Shop No. 1337, Police Choki, Mohalla Sainiyan, Hisar, Haryana — 125001";
  
  return (
    <section id="location" className="py-12 md:py-20 bg-white border-t border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Visit Our Main Workshop
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Come visit our main production workshop in Hisar to see samples, discuss your custom fabrication designs, or review materials with our signage experts.
          </p>
        </div>

        {/* Map & Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Google Map Iframe */}
          <div className="lg:col-span-8 min-h-[350px] md:min-h-[450px] rounded-2xl overflow-hidden shadow-md border border-border-light relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.564551720888!2d77.0136511754972!3d28.43577317577549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1858a74e183b%3A0x217d12f4585c544d!2sGalaxy%20Signage!5e0!3m2!1sen!2sin!4v1719312000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Signage World Main Workshop Location Map"
            ></iframe>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-surface-light border border-border-light rounded-2xl shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-charcoal mb-6 pb-4 border-b border-border-light flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Workshop Details
              </h3>
              
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-charcoal uppercase tracking-wider">Address</h4>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{address}</p>
                  </div>
                </li>

                {/* Operating Hours */}
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-charcoal uppercase tracking-wider">Business Hours</h4>
                    <p className="text-sm text-muted mt-1 leading-relaxed">
                      Mon - Sat: 9:30 AM - 7:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>

                {/* Contact Helpline */}
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-charcoal uppercase tracking-wider">Helpline</h4>
                    <p className="text-sm text-muted mt-1 font-medium">
                      <a href="tel:+918295567765" className="hover:text-accent transition-colors">+91 82955 67765</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-border-light pt-6">
              <Button
                href="https://www.google.com/maps/place/Galaxy+Signage/@28.4357732,77.0136512,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1858a74e183b:0x217d12f4585c544d!8m2!3d28.4357732!4d77.0162261!16s%2Fg%2F11b6g58231"
                target="_blank"
                variant="primary"
                size="md"
                rounded="xl"
                className="w-full flex items-center justify-center gap-2 group"
              >
                Get Directions
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
