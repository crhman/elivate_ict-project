import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import { services } from '../data/services.js'

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container-max space-y-12">
        <SectionHeading
          label="Services"
          title="Comprehensive ICT Services"
          subtitle="From product design to launch, we craft digital systems that grow with your organization."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -6 }}
                className="glass-card p-6 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
