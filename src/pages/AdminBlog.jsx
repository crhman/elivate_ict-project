import { useEffect, useState } from 'react'

const emptyForm = {
  title: '',
  description: '',
  category: 'Digital Transformation',
  readTime: '5 min read',
  date: '',
  image: '/src/assets/project-1.svg',
}

const categories = [
  'Tech Trends',
  'Digital Transformation',
  'Software Tips',
  'Product Design',
]

const AdminBlog = () => {
  const [token, setToken] = useState('')
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [editingId, setEditingId] = useState(null)

  const parseResponse = async (response) => {
    const text = await response.text()
    if (!text) {
      return {}
    }
    try {
      return JSON.parse(text)
    } catch (error) {
      throw new Error(
        'Server returned non-JSON. Make sure the backend is running on port 8788.'
      )
    }
  }

  const loadPosts = async (authToken) => {
    setStatus({ state: 'loading', message: '' })
    try {
      const response = await fetch('/api/admin/blog-posts', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      const data = await parseResponse(response)
      if (!response.ok) {
        throw new Error(data?.message || 'Failed to load posts.')
      }
      setPosts(data)
      setStatus({ state: 'success', message: '' })
    } catch (error) {
      setStatus({ state: 'error', message: error?.message || 'Failed to load posts.' })
    }
  }

  useEffect(() => {
    const stored = sessionStorage.getItem('adminToken')
    if (stored) {
      setToken(stored)
      loadPosts(stored)
    }
  }, [])

  const handleTokenSubmit = (event) => {
    event.preventDefault()
    sessionStorage.setItem('adminToken', token)
    loadPosts(token)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
  }

  const handleCreate = async (event) => {
    event.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      const response = await fetch('/api/admin/blog-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      })
      const data = await parseResponse(response)
      if (!response.ok) {
        throw new Error(data?.message || 'Failed to create post.')
      }
      setPosts((prev) => [data, ...prev])
      resetForm()
      setStatus({ state: 'success', message: 'Post created successfully.' })
    } catch (error) {
      setStatus({ state: 'error', message: error?.message || 'Failed to create post.' })
    }
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    if (!editingId) return
    setStatus({ state: 'loading', message: '' })
    try {
      const response = await fetch(`/api/admin/blog-posts/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      })
      const data = await parseResponse(response)
      if (!response.ok) {
        throw new Error(data?.message || 'Failed to update post.')
      }
      setPosts((prev) => prev.map((post) => (post.id === editingId ? data : post)))
      resetForm()
      setStatus({ state: 'success', message: 'Post updated successfully.' })
    } catch (error) {
      setStatus({ state: 'error', message: error?.message || 'Failed to update post.' })
    }
  }

  const handleDelete = async (postId) => {
    setStatus({ state: 'loading', message: '' })
    try {
      const response = await fetch(`/api/admin/blog-posts/${postId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        const data = await parseResponse(response)
        throw new Error(data?.message || 'Failed to delete post.')
      }
      setPosts((prev) => prev.filter((post) => post.id !== postId))
      setStatus({ state: 'success', message: 'Post deleted.' })
    } catch (error) {
      setStatus({ state: 'error', message: error?.message || 'Failed to delete post.' })
    }
  }

  const startEdit = (post) => {
    setEditingId(post.id)
    setForm({
      title: post.title || '',
      description: post.description || '',
      category: post.category || 'Digital Transformation',
      readTime: post.readTime || '5 min read',
      date: post.date || '',
      image: post.image || '/src/assets/project-1.svg',
    })
  }

  return (
    <div className="bg-slate-50 py-16">
      <div className="container-max space-y-10">
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-semibold text-ink">
            Blog Admin
          </h1>
          <p className="text-sm text-slate-600">
            Manage blog posts directly from the dashboard.
          </p>
        </div>

        <form onSubmit={handleTokenSubmit} className="rounded-3xl bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-ink">Admin Token</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="Enter admin token"
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm"
            />
            <button type="submit" className="btn-primary">
              Load Posts
            </button>
          </div>
          {status.message && (
            <p className={`mt-3 text-sm ${status.state === 'error' ? 'text-red-500' : 'text-emerald-500'}`}>
              {status.message}
            </p>
          )}
        </form>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form
            onSubmit={editingId ? handleUpdate : handleCreate}
            className="rounded-3xl bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-ink">
                {editingId ? 'Edit Post' : 'Create Post'}
              </h2>
              {editingId && (
                <button
                  type="button"
                  className="text-xs font-semibold text-slate-500"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              )}
            </div>
            <div className="mt-4 grid gap-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Short description"
                rows="4"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
                <input
                  name="readTime"
                  value={form.readTime}
                  onChange={handleChange}
                  placeholder="Read time"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  placeholder="Date (e.g. March 8, 2026)"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                />
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="Image path"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary mt-4 w-full">
              {editingId ? 'Update Post' : 'Create Post'}
            </button>
          </form>

          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-ink">Posts</h2>
              <button
                type="button"
                className="text-xs font-semibold text-slate-500"
                onClick={() => loadPosts(token)}
              >
                Refresh
              </button>
            </div>
            <div className="mt-4 space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-sm font-semibold text-ink">{post.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{post.category}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs">
                    <button
                      type="button"
                      className="rounded-full border border-slate-200 px-3 py-1 text-slate-600"
                      onClick={() => startEdit(post)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-red-200 px-3 py-1 text-red-500"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && (
                <p className="text-sm text-slate-500">No posts yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminBlog
