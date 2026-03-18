import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-max grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Elivate ICT Solutions logo"
              className="h-10 w-10 dark:hidden"
            />
            <img
              src={logoDark}
              alt="Elivate ICT Solutions logo"
              className="hidden h-10 w-10 dark:block"
            />
            <h3 className="font-display text-xl font-semibold">Elivate ICT Solutions</h3>
          </div>
          <p className="text-sm text-slate-300">
            We build premium digital products, platforms, and ICT strategies that help
            organizations scale with confidence.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <span
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Software Development</li>
            <li>Digital Marketing</li>
            <li>ICT Consulting</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Mogadishu, Somalia</li>
            <li>info@elivateict.com</li>
            <li>+252 61 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        (c) 2026 Elivate ICT Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
