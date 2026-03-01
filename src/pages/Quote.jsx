import { useState } from 'react'

const services = [
  'Hotshot Trucking',
  'LTL Trucking',
  'Flatbed Trucking',
  'Expedited Trucking',
  'Long-Haul Trucking',
  'Freight Brokerage',
  'Freight Forwarding',
  'Freight Shipping',
  'Freight Transportation',
  'Local Trucking',
  'Logistics Service',
  'Oversize Load Trucking',
  'Warehousing',
  'Not Sure — Help Me Choose',
]

const timeframes = [
  'Immediately (Hotshot)',
  'Within 24 hours',
  'Within 48–72 hours',
  'This week',
  'This month',
  'Flexible',
]

export default function Quote() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    pickup: '', delivery: '',
    service: '', cargo: '', weight: '',
    timeframe: '', notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/slider-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-n67-dark/80" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-n67-orange">Request a Quote</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Get a Free Quote
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Fill in your shipment details below and we'll get back to you promptly with a competitive, transparent quote — no hidden fees.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-pad bg-n67-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-n67-border p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h2 className="text-2xl font-extrabold text-n67-dark mb-3">Quote Request Received!</h2>
                  <p className="text-n67-grey text-sm leading-relaxed mb-6">
                    Thank you, {form.name}. We've received your inquiry and will be in touch shortly with a custom quote. For urgent shipments, call us directly at{' '}
                    <a href="tel:7806954036" className="text-n67-orange font-bold">(780) 695-4036</a>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', pickup: '', delivery: '', service: '', cargo: '', weight: '', timeframe: '', notes: '' }) }}
                    className="text-n67-orange text-sm font-bold hover:text-n67-orange-dark transition-colors"
                  >
                    Submit Another Request →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-n67-border p-8 md:p-10 space-y-6">
                  <h2 className="text-xl font-extrabold text-n67-dark mb-2">Your Shipment Details</h2>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: 'name', label: 'Full Name *', type: 'text', required: true },
                      { name: 'email', label: 'Email Address *', type: 'email', required: true },
                      { name: 'phone', label: 'Phone Number *', type: 'tel', required: true },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          value={form[f.name]}
                          onChange={handleChange}
                          className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Locations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'pickup', label: 'Pickup Location *', required: true },
                      { name: 'delivery', label: 'Delivery Location *', required: true },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">{f.label}</label>
                        <input
                          type="text"
                          name={f.name}
                          required={f.required}
                          value={form[f.name]}
                          onChange={handleChange}
                          placeholder={f.name === 'pickup' ? 'City, Province' : 'City, Province'}
                          className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Service + Cargo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">Service Type *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">Preferred Timeframe</label>
                      <select
                        name="timeframe"
                        value={form.timeframe}
                        onChange={handleChange}
                        className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors bg-white"
                      >
                        <option value="">Select timeframe...</option>
                        {timeframes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Cargo Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">Cargo Description</label>
                      <input
                        type="text"
                        name="cargo"
                        value={form.cargo}
                        onChange={handleChange}
                        placeholder="e.g. Steel beams, pallets, equipment..."
                        className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">Approx. Weight (lbs)</label>
                      <input
                        type="text"
                        name="weight"
                        value={form.weight}
                        onChange={handleChange}
                        placeholder="e.g. 500, 2000, 40000..."
                        className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">Special Notes / Requirements</label>
                    <textarea
                      name="notes"
                      rows={4}
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Dimensions, special handling requirements, hazardous materials, preferred pickup times..."
                      className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-n67-orange hover:bg-n67-orange-dark text-white font-bold uppercase tracking-widest py-4 text-sm transition-colors"
                  >
                    Submit Quote Request →
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-n67-dark text-white p-8">
                <h3 className="font-extrabold text-base mb-4">Prefer to Call?</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  We're available 24/7 and can often give you a quote on the spot.
                </p>
                <a
                  href="tel:7806954036"
                  className="block text-n67-orange font-extrabold text-xl hover:text-n67-orange-dark transition-colors mb-1"
                >
                  (780) 695-4036
                </a>
                <a
                  href="tel:18558041418"
                  className="block text-white/50 text-sm hover:text-white transition-colors"
                >
                  Toll Free: 1-855-804-1418
                </a>
                <div className="border-t border-white/10 mt-5 pt-5">
                  <p className="text-white/50 text-xs mb-1">Email us at:</p>
                  <a
                    href="mailto:north67transport@gmail.com"
                    className="text-n67-orange text-sm font-medium hover:underline break-all"
                  >
                    north67transport@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white border border-n67-border p-8">
                <h3 className="font-extrabold text-n67-dark text-base mb-4">What We'll Need</h3>
                <ul className="space-y-2 text-sm text-n67-grey">
                  {[
                    'Product type and description',
                    'Dimensions and weight',
                    'Pickup and delivery addresses',
                    'Required delivery date',
                    'Special handling requirements',
                    'Hazardous material info (if any)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-n67-orange mt-0.5 font-bold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-n67-orange p-8 text-white">
                <h3 className="font-extrabold text-base mb-2">Response Time</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  For standard quotes, expect a response within a few hours. For urgent hotshot requests, call us directly for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
