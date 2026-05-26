import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';
import { statsMock } from '@/utils/mockData';
import ScrollReveal from '@/components/ui/ScrollReveal';

function StatCard({
  value,
  suffix,
  label,
  unit,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  unit?: string;
  delay: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { displayValue } = useCountUp({
    end: value,
    duration: 2000,
    delay,
    enabled: inView,
  });

  return (
    <div ref={ref} className="text-center group">
      <div className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-3">
        {displayValue}
        <span className="text-2xl sm:text-3xl">{suffix}</span>
        {unit && (
          <span className="text-lg sm:text-xl text-text-secondary">{unit}</span>
        )}
      </div>
      <p className="text-text-secondary text-sm sm:text-base">{label}</p>
      <div className="mt-4 mx-auto w-16 h-[1px] bg-gradient-primary opacity-30 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="home-stats" className="section-padding bg-surface-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)]" />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {statsMock.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                unit={(stat as { unit?: string }).unit}
                delay={index * 150}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
