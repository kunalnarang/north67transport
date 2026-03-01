import { Link } from 'react-router-dom'

const services = [
  'Hotshot Trucking', 'LTL Trucking', 'Flatbed Trucking',
  'Expedited Trucking', 'Long-Haul Trucking', 'Oversize Load',
  'Freight Shipping', 'Logistics Service', 'Warehousing',
]

const company = [
  { label: 'About Us', to: '/about' },
  { label: 'All Services', to: '/services' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Request a Quote', to: '/quote' },
]

export default function Footer() {
  return (
    <footer className="bg-n67-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/logo.jpg" alt="North 67 Transport" className="h-10 w-auto" />
            <div>
              <span className="block text-white font-extrabold text-base leading-tight">NORTH 67</span>
              <span className="block text-n67-orange text-xs font-semibold uppercase tracking-widest">Transport Inc.</span>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            Edmonton's trusted trucking & logistics partner. Fast, reliable, and meticulous freight solutions across Alberta and beyond.
          </p>
          <p className="text-n67-orange text-xs font-semibold uppercase tracking-widest mb-1">Available 24/7</p>
          <a href="tel:7806954036" className="text-white font-bold text-lg hover:text-n67-orange transition-colors">
            (780) 695-4036
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="text-white/50 hover:text-n67-orange text-sm transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
            Company
          </h4>
          <ul className="space-y-2">
            {company.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-white/50 hover:text-n67-orange text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
            Contact
          </h4>
          <address className="not-italic space-y-3 text-sm text-white/50">
            <p className="leading-relaxed">
              216-2257 Premier Way<br />
              Sherwood Park, AB T8H 2M8
            </p>
            <p>
              <a href="tel:7806954036" className="hover:text-n67-orange transition-colors">
                (780) 695-4036
              </a>
            </p>
            <p>
              <a href="tel:18558041418" className="hover:text-n67-orange transition-colors">
                Toll Free: 1-855-804-1418
              </a>
            </p>
            <p>
              <a href="mailto:north67transport@gmail.com" className="hover:text-n67-orange transition-colors break-all">
                north67transport@gmail.com
              </a>
            </p>
            <p className="text-n67-orange/80 font-medium">Mon–Sun: 24 Hours</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} North 67 Transport Incorporated. All rights reserved.</p>
          <p>Licensed · Insured · Bonded</p>
        </div>
      </div>
    </footer>
  )
}
