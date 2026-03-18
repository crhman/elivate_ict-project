import { BadgeCheck, Rocket, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const bulletHighlights = [
  {
    title: 'Certified Expertise',
    description: 'Our engineers hold top-tier certifications from AWS, Microsoft, and Cisco.',
    icon: BadgeCheck,
  },
  {
    title: 'Rapid Deployment',
    description: 'Agile methodologies ensure your solution goes live faster.',
    icon: Rocket,
  },
]

const featureCards = [
  {
    id: '01',
    title: 'Tailored Strategy',
    description: 'Every business is unique. We build solutions that fit your specific goals.',
  },
  {
    id: '02',
    title: 'Scalability First',
    description: 'Solutions that grow with you, from startup to enterprise-level operations.',
  },
  {
    id: '03',
    title: 'Unmatched Support',
    description: 'Dedicated account managers and technical support available 24/7.',
  },
]

const WhyChooseSection = () => {
  return (
    <section className="py-20">
      <div className="container-max">
        <div className="rounded-[32px] bg-primary/90 px-8 py-12 text-white shadow-soft sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Why organizations trust Elivate ICT?
              </h2>
              <p className="text-sm text-white/80">
                We do not just provide services; we build lasting partnerships based on
                results and reliability.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {bulletHighlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                        <Icon size={18} className="text-white" />
                      </div>
                      <p className="mt-4 text-sm font-semibold">{item.title}</p>
                      <p className="mt-2 text-xs text-white/70">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-4">
              {featureCards.map((card) => (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-semibold text-white/60">
                      {card.id}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{card.title}</h3>
                      <p className="mt-2 text-xs text-white/70">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 text-xs text-white/60">
            <ShieldCheck size={16} />
            Security, performance, and reliability are built into every delivery.
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
