import { Router, type Request, type Response } from 'express'
import jsonDb from '../db/database.js'

const router = Router()

router.get('/', (req: Request, res: Response): void => {
  try {
    const all = jsonDb.getAll('services')
    const sorted = [...all].sort((a, b) => a.id - b.id)
    const list = sorted.map(({ id, name, icon, summary, banner_image, category }) => ({
      id, name, icon, summary, banner_image, category,
    }))

    res.json({ success: true, data: list })
  } catch (error) {
    console.error('Get services list error:', error)
    res.status(500).json({ success: false, error: '获取服务列表失败' })
  }
})

router.get('/:id', (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: '无效的服务ID' })
      return
    }

    const row = jsonDb.getById('services', id) as any
    if (!row) {
      res.status(404).json({ success: false, error: '服务不存在' })
      return
    }

    const { specs_json, cases_json, ...rest } = row
    const result = {
      ...rest,
      specs: parseJsonField(specs_json),
      cases: parseJsonField(cases_json),
    }

    res.json({ success: true, data: result })
  } catch (error) {
    console.error('Get service detail error:', error)
    res.status(500).json({ success: false, error: '获取服务详情失败' })
  }
})

function parseJsonField(value: string): unknown {
  try {
    return JSON.parse(value)
  } catch {
    return []
  }
}

export default router
