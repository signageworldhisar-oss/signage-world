"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Our Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b sm:py-2 bg-white border-border-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/LOGO/SVG.svg"
            alt="Signage World Logo"
            width={200}
            height={80}
            priority
            className="h-15 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-charcoal/80 hover:text-accent transition-colors duration-250 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button href="#contact" size="sm" rounded="full" className="font-semibold">
            Get Free Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-charcoal focus:outline-none p-1.5 rounded-lg hover:bg-charcoal/5 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-[72px] left-0 right-0 bg-white border-t border-border-light shadow-xl p-6 transition-all duration-300 lg:hidden origin-top ${
          isOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-charcoal/90 hover:text-accent hover:pl-2 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button
            href="#contact"
            onClick={() => setIsOpen(false)}
            size="md"
            rounded="xl"
            className="mt-4 w-full shadow-md"
          >
            Get Free Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}
