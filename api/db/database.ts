import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DATA_DIR = process.env.DATA_DIR || __dirname
const DATA_FILE = path.join(DATA_DIR, 'data.json')

interface NewsRow {
  id: number
  title: string
  summary: string
  content: string
  cover_image: string
  category: string
  publish_date: string
  view_count: number
}

interface ServiceRow {
  id: number
  name: string
  icon: string
  summary: string
  description: string
  banner_image: string
  specs_json: string
  cases_json: string
  category: string
}

interface InquiryRow {
  id: number
  service_type: string
  project_name: string
  project_location: string
  description: string
  contact_name: string
  contact_phone: string
  contact_email: string
  attachments_json: string
  status: string
  created_at: string
}

interface MessageRow {
  id: number
  name: string
  phone: string
  email: string
  company: string
  message: string
  created_at: string
}

interface DownloadRow {
  id: number
  name: string
  category: string
  file_path: string
  file_size: string
  download_count: number
  created_at: string
}

interface DataStore {
  news: NewsRow[]
  services: ServiceRow[]
  inquiries: InquiryRow[]
  messages: MessageRow[]
  downloads: DownloadRow[]
}

const defaultData: DataStore = {
  news: [],
  services: [],
  inquiries: [],
  messages: [],
  downloads: [],
}

function loadData(): DataStore {
  if (!existsSync(DATA_FILE)) {
    saveData(defaultData)
    return { ...defaultData }
  }
  const raw = readFileSync(DATA_FILE, 'utf-8')
  return JSON.parse(raw) as DataStore
}

function saveData(data: DataStore): void {
  const dir = path.dirname(DATA_FILE)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

const jsonDb = {
  getAll<T extends keyof DataStore>(table: T): DataStore[T] {
    const data = loadData()
    return data[table]
  },

  getById<T extends keyof DataStore>(table: T, id: number): (DataStore[T] extends (infer U)[] ? U : never) | undefined {
    const data = loadData()
    const rows = data[table] as Array<{ id: number }>
    return rows.find((r) => r.id === id) as DataStore[T] extends (infer U)[] ? U : never
  },

  insert<T extends keyof DataStore>(table: T, row: Omit<DataStore[T] extends (infer U)[] ? U : never, 'id'>): number {
    const data = loadData()
    const rows = data[table] as any[]
    const maxId = rows.length > 0 ? Math.max(...rows.map((r: { id: number }) => r.id)) : 0
    const newId = maxId + 1
    const newRow = { ...row, id: newId }
    rows.push(newRow)
    data[table] = rows as DataStore[T]
    saveData(data)
    return newId
  },

  paginate<T extends keyof DataStore>(
    table: T,
    page: number,
    pageSize: number,
    filter?: (row: DataStore[T] extends (infer U)[] ? U : never) => boolean,
    sortFn?: (a: DataStore[T] extends (infer U)[] ? U : never, b: DataStore[T] extends (infer U)[] ? U : never) => number,
  ): { total: number; page: number; pageSize: number; list: DataStore[T] extends (infer U)[] ? U[] : never } {
    const data = loadData()
    let rows = [...(data[table] as any[])]

    if (filter) {
      rows = rows.filter(filter)
    }

    if (sortFn) {
      rows.sort(sortFn)
    }

    const total = rows.length
    const start = (page - 1) * pageSize
    const list = rows.slice(start, start + pageSize)

    return { total, page, pageSize, list } as any
  },

  update<T extends keyof DataStore>(table: T, id: number, updates: Partial<DataStore[T] extends (infer U)[] ? U : never>): boolean {
    const data = loadData()
    const rows = data[table] as Array<{ id: number }>
    const index = rows.findIndex((r) => r.id === id)
    if (index === -1) return false
    rows[index] = { ...rows[index], ...updates }
    data[table] = rows as DataStore[T]
    saveData(data)
    return true
  },

  query<T extends keyof DataStore>(table: T, filterFn: (row: DataStore[T] extends (infer U)[] ? U : never) => boolean): (DataStore[T] extends (infer U)[] ? U[] : never) {
    const data = loadData()
    const rows = data[table] as any[]
    return rows.filter(filterFn) as any
  },
}

export default jsonDb
export type { NewsRow, ServiceRow, InquiryRow, MessageRow, DownloadRow, DataStore }
