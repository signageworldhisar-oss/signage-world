import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/lib/helper";
import { WHATSAPP_BASE } from "@/lib/constants";

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
        <section className="pt-20 sm:pt-28 pb-16 bg-charcoal text-white relative overflow-hidden">
          {/* Subtle accent glow behind the header */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 80% 50%, var(--color-accent) 0%, transparent 60%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 md:px-12 z-10 relative">
            <span className="text-accent font-extrabold text-[10px] md:text-xs uppercase tracking-widest bg-accent/15 px-3.5 py-1.5 rounded-full">
              Premium Fabrication
            </span>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-5 mb-4 text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-sm md:text-lg text-white/70 leading-relaxed max-w-3xl font-medium">
              {service.subtitle}
            </p>
          </div>
        </section>

        {/* Detail Body Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column Content - Visual Project Gallery (Spans 2 columns on desktop) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Hero Showcase Image */}
                <div className="relative h-96 sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-md border border-border-light group bg-charcoal">
                  <Image
                    src={service.image}
                    alt={`${service.title} featured showcase`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-xs font-bold">
                    Featured Project Fabrication
                  </div>
                </div>

                {/* Sub-gallery of related work */}
                {service.gallery && service.gallery.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Fabrication &amp; Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.gallery.map((imgSrc, index) => (
                        <div 
                          key={index}
                          className="relative h-56 w-full rounded-2xl overflow-hidden border border-border-light shadow-xs hover:shadow-md group bg-charcoal"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${service.title} sub-gallery image ${index + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, 30vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column Content - Compact details, specs & CTA (Spans 1 column on desktop) */}
              <div className="space-y-8">
                {/* Short Overview & Statement */}
                <div className="space-y-4">
                  <div className="border-l-4 border-accent bg-accent/5 p-5 rounded-r-2xl">
                    <p className="text-xs md:text-sm text-charcoal leading-relaxed font-semibold italic">
                      &ldquo;{service.pdfText}&rdquo;
                    </p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.extendedDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="bg-surface-light border border-border-light p-6 rounded-2xl shadow-xs">
                  <h4 className="text-sm font-black text-charcoal uppercase tracking-wider mb-4 pb-2 border-b border-border-light">
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
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
                    {Object.entries(service.specifications).slice(0, 3).map(([key, value]) => (
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
                    Need Custom {service.title}?
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

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
