import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { solutionsData } from '@/utils/mockData'

export default function SolutionDetail() {
  const { id } = useParams()
  const solution = solutionsData.solutions.find(s => s.id === id)

  if (!solution) {
    return (
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">方案未找到</h2>
          <Link to="/solutions" className="text-[#00d4ff] hover:underline">
            返回解决方案列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> 返回解决方案列表
          </Link>

          <ScrollReveal>
            <div className="relative h-96 rounded-xl overflow-hidden mb-12">
              <img
                src={solution.coverImage}
                alt={solution.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-sm text-[#00d4ff] bg-[#00d4ff]/20 px-3 py-1 rounded">
                  {solution.industry}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mt-4">{solution.title}</h1>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <h2 className="text-2xl font-bold mb-6">方案概述</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-12">
                  {solution.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h2 className="text-2xl font-bold mb-6">核心优势</h2>
                <div className="space-y-4 mb-12">
                  {solution.features.map((feature: string) => (
                    <div key={feature} className="flex items-start gap-4 glass rounded-xl p-4">
                      <CheckCircle size={24} className="text-[#00d4ff] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h2 className="text-2xl font-bold mb-6">成功案例</h2>
                <div className="space-y-6">
                  {solution.cases.map((caseItem) => (
                    <div key={caseItem.title} className="glass rounded-xl p-6">
                      <h3 className="text-lg font-medium mb-2">{caseItem.title}</h3>
                      <p className="text-gray-400 text-sm">{caseItem.result}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal delay={0.2}>
                <div className="glass rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">获取完整方案</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    联系我们获取详细的解决方案文档和技术支持
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-medium rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300"
                  >
                    立即咨询 <ArrowRight size={18} />
                  </Link>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 mb-2">咨询热线</p>
                    <p className="text-xl font-bold gradient-text">18011072793</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
