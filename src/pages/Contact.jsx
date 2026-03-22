import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import heroVisual from '../assets/contact-support.png'

const Contact = () => {
  const fieldClass =
    'rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-400'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '71e46b0e-9226-430b-8a12-96d7356ef3ae', // <-- Replace with your Web3Forms access key
          ...formData
        })
      })

      const data = await response.json()
      if (!data.success) throw new Error()

      setStatus({ state: 'success', message: 'Message sent! Our team will reach out soon.' })
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        phone: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        state: 'error',
        message: 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src={heroVisual}
          alt="Contact Elivate ICT Solutions"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="container-max relative z-10 py-20">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-base text-white/70">
            Partner with Mogadishu's leading ICT firm to transform your digital
            infrastructure.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-max grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Email Us',
              description: 'Our support team is online 24/7',
              value: 'info@elivateict.com',
              icon: Mail,
            },
            {
              title: 'Visit Us',
              description: 'Main Office Taleex, ',
              value: 'Mogadishu, Somalia',
              icon: MapPin,
            },
            {
              title: 'Call Us',
              description: 'Mon-Fri from 8am to 5pm',
              value: '+252 614779930',
              icon: Phone,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-3xl bg-white p-6 text-center shadow-soft">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                <p className="mt-2 text-sm font-semibold text-primary">{item.value}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-8">
        <div className="container-max grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            className="rounded-3xl bg-white p-8 shadow-soft dark:bg-slate-950/90"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-ink dark:text-slate-100">
              Send us a Message
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className={fieldClass}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className={fieldClass}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <select
                className={fieldClass}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option>General Inquiry</option>
                <option>Project Request</option>
                <option>Support</option>
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                className={fieldClass}
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                className={`md:col-span-2 ${fieldClass}`}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="btn-primary md:col-span-2"
                disabled={status.state === 'loading'}
              >
                <Send size={16} className="mr-2" />
                {status.state === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p
                  className={`md:col-span-2 text-sm ${status.state === 'error' ? 'text-red-500' : 'text-emerald-500'
                    }`}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="Elivate ICT Solutions map"
                src="https://maps.google.com/maps?q=Mogadishu%20Somalia&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
              ></iframe>
            </div>
            <div className="rounded-3xl bg-secondary/50 p-6">
              <h3 className="text-lg font-semibold text-ink">Connect with us on Social Media</h3>
              <div className="mt-4 flex items-center gap-3">
                {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm"
                  >
                    <Icon size={18} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
