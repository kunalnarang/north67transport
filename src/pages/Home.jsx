import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import ServiceCard from '../components/ServiceCard'
import { useInView } from '../hooks/useInView'

// ─── Data ────────────────────────────────────────────────────────────────────

const slides = [
  {
    bg: '/images/slider-1.jpg',
    eyebrow: 'Sherwood Park, Alberta · Available 24/7',
    headline: ['Fast Freight.', 'Zero Compromises.'],
    sub: 'North 67 Transport delivers hotshot, LTL, flatbed, and long-haul trucking with unmatched reliability across Alberta and beyond.',
  },
  {
    bg: '/images/slider-2.jpg',
    eyebrow: 'Licensed · Insured · Bonded',
    headline: ['Built on Trust.', 'Driven by Results.'],
    sub: 'Every load handled with precision, every delivery on schedule. Real-time tracking from pickup to drop-off.',
  },
  {
    bg: '/images/slider-3.jpg',
    eyebrow: 'Competitive Rates · No Hidden Fees',
    headline: ['Your Freight.', 'Our Priority.'],
    sub: 'From a single pallet to an oversized industrial load, we have the equipment and expertise to move it right.',
  },
]

const stats = [
  { value: '24/7', label: 'Always Available' },
  { value: '13+', label: 'Service Types' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: 'Free', label: 'Quote Consultations' },
]

const coreServices = [
  {
    icon: '🚛',
    title: 'Hotshot Trucking',
    description: 'Time-critical deliveries for small to medium loads. Prompt, professional, and dependable — when timing is everything.',
  },
  {
    icon: '📦',
    title: 'LTL Trucking',
    description: 'Pay only for the space you need. Cost-effective less-than-truckload shipping without sacrificing service quality.',
  },
  {
    icon: '🏗️',
    title: 'Flatbed Trucking',
    description: 'Heavy equipment, oversized cargo, and construction materials transported safely with specialist equipment.',
  },
  {
    icon: '⚡',
    title: 'Expedited Trucking',
    description: 'Priority freight with streamlined dispatch. Instant responses for your most urgent shipments.',
  },
  {
    icon: '🌐',
    title: 'Long-Haul Trucking',
    description: 'Cross-provincial freight combining speed and security with coordinated, reliable logistics.',
  },
  {
    icon: '🏭',
    title: 'Warehousing',
    description: 'Storage, inventory tracking, and order fulfillment — seamless single-source logistics.',
  },
]

const whyUs = [
  { icon: '✓', title: 'Reliable & On Time', desc: 'Prompt, professional deliveries. Your goods arrive intact and on schedule — every single time.' },
  { icon: '🛡️', title: 'Fully Licensed & Insured', desc: 'Full compliance with all Alberta and Canadian transportation regulations. Your cargo is protected.' },
  { icon: '📍', title: 'Real-Time Tracking', desc: 'Stay informed with live progress reports and shipment tracking from pickup to drop-off.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Transparent, honest estimates with no hidden fees. Save significantly without sacrificing quality.' },
]

const process = [
  { num: '01', title: 'Request a Quote', desc: 'Contact us with shipment details — origin, destination, cargo type, and dimensions.' },
  { num: '02', title: 'Custom Planning', desc: 'We design the optimal route and equipment selection for your specific load.' },
  { num: '03', title: 'Safe Pickup', desc: 'Licensed, trained drivers handle your cargo with precision from first contact.' },
  { num: '04', title: 'On-Time Delivery', desc: 'Arrives intact, on schedule, with full documentation and real-time updates.' },
]

// ─── Section wrapper with scroll-triggered fade-in ────────────────────────────

function FadeSection({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
      setAnimKey((k) => k + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  const goTo = (i) => {
    setCurrent(i)
    setAnimKey((k) => k + 1)
  }

  return (
    <>
      {/* ── Hero Slider ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background slides — crossfade */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${slide.bg}')`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Gradient overlay — darker at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-n67-dark/70 via-n67-dark/65 to-n67-dark/85" />

        {/* Slide content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <p
            key={`eyebrow-${animKey}`}
            className="label-eyebrow mb-5 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            {slides[current].eyebrow}
          </p>
          <h1
            key={`h1-${animKey}`}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tight animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            {slides[current].headline[0]}
            <span className="block text-n67-orange">{slides[current].headline[1]}</span>
          </h1>
          <p
            key={`sub-${animKey}`}
            className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '350ms' }}
          >
            {slides[current].sub}
          </p>
          <div
            key={`cta-${animKey}`}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '500ms' }}
          >
            <CTAButton label="Get a Free Quote" size="lg" />
            <a
              href="tel:7806954036"
              className="inline-flex items-center gap-2.5 text-white/75 hover:text-white border border-white/25 hover:border-white/50 px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-white/5"
            >
              <svg className="w-4 h-4 text-n67-orange" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (780) 695-4036
            </a>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? 'w-8 bg-n67-orange' : 'w-2 bg-white/35 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-1.5 text-white/30">
          <span className="text-[10px] uppercase tracking-widest rotate-90 origin-center mb-3">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-n67-slate py-10 px-6">
        <FadeSection>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-n67-orange font-black text-4xl mb-1 tabular-nums">{s.value}</p>
                <p className="text-white/45 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <FadeSection className="text-center mb-14">
            <p className="label-eyebrow mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-black text-n67-dark mb-4 tracking-tight">
              Comprehensive Trucking<br className="hidden md:block" /> Solutions
            </h2>
            <p className="text-n67-grey max-w-xl mx-auto text-sm leading-relaxed">
              From urgent hotshot runs to long-haul freight, we have the fleet, expertise, and dedication to move your cargo right.
            </p>
          </FadeSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreServices.map((s, i) => (
              <FadeSection key={s.title} delay={i * 60}>
                <ServiceCard {...s} />
              </FadeSection>
            ))}
          </div>

          <FadeSection className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-n67-orange hover:text-n67-orange-dark font-bold text-sm uppercase tracking-widest transition-colors duration-200 group"
            >
              View All 13 Services
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ── Photo Strip ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 h-44 md:h-64 overflow-hidden">
        {['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg'].map((img, i) => (
          <div
            key={i}
            className="bg-cover bg-center hover:scale-105 transition-transform duration-700 cursor-pointer"
            style={{ backgroundImage: `url('/images/${img}')` }}
          />
        ))}
      </div>

      {/* ── Why Choose Us ────────────────────────────────────────────────── */}
      <section className="section-pad bg-n67-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeSection>
                <p className="label-eyebrow mb-3">Why North 67</p>
                <h2 className="text-3xl md:text-5xl font-black text-n67-dark mb-5 tracking-tight leading-tight">
                  Built on Reliability.<br />
                  <span className="text-n67-orange">Driven by Results.</span>
                </h2>
                <p className="text-n67-grey text-sm leading-relaxed mb-10 max-w-lg">
                  Our reputation is built on punctual deliveries, professional drivers, and transparent pricing. Every load is handled with care from first pickup to final drop-off.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyUs.map((item, i) => (
                    <FadeSection key={item.title} delay={i * 80}>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-n67-orange group-hover:bg-n67-orange-dark flex items-center justify-center flex-shrink-0 text-white font-bold text-base transition-colors duration-200">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-extrabold text-n67-dark text-sm mb-1 group-hover:text-n67-orange transition-colors duration-200">{item.title}</h4>
                          <p className="text-n67-grey text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </FadeSection>
                  ))}
                </div>
              </FadeSection>
            </div>
            <FadeSection delay={100}>
              <div
                className="h-80 lg:h-[480px] bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: "url('/images/slider-2.jpg')" }}
              >
                {/* Corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-n67-orange" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/30" />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <FadeSection className="text-center mb-14">
            <p className="label-eyebrow mb-3">The Process</p>
            <h2 className="text-3xl md:text-5xl font-black text-n67-dark mb-3 tracking-tight">How It Works</h2>
            <p className="text-n67-grey text-sm">Simple, transparent, and efficient from start to finish.</p>
          </FadeSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <FadeSection key={step.num} delay={i * 100}>
                <div className="relative group">
                  {/* Connecting line — desktop only */}
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-n67-border z-0" />
                  )}
                  <p className="text-8xl font-black text-n67-border leading-none select-none mb-3 group-hover:text-n67-orange/20 transition-colors duration-300">
                    {step.num}
                  </p>
                  <h3 className="font-extrabold text-n67-dark text-sm mb-2 group-hover:text-n67-orange transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-n67-grey text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-6 text-center text-white bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/images/slider-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-n67-dark/88" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeSection>
            <p className="label-eyebrow mb-4">Ready to Ship?</p>
            <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight">
              Get Your Free Quote Today
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Tell us your pickup location, destination, and cargo details. We'll respond fast with a competitive, transparent quote — no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton label="Request a Quote" size="lg" />
              <a href="tel:7806954036" className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200">
                Or call: (780) 695-4036
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
    </>
  )
}
