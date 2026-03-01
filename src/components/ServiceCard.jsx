import { Link } from 'react-router-dom'

export default function ServiceCard({ icon, title, description, to = '/services' }) {
  return (
    <div className="group relative bg-white border border-n67-border hover:border-n67-orange/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Orange accent bar — slides in from left on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-n67-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="p-7 flex flex-col flex-1">
        {icon && (
          <div className="w-12 h-12 bg-n67-light group-hover:bg-n67-orange/15 flex items-center justify-center mb-5 transition-colors duration-300">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</span>
          </div>
        )}
        <h3 className="text-base font-extrabold text-n67-dark mb-3 tracking-tight group-hover:text-n67-orange transition-colors duration-300">
          {title}
        </h3>
        <p className="text-n67-grey text-sm leading-relaxed flex-1">{description}</p>
        <Link
          to={to}
          className="inline-flex items-center gap-1.5 text-n67-orange hover:text-n67-orange-dark text-xs font-bold uppercase tracking-widest transition-all duration-300 mt-5 group-hover:gap-3"
        >
          Learn More
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
