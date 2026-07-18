import type { Metadata } from "next";
import ProjectsHero from "@/components/pages/projects/ProjectsHero";
import ProjectsGallery from "@/components/pages/projects/ProjectsGallery";

export const metadata: Metadata = {
  title: "Our Projects & Work Portfolio",
  description: "Browse our gallery of completed retail storefronts, ACP cladding facades, glowing LED signs, acrylic logo plaques, and custom fabrication projects in Hisar and across Haryana.",
  keywords: "signage portfolio, signage projects Hisar, shop front photos, LED sign samples, acrylic board gallery, ACP cladding work Haryana",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
    </>
  );
}
