interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div
      className="glassmorphism p-4 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer hover:bg-accent/[0.04] hover:border-accent/20"
    >
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-muted leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}
