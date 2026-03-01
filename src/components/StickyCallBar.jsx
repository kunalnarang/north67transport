import { Link } from 'react-router-dom'

export default function StickyCallBar() {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-stretch border-t border-white/10 shadow-2xl">
        <a
          href="tel:7806954036"
          className="flex-1 flex items-center justify-center gap-2 bg-n67-slate text-white py-4 text-sm font-bold active:bg-n67-dark transition-colors"
        >
          <svg className="w-4 h-4 text-n67-orange" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (780) 695-4036
        </a>
        <Link
          to="/quote"
          className="flex-1 flex items-center justify-center bg-n67-orange active:bg-n67-orange-dark text-white py-4 text-sm font-bold uppercase tracking-wider transition-colors"
        >
          Get a Quote
        </Link>
      </div>

      {/* Desktop floating call button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50 group">
        <a
          href="tel:7806954036"
          className="animate-pulse-orange flex items-center gap-3 bg-n67-orange hover:bg-n67-orange-dark text-white pl-4 pr-5 py-3.5 shadow-2xl shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-500/50 hover:shadow-2xl"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="font-bold text-sm whitespace-nowrap">(780) 695-4036</span>
        </a>
      </div>
    </>
  )
}
