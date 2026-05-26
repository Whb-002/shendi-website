import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { companyData } from '@/utils/mockData';

const featureList = [
  '承担基础性、公益性、战略性地质调查和矿产勘查任务',
  '提供水文地质、工程地质、环境地质、灾害地质技术支撑',
  '城市地质、旅游地质、农业地质、生态地质综合服务',
  '遥感地质、地理信息、生态修复、国土空间规划',
  '自然资源调查监测评价及环境样品检验检测',
];

export default function CompanyIntro() {
  return (
    <section className="section-padding bg-surface-medium">
      <div className="container">
        <SectionTitle
          title="公司简介"
          subtitle="深耕地质勘探领域，用专业与创新服务每一位客户"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-5">
              <p className="text-text-secondary leading-relaxed text-base">
                {companyData.description}
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                公司成立于{companyData.founded}，现有员工{companyData.employees}，已完成各类地质勘查项目
                {companyData.projects}，服务客户{companyData.clients}。依托专业技术优势，
                积极参与地质类综合科学技术研究，致力于打造国内一流的地质技术服务企业。
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                公司位于{companyData.address}，拥有先进的物探设备和专业的
                技术团队，配备各类地球物理探测仪器、地质钻探设备、实验测试装备等，
                具备承接大型地质调查项目的综合实力。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <div className="glass rounded-xl p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">核心能力</h3>
              {featureList.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
