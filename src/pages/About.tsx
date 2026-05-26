import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Award, UserCircle, Image, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionTitle from '@/components/ui/SectionTitle'
import { companyData, timelineMock } from '@/utils/mockData'

const certifications = [
  '国家级高新技术企业',
  'ISO9001质量管理体系认证',
  '甲级测绘资质',
  'CMA计量认证',
  '软件企业认定证书',
  '安全生产许可证',
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#0a0e27] via-[#111640] to-[#0a0e27]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 gradient-text">
              关于我们
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-[#00d4ff] transition-colors">首页</Link>
              <ChevronRight size={14} />
              <span className="text-[#00d4ff]">关于我们</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionTitle title="公司介绍" subtitle="专注于地质探测技术的高新技术企业" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {companyData.description}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  公司自{companyData.founded}成立以来，始终秉持"精准探测、智慧未来"的发展理念，
                  深耕地质勘查与地球物理探测领域。经过多年发展，公司已建立起涵盖技术研发、
                  装备制造、数据服务、工程咨询等环节的完整产业链，累计完成{companyData.projects}余个项目，
                  服务{companyData.clients}余家客户，团队规模超过{companyData.employees}人。
                </p>
                <p className="text-gray-400 leading-relaxed">
                  面向未来，深维地信科技将继续加大研发投入，深化人工智能与地球物理探测技术的融合创新，
                  致力于成为国内领先、国际知名的地质信息科技服务商，为国家资源能源安全与地质灾害防治事业贡献力量。
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#111640] to-[#0a0e27] border border-[#00d4ff]/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/10 to-[#00d4ff]/5" />
                <Building2 size={120} className="text-[#00d4ff]/30" />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#111640] to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0e27]/50">
        <div className="container mx-auto px-6">
          <SectionTitle title="发展历程" subtitle="从初创到行业标杆的成长之路" />
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0066ff] via-[#00d4ff] to-[#7b2fff]" />
            <div className="space-y-12 md:space-y-16">
              {timelineMock.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <ScrollReveal key={item.year} delay={index * 0.1}>
                    <div className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00d4ff] border-4 border-[#0a0e27] z-10 mt-6 shadow-[0_0_12px_rgba(0,212,255,0.5)]" />
                      <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="glass rounded-xl p-6 glow-border"
                        >
                          <span className="text-3xl md:text-4xl font-bold gradient-text font-mono">{item.year}</span>
                          <h3 className="text-xl font-medium mt-2 mb-2">{item.title}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                      </div>
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionTitle title="资质荣誉" subtitle="以专业资质铸就卓越品质" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.4)' }}
                  className="glass rounded-xl p-8 text-center glow-border transition-all duration-300 group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/20 group-hover:border-[#00d4ff]/40 transition-colors">
                    <Award size={28} className="text-[#00d4ff]" />
                  </div>
                  <h3 className="font-medium text-base">{cert}</h3>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0e27]/50">
        <div className="container mx-auto px-6">
          <SectionTitle title="团队风采" subtitle="汇聚行业精英，共创地信未来" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {companyData.team.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-xl p-8 text-center glow-border transition-all duration-300 group"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#111640] to-[#0a0e27] border border-[#00d4ff]/20 flex items-center justify-center group-hover:border-[#00d4ff]/40 transition-colors">
                    <UserCircle size={48} className="text-[#00d4ff]/50" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                  <p className="text-[#00d4ff] text-sm mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i, index) => (
              <ScrollReveal key={i} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[#111640] to-[#0a0e27] border border-[#00d4ff]/10 flex items-center justify-center overflow-hidden group cursor-pointer"
                >
                  <Image size={40} className="text-[#00d4ff]/20 group-hover:text-[#00d4ff]/40 transition-colors" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
