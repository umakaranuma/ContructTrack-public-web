// Feature grid — 6 tiles in a 3×2 layout highlighting key product capabilities
import React from 'react'
import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: (
      // Wifi/offline icon
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    title: 'Offline-First Mobile App',
    description:
      'Log materials and attendance even without internet. Data syncs automatically when connectivity returns — no data loss, ever.',
    tag: 'Mobile',
  },
  {
    icon: (
      // Camera/GPS icon
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: 'GPS-Stamped Bill Photos',
    description:
      'Every delivery photo is tagged with GPS coordinates and timestamp. Impossible to fake — your auditor will love it.',
    tag: 'Security',
  },
  {
    icon: (
      // Ledger/book icon
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Daily Wage Ledger',
    description:
      'Automatic daily wage calculations per worker. Foremen approve timesheets on mobile — no spreadsheets, no disputes.',
    tag: 'Payroll',
  },
  {
    icon: (
      // Alert/bell icon
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: 'Material Price Anomaly Alerts',
    description:
      'Machine-learned price baselines per material. Immediate WhatsApp alert when a delivery bill is more than 10% above market rate.',
    tag: 'Alerts',
  },
  {
    icon: (
      // Timeline/photo icon
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Site Progress Photo Timeline',
    description:
      'Visual progress history for every site — date-stamped, GPS-verified, stored securely. Perfect for client updates and loan applications.',
    tag: 'Reports',
  },
  {
    icon: (
      // Export/document icon
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'One-Click Compliance Export',
    description:
      'Generate bank loan drawdown documents, contractor invoices, and BOQ comparisons in one click. Formatted for Sri Lankan bank requirements.',
    tag: 'Export',
  },
]

function FeatureTile({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-dark p-6 group hover:shadow-gold transition-all duration-300"
    >
      {/* Tag */}
      <span className="text-[10px] font-mono font-semibold text-gold/60 uppercase tracking-widest mb-3 block">
        {feature.tag}
      </span>

      {/* Icon with gold tint on hover */}
      <div className="text-muted group-hover:text-gold transition-colors mb-4">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="font-syne font-bold text-offwhite text-lg mb-2 group-hover:text-gold transition-colors">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
    </motion.div>
  )
}

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-navy-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="section-heading mb-4">
            Everything you need.
            <br />
            <span className="text-gold-gradient">Nothing you don't.</span>
          </h2>
          <p className="section-sub mx-auto">
            Designed for site managers and company owners — not accountants.
            Simple enough for a foreman, powerful enough for your CFO.
          </p>
        </motion.div>

        {/* 3×2 grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <FeatureTile key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
