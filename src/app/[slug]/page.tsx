import { notFound } from "next/navigation";
import { serviceDetails } from "@/lib/helper";
import ServiceHero from "@/components/pages/service-detail/ServiceHero";
import ServiceGallery from "@/components/pages/service-detail/ServiceGallery";
import ServiceSidebar from "@/components/pages/service-detail/ServiceSidebar";

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
    <main className="min-h-screen bg-white">
      <ServiceHero title={service.title} subtitle={service.subtitle} />

      {/* Detail Body Section */}
      <section className="py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ServiceGallery
              title={service.title}
              image={service.image}
              gallery={service.gallery}
            />
            <ServiceSidebar
              title={service.title}
              pdfText={service.pdfText}
              extendedDescription={service.extendedDescription}
              features={service.features}
              specifications={service.specifications}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
