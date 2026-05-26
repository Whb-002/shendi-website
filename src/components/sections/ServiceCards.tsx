import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Mountain, Building2, Droplets, Waves, Code, Zap, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { servicesMock } from '@/utils/mockData';
import type { LucideIcon } from 'lucide-react';
import type { ServiceItem } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Mountain,
  Building2,
  Droplets,
  Waves,
  Code,
  Zap,
  MapPin,
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link
        to={`/services/${service.id}`}
        className="glass rounded-xl p-6 h-full flex flex-col group hover:border-primary/40 transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg bg-gradient-card flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {Icon && <Icon className="w-6 h-6 text-primary" />}
        </div>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {service.name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1">
          {service.summary}
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
          了解更多
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServiceCards() {
  const services = servicesMock.services.slice(0, 6);

  return (
    <section className="section-padding bg-surface-medium">
      <div className="container">
        <SectionTitle
          title="核心业务"
          subtitle="覆盖地质勘探全领域，提供一站式专业解决方案"
        />

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
