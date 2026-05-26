import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, TrendingUp, Bell, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionTitle from '@/components/ui/SectionTitle';
import { newsCardsMock } from '@/utils/mockData';
import { fetchNewsList } from '@/utils/api';

const categoryConfig = {
  company: { icon: Newspaper, color: 'text-primary' },
  industry: { icon: TrendingUp, color: 'text-accent-light' },
  notice: { icon: Bell, color: 'text-warning' },
};

interface NewsCardItem {
  id: number;
  title: string;
  date: string;
}

interface NewsCategory {
  category: string;
  categoryLabel: string;
  items: NewsCardItem[];
}

export default function NewsCards() {
  const [newsData, setNewsData] = useState<NewsCategory[]>(newsCardsMock);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadNews() {
      try {
        const results = await Promise.all([
          fetchNewsList('company', 1, 3).catch(() => null),
          fetchNewsList('industry', 1, 3).catch(() => null),
          fetchNewsList('notice', 1, 3).catch(() => null),
        ]);

        if (cancelled) return;

        const hasData = results.some((r) => r && r.list && r.list.length > 0);

        if (hasData) {
          const categories = ['company', 'industry', 'notice'] as const;
          const labels = ['公司新闻', '行业资讯', '通知公告'];
          setNewsData(
            categories.map((cat, i) => ({
              category: cat,
              categoryLabel: labels[i],
              items: (results[i]?.list || []).slice(0, 3).map((item: { id: number; title: string; publishDate?: string; date?: string }) => ({
                id: item.id,
                title: item.title,
                date: item.publishDate || item.date || '',
              })),
            }))
          );
        }
      } catch {
        if (!cancelled) setNewsData(newsCardsMock);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadNews();
    return () => { cancelled = true; };
  }, []);

  const categoryLinkMap: Record<string, string> = {
    company: '/news?category=company',
    industry: '/news?category=industry',
    notice: '/news?category=notice',
  };

  return (
    <section className="section-padding bg-surface-dark">
      <div className="container">
        <SectionTitle
          title="新闻速览"
          subtitle="了解深维地信最新动态与行业前沿资讯"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {newsData.map((cat, colIndex) => {
            const config = categoryConfig[cat.category as keyof typeof categoryConfig] || categoryConfig.company;
            const Icon = config.icon;

            return (
              <ScrollReveal key={cat.category} delay={colIndex * 0.15}>
                <div className="glass rounded-xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    <h3 className="text-lg font-bold">{cat.categoryLabel}</h3>
                  </div>

                  <div className="flex-1 space-y-4">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.3 }}
                        className="group cursor-pointer"
                      >
                        <Link
                          to={`/news/${item.id}`}
                          className="block"
                        >
                          <p className="text-sm text-text-secondary group-hover:text-text-primary line-clamp-2 transition-colors duration-200">
                            {item.title}
                          </p>
                          <p className="text-xs text-text-muted mt-1.5">{item.date}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    to={categoryLinkMap[cat.category] || '/news'}
                    className="mt-5 inline-flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors group/link"
                  >
                    查看更多
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
