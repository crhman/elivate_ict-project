import { blogPosts } from '../data/blog.js'
import { Mail, Search } from 'lucide-react'
import { useMemo, useState } from 'react'

const Blog = () => {
  const categories = ['All Insights', 'Tech Trends', 'Digital Transformation', 'Software Tips']
  const [activeCategory, setActiveCategory] = useState('All Insights')

  const featuredPost = blogPosts[0]
  const gridPosts = useMemo(() => {
    const pool = activeCategory === 'All Insights'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)
    return pool.length < 6 ? pool.concat(pool).slice(0, 6) : pool.slice(0, 6)
  }, [activeCategory])

  return (
    <div>
      <section className="bg-slate-50 pb-10 pt-16">
        <div className="container-max space-y-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                Blog
              </h1>
              <p className="text-base text-slate-600">
                Insights, strategy, and product thinking from the Elivate ICT team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search insights..."
                  className="w-44 bg-transparent text-sm text-slate-600 outline-none"
                />
              </div>
              <button type="button" className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid gap-6 overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="h-72 w-full object-cover"
            />
            <div className="space-y-5 p-8">
              <span className="section-label">Featured Insight</span>
              <h2 className="font-display text-3xl font-semibold text-ink">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-slate-600">{featuredPost.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <button type="button" className="btn-primary">
                  Read Featured Post
                </button>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 border-b border-slate-200 pb-4 text-sm font-semibold">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`pb-2 ${
                  activeCategory === category
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-slate-500 hover:text-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-max">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-ink">Latest from the Blog</h2>
              <p className="mt-2 text-sm text-slate-600">
                Actionable strategies for the modern digital era.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, index) => (
              <article key={`${post.title}-${index}`} className="rounded-3xl bg-white p-5 shadow-soft">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-full rounded-2xl object-cover"
                />
                <span className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>
                <p className="mt-3 text-xs text-slate-500">
                  {post.date} - {post.readTime}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{post.description}</p>
                <button type="button" className="mt-4 text-sm font-semibold text-primary">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="rounded-3xl bg-dark-panel px-8 py-14 text-white shadow-soft sm:px-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Mail size={20} />
              </div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Stay ahead of the curve
              </h2>
              <p className="max-w-2xl text-sm text-white/70">
                Join 15,000+ tech leaders and get our weekly digest of industry insights
                and software tips directly in your inbox.
              </p>
              <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60"
                />
                <button type="button" className="btn-primary">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-white/50">Zero spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
