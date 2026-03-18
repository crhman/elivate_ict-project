import { motion } from 'framer-motion'

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-hero-gradient py-16">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHeader
