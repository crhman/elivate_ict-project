import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import { industries } from '../data/industries.js'

const IndustriesSection = () => {
  return (
    <section className="py-20">
      <div className="container-max space-y-12">
        <SectionHeading
          label="Industries"
          title="Industries We Empower"
          subtitle="We tailor solutions for regulated, high-impact sectors across Somalia and the region."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon size={22} />
                </div>
                <p className="mt-4 text-base font-semibold text-ink">
                  {industry.title}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
