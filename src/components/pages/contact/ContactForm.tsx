"use client";

import { useState } from "react";
import { getWhatsAppURL } from "@/lib/whatsapp";

const SIGNAGE_OPTIONS = [
  { value: "led-boards", label: "LED Sign Board" },
  { value: "acp-boards", label: "ACP Board / Facade Cladding" },
  { value: "acrylic-signage", label: "Acrylic Signage / 3D Letters" },
  { value: "flex-printing", label: "Flex Printing / Banner" },
  { value: "vehicle-wraps", label: "Vehicle Wrap / Fleet Branding" },
  { value: "glow-signs", label: "Glow Sign / Lightbox" },
  { value: "other", label: "Other Metal or Fabrication Work" },
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [needsInstallation, setNeedsInstallation] = useState("yes");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) return setErrorMessage("Please enter your name.");
    if (!phone.trim() || phone.length < 10) return setErrorMessage("Please enter a valid phone number.");
    if (!projectType) return setErrorMessage("Please select a service or signage type.");
    if (!message.trim()) return setErrorMessage("Please describe your signage requirements.");

    const selectedLabel = SIGNAGE_OPTIONS.find(opt => opt.value === projectType)?.label || "General Query";

    const whatsappURL = getWhatsAppURL({
      name,
      phone,
      email,
      serviceLabel: selectedLabel,
      needsInstallation: needsInstallation === "yes",
      message,
    });

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl border border-border-light shadow-xl shadow-charcoal/5 p-6 md:p-10 relative overflow-hidden">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-charcoal mb-2">Quote Request Form</h2>
          <p className="text-xs md:text-sm text-muted">Fill in the details below — we will open WhatsApp with your message ready to send.</p>
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
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              onKeyDown={(e) => {
                const allowed = ["Backspace","Delete","Tab","Escape","Enter","ArrowLeft","ArrowRight","Home","End"];
                if (allowed.includes(e.key)) return;
                if (!/^\d$/.test(e.key)) e.preventDefault();
              }}
              maxLength={10}
              placeholder="e.g. 9999999999"
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

        {/* Submit — opens WhatsApp directly */}
        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2.5"
        >
          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.053 1.002 11.99 1.002c-5.438 0-9.864 4.372-9.868 9.8.001 2.01.527 3.971 1.53 5.714l-.993 3.624 3.743-.981z" />
          </svg>
          Send Quote via WhatsApp
        </button>
      </form>
    </div>
  );
}
