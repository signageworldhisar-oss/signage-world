"use client";

import { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const message = "Hello! I'd like to inquire about custom signage solutions for my business.";
  const whatsappUrl = getWhatsAppLink(message);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip text */}
      <span className="hidden sm:inline-block bg-white text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-border-light opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none select-none">
        Chat with us
      </span>

      {/* Pulsing ring background */}
      <span className="absolute right-0 w-14 h-14 bg-emerald-500/25 rounded-full animate-ping scale-110 pointer-events-none"></span>

      {/* Button icon container */}
      <div className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(16,185,129,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 relative z-10">
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.028 14.053 1.002 11.99 1.002c-5.438 0-9.864 4.372-9.868 9.8.001 2.01.527 3.971 1.53 5.714l-.993 3.624 3.743-.981c1.603.87 3.322 1.332 5.093 1.332zm11.367-7.7c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.199.299-.773.979-.948 1.178-.175.199-.349.224-.65.074-1.222-.612-2.058-1.08-2.868-2.47-.199-.344.199-.32.571-1.064.101-.199.05-.374-.025-.524-.075-.15-.675-1.624-.925-2.224-.244-.588-.492-.507-.675-.516-.174-.008-.374-.01-.573-.01-.199 0-.524.074-.799.374-.275.299-1.047 1.022-1.047 2.493 0 1.47 1.072 2.892 1.222 3.091.15.199 2.11 3.221 5.111 4.516.713.308 1.27.492 1.704.63.716.228 1.369.196 1.885.119.575-.087 1.78-.727 2.03-1.428.25-.7.25-1.3.175-1.428-.075-.125-.275-.199-.575-.349z" />
        </svg>
      </div>
    </a>
  );
}
