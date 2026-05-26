import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { productsData } from '@/utils/mockData'

export default function Products() {
  const [filter, setFilter] = useState<string>('全部')
  const categories = ['全部', '物探设备', '软件产品']

  const filteredProducts = filter === '全部'
    ? productsData.products
    : productsData.products.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">产品中心</h1>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              涵盖物探设备与软件平台，为各类地质探测任务提供完整解决方案
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="flex items-center gap-4 mb-12 flex-wrap">
          <Filter size={20} className="text-gray-400" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.05}>
              <Link
                to={`/products/${product.id}`}
                className="group glass rounded-xl overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-300 block h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-medium mt-3 mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{product.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.applications.slice(0, 2).map((app: string) => (
                      <span key={app} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {app}
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
