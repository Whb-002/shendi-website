import { Router, type Request, type Response } from 'express'
import jsonDb, { type NewsRow } from '../db/database.js'

const router = Router()

router.get('/', (req: Request, res: Response): void => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1)
    const pageSize = Math.min(50, Math.max(1, parseInt(req.query.pageSize as string) || 10))
    const category = req.query.category as string | undefined

    const filter = (category && ['company', 'industry', 'notice'].includes(category))
      ? (row: NewsRow) => row.category === category
      : undefined

    const sortFn = (a: NewsRow, b: NewsRow) =>
      new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()

    const result = jsonDb.paginate('news', page, pageSize, filter, sortFn)

    const list = result.list.map(({ id, title, summary, cover_image, category, publish_date, view_count }) => ({
      id, title, summary, cover_image, category, publish_date, view_count,
    }))

    res.json({
      success: true,
      data: {
        list,
        total: result.total,
        page,
        pageSize,
        totalPages: Math.ceil(result.total / pageSize),
      },
    })
  } catch (error) {
    console.error('Get news list error:', error)
    res.status(500).json({ success: false, error: '获取新闻列表失败' })
  }
})

router.get('/:id', (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: '无效的新闻ID' })
      return
    }

    const row = jsonDb.getById('news', id)
    if (!row) {
      res.status(404).json({ success: false, error: '新闻不存在' })
      return
    }

    jsonDb.update('news', id, { view_count: row.view_count + 1 })

    const allNews = jsonDb.getAll('news')
    const sorted = allNews.sort((a, b) => a.id - b.id)
    const idx = sorted.findIndex((n) => n.id === id)

    const prevRow = idx > 0 ? { id: sorted[idx - 1].id, title: sorted[idx - 1].title } : null
    const nextRow = idx < sorted.length - 1 ? { id: sorted[idx + 1].id, title: sorted[idx + 1].title } : null

    res.json({
      success: true,
      data: {
        ...row,
        view_count: row.view_count + 1,
        prev: prevRow,
        next: nextRow,
      },
    })
  } catch (error) {
    console.error('Get news detail error:', error)
    res.status(500).json({ success: false, error: '获取新闻详情失败' })
  }
})

export default router
