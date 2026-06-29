"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

// Pre-filled phone number for WhatsApp redirects
const PHONE_NUMBER = "918295567765";

// Service / Signage options matching the services offered on the homepage
const SIGNAGE_OPTIONS = [
  { value: "led-boards", label: "LED Sign Board" },
  { value: "acp-boards", label: "ACP Board / Facade Cladding" },
  { value: "acrylic-signage", label: "Acrylic Signage / 3D Letters" },
  { value: "flex-printing", label: "Flex Printing / Banner" },
  { value: "vehicle-wraps", label: "Vehicle Wrap / Fleet Branding" },
  { value: "glow-signs", label: "Glow Sign / Lightbox" },
  { value: "other", label: "Other Metal or Fabrication Work" },
];

export default function ContactPage() {
  // Form input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [needsInstallation, setNeedsInstallation] = useState("yes");
  
  // Submission flow states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Helper to format a WhatsApp message containing all form inputs
   */
  const getWhatsAppURL = () => {
    const selectedLabel = SIGNAGE_OPTIONS.find(opt => opt.value === projectType)?.label || "General Query";
    const installationText = needsInstallation === "yes" ? "Yes" : "No";
    
    const formattedText = `Hello Signage World! I just submitted a Quote Request on your website:\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email || "Not provided"}\n` +
      `*Service Type:* ${selectedLabel}\n` +
      `*Installation Needed:* ${installationText}\n` +
      `*Project Requirements:* ${message}`;

    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(formattedText)}`;
  };

  /**
   * Handles the dev environment simulation of sending an email,
   * then prompts the user to submit via WhatsApp.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple validations
    if (!name.trim()) return setErrorMessage("Please enter your name.");
    if (!phone.trim() || phone.length < 10) return setErrorMessage("Please enter a valid phone number.");
    if (!projectType) return setErrorMessage("Please select a service or signage type.");
    if (!message.trim()) return setErrorMessage("Please tell us a bit about your signage requirements.");

    setIsLoading(true);

    try {
      // Simulate API route fetch to send email notification (delaying for realism/micro-interaction)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // Update UI state to success
      setIsSuccess(true);
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again or chat with us on WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow pt-20 bg-white">
      {/* Page Header Banner */}
      <section className="bg-charcoal text-white py-6 sm:py-10 md:py-24 relative overflow-hidden">
        {/* Abstract design elements matching homepage styling */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 75% 50%, var(--color-accent) 0%, transparent 60%)"
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
          
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Contact &amp; Quotes
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-4">
            Get a Custom Quote
          </h1>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed">
            Fill out the form below to initiate an email quote request. You can also send the details straight to our production workshop via WhatsApp for instant pricing.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Address/Map Details */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-border-light shadow-xl shadow-charcoal/5 p-6 md:p-10 relative overflow-hidden">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-charcoal mb-2">Quote Request Form</h2>
                  <p className="text-xs md:text-sm text-muted">Complete the fields below. A copy of your specs will be prepared.</p>
                </div>

                {errorMessage && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-semibold border border-red-100 flex items-center gap-2.5">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all text-sm font-medium text-charcoal"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all text-sm font-medium text-charcoal"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@business.com"
                      className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all text-sm font-medium text-charcoal"
                    />
                  </div>

                  {/* Project / Signage type selection */}
                  <div>
                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Signage Type *</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all text-sm font-medium text-charcoal appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%234b5563' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundSize: '1.25em', backgroundRepeat: 'no-repeat' }}
                      required
                    >
                      <option value="" disabled>Select signage product</option>
                      {SIGNAGE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Installation Preference radio */}
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2.5">Do you need installation support?</label>
                  <div className="flex gap-6 items-center">
                    <label className="flex items-center gap-2 text-sm font-semibold text-charcoal cursor-pointer">
                      <input
                        type="radio"
                        name="installation"
                        value="yes"
                        checked={needsInstallation === "yes"}
                        onChange={() => setNeedsInstallation("yes")}
                        className="w-4 h-4 text-accent border-border-light focus:ring-accent cursor-pointer"
                      />
                      Yes, require professional installation
                    </label>
                    <label className="flex items-center gap-2 text-sm font-semibold text-charcoal cursor-pointer">
                      <input
                        type="radio"
                        name="installation"
                        value="no"
                        checked={needsInstallation === "no"}
                        onChange={() => setNeedsInstallation("no")}
                        className="w-4 h-4 text-accent border-border-light focus:ring-accent cursor-pointer"
                      />
                      No, supply only (DIY / self install)
                    </label>
                  </div>
                </div>

                {/* Message / specs textarea */}
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Signage Details &amp; Dimensions *</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your design, sizing (e.g. 10ft x 4ft), placement (indoor/outdoor), and references..."
                    className="w-full px-4 py-3 rounded-xl border border-border-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all text-sm font-medium text-charcoal leading-relaxed"
                    required
                  />
                </div>

                {/* Submit button with loader state */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-wait"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Simulating Email Dispatch...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Success Screen with WhatsApp transition suggestion
              <div className="py-8 text-center space-y-6 animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-charcoal">Form Submitted Successfully!</h3>
                  <p className="text-sm text-muted mt-2 max-w-md mx-auto leading-relaxed">
                    Your specs have been cataloged and simulation emails sent in [dev] mode. 
                    For an **instant callback and rapid quote validation**, please forward this summary directly to our fabrication desk via WhatsApp!
                  </p>
                </div>

                <div className="bg-surface-light border border-border-light rounded-2xl p-5 text-left max-w-md mx-auto">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Summary Preview</span>
                  <div className="text-xs text-charcoal/80 mt-2 space-y-1.5 font-mono">
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Service:</strong> {SIGNAGE_OPTIONS.find(o => o.value === projectType)?.label}</p>
                    <p><strong>Details:</strong> {message.substring(0, 80)}{message.length > 80 ? "..." : ""}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
                  <a
                    href={getWhatsAppURL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.053 1.002 11.99 1.002c-5.438 0-9.864 4.372-9.868 9.8.001 2.01.527 3.971 1.53 5.714l-.993 3.624 3.743-.981c1.603.87 3.322 1.332 5.093 1.332zm11.367-7.7c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.199.299-.773.979-.948 1.178-.175.199-.349.224-.65.074-1.222-.612-2.058-1.08-2.868-2.47-.199-.344.199-.32.571-1.064.101-.199.05-.374-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.588-.492-.507-.675-.516-.174-.008-.374-.01-.573-.01-.199 0-.524.074-.799.374-.275.299-1.047 1.022-1.047 2.493 0 1.47 1.072 2.892 1.222 3.091.15.199 2.11 3.221 5.111 4.516.713.308 1.27.492 1.704.63.716.228 1.369.196 1.885.119.575-.087 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.428-.075-.125-.275-.199-.575-.349z" />
                    </svg>
                    Send via WhatsApp
                  </a>
                  
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setName("");
                      setPhone("");
                      setEmail("");
                      setProjectType("");
                      setMessage("");
                    }}
                    className="w-full sm:w-auto bg-surface-light hover:bg-border-light text-charcoal font-bold px-5 py-3.5 rounded-xl border border-border-light transition-all duration-200 cursor-pointer text-center text-sm"
                  >
                    Submit New Quote
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Google Maps & Workshop Info */}
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
                    <h4 className="text-[13px] font-black text-charcoal uppercase tracking-wider">Helplines</h4>
                    <p className="text-sm text-muted mt-1 font-semibold space-y-1">
                      <a href="tel:+918295567765" className="block hover:text-accent transition-colors">+91 82955 67765</a>
                      <a href="tel:+919891276777" className="block hover:text-accent transition-colors">+91 98912 76777</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded iframe */}
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg border border-border-light relative bg-surface-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.564551720888!2d77.0136511754972!3d28.43577317577549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1858a74e183b%3A0x217d12f4585c544d!2sGalaxy%20Signage!5e0!3m2!1sen!2sin!4v1719312000000!5m2!1sen!2sin"
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

        </div>
      </section>
    </main>
  );
}
