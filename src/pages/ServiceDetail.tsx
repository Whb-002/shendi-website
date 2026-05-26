import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mountain,
  Globe,
  Waves,
  Code,
  Droplets,
  Building2,
  ArrowLeft,
  ArrowRight,
  Check,
  Zap,
  MapPin,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { servicesMock } from '@/utils/mockData'
import { fetchServiceDetail } from '@/utils/api'
import type { ServiceDetail } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Mountain,
  Globe,
  Waves,
  Code,
  Droplets,
  Building2,
  Zap,
  MapPin,
}

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const numericId = Number(id)
  const [service, setService] = useState<ServiceDetail | undefined>(
    servicesMock.getDetail(numericId)
  )

  useEffect(() => {
    fetchServiceDetail(numericId)
      .then((data) => {
        if (data) setService(data)
      })
      .catch(() => {
        setService(servicesMock.getDetail(numericId))
      })
  }, [numericId])

  if (!service) {
    return (
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">服务未找到</h2>
          <Link to="/services" className="text-[#00d4ff] hover:underline">
            返回服务列表
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[service.icon] || Globe

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1a]/90 to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> 返回服务列表
          </Link>

          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                首页
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">
                产品与服务
              </Link>
              <span>/</span>
              <span className="text-[#00d4ff]">{service.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded-full">
                {service.category}
              </span>
            </div>

            <h1 className="font-display font-mono text-3xl md:text-5xl font-bold gradient-text mb-6">
              {service.name}
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl">{service.summary}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-display font-mono text-2xl font-bold mb-6">服务介绍</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {service.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="aspect-[4/3] rounded-xl overflow-hidden glass glow-border">
                <img
                  src={service.bannerImage}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {service.specs && service.specs.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-display font-mono text-2xl font-bold mb-8 text-center">
                技术参数
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="max-w-3xl mx-auto glass rounded-xl overflow-hidden glow-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-400 bg-white/[0.02]">
                        参数名称
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-gray-400 bg-white/[0.02]">
                        参数值
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.specs.map((spec, index) => (
                      <tr
                        key={spec.label}
                        className={`border-b border-white/5 last:border-b-0 transition-colors hover:bg-white/[0.03] ${
                          index % 2 === 1 ? 'bg-white/[0.02]' : ''
                        }`}
                      >
                        <td className="px-6 py-4 text-sm text-gray-400">{spec.label}</td>
                        <td className="px-6 py-4 text-sm font-medium">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {service.cases && service.cases.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-display font-mono text-2xl font-bold mb-4 text-center">
                项目案例
              </h2>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                以下是该服务在各类项目中的成功应用
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.cases.map((caseItem, index) => (
                <ScrollReveal key={caseItem.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="glass glow-border rounded-xl overflow-hidden h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Check size={16} className="text-[#00d4ff] flex-shrink-0" />
                        <h3 className="font-display font-mono text-lg font-bold">
                          {caseItem.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{caseItem.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0066ff]/20 via-[#1a1a2e] to-[#00d4ff]/20 border border-[#00d4ff]/20 p-10 md:p-16 text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#0066ff]/10 rounded-full blur-[96px]" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-[96px]" />

              <div className="relative z-10">
                <h2 className="font-display font-mono text-2xl md:text-4xl font-bold mb-4">
                  对该服务感兴趣？
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                  立即联系我们的技术团队，获取定制化方案和详细报价
                </p>
                <Link
                  to="/business"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300"
                >
                  立即咨询 <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
