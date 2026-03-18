import { useParams, NavLink } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/projects.js'

const PortfolioDetail = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="container-max py-20">
        <h2 className="text-2xl font-semibold text-ink">Project not found</h2>
        <NavLink to="/portfolio" className="mt-4 inline-flex text-primary">
          Back to Portfolio
        </NavLink>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={project.title} subtitle={project.description} />
      <section className="py-16">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-ink">Project Overview</h3>
              <p className="mt-2 text-sm text-slate-600">
                {project.description} We delivered a custom digital roadmap, UX
                design, and engineering execution to ensure a premium launch.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">Technologies Used</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink">Results</h3>
              <p className="mt-2 text-sm text-slate-600">{project.results}</p>
            </div>
            <NavLink to="/contact" className="btn-primary">
              Start a Project
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioDetail
