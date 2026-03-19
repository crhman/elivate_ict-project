import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Award, ShieldCheck, Sparkles, Target, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { teamMembers } from '../data/team.js'
import heroVisual from '../assets/hero-visual.svg'
import projectFour from '../assets/project-4.svg'

const About = () => {
  const fallbackAbout = {
    headline: 'Empowering Businesses Through Innovation',
    story:
      'Founded with a vision to bridge the digital gap, Elivate ICT Solutions provides cutting-edge software and infrastructure services to businesses worldwide. We believe in technology as a catalyst for sustainable growth.',
    mission:
      'To accelerate digital transformation by providing robust, scalable, and innovative ICT solutions that empower organizations to achieve their highest potential.',
    vision:
      'To be the most trusted ICT innovation partner in the Horn of Africa, recognized for our commitment to excellence and integrity.',
  }

  const [about, setAbout] = useState(fallbackAbout)

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const response = await fetch('/api/about')
        const data = await response.json()
        if (response.ok && data?.headline) {
          setAbout({
            headline: data.headline || fallbackAbout.headline,
            story: data.story || fallbackAbout.story,
            mission: data.mission || fallbackAbout.mission,
            vision: data.vision || fallbackAbout.vision,
          })
        }
      } catch (error) {
        // Keep fallback on error
      }
    }
    loadAbout()
  }, [])

  return (
    <div>
      <section className="bg-slate-50 pb-12 pt-16">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="section-label">Our Journey</span>
            <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              {about.headline.includes('Innovation') ? (
                <>
                  {about.headline.split('Innovation')[0]}
                  <span className="text-primary">Innovation</span>
                </>
              ) : (
                about.headline
              )}
            </h1>
            <p className="text-base text-slate-600">
              {about.story}
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
              <img
                src={heroVisual}
                alt="Elivate ICT team"
                className="h-64 w-full object-cover sm:h-72"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-soft">
              <p className="text-sm font-semibold text-ink">10+ Years</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Industry Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 text-white">
        <div className="container-max grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '200+', label: 'Clients Served' },
            { value: '1.2k', label: 'Solutions Delivered' },
            { value: '15+', label: 'Tech Awards' },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Our Mission',
              description:
                about.mission,
              icon: Target,
            },
            {
              title: 'Our Vision',
              description:
                about.vision,
              icon: Award,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-max space-y-10">
          <SectionHeading
            label="Core Values"
            title="Our Core Values"
            subtitle="The principles that guide every project we undertake and every partnership we build."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Integrity',
                description: 'Honesty and transparency in everything we do.',
                icon: ShieldCheck,
              },
              {
                title: 'Innovation',
                description: 'Constantly evolving and finding better ways to solve problems.',
                icon: Sparkles,
              },
              {
                title: 'Collaboration',
                description: 'Working together as one team to deliver exceptional results.',
                icon: Users,
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest quality in every line of code and service.',
                icon: Award,
              },
            ].map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-2xl bg-white p-6 shadow-soft">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-semibold text-ink">
                Meet our Leadership
              </h2>
              <p className="max-w-2xl text-sm text-slate-600">
                Our team of experts brings decades of collective experience in enterprise
                software, cloud infrastructure, and cybersecurity.
              </p>
            </div>
            <NavLink to="/careers" className="text-sm font-semibold text-primary">
              Join our Team →
            </NavLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white p-4 shadow-soft">
                <img
                  src={projectFour}
                  alt={member.name}
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <h3 className="mt-4 text-base font-semibold text-ink">{member.name}</h3>
                <p className="text-xs text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="rounded-3xl bg-dark-panel px-8 py-14 text-white shadow-soft sm:px-12">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl space-y-3">
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Ready to elevate your business?
                </h2>
                <p className="text-sm text-white/70">
                  Let us discuss how our custom ICT solutions can drive your growth
                  and streamline your operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <NavLink to="/contact" className="btn-primary">
                  Get Started Today
                </NavLink>
                <NavLink to="/portfolio" className="btn-secondary">
                  View Our Work
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
