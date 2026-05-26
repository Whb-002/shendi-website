import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { productsData } from '@/utils/mockData'

export default function ProductDetail() {
  const { id } = useParams()
  const product = productsData.products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">产品未找到</h2>
          <Link to="/products" className="text-[#00d4ff] hover:underline">
            返回产品列表
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
            to="/products"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> 返回产品列表
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="aspect-square rounded-xl overflow-hidden glass">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <span className="text-sm text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{product.name}</h1>
              <p className="text-gray-300 text-lg mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">技术参数</h3>
                <div className="glass rounded-xl overflow-hidden">
                  {product.specs.map((spec: { key: string; value: string }, index: number) => (
                    <div
                      key={spec.key}
                      className={`flex justify-between p-4 ${index !== product.specs.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <span className="text-gray-400">{spec.key}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">应用领域</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app: string) => (
                    <span key={app} className="text-sm bg-white/5 px-3 py-1.5 rounded-lg">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">核心特点</h3>
                <div className="space-y-3">
                  {product.features.map((feature: string) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#00d4ff]" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white hover:shadow-lg hover:shadow-[#0066ff]/30 transition-all duration-300"
                >
                  咨询报价
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-lg border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  <Download size={18} /> 下载手册
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
