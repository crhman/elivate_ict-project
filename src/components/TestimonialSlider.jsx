import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials.js'

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const active = testimonials[activeIndex]

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-soft">
      <div className="absolute right-8 top-8 flex gap-2">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          <Quote className="text-primary" />
          <p className="text-lg text-slate-700">{active.quote}</p>
          <div>
            <p className="font-semibold text-ink">{active.name}</p>
            <p className="text-sm text-slate-500">{active.role}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TestimonialSlider
