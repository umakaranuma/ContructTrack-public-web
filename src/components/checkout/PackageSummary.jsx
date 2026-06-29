// Step 1 of checkout — displays the selected package details
// and the "7-day free trial" callout. Plan is read from URL search params.
import React from 'react'
import { motion } from 'framer-motion'

// Plan definitions — kept in sync with PricingCards.jsx
const PLAN_META = {
  lite: {
    name: 'Lite',
    price: 7500,
    sites: '2 sites',
    managers: '2 managers',
    color: '#7A8BA0',
    features: ['Core material & wage logging', 'Basic PDF reports', 'Email support'],
  },
  pro: {
    name: 'Pro',
    price: 20000,
    sites: '6 sites',
    managers: '6 managers',
    color: '#C9A84C',
    badge: '⭐ Most Popular',
    features: ['Everything in Lite', 'Custom Excel exports', 'WhatsApp alerts', 'Bill photo verify', 'Theft alerts'],
  },
  enterprise: {
    name: 'Enterprise',
    price: 50000,
    sites: 'Unlimited sites',
    managers: 'Unlimited managers',
    color: '#22C55E',
    features: ['Everything in Pro', 'Custom PDF with logo', 'Bank loan report', 'Subcontractor scorecard', 'Priority phone support'],
  },
}

// Checkmark
function Check() {
  return (
    <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function PackageSummary({ planId }) {
  const plan = PLAN_META[planId] || PLAN_META.pro

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Plan card */}
      <div
        className="card-dark rounded-2xl p-6 border-t-2"
        style={{ borderTopColor: plan.color }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {plan.badge && (
              <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full font-mono font-semibold mb-2 inline-block">
                {plan.badge}
              </span>
            )}
            <h3 className="font-syne font-bold text-2xl text-offwhite">{plan.name}</h3>
          </div>
          <div className="text-right">
            <div className="font-mono font-bold text-offwhite text-2xl">
              LKR {plan.price.toLocaleString()}
            </div>
            <div className="text-muted text-xs">/month after trial</div>
          </div>
        </div>

        {/* Limits */}
        <div className="flex gap-2 mb-5">
          <span className="text-xs bg-white/5 text-muted px-2 py-1 rounded-full font-mono">{plan.sites}</span>
          <span className="text-xs bg-white/5 text-muted px-2 py-1 rounded-full font-mono">{plan.managers}</span>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5">
              <Check />
              <span className="text-offwhite text-sm">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Free trial callout */}
      <div className="bg-success/10 border border-success/30 rounded-xl p-5 flex items-start gap-3">
        <div className="text-success text-xl flex-shrink-0 mt-0.5">✓</div>
        <div>
          <div className="text-success font-semibold text-sm mb-1">7-day free trial — no charge today</div>
          <div className="text-muted text-xs leading-relaxed">
            You won't be charged until your trial ends. Cancel any time before day 7 and you'll never pay a rupee.
            No credit card required for Lite and Pro plans.
          </div>
        </div>
      </div>

      {/* Trust signals */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: '🔒', label: 'TLS encrypted' },
          { icon: '🇱🇰', label: 'Data in Sri Lanka' },
          { icon: '🏦', label: 'PayHere secured' },
        ].map((t) => (
          <div key={t.label} className="text-center p-3 bg-navy-primary rounded-lg border border-white/5">
            <div className="text-xl mb-1">{t.icon}</div>
            <div className="text-muted text-xs">{t.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
