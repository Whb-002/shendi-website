import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Newspaper, Calendar, Eye, ChevronRight, ChevronLeft, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionTitle from '@/components/ui/SectionTitle'
import { newsMock, NewsMockItem } from '@/utils/mockData'
import { fetchNewsList } from '@/utils/api'

const categories = [
  { key: '全部', label: '全部' },
  { key: '公司新闻', label: '公司新闻' },
  { key: '行业资讯', label: '行业资讯' },
  { key: '通知公告', label: '通知公告' },
]

const categoryMap: Record<string, string> = {
  '公司新闻': 'company',
  '行业资讯': 'industry',
  '通知公告': 'notice',
}

const PAGE_SIZE = 6

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

const formatViewCount = (count: number) => {
  if (count >= 10000) return `${(count / 10000).toFixed(1)}万`
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`
  return String(count)
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [newsList, setNewsList] = useState<NewsMockItem[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const loadNews = async () => {
      try {
        const apiCategory = categoryMap[activeCategory] || undefined
        const data = await fetchNewsList(apiCategory, currentPage, PAGE_SIZE)
        if (data && data.list) {
          setNewsList(data.list as unknown as NewsMockItem[])
          return
        }
      } catch {
        /* API unavailable, fallback to mock data */
      }

      let filtered = newsMock
      if (activeCategory !== '全部') {
        const cat = categoryMap[activeCategory]
        filtered = newsMock.filter((n) => n.category === cat)
      }
      const start = (currentPage - 1) * PAGE_SIZE
      setNewsList(filtered.slice(start, start + PAGE_SIZE))
    }

    loadNews()
  }, [activeCategory, currentPage])

  const allFilteredCount = useMemo(() => {
    if (activeCategory === '全部') return newsMock.length
    const cat = categoryMap[activeCategory]
    return newsMock.filter((n) => n.category === cat).length
  }, [activeCategory])

  const totalPages = Math.max(1, Math.ceil(allFilteredCount / PAGE_SIZE))

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#0a0e27] via-[#111640] to-[#0a0e27]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 gradient-text">
              新闻中心
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Link to="/" className="hover:text-[#00d4ff] transition-colors">首页</Link>
              <ChevronRight size={14} />
              <span className="text-[#00d4ff]">新闻中心</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <aside className="lg:w-56 shrink-0">
              <div className="glass rounded-xl p-6 lg:sticky lg:top-28">
                <h3 className="text-lg font-medium mb-4">新闻分类</h3>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryChange(cat.key)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                        activeCategory === cat.key
                          ? 'bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white shadow-[0_0_20px_rgba(0,212,255,0.2)]'
                          : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <SectionTitle
                title="新闻动态"
                subtitle={`共 ${allFilteredCount} 篇文章`}
                align="left"
                className="mb-8"
              />

              {newsList.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  <Newspaper size={48} className="mx-auto mb-4 opacity-30" />
                  <p>暂无相关文章</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {newsList.map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 0.05}>
                      <Link to={`/news/${item.id}`}>
                        <motion.article
                          whileHover={{ y: -2, borderColor: 'rgba(0,212,255,0.3)' }}
                          className="glass rounded-xl overflow-hidden glow-border transition-all duration-300 flex flex-col sm:flex-row"
                        >
                          <div className="sm:w-[150px] shrink-0 aspect-[4/3] sm:aspect-auto bg-gradient-to-br from-[#111640] to-[#0a0e27] flex items-center justify-center border-b sm:border-b-0 sm:border-r border-[#00d4ff]/10">
                            <Newspaper size={36} className="text-[#00d4ff]/25" />
                          </div>
                          <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-w-0">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs px-2 py-0.5 rounded bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                                  {item.categoryLabel}
                                </span>
                              </div>
                              <h3 className="text-base md:text-lg font-medium mb-2 line-clamp-2 hover:text-[#00d4ff] transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                                {item.summary}
                              </p>
                            </div>
                            <div className="flex items-center gap-5 text-xs text-gray-500 mt-4 pt-4 border-t border-white/5">
                              <span className="flex items-center gap-1.5">
                                <Calendar size={13} />
                                {formatDate(item.publishDate)}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Eye size={13} />
                                {formatViewCount(item.viewCount)} 阅读
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock size={13} />
                                {item.publishDate}
                              </span>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all glass text-gray-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={16} />
                    上一页
                  </button>
                  <span className="text-sm text-gray-400">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all glass text-gray-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    下一页
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {totalPages <= 1 && newsList.length > 0 && (
                <div className="text-center mt-8 text-gray-500 text-sm">
                  已显示全部 {allFilteredCount} 篇文章
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
