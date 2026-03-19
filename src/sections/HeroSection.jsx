import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroVisual from '../assets/hero-visual.svg'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-hero-gradient pb-20 pt-16">
      <div className="container-max grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="section-label">Elivate ICT Solutions</span>
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">
            Building the Future with Smart Technology
          </h1>
          <p className="text-lg text-slate-600">
            Elivate ICT Solutions helps businesses grow through software systems,
            digital platforms, and innovative ICT services.
          </p>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/contact" className="btn-primary">
              Get Started
            </NavLink>
            <NavLink to="/services" className="btn-secondary">
              View Services <ArrowRight className="ml-2" size={16} />
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-secondary blur-2xl" />
          <div className="relative rounded-[36px] bg-white/80 p-5 shadow-soft backdrop-blur lg:p-6">
            <img
              src={heroVisual}
              alt="Elivate ICT team at work"
              className="h-[260px] w-full rounded-[28px] object-cover sm:h-[320px] lg:h-[380px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
