import Image from "next/image";

interface ServiceGalleryProps {
  title: string;
  image: string;
  gallery?: string[];
}

export default function ServiceGallery({ title, image, gallery }: ServiceGalleryProps) {
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Hero Showcase Image */}
      <div className="relative h-96 sm:h-[480px] w-full rounded-xl md:rounded-3xl overflow-hidden shadow-md border border-border-light group bg-charcoal">
        <Image
          src={image}
          alt={`${title} featured showcase`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition-transform duration-500 group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 bg-charcoal/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-xs font-bold">
          Featured Project Fabrication
        </div>
      </div>

      {/* Sub-gallery of related work */}
      {gallery && gallery.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Fabrication &amp; Project Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((imgSrc, index) => (
              <div 
                key={index}
                className="relative h-56 w-full rounded-2xl overflow-hidden border border-border-light shadow-xs hover:shadow-md group bg-charcoal"
              >
                <Image
                  src={imgSrc}
                  alt={`${title} sub-gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
