import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute -top-24 right-0 h-52 w-52 rounded-full bg-secondary/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-max grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          label="Testimonials"
          title="Teams that trust our delivery"
          subtitle="Leaders in finance, healthcare, and retail rely on Elivate ICT to modernize their systems."
          align="left"
        />
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default TestimonialsSection
