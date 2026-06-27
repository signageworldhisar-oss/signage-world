export const categories = [
  { id: "all", name: "All Projects" },
  { id: "acp", name: "ACP Sign Boards" },
  { id: "led", name: "LED Signage" },
  { id: "acrylic", name: "Acrylic Signs" },
  { id: "shopfront", name: "Shopfront Branding" },
  { id: "office", name: "Office Signage" },
  { id: "fabrication", name: "Fabrication Projects" },
];

export const projects = [
  { id: 1,  title: "Premium Retail Storefront",       category: "acp",         image: "/images/project-1.jpeg",  featured: true  },
  { id: 2,  title: "Mall Entrance ACP Cladding",       category: "acp",         image: "/images/project-2.jpeg",  featured: false },
  { id: 3,  title: "Illuminated 3D LED Letters",       category: "led",         image: "/images/project-3.jpeg",  featured: true  },
  { id: 4,  title: "Outdoor Glow Lightbox Sign",       category: "led",         image: "/images/project-4.jpeg",  featured: false },
  { id: 5,  title: "Corporate Reception Acrylic",      category: "acrylic",     image: "/images/project-5.jpeg",  featured: true  },
  { id: 6,  title: "Modern Showroom Fascia Sign",      category: "shopfront",   image: "/images/project-6.jpeg",  featured: true  },
  { id: 7,  title: "Office Wall Mounted Logo",         category: "office",      image: "/images/project-7.jpeg",  featured: false },
  { id: 8,  title: "Retail Outlet Window Branding",   category: "shopfront",   image: "/images/project-8.jpeg",  featured: false },
  { id: 9,  title: "Double Sided Glowing Box",        category: "led",         image: "/images/project-9.jpeg",  featured: true  },
  { id: 10, title: "Commercial Wayfinding Signs",     category: "office",      image: "/images/project-10.jpeg", featured: false },
  { id: 11, title: "Stainless Steel Letters Board",   category: "acrylic",     image: "/images/project-11.jpeg", featured: false },
  { id: 12, title: "Heavy Steel Signage Frame",       category: "fabrication", image: "/images/project-12.jpeg", featured: true  },
  { id: 13, title: "Brushed Brass Corporate Wall",    category: "acrylic",     image: "/images/project-13.jpeg", featured: false },
  { id: 14, title: "Showroom Front LED Channel",      category: "led",         image: "/images/project-14.jpeg", featured: true  },
  { id: 15, title: "Safety & Emergency Signages",     category: "office",      image: "/images/project-15.jpeg", featured: false },
  { id: 16, title: "Aluminum Panel Cladding Work",    category: "acp",         image: "/images/project-16.jpeg", featured: true  },
  { id: 17, title: "Frosted Glass Privacy Graphics",  category: "office",      image: "/images/project-17.jpeg", featured: false },
  { id: 18, title: "Digital Vinyl Glass Graphics",    category: "shopfront",   image: "/images/project-18.jpeg", featured: false },
  { id: 19, title: "Exhibition Fabricated Canopy",    category: "fabrication", image: "/images/project-19.jpeg", featured: false },
  { id: 20, title: "Corporate Lobby LED Signage",     category: "office",      image: "/images/project-20.jpeg", featured: false },
  { id: 21, title: "Bespoke Steel Signboard Frame",   category: "fabrication", image: "/images/project-21.jpeg", featured: false },
  { id: 22, title: "Automated Profile Metal Bending", category: "fabrication", image: "/images/project-22.jpeg", featured: false },
  { id: 23, title: "High-Visibility Shop Board",      category: "shopfront",   image: "/images/project-23.jpeg", featured: false },
];

export const featuredProjects = projects.filter((p) => p.featured);
