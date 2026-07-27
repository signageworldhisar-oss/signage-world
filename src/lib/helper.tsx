import {
  IconFlexPrinting,
  IconLEDBoard,
  IconAcrylicSignage,
  IconACPBoard,
  IconGlowSign
} from "@/components/icons";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  pdfText: string;
  extendedDescription: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  specifications: {
    material: string;
    [key: string]: string | undefined;
  };
  applications: string[];
  gallery?: string[];
  faqs?: FAQItem[];
}

export const serviceDetails: Record<string, ServiceData> = {
  "flex-printing": {
    title: "Flex Printing Services in Hisar",
    subtitle: "High-Quality Banner & Flex Printing Services",
    pdfText: "Create eye-catching advertising materials with premium flex printing in Hisar, Haryana for shops, events, exhibitions, and outdoor branding.",
    extendedDescription: "We offer premium flex printing at our Hisar-based workshop. Our high-resolution, durable flex and banner prints are perfect for large-scale marketing displays, retail storefronts, and promotional campaigns. Using advanced solvent and eco-solvent printing technologies, we deliver vibrant, weather-resistant outdoor branding solutions tailored for local businesses.",
    image: "/images/flex-printing.jpeg",
    icon: <IconFlexPrinting className="w-8 h-8 text-accent" />,
    features: [
      "Ultra High-Resolution Printing",
      "Weather & UV Resistant Media",
      "Vibrant Color Reproduction",
      "Quick Turnaround & Installation",
      "Eco-Solvent Odorless Inks available",
    ],
    specifications: {
      material: "Premium Glossy/Matte Flex Banner (340gsm - 440gsm)",
      printingTech: "Eco-Solvent / Solvent Wide-Format Printing",
      durability: "Suitable for both temporary indoor events & long-term outdoor displays",
      finishing: "Metal eyelets, pocket folding, or wooden framing options",
    },
    applications: [
      "Outdoor Billboards & Hoardings",
      "Exhibition Booth Backdrops",
      "Retail Shop Front Banners",
      "Event & Promotional Standees",
      "Street Pole Banners",
    ],
    gallery: [
      "/images/flex-printing.jpeg",
      "/images/shop-flex-board.jpeg"
    ],
    faqs: [
      {
        question: "How fast can I get a banner printed at your Hisar workshop?",
        answer: "Typically, we complete and deliver standard flex prints within 24 to 48 hours. For urgent orders or events in Hisar, we also offer same-day printing services depending on the size and design availability."
      },
      {
        question: "What is the difference between normal flex and star flex printing?",
        answer: "Star flex is thicker (higher gsm), has a higher tensile strength, and offers significantly better color vibrancy under sunlight. It is highly recommended for long-term outdoor shop boards in Hisar to withstand extreme summer temperatures."
      },
      {
        question: "Are your prints waterproof and fade-resistant?",
        answer: "Yes, we use eco-solvent and high-grade solvent inks that are UV-resistant. This ensures that the banner colors remain vibrant and do not fade or smudge when exposed to rain and direct sunlight."
      }
    ]
  },
  "led-boards": {
    title: "LED Sign Board Manufacturers in Hisar",
    subtitle: "Custom 3D Illuminated & Neon LED Sign Boards",
    pdfText: "Make your business stand out day and night in Hisar with custom LED sign boards and 3D letters designed for maximum local impact.",
    extendedDescription: "Make a powerful first impression in Hisar with custom 3D illuminated LED letter boards and custom neon signs. Engineered with energy-efficient Samsung LED modules and IP67 waterproof power supplies, we fabricate high-brightness, durable LED sign boards at our workshop for shops, offices, and showrooms in Haryana.",
    image: "/images/project-18.jpeg",
    icon: <IconLEDBoard className="w-8 h-8 text-accent" />,
    features: [
      "3D Illuminated Channel Letters",
      "Energy-Efficient Samsung LED Modules",
      "Weatherproof IP67 Power Systems",
      "Premium Acrylic Fronts & Metal Retainers",
      "Front-lit, Back-lit (Halo effect), or Neon styles",
    ],
    specifications: {
      material: "Premium Acrylic faces, aluminum return profiles, steel frames",
      lighting: "IP68 high-efficiency LED modules (Samsung or equivalent)",
      power: "MeanWell IP67 waterproof power supply adapters",
      warranty: "1 to 3 Year standard LED/Power Supply replacement warranties",
    },
    applications: [
      "Retail Shopfront Branding",
      "Commercial Building Facades",
      "Showroom Accent Exterior Signs",
      "Indoor Reception Branding",
      "Corporate Headquarters Signage",
    ],
    gallery: [
      "/images/project-18.jpeg",
      "/images/project-20.jpeg",
      "/images/project-17.jpeg",
      "/images/project-22.jpeg",
      "/images/om-estates.jpeg",
      "/images/taneja-properties.jpeg",
      "/images/suncity-cinemas.jpeg"
    ],
    faqs: [
      {
        question: "What kind of warranty do you provide on LED sign boards in Hisar?",
        answer: "We provide a 1 to 3 year replacement warranty on our premium Samsung LED modules and MeanWell IP67 waterproof power adapters. If any electrical component fails under normal use, we replace it free of cost."
      },
      {
        question: "How much electricity does a 3D LED board consume?",
        answer: "Our boards use energy-efficient LED modules that consume up to 70% less power than traditional neon or fluorescent lightboxes. The exact consumption depends on the total count and height of the 3D letters."
      },
      {
        question: "How do LED boards withstand Hisar's extreme summer temperatures?",
        answer: "We use premium cast acrylic front faces that do not turn yellow or crack under intense heat, combined with aluminum profiles and steel frames painted with anti-rust primers to withstand temperature variations."
      }
    ]
  },
  "acrylic-signage": {
    title: "Premium Acrylic Name Plates & Signage in Hisar",
    subtitle: "Custom Acrylic Name Plates & Laser-Cut Signage",
    pdfText: "Custom acrylic name plates and 3D acrylic signs designed for offices, homes, cabins, reception areas, and clinics in Hisar, Haryana.",
    extendedDescription: "We design and manufacture premium custom acrylic name plates and office signage in Hisar, Haryana. Using high-quality laser-cut acrylic sheets with elegant finishes and precise CNC engraving, we deliver stunning 3D nameplates and corporate signage for homes, apartments, and commercial spaces.",
    image: "/images/name-plate.jpeg",
    icon: <IconAcrylicSignage className="w-8 h-8 text-accent" />,
    features: [
      "Precision CNC Laser-Cut Profiles",
      "Crystal Clear Polished Edges",
      "3D Stud Floating Mount Options",
      "Diverse Color Sheet Selection & Frost Finishes",
      "Premium Metal Cap Hardware",
    ],
    specifications: {
      material: "Cast Acrylic Sheets (3mm to 20mm thickness)",
      mounting: "Stainless steel spacer studs or industrial-strength bonding adhesive",
      finish: "High-gloss, frosted, or custom color vinyl overlays",
      customization: "Laser engraving or multi-layered 3D logo overlays",
    },
    applications: [
      "Corporate Office Reception Walls",
      "Boardroom & Executive Suite Plaques",
      "Upscale Boutiques & Retail Interiors",
      "Wayfinding & Directional Indoor Signs",
      "Exhibition Logo Displays",
    ],
    gallery: [
      "/images/name-plate.jpeg",
      "/images/name-plate-2.jpeg",
      "/images/name-plate-4.jpeg",
      "/images/name-plate-3.jpeg",
      "/images/as-acrylic.jpeg"
    ],
    faqs: [
      {
        question: "What thicknesses are available for acrylic name plates?",
        answer: "We offer cast acrylic sheets in thicknesses ranging from 3mm for small indoor plates up to 20mm for heavy-duty corporate signs. 5mm and 8mm are the most popular choices for home name plates."
      },
      {
        question: "Can I get a custom shape or logo laser-cut for my office?",
        answer: "Yes, our computerized CNC laser cutting machines can replicate any branding font, geometric shape, or complex logo with micron-level precision and smooth, polished edges."
      },
      {
        question: "Do you offer home or office installation in Hisar?",
        answer: "Yes, we provide professional installation services across Hisar. We mount the acrylic plates using premium stainless steel spacer studs (floating mounts) or industrial double-sided adhesive depending on the surface."
      }
    ]
  },
  "acp-boards": {
    title: "ACP Sign Board Fabricators & Cladding in Hisar",
    subtitle: "Premium ACP Sign Boards & Building Cladding Services",
    pdfText: "Create a modern business facade in Hisar with premium ACP board signage, route-cut letters, and professional cladding.",
    extendedDescription: "Transform your storefront or building facade with the top ACP sign board fabricators in Hisar, Haryana. We offer premium Aluminum Composite Panel (ACP) cladding and route-cut signs. Weatherproof and highly durable, our ACP sheet boards provide a sleek, modern look for local shops and showrooms.",
    image: "/images/acp-work-3.jpeg",
    icon: <IconACPBoard className="w-8 h-8 text-accent" />,
    features: [
      "Heavy-Duty Aluminum Composite Substrate",
      "PVDF Coating for Weather & Corrosion Protection",
      "Computerized CNC Route-Cut Detailing",
      "Internal Iron Framework Structural Support",
      "Seamless Facade Cladding Integrations",
    ],
    specifications: {
      material: "3mm / 4mm ACP Sheets (0.25mm - 0.50mm coil thickness)",
      coating: "PVDF or Polyester finish with UV protection",
      framework: "Structural MS hollow tubes painted with anti-rust red oxide primer",
      durability: "Excellent resistance to rain, direct sun, heat, and pollution",
    },
    applications: [
      "Building Exterior Cladding",
      "Modern Shopfront Facade Backdrops",
      "Pylon Signages & Totems",
      "Industrial Park Directory Boards",
      "Petrol Pump Canopy Graphics",
    ],
    gallery: [
      "/images/acp-work-1.jpeg",
      "/images/acp-work-2.jpeg",
      "/images/acp-work-3.jpeg",
      "/images/acp-work-4.jpeg",
      "/images/acp-work-5.jpeg",
      "/images/fresh-n-fold.jpeg",
      "/images/tirupati-dham.jpeg"
    ],
    faqs: [
      {
        question: "What is the lifespan of an ACP sign board in Haryana's weather?",
        answer: "Premium ACP boards coated with PVDF are exceptionally durable and last between 10 to 15 years. They do not rust, warp, or crack under extreme sunlight, monsoon rains, or dust storms."
      },
      {
        question: "Can we mount 3D letters on top of the ACP cladding?",
        answer: "Yes. ACP sheets are mounted on a rigid iron frame, making them the perfect sturdy background substrate. We can easily install illuminated 3D LED letters, metal letters, or acrylic cut-outs on top of them."
      },
      {
        question: "Do you handle the entire structural metal fabrication?",
        answer: "Yes, we handle everything from the initial site measurement and designing to fabricating the heavy-duty mild steel (MS) framework, installing ACP cladding, and mounting the final lettering."
      }
    ]
  },
  "glow-signs": {
    title: "Glow Sign Board Dealers & Lightboxes in Hisar",
    subtitle: "Double-Sided Glow Sign Boards & LED Lightboxes",
    pdfText: "High-visibility double-sided lightboxes and vacuum-formed glow signs for shops and commercial showrooms across Hisar, Haryana.",
    extendedDescription: "Ensure 24/7 visibility for your storefront with our high-impact glow sign boards. Utilizing premium translucent back-lit flex materials or vacuum-formed acrylic faces illuminated internally by bright, even-grid LED layouts, we design eye-catching lightboxes and projection signs for Hisar retailers.",
    image: "/images/project-11.jpeg",
    icon: <IconGlowSign className="w-8 h-8 text-accent" />,
    features: [
      "Translucent Graphics for Ideal Light Diffusion",
      "Double-Sided Projecting Wall Signs available",
      "Extruded Aluminum Framing with Powder Coating",
      "Even LED Interior Grid Layout (No shadows/dark spots)",
      "Vacuum-Formed 3D Embossed Face Options",
    ],
    specifications: {
      material: "Extruded aluminum profile frames, translucent acrylic or back-lit flex",
      illumination: "Internal high-brightness LED tubes or LED modules",
      mounting: "Wall-mounted flush or heavy-duty projecting brackets",
      waterproofing: "Silicone sealants and drainage holes for outdoor water-shedding",
    },
    applications: [
      "Showroom Projecting Flange Signs",
      "Main Storefront Header Lightboxes",
      "Mall Corridor & Under-Canopy Signs",
      "Restaurant Menu Boards & Lightboxes",
      "High-Street Retail Shop Outlets",
    ],
    gallery: [
      "/images/project-11.jpeg",
      "/images/project-20.jpeg",
      "/images/project-10.jpeg",
      "/images/project-16.jpeg",
      "/images/project-13.jpeg",
    ],
    faqs: [
      {
        question: "What light source is used in your double-sided glow boards?",
        answer: "We use high-efficiency LED tube lights or back-lit LED module grids arranged in a dense pattern to ensure uniform light diffusion, eliminating dark patches or shadows behind the graphics."
      },
      {
        question: "Can these glow boards be mounted projecting from the wall?",
        answer: "Yes, we design and manufacture double-sided projecting lightboxes (also called flange signs) equipped with sturdy iron brackets. They are perfect for mounting perpendicular to the street to capture oncoming foot traffic."
      },
      {
        question: "Is there a risk of water entering the lightbox during rain?",
        answer: "No, we seal all frame edges with heavy-duty weatherproofing silicone. The bottom of the aluminum framing is also designed with small hidden drainage outlets to release any internal moisture condensation."
      }
    ]
  }
};
