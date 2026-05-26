import { useState, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Eye, ChevronRight, Tag, Image, ArrowLeft, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { newsMock, NewsMockItem } from '@/utils/mockData'
import { fetchNewsDetail } from '@/utils/api'

const formatViewCount = (count: number) => {
  if (count >= 10000) return `${(count / 10000).toFixed(1)}万`
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`
  return String(count)
}

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<NewsMockItem | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDetail = async () => {
      setLoading(true)
      const numId = parseInt(id || '1')

      try {
        const data = await fetchNewsDetail(numId)
        if (data) {
          setArticle(data as unknown as NewsMockItem)
          setLoading(false)
          return
        }
      } catch {
        /* API unavailable, fallback to mock data */
      }

      const fallback = newsMock[numId % newsMock.length]
      setArticle({ ...fallback, id: numId })
      setLoading(false)
    }

    loadDetail()
  }, [id])

  const { prevArticle, nextArticle } = useMemo(() => {
    if (!article) return { prevArticle: null, nextArticle: null }
    const idx = newsMock.findIndex((n) => n.id === article.id)
    if (idx === -1) return { prevArticle: null, nextArticle: null }
    return {
      prevArticle: idx > 0 ? newsMock[idx - 1] : null,
      nextArticle: idx < newsMock.length - 1 ? newsMock[idx + 1] : null,
    }
  }, [article])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-[#00d4ff]/30 border-t-[#00d4ff] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">加载中...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">文章未找到</h2>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#00d4ff] hover:underline"
          >
            <ArrowLeft size={18} />
            返回新闻中心
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
      <section className="relative pt-32 pb-12 bg-gradient-to-r from-[#0a0e27] via-[#111640] to-[#0a0e27]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
              <Link to="/" className="hover:text-[#00d4ff] transition-colors">首页</Link>
              <ChevronRight size={14} />
              <Link to="/news" className="hover:text-[#00d4ff] transition-colors">新闻中心</Link>
              <ChevronRight size={14} />
              <span className="text-[#00d4ff] truncate max-w-[200px]">{article.title}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl mx-auto leading-snug">
              {article.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft size={18} />
                返回新闻列表
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 mb-8 pb-8 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-[#00d4ff]/70" />
                  {article.publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag size={15} className="text-[#00d4ff]/70" />
                  <span className="text-xs px-2 py-0.5 rounded bg-gradient-to-r from-[#0066ff]/20 to-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                    {article.categoryLabel}
                  </span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye size={15} className="text-[#00d4ff]/70" />
                  {formatViewCount(article.viewCount)} 阅读
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="aspect-[21/9] rounded-xl bg-gradient-to-br from-[#111640] to-[#0a0e27] border border-[#00d4ff]/10 flex items-center justify-center overflow-hidden mb-10">
                <div className="flex flex-col items-center gap-3">
                  <Image size={64} className="text-[#00d4ff]/20" />
                  <span className="text-gray-500 text-sm">封面图片</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <article
                className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#00d4ff]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </ScrollReveal>

            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prevArticle ? (
                  <Link
                    to={`/news/${prevArticle.id}`}
                    className="group flex-1 glass rounded-xl p-5 glow-border hover:border-[#00d4ff]/30 transition-all"
                  >
                    <span className="text-xs text-gray-500 flex items-center gap-1 mb-2">
                      <ArrowLeft size={14} /> 上一篇
                    </span>
                    <h4 className="text-sm font-medium line-clamp-1 group-hover:text-[#00d4ff] transition-colors">
                      {prevArticle.title}
                    </h4>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
                {nextArticle ? (
                  <Link
                    to={`/news/${nextArticle.id}`}
                    className="group flex-1 glass rounded-xl p-5 glow-border hover:border-[#00d4ff]/30 transition-all text-right"
                  >
                    <span className="text-xs text-gray-500 flex items-center justify-end gap-1 mb-2">
                      下一篇 <ArrowRight size={14} />
                    </span>
                    <h4 className="text-sm font-medium line-clamp-1 group-hover:text-[#00d4ff] transition-colors">
                      {nextArticle.title}
                    </h4>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
