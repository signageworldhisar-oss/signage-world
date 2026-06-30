import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/constants";

export default function WorkshopLocation() {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="bg-surface-light border border-border-light rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="text-lg font-black text-charcoal mb-6 pb-4 border-b border-border-light flex items-center gap-2.5">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Workshop Location
        </h3>

        <div className="space-y-6">
          {/* Physical Address */}
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[13px] font-black text-charcoal uppercase tracking-wider">Address</h4>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Shop No. 1337, Police Choki, Mohalla Sainiyan,<br />
                Hisar, Haryana — 125001
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[13px] font-black text-charcoal uppercase tracking-wider">Business Hours</h4>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Monday – Saturday: 9:30 AM – 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Help desk */}
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[13px] font-black text-charcoal uppercase tracking-wider">Helpline</h4>
              <p className="text-sm text-muted mt-1 font-semibold">
                <a href={PHONE_TEL} className="block hover:text-accent transition-colors">{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embedded iframe */}
      <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg border border-border-light relative bg-surface-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.2942671224996!2d75.72957236120904!3d29.15599954647558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233acca8096e3%3A0xc26b159b79726001!2sA%20ONE%20GRAPHIC!5e0!3m2!1sen!2sin!4v1782819330496!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          title="Signage World Hisar Workshop Location Map"
        ></iframe>
      </div>
    </div>
  );
}
