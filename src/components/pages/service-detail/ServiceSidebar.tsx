import Link from "next/link";
import { WHATSAPP_BASE } from "@/lib/constants";

interface ServiceSidebarProps {
  title: string;
  pdfText: string;
  extendedDescription: string;
  features: string[];
  specifications: Record<string, string | undefined>;
}

export default function ServiceSidebar({
  title,
  pdfText,
  extendedDescription,
  features,
  specifications,
}: ServiceSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Short Overview & Statement */}
      <div className="space-y-4">
        <div className="border-l-4 border-accent bg-accent/5 p-5 rounded-r-2xl">
          <p className="text-xs md:text-sm text-charcoal leading-relaxed font-semibold italic">
            &ldquo;{pdfText}&rdquo;
          </p>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          {extendedDescription}
        </p>
      </div>

      {/* Key Features */}
      <div className="bg-surface-light border border-border-light p-6 rounded-2xl shadow-xs">
        <h4 className="text-sm font-black text-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-border-light">
          Key Highlights
        </h4>
        <ul className="space-y-3">
          {features.slice(0, 4).map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs text-muted leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Compact Technical Specifications */}
      <div className="bg-surface-light border border-border-light p-6 rounded-2xl shadow-xs">
        <h4 className="text-sm font-black text-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-border-light">
          Specifications
        </h4>
        <div className="divide-y divide-border-light text-xs">
          {Object.entries(specifications)
            .filter((entry): entry is [string, string] => entry[1] !== undefined)
            .slice(0, 3)
            .map(([key, value]) => (
              <div key={key} className="py-2.5 flex justify-between gap-4">
                <span className="font-bold text-charcoal uppercase tracking-wider shrink-0">
                  {key.replace(/([A-Z])/g, ' $1').trim().replace("Framework", "Frame").replace("printingTech", "Tech")}
                </span>
                <span className="text-muted text-right">{value}</span>
              </div>
            ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="glassmorphism p-6 rounded-2xl shadow-md border border-border-light relative overflow-hidden">
        <h3 className="text-lg font-extrabold text-charcoal mb-3">
          Need Custom {title}?
        </h3>
        <p className="text-xs text-muted leading-relaxed mb-5">
          Discuss materials and fabrication plans with our signage specialists.
        </p>
        <div className="space-y-3">
          <Link
            href="/contact"
            className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Request Free Estimate
          </Link>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-white border border-border-light hover:border-accent text-charcoal hover:text-accent font-bold text-xs py-3.5 px-6 rounded-xl transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
