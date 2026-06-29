// Testimonials section — 3 cards with realistic Sri Lankan construction
// company quotes, attributed to named individuals and companies.
import React from 'react'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote:
      'Before ConstructTrack, I had no idea how much cement was disappearing from Colombo Site 3. Within the first week we caught a 19% discrepancy between deliveries and site consumption. That alone paid for the software for 8 months.',
    name: 'Rohan Jayawardena',
    title: 'Managing Director',
    company: 'Jayawardena Construction (Pvt) Ltd',
    region: 'Colombo',
    initials: 'RJ',
    color: '#C9A84C',
  },
  {
    quote:
      'The bank report feature is incredible. We applied for a LKR 45M loan drawdown last month — the bank officer said our documentation was the best he had seen. Approval came in 3 days instead of the usual 3 weeks.',
    name: 'Priya Wickramasinghe',
    title: 'Director of Operations',
    company: 'Kandy Heights Developers',
    region: 'Kandy',
    initials: 'PW',
    color: '#22C55E',
  },
  {
    quote:
      'We manage 9 sites across the southern coast. The WhatsApp alerts mean my site managers don\'t need to call me about every issue — only the real problems get through. My phone is finally quiet.',
    name: 'Saman Rajapaksa',
    title: 'CEO',
    company: 'Southern Coastal Builders (Pvt) Ltd',
    region: 'Galle',
    initials: 'SR',
    color: '#7A8BA0',
  },
]

// Star rating display
function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card-dark p-7 flex flex-col group hover:shadow-gold transition-all duration-300"
    >
      {/* Quote mark */}
      <div className="text-gold/30 font-syne text-6xl leading-none mb-4 select-none">"</div>

      {/* Stars */}
      <Stars />

      {/* Quote text */}
      <blockquote className="text-offwhite/90 text-sm leading-relaxed mt-4 mb-6 flex-1">
        {testimonial.quote}
      </blockquote>

      {/* Divider */}
      <div className="border-t border-white/5 pt-5">
        <div className="flex items-center gap-3">
          {/* Avatar circle with initials */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-syne font-bold text-sm text-navy-primary"
            style={{ backgroundColor: testimonial.color }}
          >
            {testimonial.initials}
          </div>
          <div>
            <div className="text-offwhite font-semibold text-sm">{testimonial.name}</div>
            <div className="text-muted text-xs">{testimonial.title} · {testimonial.company}</div>
          </div>
          {/* Region badge */}
          <div className="ml-auto">
            <span className="text-xs bg-white/5 text-muted px-2 py-1 rounded-full font-mono">
              📍 {testimonial.region}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="section-heading mb-4">
            Real results from real
            <br />
            <span className="text-gold-gradient">Sri Lankan builders.</span>
          </h2>
          <p className="section-sub mx-auto">
            From Colombo high-rises to Galle coastal villas — ConstructTrack is
            changing how Sri Lanka builds.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Overall rating bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-navy-secondary border border-white/10 rounded-full px-6 py-3">
            <Stars />
            <span className="text-offwhite font-semibold font-mono">4.9</span>
            <span className="text-muted text-sm">/ 5.0 average from 40+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
