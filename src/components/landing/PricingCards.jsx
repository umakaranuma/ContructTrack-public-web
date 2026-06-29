// Pricing section — 3 tier cards (Lite / Pro / Enterprise).
// Pro card is elevated with gold glow and "Most Popular" badge.
// Each card navigates to /checkout?plan=<tier> on CTA click.
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PLANS = [
  {
    id: 'lite',
    name: 'Lite',
    price: 7500,
    tagline: 'Perfect for small contractors',
    sites: '2 sites',
    managers: '2 managers',
    featured: false,
    features: [
      'Core material & wage logging',
      'Basic PDF progress reports',
      'Daily attendance tracking',
      'Email support',
      '7-day free trial',
    ],
    excluded: [
      'Custom Excel exports',
      'WhatsApp alerts',
      'Bill photo verification',
      'Theft anomaly alerts',
      'Bank loan reports',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 20000,
    tagline: 'Most popular for growing firms',
    sites: '6 sites',
    managers: '6 managers',
    featured: true,
    badge: '⭐ Most Popular',
    features: [
      'Everything in Lite',
      'Custom Excel exports',
      'WhatsApp site alerts',
      'GPS bill photo verification',
      'Theft & anomaly alerts',
      'Priority email support',
      '7-day free trial',
    ],
    excluded: [
      'Custom PDF with logo',
      'Bank loan drawdown report',
      'Subcontractor scorecard',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 50000,
    tagline: 'For large construction groups',
    sites: 'Unlimited sites',
    managers: 'Unlimited managers',
    featured: false,
    features: [
      'Everything in Pro',
      'Custom PDF with company logo',
      'Bank loan drawdown reports',
      'Subcontractor scorecard',
      'Dedicated account manager',
      'Custom integrations',
      'Priority phone support',
      '7-day free trial',
    ],
    excluded: [],
  },
]

// Checkmark icon
function Check() {
  return (
    <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

// X icon for excluded features
function Cross() {
  return (
    <svg className="w-4 h-4 text-white/20 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function PlanCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        plan.featured
          ? 'bg-navy-secondary border-2 border-gold shadow-gold-lg scale-105 z-10'
          : 'bg-navy-secondary border border-white/10 hover:border-gold/30'
      }`}
    >
      {/* Most Popular badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-primary text-xs font-bold font-mono px-4 py-1.5 rounded-full whitespace-nowrap">
          {plan.badge}
        </div>
      )}

      {/* Plan header */}
      <div className="mb-6">
        <h3 className="font-syne font-bold text-xl text-offwhite mb-1">{plan.name}</h3>
        <p className="text-muted text-sm">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-2">
        <div className="flex items-baseline gap-1">
          <span className="text-muted text-sm font-mono">LKR</span>
          <span className="font-mono font-bold text-4xl text-offwhite">
            {plan.price.toLocaleString()}
          </span>
        </div>
        <span className="text-muted text-xs">/month (ex. VAT)</span>
      </div>

      {/* Limits */}
      <div className="flex gap-3 mb-6">
        <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full font-mono">{plan.sites}</span>
        <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full font-mono">{plan.managers}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5 mb-6" />

      {/* Features list */}
      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check />
            <span className="text-offwhite text-sm">{f}</span>
          </li>
        ))}
        {plan.excluded.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Cross />
            <span className="text-white/30 text-sm line-through">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to={`/checkout?plan=${plan.id}`}
        className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
          plan.featured
            ? 'bg-gold text-navy-primary hover:bg-gold-light'
            : 'border border-gold/50 text-gold hover:bg-gold hover:text-navy-primary'
        }`}
      >
        Start Free Trial — 7 days free
      </Link>

      {plan.id !== 'enterprise' && (
        <p className="text-center text-muted text-xs mt-2">No credit card required</p>
      )}
      {plan.id === 'enterprise' && (
        <p className="text-center text-muted text-xs mt-2">Contact us for custom pricing</p>
      )}
    </motion.div>
  )
}

export default function PricingCards() {
  return (
    <section className="py-24 bg-navy-primary" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="section-heading mb-4">
            Simple, transparent pricing.
            <br />
            <span className="text-gold-gradient">Pay only what you need.</span>
          </h2>
          <p className="section-sub mx-auto">
            Start free for 7 days. No credit card for Lite or Pro. Cancel any time.
          </p>
        </motion.div>

        {/* Pricing grid — Pro card gets scale-105 to appear elevated */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted text-sm mt-12">
          All prices in Sri Lankan Rupees (LKR) · VAT applicable ·{' '}
          <a href="mailto:hello@constructtrack.lk" className="text-gold hover:underline">
            Contact us
          </a>{' '}
          for volume discounts
        </p>
      </div>
    </section>
  )
}
