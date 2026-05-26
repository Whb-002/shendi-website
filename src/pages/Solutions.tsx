import { Link } from 'react-router-dom'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { solutionsData } from '@/utils/mockData'

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">解决方案</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              针对不同行业和应用场景，提供专业的一站式地质探测解决方案
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.solutions.map((solution, index) => (
            <ScrollReveal key={solution.id} delay={index * 0.1}>
              <Link
                to={`/solutions/${solution.id}`}
                className="group glass rounded-xl overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-300 block h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.coverImage}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs text-[#00d4ff] bg-[#00d4ff]/20 px-2 py-1 rounded">
                      {solution.industry}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{solution.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm line-clamp-2">{solution.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {solution.features.slice(0, 2).map((feature: string) => (
                      <span key={feature} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
