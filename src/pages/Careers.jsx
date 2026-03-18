import { jobOpenings } from '../data/jobs.js'
import { NavLink } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Briefcase, HeartPulse, Laptop, Lightbulb, Clock4, Upload } from 'lucide-react'
import heroVisual from '../assets/hero-visual.svg'

const benefits = [
  {
    title: 'Remote-First',
    description: 'Work from anywhere with a flexible remote policy and home office stipend.',
    icon: Laptop,
  },
  {
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage for you and your family.',
    icon: HeartPulse,
  },
  {
    title: 'Learning Stipend',
    description: 'Annual budget for courses, conferences, and certifications.',
    icon: Lightbulb,
  },
  {
    title: 'Flexible Hours',
    description: 'We care about results, not just hours. Manage your time effectively.',
    icon: Clock4,
  },
]

const Careers = () => {
  const [activeTeam, setActiveTeam] = useState('All Jobs')
  const [desiredRole, setDesiredRole] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fieldClass =
    'rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-400'

  const filteredJobs = useMemo(() => {
    if (activeTeam === 'All Jobs') {
      return jobOpenings
    }
    return jobOpenings.filter((job) => job.team === activeTeam)
  }, [activeTeam])

  const handleApply = (jobTitle) => {
    setDesiredRole(jobTitle)
    setIsModalOpen(true)
  }

  return (
    <div>
      <section className="bg-slate-50 pb-12 pt-16">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="section-label">Join the Team</span>
            <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
              Build the Future of ICT with <span className="text-primary">Elivate</span>
            </h1>
            <p className="text-base text-slate-600">
              Join a team of innovators dedicated to transforming businesses through
              technology. We are looking for passionate individuals to grow with us.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink to="#open-positions" className="btn-primary">
                View Openings
              </NavLink>
              <NavLink to="#culture" className="btn-secondary">
                Our Culture
              </NavLink>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-soft">
            <img
              src={heroVisual}
              alt="Elivate ICT team"
              className="h-72 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="culture" className="py-16">
        <div className="container-max grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-ink">
              Why You'll Love Working Here
            </h2>
            <p className="text-sm text-slate-600">
              At Elivate, we believe in empowerment, continuous learning, and a
              collaborative spirit. Our culture is built on transparency and the
              drive to solve complex problems together.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="rounded-2xl bg-white p-6 shadow-soft">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="open-positions" className="bg-slate-50 py-16">
        <div className="container-max space-y-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-3xl font-semibold text-ink">Open Positions</h2>
              <p className="mt-2 text-sm text-slate-600">
                Find your place in our growing family.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All Jobs', 'Engineering', 'Design', 'Marketing'].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveTeam(label)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${
                    activeTeam === label
                      ? 'bg-primary text-white'
                      : 'border border-slate-200 text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div key={job.title} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-soft">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{job.title}</p>
                    <p className="text-sm text-slate-500">
                      {job.team} · {job.type} · {job.mode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-slate-500">{job.salary}</p>
                  <button type="button" className="btn-secondary" onClick={() => handleApply(job.title)}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
            {filteredJobs.length === 0 && (
              <div className="rounded-2xl bg-white p-6 text-sm text-slate-500 shadow-soft">
                No open roles in this category yet.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="rounded-3xl bg-dark-panel px-8 py-12 text-white shadow-soft sm:px-12">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Don't see a fit?
              </h2>
              <p className="text-sm text-white/70">
                Drop us your resume and tell us what you are passionate about. We are
                always looking for great talent to join our network.
              </p>
              <button type="button" className="btn-primary" onClick={() => setIsModalOpen(true)}>
                Open Application Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-8 text-ink shadow-soft dark:bg-slate-950 dark:text-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-300"
            >
              Close
            </button>
            <h2 className="font-display text-2xl font-semibold">Apply to Elivate ICT</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Complete the form below and we will reach out within two business days.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className={fieldClass}
              />
              <input
                type="email"
                placeholder="Email address"
                className={fieldClass}
              />
              <input
                type="text"
                placeholder="Desired role"
                className={fieldClass}
                value={desiredRole}
                onChange={(event) => setDesiredRole(event.target.value)}
              />
              <input
                type="text"
                placeholder="LinkedIn profile (optional)"
                className={fieldClass}
              />
              <textarea
                placeholder="Tell us about yourself"
                className={`md:col-span-2 ${fieldClass}`}
                rows="4"
              />
              <div className="md:col-span-2 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
                <Upload className="mx-auto mb-2 text-slate-400 dark:text-slate-300" size={20} />
                Click to upload or drag and drop PDF, DOC up to 10MB.
              </div>
              <button type="button" className="btn-primary md:col-span-2">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Careers
