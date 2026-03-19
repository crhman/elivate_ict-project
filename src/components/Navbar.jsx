import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import logo from '../assets/logo.png'
import logoDark from '../assets/logo-dark.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Industries', path: '/industries' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur dark:bg-slate-950/70">
      <div className="container-max flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Elivate ICT Solutions logo"
            className="h-20 w-20 dark:hidden  border-slate-200 rounded-full"
          />
          <img
            src={logoDark}
            alt="Elivate ICT Solutions logo"
            className="hidden h-20 w-20 dark:block border-slate-200 rounded-full"
          />
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? 'text-primary'
                    : 'text-slate-600 hover:text-ink dark:text-slate-200 dark:hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle />
          <NavLink to="/contact" className="btn-primary">
            Get Started
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-semibold ${
                    isActive ? 'text-primary' : 'text-slate-700 dark:text-slate-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn-primary w-full text-center">
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
