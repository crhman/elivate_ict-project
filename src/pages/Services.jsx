import { NavLink } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { services } from '../data/services.js'
import webDevelopmentImage from '../assets/web-development.jpg'
import mobileDevelopmentImage from '../assets/mobile-development.jpg'

const Services = () => {
  const highlightServices = services.slice(0, 2)
  const secondaryServices = services.slice(2)
  const highlightImages = [webDevelopmentImage, mobileDevelopmentImage]

  return (
    <div>
      <section className="bg-slate-50 pb-10 pt-16">
        <div className="container-max space-y-6">
          <span className="section-label">Our Expertise</span>
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Comprehensive <span className="text-primary">ICT Solutions</span> for the
            Modern Era
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            We transform businesses through innovative technology, strategic digital
            marketing, and world-class design systems.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-max space-y-10">
          {highlightServices.map((service, index) => {
            const Icon = service.icon
            const reverse = index % 2 === 1
            return (
              <div
                key={service.title}
                className={`grid gap-8 overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-[1.05fr_0.95fr] ${
                  reverse ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="space-y-6 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Tech Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Business Benefit
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {service.benefits[0]}
                    </p>
                  </div>
                </div>
                <div className="bg-slate-100 p-8">
                  <img
                    src={highlightImages[index]}
                    alt={service.title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-8">
        <div className="container-max grid gap-6 md:grid-cols-2">
          {secondaryServices.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <NavLink
                  to="/contact"
                  className="mt-4 inline-flex text-sm font-semibold text-primary"
                >
                  Learn More
                </NavLink>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="rounded-3xl bg-dark-panel px-8 py-14 text-white shadow-soft sm:px-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl space-y-4">
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Ready to elevate your business?
                </h2>
                <p className="text-sm text-white/70">
                  Let us build something extraordinary together. Our team is ready to
                  discuss your next big project.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <NavLink to="/contact" className="btn-primary">
                  Book a Free Consultation
                </NavLink>
                <NavLink to="/portfolio" className="btn-secondary">
                  View Our Portfolio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
