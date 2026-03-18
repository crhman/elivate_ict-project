import { NavLink } from 'react-router-dom'

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container-max">
        <div className="rounded-3xl bg-accent-gradient px-8 py-14 text-white shadow-soft sm:px-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Start Your Digital Transformation Today
              </h2>
              <p className="mt-4 text-base text-white/80">
                Partner with Elivate ICT Solutions to launch secure, scalable, and
                customer-ready digital platforms.
              </p>
            </div>
            <NavLink to="/contact" className="btn-secondary bg-white text-primary">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
