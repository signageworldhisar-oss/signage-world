import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/lib/helper";

export function generateStaticParams() {
  return [
    { slug: "flex-printing" },
    { slug: "led-boards" },
    { slug: "acrylic-signage" },
    { slug: "acp-boards" },
    { slug: "vehicle-wraps" },
    { slug: "glow-signs" },
  ];
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-white">
        
        {/* Service Hero Header */}
        <section className="pt-28 pb-12 bg-surface-light border-b border-border-light relative">
          <div className="max-w-7xl mx-auto px-4 md:px-12 z-10 relative">
            <Link 
              href="/#services" 
              className="text-xs font-bold text-accent hover:text-accent-hover transition-colors duration-200 flex items-center gap-1.5 mb-6"
            >
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                {service.icon}
              </div>
              <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
                Service Details
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-base md:text-xl font-bold text-charcoal-light leading-relaxed max-w-3xl mb-4">
              {service.subtitle}
            </p>
          </div>
        </section>

        {/* Detail Body Section */}
        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column Content - Spans 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-10">
                
                {/* PDF Highlight Statement */}
                <div className="border-l-4 border-accent bg-accent/5 p-6 rounded-r-xl">
                  <p className="text-base text-charcoal leading-relaxed font-medium italic">
                    &ldquo;{service.pdfText}&rdquo;
                  </p>
                </div>

                {/* Extended Description */}
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">Overview</h2>
                  <p className="text-base text-muted leading-relaxed font-normal">
                    {service.extendedDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-5">Key Features & Benefits</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm md:text-base text-muted font-normal leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-5">Specifications</h2>
                  <div className="bg-surface-light border border-border-light rounded-xl overflow-hidden shadow-sm">
                    <table className="min-w-full divide-y divide-border-light text-left text-sm">
                      <tbody className="divide-y divide-border-light">
                        {Object.entries(service.specifications).map(([key, value]) => (
                          <tr key={key} className="hover:bg-charcoal/[0.01] transition-colors">
                            <td className="px-5 py-4 font-bold text-charcoal uppercase tracking-wider w-1/3 border-r border-border-light bg-charcoal/[0.02]">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </td>
                            <td className="px-5 py-4 text-muted font-normal leading-relaxed">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Typical Applications */}
                <div>
                  <h2 className="text-2xl font-bold text-charcoal mb-5">Typical Applications</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.applications.map((app, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-surface-light border border-border-light rounded-xl hover:border-accent/30 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                        <span className="text-sm md:text-base font-medium text-charcoal leading-none">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column Visuals & CTA - Spans 1 column on large screens */}
              <div className="space-y-8">
                
                {/* Hero Image Card */}
                <div className="relative h-80 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-border-light group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"></div>
                </div>

                {/* CTA Card */}
                <div className="glassmorphism p-8 rounded-2xl shadow-md border border-border-light relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
                  <h3 className="text-xl font-extrabold text-charcoal mb-4 relative z-10">
                    Need Custom {service.title}?
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-normal mb-6 relative z-10">
                    Get in touch with our fabrication experts today. We provide personalized consultations, design blueprints, premium fabrication, and certified installation services.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/#contact"
                      className="block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Request Free Estimate
                    </Link>
                    <a
                      href="https://wa.me/918295567765"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-white border border-border-light hover:border-accent text-charcoal hover:text-accent font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-300"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
