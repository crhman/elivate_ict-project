import SectionHeading from '../components/SectionHeading.jsx'
import TestimonialSlider from '../components/TestimonialSlider.jsx'

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container-max space-y-12">
        <SectionHeading
          label="Testimonials"
          title="Teams that trust our delivery"
          subtitle="Leaders in finance, healthcare, and retail rely on Elivate ICT to modernize their systems."
          align="center"
        />
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default TestimonialsSection
