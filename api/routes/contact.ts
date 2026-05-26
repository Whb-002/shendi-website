import { Router, type Request, type Response } from 'express'
import jsonDb from '../db/database.js'

const router = Router()

router.get('/info', (_req: Request, res: Response): void => {
  res.json({
    success: true,
    data: {
      name: '深维地信科技(四川)有限公司',
      shortName: '深维地信科技',
      address: '四川省成都市高新区天府大道中段688号',
      phone: '18011072793',
      contactPerson: '谢经理',
      email: 'contact@sdgeotech.com',
      workHours: '周一至周五 9:00-18:00',
      mapCoord: { lng: 104.0657, lat: 30.5722 },
    },
  })
})

router.post('/message', (req: Request, res: Response): void => {
  try {
    const { name, phone, email, company, message } = req.body

    if (!name || !phone || !message) {
      res.status(400).json({ success: false, error: '请填写姓名、电话和留言内容' })
      return
    }

    const newId = jsonDb.insert('messages', {
      name,
      phone,
      email: email || '',
      company: company || '',
      message,
      created_at: new Date().toISOString(),
    })

    res.json({
      success: true,
      data: { id: newId },
      message: '留言提交成功，感谢您的反馈',
    })
  } catch (error) {
    console.error('Submit message error:', error)
    res.status(500).json({ success: false, error: '提交留言失败' })
  }
})

export default router
