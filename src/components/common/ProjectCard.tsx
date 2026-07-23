import Image from "next/image";

export interface ProjectItem {
  id: string | number;
  title: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
  categoryName?: string;
  showFeaturedBadge?: boolean;
}

export default function ProjectCard({ 
  project, 
  onClick, 
  categoryName, 
  showFeaturedBadge = false 
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative h-62.5 md:h-70 rounded-2xl overflow-hidden shadow-md border border-border-light bg-surface-light transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      {/* Hover Border Overlay */}
      <div className="absolute inset-0 border border-transparent group-hover:border-accent transition-colors duration-300 pointer-events-none rounded-2xl z-20" />

      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Featured badge */}
      {showFeaturedBadge && project.featured && (
        <div className="absolute top-3 left-3 z-10 bg-accent text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full shadow">
          Featured
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-accent font-bold text-xs uppercase tracking-widest mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {categoryName || ""}
        </span>
        <h3 className="text-white text-base md:text-lg font-bold leading-snug transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {project.title}
        </h3>
      </div>

      {/* Mobile details strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xs p-3 border-t border-border-light flex items-center justify-between group-hover:opacity-0 transition-opacity duration-200 lg:hidden">
        <span className="text-[13px] font-bold text-charcoal truncate">{project.title}</span>
        <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded-full shrink-0">
          {project.category}
        </span>
      </div>
    </div>
  );
}
