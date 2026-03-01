import CTAButton from '../components/CTAButton'

const benefits = [
  { icon: '💰', title: 'Competitive Pay', desc: 'Rates that reward your skill, experience, and commitment to excellence.' },
  { icon: '🕐', title: 'Flexible Scheduling', desc: 'We work with our drivers to find schedules that fit their lives.' },
  { icon: '🛡️', title: 'Fully Licensed & Insured', desc: 'Work with a company that takes compliance, safety, and liability seriously.' },
  { icon: '🌐', title: 'Variety of Routes', desc: 'From local runs to long-haul, there\'s always something different.' },
]

const requirements = [
  'Valid Class 1, 3, or 5 Alberta driver\'s license (depending on role)',
  'Clean driving record',
  'Ability to pass pre-employment background check',
  'Strong safety mindset and professional attitude',
  'Reliable, punctual, and detail-oriented',
  'Experience with freight handling preferred but not required for all positions',
]

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white py-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/slider-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-n67-dark/80" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="text-sm text-white/50 mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <span className="text-n67-orange">Careers</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Join the North 67 Team
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            We're always looking for reliable, professional drivers and logistics professionals to grow with us. If you take pride in your work, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-eyebrow mb-3">Why Drive for North 67</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-n67-dark mb-5">
                A Company That Values Its People
              </h2>
              <p className="text-n67-grey text-sm leading-relaxed mb-8">
                At North 67 Transport, we know that our drivers are the backbone of everything we do. We treat our team with respect, offer competitive compensation, and provide the support you need to do your best work on every run.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-n67-orange/10 flex items-center justify-center flex-shrink-0 text-xl">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-n67-dark text-sm mb-1">{b.title}</h4>
                      <p className="text-n67-grey text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="h-80 lg:h-96 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/slider-2.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* Requirements + Application */}
      <section className="section-pad bg-n67-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="label-eyebrow mb-3">What We're Looking For</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-n67-dark mb-6">General Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-n67-grey">
                    <span className="w-5 h-5 bg-n67-orange flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-n67-border p-8 md:p-10">
              <h3 className="text-xl font-extrabold text-n67-dark mb-2">Apply Now</h3>
              <p className="text-n67-grey text-sm leading-relaxed mb-7">
                Interested in joining the team? Download our employment application form, fill it out completely, and send it to us via email or drop it off at our Sherwood Park office.
              </p>

              <div className="space-y-4">
                <div className="bg-n67-light p-5 border border-n67-border">
                  <h4 className="font-bold text-n67-dark text-sm mb-2">Send Your Application To:</h4>
                  <a
                    href="mailto:north67transport@gmail.com"
                    className="text-n67-orange text-sm font-medium hover:underline break-all"
                  >
                    north67transport@gmail.com
                  </a>
                </div>

                <div className="bg-n67-light p-5 border border-n67-border">
                  <h4 className="font-bold text-n67-dark text-sm mb-2">Or Visit Us In Person:</h4>
                  <p className="text-n67-grey text-sm">
                    216-2257 Premier Way<br />
                    Sherwood Park, AB T8H 2M8
                  </p>
                </div>

                <div className="bg-n67-light p-5 border border-n67-border">
                  <h4 className="font-bold text-n67-dark text-sm mb-2">Call Us:</h4>
                  <a href="tel:7806954036" className="text-n67-orange font-bold text-base hover:text-n67-orange-dark transition-colors">
                    (780) 695-4036
                  </a>
                </div>
              </div>

              <p className="text-n67-grey-light text-xs mt-6 leading-relaxed">
                We review all applications and will contact qualified candidates. We appreciate your interest in North 67 Transport Incorporated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-n67-dark py-20 px-6 text-center text-white">
        <div className="max-w-xl mx-auto">
          <p className="label-eyebrow mb-3">Always Hiring</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Drive for North 67?
          </h2>
          <p className="text-white/60 text-sm mb-8">
            We're always looking for dedicated professionals. Reach out today and let's talk about your future with us.
          </p>
          <a
            href="mailto:north67transport@gmail.com"
            className="inline-block bg-n67-orange hover:bg-n67-orange-dark text-white font-bold uppercase tracking-widest px-9 py-4 text-sm transition-colors"
          >
            Email Your Application →
          </a>
        </div>
      </section>
    </>
  )
}
