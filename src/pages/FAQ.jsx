import { useState } from 'react'
import CTAButton from '../components/CTAButton'

const faqs = [
  {
    question: 'What kinds of things can you transport?',
    answer: 'As a full-service trucking company, we\'re happy to transport just about anything that complies with the law. We handle perishables, luxury goods, heavy equipment, construction materials, oversize loads, and standard freight. Our customized transportation solutions ensure your specific cargo is handled appropriately.',
  },
  {
    question: 'How do I get an estimate for a shipment?',
    answer: 'The quickest way is to call us directly at (780) 695-4036 or use our online quote form. Our representatives will need information about your product type, dimensions, weight, pickup location, destination, and any additional details to provide an accurate estimate.',
  },
  {
    question: "What's the difference between LTL and FTL shipping?",
    answer: 'LTL (Less-Than-Truckload) shipping uses partial truck capacity for smaller cargo at a lower cost — you share the truck with other shippers. FTL (Full Truckload) fills the entire truck and is dedicated solely to your shipment. We recommend FTL for larger shipments, fragile cargo, or temperature-sensitive freight that shouldn\'t be moved multiple times.',
  },
  {
    question: 'How should I package my items for shipment?',
    answer: 'Use shipping-grade boxes, crates, or containers specific to your industry. Double boxing is recommended for heavier items. Freight is typically either palletized or shipped loose — our team will determine the best approach for your specific cargo and advise you accordingly.',
  },
  {
    question: 'What is temperature-controlled freight shipping?',
    answer: 'Temperature-controlled shipping uses specialized insulated trucks that maintain pre-set temperature conditions throughout transit. This is essential for perishable goods, pharmaceuticals, food products, and any cargo that could be damaged by temperature fluctuations.',
  },
  {
    question: 'Will you need specialized equipment for my shipment?',
    answer: 'That depends on your cargo. We have specialized equipment available including flatbeds, lowboys, and oversize load configurations. Our team customizes each solution to your specific transportation requirements. Just give us the details and we\'ll match the right equipment.',
  },
  {
    question: 'How do I know the transit time for my shipment?',
    answer: 'Transit time depends on the departure point, destination, distance, and service type (expedited or standard). When you request a quote, we\'ll provide an estimated delivery window. Throughout transit, we provide real-time progress reports and shipment tracking so you\'re always informed.',
  },
  {
    question: 'Is my freight likely to get damaged during transport?',
    answer: 'Properly packaged and documented freight faces very minimal damage risk with North 67. Our team handles your merchandise with the utmost care from pick-up to drop-off. We are fully licensed, insured, and bonded — and we take our responsibility for your cargo seriously.',
  },
  {
    question: 'What is a freight forwarder?',
    answer: 'A freight forwarder plans and organizes different shipments to get goods and products from the manufacturing facility to many distribution points. They coordinate the full logistics chain, handle documentation, select optimal transportation modes, and ensure compliance with regulations.',
  },
  {
    question: 'Do you operate 24/7?',
    answer: 'Yes — we operate Monday through Sunday, 24 hours a day. Freight doesn\'t stop, and neither do we. You can reach us at any time at (780) 695-4036 or by email at north67transport@gmail.com.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-n67-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-n67-light transition-colors"
      >
        <span className="font-bold text-n67-dark text-sm pr-4">{question}</span>
        <span className={`text-n67-orange flex-shrink-0 text-xl font-bold transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-n67-grey text-sm leading-relaxed border-t border-n67-border">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
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
            <span className="text-n67-orange">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Everything you need to know about shipping with North 67 Transport. Can't find your answer? Call us anytime.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-pad bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-12">
            <p className="label-eyebrow mb-3">Got Questions?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-n67-dark mb-3">We Have Answers</h2>
            <p className="text-n67-grey text-sm">
              Still have questions after reading through? Call us at{' '}
              <a href="tel:7806954036" className="text-n67-orange font-bold hover:underline">(780) 695-4036</a>
              {' '}— we're available 24/7.
            </p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-n67-light py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-n67-dark mb-3">Still Have Questions?</h2>
          <p className="text-n67-grey text-sm mb-7">Our team is available 24/7 to answer any question about your shipment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton label="Request a Quote" size="md" />
            <a href="tel:7806954036" className="text-n67-orange font-bold text-sm hover:text-n67-orange-dark transition-colors">
              (780) 695-4036
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
