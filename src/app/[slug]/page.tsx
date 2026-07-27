import { notFound } from "next/navigation";
import { serviceDetails } from "@/lib/helper";
import ServiceHero from "@/components/pages/service-detail/ServiceHero";
import ServiceGallery from "@/components/pages/service-detail/ServiceGallery";
import ServiceSidebar from "@/components/pages/service-detail/ServiceSidebar";
import ServiceFAQ from "@/components/pages/service-detail/ServiceFAQ";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return [
    { slug: "flex-printing" },
    { slug: "led-boards" },
    { slug: "acrylic-signage" },
    { slug: "acp-boards" },
    { slug: "glow-signs" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    return {};
  }

  return {
    title: {
      absolute: `${service.title} | Signage World`
    },
    description: service.pdfText,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Signage World`,
      description: service.pdfText,
      url: `${SITE_URL}/${slug}`,
      images: [
        {
          url: service.image,
          alt: service.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Signage World`,
      description: service.pdfText,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  // Service Local Business Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.pdfText,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Signage World",
      "url": SITE_URL
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Hisar"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Haryana"
      }
    ]
  };

  // FAQ Page Schema
  const faqJsonLd = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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

      {/* FAQs Section */}
      <ServiceFAQ faqs={service.faqs} />
    </main>
  );
}
