import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
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
  const initials = useMemo(() => {
    if (!active?.name) return 'EI'
    return active.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('')
  }, [active])

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-10 shadow-soft backdrop-blur">
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-secondary/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

      <div className="absolute right-8 top-8 z-10 flex gap-2">
        <button
          type="button"
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition hover:text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition hover:text-primary"
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
          className="relative z-0 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 text-primary">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="text-lg text-slate-700">{active.quote}</p>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-sm font-semibold">{initials}</span>
            </div>
            <div>
              <p className="font-semibold text-ink">{active.name}</p>
              <p className="text-sm text-slate-500">{active.role}</p>
            </div>
          </div>
          <Quote className="absolute -bottom-2 right-0 text-primary/20" size={56} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? 'bg-primary' : 'bg-slate-200'
            }`}
            aria-label={`View testimonial from ${item.name}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
