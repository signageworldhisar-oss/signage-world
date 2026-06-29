import Image from "next/image";
import Link from "next/link";

export interface ServiceItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="bg-white rounded-xl border border-border-light shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full"
    >
      {/* Visual Card Image Header */}
      <Link href={`/${service.slug}`} className="relative h-52 sm:h-52 w-full overflow-hidden bg-charcoal block">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Card content and detail info */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Tag and Rating stars inline */}
          <div className="flex items-center justify-between mb-1 sm:mb-3 text-xs font-bold text-accent uppercase tracking-wider">
            <span>{service.title.split(" ")[0]} Product</span>
            <div className="flex gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Title */}
          <Link href={`/${service.slug}`}>
            <h3 className="text-[17px] font-bold text-charcoal mb-2.5 group-hover:text-accent transition-colors duration-200 leading-snug">
              {service.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-xs text-muted leading-relaxed font-normal mb-2 sm:mb-4">
            {service.description}
          </p>
        </div>

        <div className="pt-4 border-t border-border-light flex items-center justify-between">
          <Link href={`/${service.slug}`} className="text-xs font-bold text-accent hover:text-accent-hover transition-colors duration-200 flex items-center gap-1 group/btn">
            View Details
            <svg className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
