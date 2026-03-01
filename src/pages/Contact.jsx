import { useState } from 'react'
import CTAButton from '../components/CTAButton'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/slider-3.jpg')" }}
      >
        <div className="absolute inset-0 bg-n67-dark/80" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-n67-orange">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Get in Touch
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Have a question, need a quote, or want to discuss a complex freight solution? We're here 24/7 and ready to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <p className="label-eyebrow mb-3">Reach Us</p>
              <h2 className="text-3xl font-extrabold text-n67-dark mb-6">We're Always Available</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-n67-orange flex items-center justify-center text-white text-xl flex-shrink-0">📍</div>
                  <div>
                    <h4 className="font-bold text-n67-dark text-sm mb-1">Office Address</h4>
                    <p className="text-n67-grey text-sm leading-relaxed">
                      216-2257 Premier Way<br />
                      Sherwood Park, AB T8H 2M8
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-n67-orange flex items-center justify-center text-white text-xl flex-shrink-0">📞</div>
                  <div>
                    <h4 className="font-bold text-n67-dark text-sm mb-1">Phone</h4>
                    <a href="tel:7806954036" className="text-n67-orange font-bold text-lg hover:text-n67-orange-dark transition-colors block">
                      (780) 695-4036
                    </a>
                    <a href="tel:18558041418" className="text-n67-grey text-sm hover:text-n67-dark transition-colors">
                      Toll Free: 1-855-804-1418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-n67-orange flex items-center justify-center text-white text-xl flex-shrink-0">✉️</div>
                  <div>
                    <h4 className="font-bold text-n67-dark text-sm mb-1">Email</h4>
                    <a href="mailto:north67transport@gmail.com" className="text-n67-orange text-sm font-medium hover:text-n67-orange-dark transition-colors break-all">
                      north67transport@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-n67-orange flex items-center justify-center text-white text-xl flex-shrink-0">🕐</div>
                  <div>
                    <h4 className="font-bold text-n67-dark text-sm mb-1">Hours of Operation</h4>
                    <p className="text-n67-grey text-sm">Monday – Sunday: <span className="text-n67-orange font-bold">24 Hours</span></p>
                    <p className="text-n67-grey-light text-xs mt-1">We never close. Call anytime.</p>
                  </div>
                </div>
              </div>

              <div className="bg-n67-light p-6 border-l-4 border-n67-orange">
                <h4 className="font-bold text-n67-dark text-sm mb-2">Service Area</h4>
                <p className="text-n67-grey text-sm leading-relaxed">
                  Based in Sherwood Park, AB, we serve Edmonton and the greater Capital Region, across Alberta, and offer long-haul services throughout Western Canada and beyond.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-n67-light border border-n67-border p-12 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-extrabold text-n67-dark mb-3">Message Sent!</h3>
                  <p className="text-n67-grey text-sm leading-relaxed mb-5">
                    Thanks for reaching out, {form.name}. We'll be in touch very soon. For urgent needs, call us at{' '}
                    <a href="tel:7806954036" className="text-n67-orange font-bold">(780) 695-4036</a>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="text-n67-orange text-sm font-bold hover:text-n67-orange-dark transition-colors"
                  >
                    Send Another Message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-n67-border p-8 space-y-5">
                  <h3 className="text-xl font-extrabold text-n67-dark mb-1">Send Us a Message</h3>
                  <p className="text-n67-grey text-xs mb-4">For quote requests, use our <a href="/quote" className="text-n67-orange font-bold hover:underline">dedicated quote form</a>.</p>

                  {[
                    { name: 'name', label: 'Full Name *', type: 'text', required: true },
                    { name: 'email', label: 'Email Address *', type: 'email', required: true },
                    { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
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

                  <div>
                    <label className="block text-xs font-bold text-n67-dark uppercase tracking-widest mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full border border-n67-border px-4 py-3 text-sm focus:outline-none focus:border-n67-orange transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-n67-orange hover:bg-n67-orange-dark text-white font-bold uppercase tracking-widest py-4 text-sm transition-colors"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-n67-dark py-16 px-6 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need a Freight Quote?</h2>
          <p className="text-white/60 text-sm mb-7">Use our detailed quote form to get an accurate, competitive estimate for your shipment.</p>
          <CTAButton label="Request a Quote" size="lg" />
        </div>
      </section>
    </>
  )
}
