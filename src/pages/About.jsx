import CTAButton from '../components/CTAButton'

const values = [
  {
    icon: '🎯',
    title: 'Reliability First',
    desc: 'Every delivery is a commitment. Our clients trust us because we show up on time, every time, with their cargo intact.',
  },
  {
    icon: '🏆',
    title: 'Professional Excellence',
    desc: 'Our drivers are professionally screened, trained, and equipped to handle any freight with the highest standard of care.',
  },
  {
    icon: '💡',
    title: 'Smart Logistics',
    desc: 'We use optimized routing and coordination techniques that maximize speed without ever sacrificing safety or security.',
  },
  {
    icon: '🤝',
    title: 'Client-Centered',
    desc: 'Flexible, adaptable services built around your needs. We listen, customize, and deliver — on your terms.',
  },
]

const differentiators = [
  'Prompt and professional freight deliveries, guaranteed',
  'Cargo arrives intact, on time, every time',
  'Customized solutions for luxury goods, perishables, and specialty freight',
  'Licensed, insured, and bonded across Alberta',
  'Competitive rates that improve your bottom line',
  'Real-time shipment tracking and progress updates',
  '24/7 availability — we never close',
  'Experienced drivers with specialized training',
]

export default function About() {
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
            <span className="text-n67-orange">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            About North 67 Transport
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            Sherwood Park's trusted trucking company — built on a foundation of reliability, professionalism, and a genuine commitment to moving your freight right.
          </p>
          <CTAButton size="lg" />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-eyebrow mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-n67-dark mb-5">
                Driven by Purpose.<br />Defined by Trust.
              </h2>
              <div className="space-y-4 text-n67-grey text-sm leading-relaxed">
                <p>
                  North 67 Transport Incorporated was founded with a single mission: to be the best trucking company for all your shipping needs. Based in Sherwood Park, Alberta, we've built our reputation through highly organized operations and top-quality inventory shipping and handling.
                </p>
                <p>
                  We understand that freight is more than just cargo — it's your business, your livelihood, and your customers' expectations. That's why we treat every shipment as if it were our own, maintaining the highest standards of care from the moment we pick up to the moment we deliver.
                </p>
                <p>
                  From hotshot runs to long-haul freight, from local LTL shipments to oversize loads, we've developed the expertise, fleet, and processes to handle it all — efficiently, safely, and affordably.
                </p>
              </div>
            </div>
            <div
              className="h-80 lg:h-96 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/slider-1.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-n67-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-n67-dark mb-3">Our Core Values</h2>
            <p className="text-n67-grey text-sm max-w-lg mx-auto">
              These aren't just words on a page. They're the standards we hold ourselves to on every single run.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-n67-border hover:border-n67-orange hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-extrabold text-n67-dark mb-2 text-base">{v.title}</h3>
                <p className="text-n67-grey text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="h-80 lg:h-96 bg-cover bg-center order-2 lg:order-1"
              style={{ backgroundImage: "url('/images/slider-3.jpg')" }}
            />
            <div className="order-1 lg:order-2">
              <p className="label-eyebrow mb-3">Why Choose North 67</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-n67-dark mb-6">
                The North 67 Difference
              </h2>
              <ul className="space-y-3">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-n67-grey">
                    <span className="w-5 h-5 bg-n67-orange flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-n67-dark py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <p className="label-eyebrow mb-3">Let's Work Together</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Move Your Freight?</h2>
          <p className="text-white/60 text-sm mb-8">
            Contact us today for a no-obligation quote and discover why businesses across Alberta trust North 67 Transport.
          </p>
          <CTAButton label="Get a Free Quote" size="lg" />
        </div>
      </section>
    </>
  )
}
