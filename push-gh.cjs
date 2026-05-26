const https = require('https')
const fs = require('fs')
const path = require('path')

const TOKEN = process.argv[2]
const OWNER = 'Whb-002'
const REPO = 'shendi-website'
const BRANCH = 'main'

if (!TOKEN) { console.log('用法: node push-gh.cjs <GitHub_Token>'); process.exit(1) }

function api(method, urlPath, data) {
  return new Promise((resolve, reject) => {
    const host = urlPath.startsWith('https://') ? 'api.github.com' : 'api.github.com'
    const pathOnly = urlPath.startsWith('https://') ? new URL(urlPath).pathname : urlPath
    const postData = data ? JSON.stringify(data) : null
    const options = {
      hostname: host, path: pathOnly, method,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'User-Agent': 'Node.js',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
    if (postData) {
      options.headers['Content-Type'] = 'application/json'
      options.headers['Content-Length'] = Buffer.byteLength(postData)
    }
    const req = https.request(options, res => {
      let body = ''
      res.on('data', d => body += d)
      res.on('end', () => {
        try { resolve({ status: res.statusCode, ...JSON.parse(body) }) }
        catch { resolve({ status: res.statusCode, body }) }
      })
    })
    req.on('error', reject)
    if (postData) req.write(postData)
    req.end()
  })
}

async function createRepo() {
  console.log('创建 GitHub 仓库...')
  const r = await api('POST', '/user/repos', {
    name: REPO,
    description: '深维地信科技(四川)有限公司 - 企业官网',
    private: false,
    auto_init: true,
  })
  if (r.status === 201 || r.name === REPO) {
    console.log(`创建成功: ${r.html_url}`)
    return true
  }
  if (r.status === 422) {
    console.log('仓库已存在')
    return true
  }
  console.log('失败:', r.message)
  return false
}

async function pushFile(filePath, content) {
  const b64 = Buffer.from(content, 'utf-8').toString('base64')
  const r = await api('PUT', `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(filePath)}`, {
    message: `添加 ${filePath}`,
    content: b64,
    branch: BRANCH,
  })
  return r.status === 201 ? 'ok' : r.message || `HTTP ${r.status}`
}

const SKIP_DIRS = new Set([
  'node_modules', '.git', 'dist', '.venv', '__pycache__',
  '.trae', 'MagExplorer', '基点Ta计算和修正',
  '高密度电法原始数据反算', '知识库开发教材', '.vite'
])
const SKIP_FILES = new Set(['package-lock.json', 'data.json', 'company.db', 'deploy.bat', 'pack.bat', 'test.cjs', 'check.cjs', 'push.cjs', 'cleanup.cjs', 'README.md'])
const SKIP_EXT = new Set(['.pyc', '.spec', '.exe', '.bat'])

function shouldSkip(fp) {
  for (const p of fp.split(/[/\\]/)) if (SKIP_DIRS.has(p)) return true
  const base = path.basename(fp)
  if (SKIP_FILES.has(base)) return true
  if (SKIP_EXT.has(path.extname(base))) return true
  return false
}

function walk(dir) {
  const files = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.relative('.', path.join(dir, e.name)).replace(/\\/g, '/')
    if (shouldSkip(rel)) continue
    if (e.isDirectory()) files.push(...walk(path.join(dir, e.name)))
    else files.push(rel)
  }
  return files
}

async function main() {
  console.log('仓库已存在: https://github.com/Whb-002/shendi-website\n')

  const files = walk('.')
  console.log(`共 ${files.length} 个文件`)

  let ok = 0
  for (let i = 0; i < files.length; i++) {
    const f = files[i]
    try {
      const content = fs.readFileSync(f, 'utf-8')
      const result = await pushFile(f, content)
      if (result === 'ok') {
        ok++
        if (ok % 5 === 0) process.stdout.write(`\r${ok}/${files.length}`)
      } else {
        console.log(`\n  跳过 ${f}: ${result}`)
      }
    } catch (e) {
      console.log(`\n  失败 ${f}: ${e.message}`)
    }
    await new Promise(r => setTimeout(r, 300))
  }

  console.log(`\r\n\n✅ ${ok}/${files.length}`)
  console.log(`📦 https://github.com/${OWNER}/${REPO}`)
  console.log(`\n🚀 下一步: render.com → New Web Service → 连接 GitHub 仓库`)
}

main().catch(e => { console.error(e.message); process.exit(1) })
