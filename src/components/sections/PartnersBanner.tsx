import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { partnersMock } from '@/utils/mockData';

export default function PartnersBanner() {
  return (
    <section className="section-padding bg-surface-medium">
      <div className="container">
        <SectionTitle
          title="合作伙伴"
          subtitle="携手行业顶尖机构，共建地质技术生态"
        />

        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {partnersMock.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                className="glass rounded-xl p-6 flex items-center justify-center h-24 group cursor-default"
              >
                <span className="text-text-muted text-sm font-medium group-hover:text-text-primary transition-colors duration-300 text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
