"use client";

import { useEffect, useState, useRef } from "react";

interface StatItem {
  target: number;
  suffix: string;
  formatComma: boolean;
  label: string;
}

const stats: StatItem[] = [
  { target: 10, suffix: "+", formatComma: false, label: "Years of industry experience" },
  { target: 1000, suffix: "+", formatComma: true, label: "Clients served across Haryana" },
  { target: 15, suffix: "", formatComma: false, label: "New clients served every month" },
  { target: 2017, suffix: "", formatComma: false, label: "Rooted in Hisar since" },
];

function Counter({ target, suffix = "", formatComma = false }: {
  target: number;
  suffix?: string;
  formatComma?: boolean;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTimestamp: number | null = null;
          const duration = 1500; // 1.5 seconds animation

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Quad ease-out deceleration curve
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * target);
            
            setCount(currentValue);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [target]);

  const formattedCount = formatComma ? count.toLocaleString("en-US") : count;

  return <span ref={elementRef}>{formattedCount}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-white/20 border-white/20">
          {stats.map((stat, i) => {
            // Apply border styling for 2x2 grid on mobile and 4-column row on desktop
            const borderClasses = `
              border-white/10
              ${i % 2 === 0 ? "border-r" : ""} 
              ${i < 2 ? "border-b" : ""} 
              lg:border-0 
              lg:border-r lg:last:border-r-0
            `.trim().replace(/\s+/g, " ");

            return (
              <div
                key={i}
                className={`px-3 py-5 md:px-6 md:py-8 text-center text-white ${borderClasses}`}
              >
                <p className="text-2xl md:text-4xl font-black">
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    formatComma={stat.formatComma}
                  />
                </p>
                <p className="text-[11px] md:text-sm font-semibold text-white/80 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
