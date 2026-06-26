"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    "ACP Sign Boards",
    "LED Sign Boards",
    "Acrylic Signage",
    "Glow Sign Boards",
    "Metal Letter Signage",
    "Fabrication Works",
    "Vinyl Graphics & Branding",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API lead ingestion call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", details: "" });
    }, 1200);
  };

  // Pre-filled WhatsApp templates
  const getWhatsAppLink = (message: string) => {
    const phone = "919999460724";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
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
            {
              "Let's discuss your project and create signage that helps your business get noticed."
            }
          </p>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive WhatsApp Connect Box */}
          <div className="lg:col-span-5 bg-charcoal text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Background geometric flare */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-bl-full pointer-events-none" />

            {/* Blinking Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Online & Active Now
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black mb-2 tracking-tight">
              Connect Instantly on WhatsApp
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              Skip the forms! Talk directly with our signage experts, send
              blueprints, or request quick pricing quotes.
            </p>

            {/* Specialist Profile Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 mb-8">
              {/* Custom SVG Avatar */}
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-md">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-base text-white">Rajan Tomar</h4>
                <p className="text-xs text-accent font-bold uppercase tracking-wider">
                  Design & Estimate Lead
                </p>
                <p className="text-xs text-white/40 mt-0.5">
                  Replies in under 15 minutes
                </p>
              </div>
            </div>

            {/* WhatsApp CTA Action Grid */}
            <div className="flex flex-col gap-4">
              <Button
                href={getWhatsAppLink(
                  "Hello! I want to request a price quote for a custom LED Sign Board.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                rounded="xl"
                className="w-full flex items-center justify-between text-sm shadow-md"
              >
                <span>Inquire about LED Sign Boards</span>
                <span className="bg-white/20 text-white text-[11px] font-bold py-0.5 px-2 rounded-full">
                  Fast Quote
                </span>
              </Button>

              <Button
                href={getWhatsAppLink(
                  "Hello! I want to share our store facade drawings/blueprints to plan ACP cladding work.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                rounded="xl"
                className="w-full flex items-center justify-between text-sm !bg-white/5 hover:!bg-white/10 !border-white/15"
              >
                <span>Send Facade/Blueprint Layouts</span>
                <svg
                  className="w-5 h-5 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </Button>

              <Button
                href={getWhatsAppLink(
                  "Hello! I want to request a customized design consultation for our shop branding.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                rounded="xl"
                className="w-full flex items-center justify-between text-sm !bg-white/5 hover:!bg-white/10 !border-white/15"
              >
                <span>Request Custom Consultation</span>
                <svg
                  className="w-5 h-5 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </Button>
            </div>

            {/* Quick helpline footer info */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40 flex justify-between gap-4">
              <span>Direct Call: +91 99994 60724</span>
              <span>Available Mon-Sat (9am - 6pm)</span>
            </div>
          </div>

          {/* Right Column: High-Converting Lead Gen Form */}
          <div className="lg:col-span-7 bg-surface-light border border-border-light rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-charcoal mb-2 tracking-tight">
              Request a Quote Online
            </h3>
            <p className="text-sm text-muted mb-8 leading-relaxed">
              Fill in your details below. Our design engineering team will
              review your parameters and provide a comprehensive proposal.
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Quote Request Submitted Successfully!
                </h4>
                <p className="text-sm text-emerald-700/95 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. We have logged your request. Rajan
                  Tomar or one of our design engineers will contact you shortly
                  via phone/email to deliver your design proposal.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-bold text-accent hover:underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-charcoal mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-charcoal text-sm transition-all duration-200"
                  />
                </div>

                {/* Contact Coordinates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-charcoal mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-charcoal text-sm transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-charcoal mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-charcoal text-sm transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold text-charcoal mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-charcoal text-sm transition-all duration-200"
                  >
                    <option value="" disabled>
                      Select a service type
                    </option>
                    {services.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-bold text-charcoal mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your design, sizing requirements, ACP panels, placement height, or timeline parameters..."
                    className="w-full px-4 py-3 rounded-xl border border-border-light bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-charcoal text-sm transition-all duration-200"
                  />
                </div>

                {/* Submit button & Trust indicators */}
                <div className="space-y-4 pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="primary"
                    size="md"
                    rounded="xl"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </Button>

                  {/* Trust Badges adjacent to Submit */}
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted font-semibold">
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-accent fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.9L10 1.154l7.834 3.746a1 1 0 01.554.89v4.576c0 5.464-3.58 9.894-7.834 11.236a1 1 0 01-.654 0C5.58 20.256 2 15.826 2 10.362V5.79a1 1 0 01.554-.89z"
                          clipRule="evenodd"
                        />
                      </svg>
                      100% Structural Safety Guarantee
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 text-accent fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.8 2.8a1 1 0 101.414-1.414L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      1 Year Material Warranty
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
