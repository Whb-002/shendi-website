/**
 * 本地开发 + 生产环境 统一入口
 */
import app from './app.js'

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => {
  const mode = process.env.NODE_ENV === 'production' ? '生产模式' : '开发模式'
  console.log(`[${mode}] 深维地信科技服务已启动 → http://localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  console.log('收到 SIGTERM，正在关闭服务...')
  server.close(() => process.exit(0))
})

process.on('SIGINT', () => {
  console.log('收到 SIGINT，正在关闭服务...')
  server.close(() => process.exit(0))
})

export default app
