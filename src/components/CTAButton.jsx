import { Link } from 'react-router-dom'

const sizeClasses = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
}

export default function CTAButton({ label = 'Get a Free Quote', size = 'md', to = '/quote', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-block bg-n67-orange hover:bg-n67-orange-dark text-white font-bold uppercase tracking-widest transition-colors duration-200 ${sizeClasses[size]} ${className}`}
    >
      {label}
    </Link>
  )
}
