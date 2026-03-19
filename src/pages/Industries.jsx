import { NavLink } from 'react-router-dom'
import { industries } from '../data/industries.js'
import heroVisual from '../assets/hero-visual.svg'
import financeImage from '../assets/finance.jpg'
import educationImage from '../assets/education.jpg'
import healthcareImage from '../assets/healthcare.jpg'
import retailEcommerceImage from '../assets/retail and ecommerce.jpg'
import governmentNgoImage from '../assets/govermenr and NGOS.jpg'
import realEstateImage from '../assets/realstate.jpg'

const Industries = () => {
  const industryCards = industries.map((industry, index) => ({
    ...industry,
    image: [
      financeImage,
      educationImage,
      healthcareImage,
      retailEcommerceImage,
      governmentNgoImage,
      realEstateImage,
    ][index],
    description:
      index === 0
        ? 'Secure digital banking platforms and fintech solutions designed to modernize legacy systems.'
        : index === 1
          ? 'Smart classrooms, integrated e-learning platforms, and administrative software that streamline learning.'
          : index === 2
            ? 'Telemedicine, health data management, and specialized systems that improve patient care.'
            : index === 3
              ? 'Scalable online storefronts and omnichannel retail strategies for seamless transactions.'
              : index === 4
                ? 'Transparent e-governance solutions and digital infrastructure for non-profits.'
                : 'Property solutions, virtual tours, and smart building systems for modern real estate.',
  }))

  return (
    <div>
      <section className="bg-slate-50 pb-10 pt-16">
        <div className="container-max space-y-6 text-center">
          <span className="section-label">Our Expertise</span>
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            Tailored ICT Solutions for <span className="text-primary">Every Sector</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            We empower diverse industries with cutting-edge technology to drive digital
            transformation, innovation, and operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-soft">
            <img
              src={heroVisual}
              alt="Industries we transform"
              className="h-64 w-full object-cover opacity-60 sm:h-72"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h2 className="text-2xl font-semibold">Industries We Transform</h2>
              <p className="mt-2 max-w-lg text-sm text-slate-200">
                Bridging the gap between traditional business operations and future-ready
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-max grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryCards.map((industry) => {
            const Icon = industry.icon
            return (
              <div key={industry.title} className="overflow-hidden rounded-3xl bg-white shadow-soft">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{industry.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
                  <button type="button" className="mt-3 text-sm font-semibold text-primary">
                    Learn More →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl font-semibold text-ink">
            Ready to transform your sector?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Our team of experts is ready to build the technology that propels your
            industry forward.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <NavLink to="/contact" className="btn-primary">
              Contact Sales
            </NavLink>
            <NavLink to="/portfolio" className="btn-secondary">
              View Case Studies
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Industries
