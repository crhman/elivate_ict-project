import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/projects.js'
import { NavLink } from 'react-router-dom'

const PortfolioSection = () => {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-max space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Success Stories
            </h2>
            <p className="max-w-xl text-sm text-slate-300">
              A showcase of how we have helped global enterprises redefine their digital
              presence.
            </p>
          </div>
          <NavLink
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40"
          >
            View All Case Studies
          </NavLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
            >
              <div
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 ${
                  index === 0 ? 'ring-2 ring-primary/80' : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  {index === 0 ? 'Fintech' : index === 1 ? 'Logistics' : 'Healthcare'}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
