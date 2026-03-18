import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import { stats } from '../data/stats.js'

const AboutSection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-max grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeading
            label="About Us"
            title="Elevating Business Standards with Precision"
            subtitle="Elivate ICT Solutions is a Mogadishu-based technology partner delivering full-stack digital products, cloud systems, and ICT consulting for organizations ready to scale."
          />
          <p className="text-sm text-slate-600">
            We combine engineering excellence, premium design, and strategic guidance
            to help teams modernize operations and launch digital-first services.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-soft"
            >
              <p className="text-3xl font-semibold text-ink">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
