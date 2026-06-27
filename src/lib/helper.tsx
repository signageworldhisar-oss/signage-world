import {
  IconFlexPrinting,
  IconLEDBoard,
  IconAcrylicSignage,
  IconACPBoard,
  IconVehicleWrap,
  IconGlowSign
} from "@/components/icons";

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
}

export const serviceDetails: Record<string, ServiceData> = {
  "flex-printing": {
    title: "Flex Printing",
    subtitle: "High-Quality Flex Printing Services",
    pdfText: "Create eye-catching advertising materials with premium flex printing for shops, events, exhibitions, promotions, and outdoor branding.",
    extendedDescription: "Our high-resolution, durable flex and banner prints are perfect for large-scale marketing displays. We use advanced solvent and eco-solvent printing technologies to deliver vibrant colors and sharp details that withstand harsh weather conditions.",
    image: "/images/project-8.jpeg",
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
    ]
  },
  "led-boards": {
    title: "LED Boards",
    subtitle: "Bright & Energy-Efficient LED Sign Boards",
    pdfText: "Make your business visible day and night with custom LED sign boards designed for maximum impact.",
    extendedDescription: "Make a powerful first impression with our custom 3D illuminated LED letter boards. Engineered with energy-efficient Samsung LED modules and IP67 waterproof power suppliers, our signs offer high brightness, low power consumption, and long-lasting durability.",
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
    ]
  },
  "acrylic-signage": {
    title: "Acrylic Signage",
    subtitle: "Premium Acrylic Signage for Modern Branding",
    pdfText: "Enhance your business image with sleek, durable, and professional acrylic signs.",
    extendedDescription: "Create a modern, sophisticated aesthetic with laser-cut solid acrylic letters and logo plaques. Ideal for upscale receptions, boardrooms, retail interiors, and prestige corporate headquarters, acrylic signage provides a clean, glassy finish that speaks of quality.",
    image: "/images/project-5.jpeg",
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
    ]
  },
  "acp-boards": {
    title: "ACP Boards",
    subtitle: "Durable ACP Sign Boards & Cladding Solutions",
    pdfText: "Create a modern business exterior with premium ACP signage and cladding.",
    extendedDescription: "Transform your building facade with premium Aluminum Composite Panel (ACP) cladding and signboards. Highly weather-resistant, lightweight, and offering superb structural flatness, ACP boards serve as the perfect modern background substrate for 3D LED or metal letters.",
    image: "/images/project-3.jpeg",
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
    ]
  },
  "vehicle-wraps": {
    title: "Vehicle Wraps",
    subtitle: "Custom Vehicle Wraps That Advertise Everywhere",
    pdfText: "Turn your vehicle into a moving advertisement with premium custom vehicle wraps.",
    extendedDescription: "Turn your business cars, delivery vans, and commercial fleet into moving billboards. We utilize premium cast wrapping vinyl films with protective UV laminate overlays to ensure your branding stays vibrant and bubble-free for years while protecting the underlying vehicle paint.",
    image: "/images/project-1.jpeg",
    icon: <IconVehicleWrap className="w-8 h-8 text-accent" />,
    features: [
      "Premium Cast Wrapping Vinyl Material",
      "UV Protective Gloss/Matte Laminate Overlays",
      "Precise Vehicle Template Contour Fitting",
      "Removable Adhesive (Protects Original Paint)",
      "High-Resolution Eco-Solvent Photo Prints",
    ],
    specifications: {
      material: "Avery Dennison / 3M cast wrapping films (or equivalent premium vinyl)",
      laminate: "Matching cast protective UV filter clear laminate layer",
      application: "Dry or wet professional wrap installation by certified crew",
      lifespan: "3 to 5 years outdoor lifespan against peeling or color fading",
    },
    applications: [
      "Commercial Fleet Branding",
      "Delivery Van & Truck Full/Half Wraps",
      "Company Car Door Logos & Decals",
      "Food Truck Visual Wrap Graphics",
      "Public Transit Bus Wraps",
    ]
  },
  "glow-signs": {
    title: "Glow Signs",
    subtitle: "Illuminated Double-Sided Lightboxes & Vacuum-Formed Glow Boards",
    pdfText: "Illuminated double-sided lightboxes, vacuum-formed glow boards, and signs. High-visibility promotion for shops and showrooms both day and night.",
    extendedDescription: "Ensure 24/7 visibility for your storefront with our high-impact glow sign lightboxes. Utilizing premium translucent back-lit flex materials or vacuum-formed acrylic faces illuminated internally by bright, even LED grids, our glow signs draw customers in day and night.",
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
    ]
  }
};
