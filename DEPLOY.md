# 🚀 深维地信科技官网 - 免费上线指南

## 方式一：Render.com（推荐 ⭐）

Render 是目前最好的免费全栈部署平台，支持 Node.js + 持久化磁盘，完全免费。

### 第1步：推送到 GitHub（5分钟）

```bash
# 在项目根目录执行
git init
git add .
git commit -m "深维地信科技官网初始版本"
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 第2步：连接 Render.com（3分钟）

1. 打开 https://render.com → Sign Up（用 GitHub 账号注册）
2. 点击右上角 `New +` → `Web Service`
3. 授权并选择你刚推送的 GitHub 仓库
4. Render 会**自动读取** `render.yaml` 配置，点击 `Deploy Web Service` 即可

### 第3步：等待部署（5分钟）

- 首次部署约5分钟
- 部署成功后，访问 Render 分配的域名：`https://shendi-website.onrender.com`
- 后续每次 `git push` 会自动重新部署

### 自定义域名（可选）

1. 在 Render Dashboard → Settings → Custom Domain
2. 添加你的域名（如 `www.sdgeotech.com`）
3. 在域名服务商添加 CNAME 记录指向 Render 提供的域名

---

## 方式二：GitHub Pages + Vercel

如果你只需要**纯前端展示**（不需要后端表单/数据存储），可以用这个方案。

```bash
# 仅构建前端
npm run build

# 把 dist/ 部署到：
# - GitHub Pages（免费）
# - Vercel（免费，vercel.json 已配好）
# - Netlify（免费，直接拖拽 dist/ 文件夹）
```

---

## 📋 项目配置说明

| 文件 | 作用 | 修改建议 |
|------|------|----------|
| `render.yaml` | Render 部署配置 | 改 `name` 为你的项目名 |
| `api/db/seed.ts` | 种子数据 | 改公司信息、新闻、服务内容 |
| `src/utils/constants.ts` | 前端常量 | 改公司名称、电话、菜单 |
| `src/utils/mockData.ts` | 前端数据 | 改展示内容 |
| `index.html` | 页面标题 | 改 `<title>` |

## 🔧 日常更新流程

```bash
# 1. 本地修改代码
# 2. 本地预览
npm run dev

# 3. 提交并推送（自动触发部署）
git add .
git commit -m "更新XXX内容"
git push
```

## 🛠 本地开发命令

```bash
npm run dev          # 同时启动前端(5173) + 后端(3001)
npm run check        # TypeScript 类型检查
npm run build        # 构建前端
npm run render:build # 仅构建前端（Render 用）
```

---

## ⚡ 性能说明

Render 免费版在15分钟无访问后会休眠，下次访问需等待约30-50秒唤醒。

**解决方法（可选）：**
- 使用 [UptimeRobot](https://uptimerobot.com)（免费）每5分钟 ping 一次你的网站
- 升级 Render Starter 计划（$7/月）取消休眠
