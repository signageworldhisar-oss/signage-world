"use client";

import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Our Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "ACP Sign Boards", href: "#services" },
    { name: "LED Sign Boards", href: "#services" },
    { name: "Acrylic Signage", href: "#services" },
    { name: "Glow Sign Boards", href: "#services" },
    { name: "Metal Letter Signage", href: "#services" },
    { name: "Fabrication Works", href: "#services" },
    { name: "Vinyl Graphics & Branding", href: "#services" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/galaxysignage/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/galaxysignageindia/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@dgsrajan",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 002.11 2.11c1.858.507 9.388.507 9.388.507s7.53 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://in.pinterest.com/galaxysignageindia/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.41 7.61 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.395-5.918 1.395-5.918s-.356-.715-.356-1.777c0-1.664.967-2.906 2.17-2.906 1.024 0 1.517.768 1.517 1.686 0 1.029-.656 2.568-.994 3.993-.283 1.194.599 2.169 1.778 2.169 2.133 0 3.771-2.249 3.771-5.496 0-2.873-2.064-4.882-5.013-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C24 5.368 18.633 0 12.017 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="footer"
      className="bg-charcoal text-white/95 pt-20 pb-10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="mb-4 block">
              <Image
                src="/LOGO/SVG.svg"
                alt="Signage World Logo"
                width={200}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              {
                "Signage World is one of India's premier modular signage and retail display fabrication experts. We construct durable signage products that scale business visibility."
              }
            </p>
          </div>
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-widest text-accent mb-4">
              Follow Us
            </h5>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 hover:border-accent hover:-translate-y-0.5 text-white/80 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">
            Company
          </h4>
          <ul className="space-y-3.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services Links */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">
            Services
          </h4>
          <ul className="space-y-3.5">
            {serviceLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-black uppercase tracking-wider text-accent mb-6">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <svg
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <div>
                <h5 className="text-[13px] font-bold text-white uppercase tracking-wide">
                  Main Workshop
                </h5>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                  Shop No. 1337, Police Choki, Mohalla Sainiyan,
                  Hisar, Haryana — 125001
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <svg
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h5 className="text-[13px] font-bold text-white uppercase tracking-wide">
                  Helplines
                </h5>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                  <a href="tel:+918295567765" className="hover:text-white">
                    +91 82955 67765
                  </a>{" "}
                  <br />
                  <a href="tel:+919891276777" className="hover:text-white">
                    +91 98912 76777
                  </a>
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <svg
                className="w-5 h-5 text-accent shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h5 className="text-[13px] font-bold text-white uppercase tracking-wide">
                  Sales Email
                </h5>
                <p className="text-xs text-white/60 mt-1">
                  <a
                    href="mailto:sales@signageworld.co"
                    className="hover:text-white"
                  >
                    sales@signageworld.co
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Credentials */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">
        <div>
          <span className="font-bold text-white/60">
            An ISO 9001:2015 Certified Manufacturing Facility
          </span>
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Signage World. All rights
            reserved. Designed for high conversion.
          </p>
        </div>
      </div>
    </footer>
  );
}
