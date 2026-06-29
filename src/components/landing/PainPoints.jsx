// Pain points section — 3-column card grid highlighting key problems
// that ConstructTrack solves for Sri Lankan construction firms.
import React from 'react'
import { motion } from 'framer-motion'

const PAIN_POINTS = [
  {
    icon: '🧱',
    title: 'Stop Material Theft',
    description:
      'Every site loses 10–20% of materials to pilferage and inflated billing. ConstructTrack flags anomalies before the bill arrives — compare deliveries to GPS-verified photos automatically.',
    highlight: 'Flag anomalies before the bill arrives',
    stat: '~15%',
    statLabel: 'average material leakage',
  },
  {
    icon: '📋',
    title: 'No More Ghost Workers',
    description:
      'Stop paying for workers who never showed up. GPS-stamped attendance every morning means every rupee of wages is verified and traceable to a real person at a real location.',
    highlight: 'GPS-stamped attendance every morning',
    stat: '0',
    statLabel: 'ghost workers on payroll',
  },
  {
    icon: '🏦',
    title: 'Bank-Ready Reports',
    description:
      'Loan drawdown requests used to take days of manual data entry. Now one click generates professional, bank-formatted documents your lender will accept without question.',
    highlight: 'One click generates loan drawdown documents',
    stat: '< 60s',
    statLabel: 'to generate bank report',
  },
]

// Single pain point card with animation
function PainCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="card-gold-top p-6 group"
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{card.icon}</div>

      {/* Title */}
      <h3 className="font-syne font-bold text-xl text-offwhite mb-3">{card.title}</h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed mb-4">{card.description}</p>

      {/* Highlight callout */}
      <div className="bg-gold/10 border-l-2 border-gold rounded-r-lg px-3 py-2 mb-5">
        <p className="text-gold text-xs font-medium">{card.highlight}</p>
      </div>

      {/* Stat */}
      <div className="flex items-baseline gap-2">
        <span className="font-mono font-bold text-2xl text-gold">{card.stat}</span>
        <span className="text-muted text-xs">{card.statLabel}</span>
      </div>
    </motion.div>
  )
}

export default function PainPoints() {
  return (
    <section className="py-24 bg-navy-primary" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="section-heading mb-4">
            Construction sites bleed money.
            <br />
            <span className="text-gold-gradient">We stop the bleeding.</span>
          </h2>
          <p className="section-sub mx-auto">
            Three root causes drain most Sri Lankan construction budgets.
            ConstructTrack addresses all three — from day one.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PAIN_POINTS.map((card, i) => (
            <PainCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
