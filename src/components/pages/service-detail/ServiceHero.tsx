import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

export default function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="pt-20 sm:pt-28  pb-5 md:pb-16  bg-charcoal text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, var(--color-accent) 0%, transparent 60%)",
          }}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-12 z-10 relative">
          <div className="flex flex-col items-start gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-accent text-sm font-semibold md:mb-8 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
                    <span className="text-accent font-extrabold text-[6px] sm:text-[10px] md:text-xs uppercase tracking-widest bg-accent/15 px-3.5 py-1.5 rounded-full">
            Premium Fabrication
                    </span>
          </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight sm:mt-5 my-4 sm:mb-4 text-white leading-tight">
          {title}
        </h1>
        <p className="text-sm md:text-lg text-white/70 leading-relaxed max-w-3xl font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
