import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CTAButton from './CTAButton'

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'FAQ',      to: '/faq' },
  { label: 'Careers',  to: '/careers' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-n67-dark/95 backdrop-blur-md shadow-2xl'
          : 'bg-n67-dark shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group" onClick={() => setMobileOpen(false)}>
          <div className="w-10 h-10 overflow-hidden flex-shrink-0">
            <img src="/images/logo.jpg" alt="North 67 Transport" className="w-full h-full object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="block text-white font-black text-sm leading-none tracking-tight group-hover:text-n67-orange transition-colors duration-200">
              NORTH 67
            </span>
            <span className="block text-n67-orange text-[10px] font-bold uppercase tracking-[0.2em] mt-0.5">
              Transport Inc.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-semibold transition-colors duration-200 group ${
                  isActive ? 'text-n67-orange' : 'text-white/75 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-n67-orange transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="tel:7806954036"
            className="hidden xl:flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-medium transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5 text-n67-orange" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (780) 695-4036
          </a>
          <div className="hidden lg:block">
            <CTAButton label="Get a Quote" size="sm" />
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:text-n67-orange transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}>
              <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileOpen ? 'w-full' : ''}`} />
            </span>
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 my-1.5 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}>
              <span className="block h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — smooth slide down */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-n67-slate border-t border-white/10 px-5 py-3">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms' }}
              className={({ isActive }) =>
                `flex items-center justify-between py-4 border-b border-white/5 text-sm font-semibold transition-all duration-300 ${
                  isActive ? 'text-n67-orange' : 'text-white/70 hover:text-white'
                } ${mobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-n67-orange" />}
                </>
              )}
            </NavLink>
          ))}
          <div className="py-4">
            <CTAButton label="Get a Free Quote" size="md" className="w-full text-center block" />
          </div>
        </div>
      </div>
    </header>
  )
}
