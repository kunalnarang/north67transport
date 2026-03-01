import CTAButton from '../components/CTAButton'

const services = [
  {
    icon: '🚛',
    title: 'Hotshot Trucking',
    description: 'Short-notice delivery for small to medium loads. Our hotshot service is prompt, professional, and dependable — with knowledge of optimal routing to get your freight there fast.',
    bullets: ['Time-critical deliveries', 'Small to medium loads', 'Optimal routing expertise', '24/7 availability'],
  },
  {
    icon: '📦',
    title: 'LTL Trucking',
    description: 'Less-than-truckload shipping lets you pay only for the space you need. Cost-effective and professional, ideal for partial loads at reduced rates without sacrificing service quality.',
    bullets: ['Pay for space used', 'Reduced shipping costs', 'Full professional handling', 'Flexible scheduling'],
  },
  {
    icon: '🏗️',
    title: 'Flatbed Trucking',
    description: 'Specialized flatbed service for oversized cargo including heavy equipment, vehicles, and construction materials. Proper tarps, tie-downs, and customized solutions for your specifications.',
    bullets: ['Oversized cargo', 'Heavy equipment', 'Construction materials', 'Custom tie-down solutions'],
  },
  {
    icon: '⚡',
    title: 'Expedited Trucking',
    description: 'Priority freight delivery with streamlined dispatch-to-delivery processes. Instant responses and top-notch service when your shipment simply cannot wait.',
    bullets: ['Priority dispatch', 'Urgent shipments', 'Fastest available routing', 'Real-time updates'],
  },
  {
    icon: '🌐',
    title: 'Long-Haul Trucking',
    description: 'Long-distance freight transportation combining speed and security. Coordinated logistics ensuring reliable, on-time shipment flow across provinces and beyond.',
    bullets: ['Cross-provincial service', 'Coordinated logistics', 'Speed and security', 'Full documentation'],
  },
  {
    icon: '🔗',
    title: 'Freight Broker',
    description: 'Connecting shippers with reliable carriers across the continent. We eliminate the hassle of researching multiple carriers, finding you the best match for your load.',
    bullets: ['Continental coverage', 'Vetted carrier network', 'Simplified coordination', 'Best-rate matching'],
  },
  {
    icon: '📋',
    title: 'Freight Forwarder',
    description: 'Long-distance and international logistics coordination. We manage the full journey from manufacturer to distributor with optimized transport selection and regulatory compliance.',
    bullets: ['International coordination', 'Regulatory compliance', 'Multi-mode logistics', 'Manufacturer to distributor'],
  },
  {
    icon: '🚚',
    title: 'Freight Shipping',
    description: 'Complete packing, handling, and distribution services. Our specialists use pallets and current best practices to ensure seamless service and outstanding customer care.',
    bullets: ['Full packing service', 'Palletized freight', 'Best practice handling', 'End-to-end distribution'],
  },
  {
    icon: '📦',
    title: 'Freight Transportation',
    description: 'Licensed, insured, and bonded freight transportation. Safe loading through final delivery, following all safety protocols for complete peace of mind.',
    bullets: ['Licensed & bonded', 'Safety-first protocol', 'Fully insured', 'Complete documentation'],
  },
  {
    icon: '🏘️',
    title: 'Local Trucking',
    description: 'Regional LTL and specialized transportation across Sherwood Park and surrounding areas. Licensed, trained drivers with comprehensive insurance for local freight needs.',
    bullets: ['Sherwood Park & area', 'LTL and FTL options', 'Licensed local drivers', 'Competitive local rates'],
  },
  {
    icon: '🧩',
    title: 'Logistics Service',
    description: 'Comprehensive logistics planning covering prioritization, coordination, and transport mode selection — designed to optimize your delivery while minimizing costs.',
    bullets: ['Full logistics planning', 'Mode optimization', 'Cost minimization', 'Supply chain coordination'],
  },
  {
    icon: '⚠️',
    title: 'Oversize Load Trucking',
    description: 'Precision handling for oversize loads including machinery and vehicles. Specialized flatbed service from pickup through unloading with full regulatory compliance.',
    bullets: ['Oversize permits', 'Precision loading', 'Machinery & vehicles', 'Pilot car coordination'],
  },
  {
    icon: '🏭',
    title: 'Warehousing',
    description: 'Custom warehouse storage, inventory tracking, order fulfillment, and delivery coordination. Single-source logistics so you can focus on your core business.',
    bullets: ['Secure storage', 'Inventory management', 'Order fulfillment', 'Combined transport & storage'],
  },
]

export default function Services() {
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
            <span className="text-n67-orange">Services</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Our Trucking Services
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            A complete suite of freight and logistics solutions for every load type, distance, and urgency level. Licensed, insured, and available 24/7.
          </p>
          <CTAButton size="lg" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Full Service Fleet</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-n67-dark mb-3">Everything You Need to Move</h2>
            <p className="text-n67-grey text-sm max-w-xl mx-auto">
              From a single pallet to an oversize industrial load, we have the right equipment, experience, and people for the job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-n67-border hover:border-n67-orange hover:shadow-xl transition-all p-8 flex flex-col">
                <div className="w-12 h-12 bg-n67-orange/10 flex items-center justify-center mb-5 text-2xl">
                  {s.icon}
                </div>
                <h3 className="font-extrabold text-n67-dark text-base mb-3">{s.title}</h3>
                <p className="text-n67-grey text-sm leading-relaxed mb-5 flex-1">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-n67-grey">
                      <span className="w-4 h-4 bg-n67-orange/20 text-n67-orange font-bold text-xs flex items-center justify-center flex-shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-n67-dark py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <p className="label-eyebrow mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-white/60 text-sm mb-8">
            Call us and we'll help you find the most efficient and cost-effective solution for your shipment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton label="Request a Quote" size="lg" />
            <a href="tel:7806954036" className="text-white/60 hover:text-white text-sm transition-colors">
              Or call: (780) 695-4036
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
