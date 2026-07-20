import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { SITE_URL } from "@/lib/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Signage World | Custom Premium Signage & Fabrication Solutions",
    template: "%s | Signage World Hisar",
  },
  description:
    "High-quality custom signage solutions including ACP sign boards, LED displays, acrylic letters, metal boards, and commercial branding fabrication. Serving retail, office, and business projects in Hisar, Haryana.",
  keywords:
    "premium signage, ACP sign board, LED sign board, Acrylic letters, Metal lettering, shopfront branding, signage fabrication, Signage World Hisar, signage near me",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Signage World",
    title: "Signage World | Custom Premium Signage & Fabrication Solutions",
    description:
      "High-quality custom signage solutions including ACP sign boards, LED displays, acrylic letters, metal boards, and commercial branding fabrication. Serving retail, office, and business projects in Hisar, Haryana.",
    images: [
      {
        url: "/LOGO/PNG.png",
        width: 1200,
        height: 630,
        alt: "Signage World Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signage World | Custom Premium Signage & Fabrication Solutions",
    description:
      "High-quality custom signage solutions including ACP sign boards, LED displays, acrylic letters, metal boards, and commercial branding fabrication. Serving retail, office, and business projects in Hisar, Haryana.",
    images: ["/LOGO/PNG.png"],
  },
  verification: {
    google: "Tlu1rn47FIvhcQ3aZRFainn-NnaOgh38j3xNRNNW-y4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Signage World",
    image: `${SITE_URL}/LOGO/SVG.svg`,
    "@id": `${SITE_URL}/#localbusiness`,
    url: SITE_URL,
    telephone: "+918295567765",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 1337, Police Choki, Mohalla Sainiyan",
      addressLocality: "Hisar",
      addressRegion: "Haryana",
      postalCode: "125001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.1559995,
      longitude: 75.7321473,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61591724292280",
      "https://www.instagram.com/signageworldhisar/",
      "https://www.youtube.com/channel/UC8Fsqw2_Q5YRmkqKuWCbbZA",
    ],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-charcoal font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-9E6RZQR9K2" />
        )}
        {process.env.NODE_ENV === "production" && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xo9r77xkr0");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
