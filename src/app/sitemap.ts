import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/contact", "/projects"];
  const services = [
    "/flex-printing",
    "/led-boards",
    "/acrylic-signage",
    "/acp-boards",
    "/vehicle-wraps",
    "/glow-signs",
  ];

  const routeEntries = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${SITE_URL}${service}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routeEntries, ...serviceEntries];
}
