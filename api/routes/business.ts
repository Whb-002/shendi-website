import { Router, type Request, type Response } from 'express'
import jsonDb, { type DownloadRow } from '../db/database.js'

const router = Router()

router.post('/inquiry', (req: Request, res: Response): void => {
  try {
    const {
      service_type,
      project_name,
      project_location,
      description,
      contact_name,
      contact_phone,
      contact_email,
      attachments,
    } = req.body

    if (!service_type || !project_name || !contact_name || !contact_phone) {
      res.status(400).json({ success: false, error: '请填写必要的咨询信息' })
      return
    }

    const newId = jsonDb.insert('inquiries', {
      service_type,
      project_name,
      project_location: project_location || '',
      description: description || '',
      contact_name,
      contact_phone,
      contact_email: contact_email || '',
      attachments_json: JSON.stringify(attachments || []),
      status: 'pending',
      created_at: new Date().toISOString(),
    })

    res.json({
      success: true,
      data: { id: newId },
      message: '咨询提交成功，我们将尽快与您联系',
    })
  } catch (error) {
    console.error('Submit inquiry error:', error)
    res.status(500).json({ success: false, error: '提交咨询失败' })
  }
})

router.get('/downloads', (req: Request, res: Response): void => {
  try {
    const category = req.query.category as string | undefined

    const filter = category
      ? (row: DownloadRow) => row.category === category
      : undefined

    const sortFn = (a: DownloadRow, b: DownloadRow) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()

    const result = jsonDb.paginate('downloads', 1, 9999, filter, sortFn)

    res.json({ success: true, data: result.list })
  } catch (error) {
    console.error('Get downloads error:', error)
    res.status(500).json({ success: false, error: '获取下载列表失败' })
  }
})

router.post('/downloads/:id/track', (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      res.status(400).json({ success: false, error: '无效的下载ID' })
      return
    }

    const row = jsonDb.getById('downloads', id)
    if (!row) {
      res.status(404).json({ success: false, error: '下载资源不存在' })
      return
    }

    jsonDb.update('downloads', id, { download_count: row.download_count + 1 })

    res.json({ success: true, message: 'ok' })
  } catch (error) {
    console.error('Track download error:', error)
    res.status(500).json({ success: false, error: '操作失败' })
  }
})

export default router
