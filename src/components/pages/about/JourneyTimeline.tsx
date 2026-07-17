const storyMilestones = [
  {
    year: "2014",
    title: "Learning the Craft",
    description:
      "Faheem began his journey studying graphic design and visual arts at Mahatma Gandhi Sakasharta Mission near Bus Stand, Hisar. What started as a skill became a calling.",
  },
  {
    year: "2014 – 2017",
    title: "Hands-On Mastery",
    description:
      "He joined a signage and printing shop near Taliyan Pull, Gausala, Hisar — spending 3 years mastering on-the-ground fabrication and learning what businesses truly need to make their brand visible.",
  },
  {
    year: "2017 – 2025",
    title: "Industry Leadership",
    description:
      "Faheem joined Sanya Advertisers, one of the established names in local signage, where he worked for 8 years sharpening skills in fabrication, client handling, large-format printing, and project management.",
  },
  {
    year: "2025",
    title: "Signage World Founded",
    description:
      "After 10+ years of dedication to the trade, Faheem took the leap and founded Signage World — his own company, his own vision. Built on real-world experience, honest pricing, and a commitment to quality.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-16 md:py-24 bg-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="section-header">
          <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full">
            Our Story
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-charcoal tracking-tight mt-4 mb-4">
            Every Great Business Starts With a Passion
          </h2>
          <p className="text-sm md:text-lg text-muted leading-relaxed">
            Ours started in 2017 — with one person, one craft, and an unwavering
            commitment to quality.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mt-16">
          {/* Vertical connector line (desktop: horizontal, mobile: vertical) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-border-light z-0" />

          {/* Step nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative z-10">
            {storyMilestones.map((milestone, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center px-4 relative"
              >
                {/* Connector line segment — left half (all except first) */}
                {i > 0 && (
                  <div className="hidden md:block absolute top-10 right-1/2 left-0 h-px bg-border-light -z-10" />
                )}
                {/* Connector line segment — right half (all except last) */}
                {i < storyMilestones.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 right-0 h-px bg-border-light -z-10" />
                )}

                {/* Step badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-border-light shadow-md flex flex-col items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <span className="text-accent font-black text-xl leading-none">
                      {i + 1}
                    </span>
                    <span className="text-[9px] font-bold text-muted uppercase tracking-widest mt-0.5">
                      Step
                    </span>
                  </div>
                  {/* Accent ring on active/latest */}
                  {i === storyMilestones.length - 1 && (
                    <span className="absolute inset-0 rounded-full border-2 border-accent scale-110 opacity-40 pointer-events-none" />
                  )}
                </div>

                {/* Year pill */}
                <span className="inline-block bg-accent text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {milestone.year}
                </span>

                {/* Title */}
                <h3 className="text-base font-extrabold text-charcoal mb-2 leading-snug">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {milestone.description}
                </p>

                {/* Mobile connector line going down (between cards) */}
                {i < storyMilestones.length - 1 && (
                  <div className="md:hidden w-px h-10 bg-border-light mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
