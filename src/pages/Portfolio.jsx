import { projects } from '../data/projects.js'
import { NavLink } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Filter } from 'lucide-react'

const Portfolio = () => {
  const categories = ['All Projects', 'Websites', 'Mobile Apps', 'Dashboards', 'E-commerce']
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects
    }
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <div>
      <section className="bg-slate-50 pb-8 pt-16">
        <div className="container-max space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
                Our <span className="text-primary">Portfolio</span>
              </h1>
              <p className="max-w-2xl text-base text-slate-600">
                We build innovative digital solutions that help global brands scale,
                engage, and lead in their industries.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"
            >
              <Filter size={16} />
              Filter
            </button>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop"
              alt="Our Digital Portfolio"
              className="h-64 w-full object-cover sm:h-72"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4 border-b border-slate-200 pb-4 text-sm font-semibold">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`pb-3 ${
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
        <div className="container-max grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <NavLink
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="group rounded-3xl bg-white p-5 shadow-soft transition hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={`${project.slug}-${tech}`}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </NavLink>
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <div className="container-max">
            <div className="rounded-3xl bg-white p-10 text-center text-sm text-slate-500 shadow-soft">
              No projects found in this category yet.
            </div>
          </div>
        )}
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="rounded-3xl bg-dark-panel px-8 py-14 text-white shadow-soft sm:px-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Ready to start your next project?
              </h2>
              <p className="max-w-2xl text-sm text-white/70">
                Whether you are a startup or an established enterprise, we are here to
                help you build your digital future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <NavLink to="/contact" className="btn-primary">
                  Let's Talk
                </NavLink>
                <NavLink to="/services" className="btn-secondary">
                  View Pricing
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
