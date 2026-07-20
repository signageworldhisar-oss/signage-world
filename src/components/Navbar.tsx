"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Why Us", href: "/#why-choose-us" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/#services" },
    { name: "Our Process", href: "/#process" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["why-choose-us", "services", "process", "reviews"];

    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveSection("");
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      return pathname === "/" && activeSection === id;
    }
    if (href === "/") {
      return pathname === "/" && activeSection === "";
    }
    return pathname === href;
  };

  const getLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-[15px] font-medium transition-colors duration-250 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
      active
        ? "text-accent after:w-full"
        : "text-charcoal/80 hover:text-accent after:w-0 hover:after:w-full"
    }`;
  };

  const getMobileLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-base font-semibold transition-all duration-200 ${
      active
        ? "text-accent pl-2"
        : "text-charcoal/90 hover:text-accent hover:pl-2"
    }`;
  };

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
            className="object-contain"
            style={{ height: "60px", width: "auto" }}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button
            href="/contact"
            size="sm"
            rounded="full"
            className="font-semibold"
          >
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
        className={`fixed top-15.25 left-0 right-0 bg-white border-t border-border-light shadow-xl p-6 transition-all duration-300 lg:hidden origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClass(link.href)}
            >
              {link.name}
            </a>
          ))}
          <Button
            href="/contact"
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
