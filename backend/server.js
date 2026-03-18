import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'

const app = express()
const port = process.env.BACKEND_PORT || 8788
const dataDir = path.join(process.cwd(), 'backend', 'data')
const adminToken = process.env.ADMIN_TOKEN

app.use(cors())
app.use(express.json())

const requireAdmin = (req, res, next) => {
  if (!adminToken) {
    return res.status(500).json({ message: 'ADMIN_TOKEN is not configured.' })
  }
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : req.headers['x-admin-token']
  if (token !== adminToken) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  return next()
}

const readJson = async (file) => {
  const filePath = path.join(dataDir, file)
  const content = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(content)
}

const writeJson = async (file, data) => {
  const filePath = path.join(dataDir, file)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

const createCrudRoutes = (resource, file) => {
  const base = `/api/admin/${resource}`

  app.get(base, requireAdmin, async (_req, res) => {
    const data = await readJson(file)
    res.json(data)
  })

  app.get(`${base}/:id`, requireAdmin, async (req, res) => {
    const data = await readJson(file)
    const item = data.find((entry) => entry.id === req.params.id)
    if (!item) {
      return res.status(404).json({ message: 'Not found' })
    }
    return res.json(item)
  })

  app.post(base, requireAdmin, async (req, res) => {
    const data = await readJson(file)
    if (resource === 'blog-posts') {
      const { title, description, category, date } = req.body || {}
      if (!title || !description || !category || !date) {
        return res.status(400).json({ message: 'Missing required fields.' })
      }
    }
    const id = `${resource}-${Date.now()}`
    const item = { id, ...req.body }
    data.unshift(item)
    await writeJson(file, data)
    res.status(201).json(item)
  })

  app.put(`${base}/:id`, requireAdmin, async (req, res) => {
    const data = await readJson(file)
    const index = data.findIndex((entry) => entry.id === req.params.id)
    if (index === -1) {
      return res.status(404).json({ message: 'Not found' })
    }
    data[index] = { ...data[index], ...req.body }
    await writeJson(file, data)
    return res.json(data[index])
  })

  app.delete(`${base}/:id`, requireAdmin, async (req, res) => {
    const data = await readJson(file)
    const next = data.filter((entry) => entry.id !== req.params.id)
    if (next.length === data.length) {
      return res.status(404).json({ message: 'Not found' })
    }
    await writeJson(file, next)
    return res.status(204).end()
  })
}

createCrudRoutes('blog-posts', 'blog-posts.json')
createCrudRoutes('jobs', 'jobs.json')

app.get('/api/admin/about', requireAdmin, async (_req, res) => {
  const data = await readJson('about.json')
  res.json(data)
})

app.put('/api/admin/about', requireAdmin, async (req, res) => {
  const data = { ...req.body }
  await writeJson('about.json', data)
  res.json(data)
})

app.listen(port, () => {
  console.log(`Backend CMS running on port ${port}`)
})
