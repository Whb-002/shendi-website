import { useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { casesMock } from '@/utils/mockData';

export default function CasesGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!scrollRef.current) return;
      setIsDragging(true);
      dragStartRef.current = {
        x: e.pageX - scrollRef.current.offsetLeft,
        scrollLeft: scrollRef.current.scrollLeft,
      };
    },
    []
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - dragStartRef.current.x) * 1.5;
      scrollRef.current.scrollLeft = dragStartRef.current.scrollLeft - walk;
    },
    [isDragging]
  );

  return (
    <section className="section-padding bg-surface-dark overflow-hidden">
      <div className="container mb-12">
        <SectionTitle
          title="项目案例"
          subtitle="遍布全国的经典项目，见证我们的专业实力"
        />
      </div>

      <ScrollReveal>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll snap-x snap-mandatory scrollbar-hide px-4 md:px-8 cursor-grab active:cursor-grabbing pb-4"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ scrollbarWidth: 'none' }}
        >
          {casesMock.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
            >
              <div className="glass rounded-xl overflow-hidden group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-text-secondary text-sm">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[360px]">
            <div className="glass rounded-xl h-full flex flex-col items-center justify-center p-8 text-center">
              <p className="text-text-secondary text-lg mb-4">更多精彩案例</p>
              <a
                href="/cases"
                className="text-primary hover:text-primary-light transition-colors font-medium"
              >
                查看全部 →
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
