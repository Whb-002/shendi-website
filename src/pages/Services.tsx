import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mountain,
  Globe,
  Waves,
  Code,
  Droplets,
  Building2,
  ArrowRight,
  Zap,
  MapPin,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionTitle from '@/components/ui/SectionTitle'
import { servicesMock } from '@/utils/mockData'
import { fetchServices } from '@/utils/api'
import type { ServiceItem } from '@/types'

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

const categories = ['全部', '地质勘查', '地球物理', '测绘地理信息', '信息系统', '环境地质', '工程检测']

export default function Services() {
  const [services, setServices] = useState<ServiceItem[]>(servicesMock.services)
  const [filter, setFilter] = useState<string>('全部')

  useEffect(() => {
    fetchServices()
      .then((data) => {
        if (data && data.length > 0) {
          setServices(data)
        }
      })
      .catch(() => {
        setServices(servicesMock.services)
      })
  }, [])

  const filteredServices =
    filter === '全部' ? services : services.filter((s) => s.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1a]/90 to-[#1a1a2e]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/8 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6">
              <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                <Link to="/" className="hover:text-white transition-colors">
                  首页
                </Link>
                <span>/</span>
                <span className="text-[#00d4ff]">产品与服务</span>
              </nav>
              <h1 className="font-display font-mono text-4xl md:text-6xl font-bold gradient-text mb-4">
                产品与服务
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                涵盖地质勘查、地球物理探测、测绘地理信息、信息系统、环境地质与工程检测等全方位专业技术服务
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-12 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white shadow-lg shadow-[#0066ff]/30'
                      : 'glass text-gray-300 hover:text-white hover:border-[#00d4ff]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Globe
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="group glass glow-border rounded-xl p-8 h-full flex flex-col transition-all duration-300 block"
                    >
                      <div className="mb-5 w-14 h-14 rounded-lg bg-gradient-to-br from-[#0066ff]/20 to-[#00d4ff]/20 flex items-center justify-center group-hover:from-[#0066ff]/30 group-hover:to-[#00d4ff]/30 transition-all duration-300">
                        <IconComponent size={28} className="text-[#00d4ff]" />
                      </div>

                      <span className="text-xs text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 rounded-full w-fit mb-3">
                        {service.category}
                      </span>

                      <h3 className="font-display font-mono text-xl font-bold mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                        {service.name}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">
                        {service.summary}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-[#00d4ff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                        了解更多 <ArrowRight size={16} />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">该分类下暂无服务</p>
            </div>
          )}
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0066ff]/20 via-[#1a1a2e] to-[#00d4ff]/20 border border-[#00d4ff]/20 p-10 md:p-16 text-center">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#0066ff]/10 rounded-full blur-[96px]" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-[96px]" />

              <div className="relative z-10">
                <h2 className="font-display font-mono text-2xl md:text-4xl font-bold mb-4">
                  需要专业的地质勘探服务？
                </h2>
                <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
                  我们的技术团队将根据您的项目需求，提供定制化的技术方案和专业的现场服务
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
