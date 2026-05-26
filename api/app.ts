/**
 * 深维地信科技 - 全栈应用服务
 */
import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import newsRoutes from './routes/news.js'
import servicesRoutes from './routes/services.js'
import businessRoutes from './routes/business.js'
import contactRoutes from './routes/contact.js'
import { seed } from './db/seed.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config()

const app: express.Application = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

seed()

app.use('/api/news', newsRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/business', businessRoutes)
app.use('/api/contact', contactRoutes)

app.use(
  '/api/health',
  (req: Request, res: Response): void => {
    res.status(200).json({ success: true, message: 'ok' })
  },
)

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  const distPath = path.resolve(__dirname, '..', 'dist')
  app.use(express.static(distPath))

  app.get('*', (req: Request, res: Response) => {
    if (req.path.startsWith('/api/')) return
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error('Server error:', err.message)
  res.status(500).json({ success: false, error: 'Server internal error' })
})

app.use((req: Request, res: Response) => {
  if (!req.path.startsWith('/api/')) return
  res.status(404).json({ success: false, error: 'API not found' })
})

export default app
