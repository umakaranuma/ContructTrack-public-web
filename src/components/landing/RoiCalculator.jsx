// Interactive ROI Calculator — lets prospective customers input their
// monthly cement spend and number of sites to see projected savings vs. cost.
// All values in LKR. Numbers animate with JetBrains Mono font.
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Format a number as LKR currency string
function formatLKR(value) {
  if (value >= 1_000_000) {
    return `LKR ${(value / 1_000_000).toFixed(1)}M`
  }
  if (value >= 1_000) {
    return `LKR ${(value / 1_000).toFixed(0)}K`
  }
  return `LKR ${value.toLocaleString()}`
}

// Animated number display that smoothly transitions between values
function AnimatedValue({ value, prefix = '', suffix = '' }) {
  const [displayed, setDisplayed] = useState(value)
  const prevRef = useRef(value)
  const frameRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    const from = prevRef.current
    const to = value
    const duration = 600

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayed(Math.floor(from + (to - from) * eased))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        prevRef.current = to
        startRef.current = null
      }
    }

    cancelAnimationFrame(frameRef.current)
    startRef.current = null
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [value])

  return (
    <span className="font-mono font-bold">
      {prefix}{displayed.toLocaleString()}{suffix}
    </span>
  )
}

// Determine recommended plan based on site count
function getRecommendedPlan(sites) {
  if (sites <= 2) return { name: 'Lite', price: 7500, href: '/checkout?plan=lite' }
  if (sites <= 6) return { name: 'Pro', price: 20000, href: '/checkout?plan=pro' }
  return { name: 'Enterprise', price: 50000, href: '/checkout?plan=enterprise' }
}

export default function RoiCalculator() {
  // User inputs
  const [cementSpend, setCementSpend] = useState(500000)   // monthly LKR
  const [numSites, setNumSites] = useState(3)

  // Derived calculations
  const leakage = Math.round(cementSpend * 0.15)            // 15% typical leakage
  const plan = getRecommendedPlan(numSites)
  const planCost = plan.price
  const monthlySaving = leakage - planCost
  const roi = planCost > 0 ? Math.round((leakage / planCost) * 10) / 10 : 0
  const isPositive = monthlySaving > 0

  // Format the cement spend input for display
  const handleCementChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '')
    setCementSpend(Number(raw) || 0)
  }

  return (
    <section className="py-24 bg-navy-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            ROI Calculator
          </p>
          <h2 className="section-heading mb-4">
            How much are you losing right now?
          </h2>
          <p className="section-sub mx-auto">
            Enter your numbers below. We'll show you what ConstructTrack recovers — every month.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Inputs panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-dark p-8 space-y-8"
          >
            {/* Cement spend input */}
            <div>
              <label className="block text-offwhite font-semibold text-sm mb-2">
                Monthly Material Spend
              </label>
              <p className="text-muted text-xs mb-3">
                Enter total spend on cement, steel, sand, aggregate, pipes & other materials per month across all sites.
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold font-mono font-bold text-sm">
                  LKR
                </span>
                <input
                  type="text"
                  value={cementSpend.toLocaleString()}
                  onChange={handleCementChange}
                  className="w-full bg-navy-primary border border-white/10 rounded-lg pl-14 pr-4 py-3
                             font-mono text-offwhite text-lg focus:border-gold outline-none transition-colors"
                  placeholder="500,000"
                />
              </div>
              {/* Quick preset buttons */}
              <div className="flex gap-2 mt-3">
                {[250000, 500000, 1000000, 2000000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setCementSpend(preset)}
                    className={`text-xs px-2 py-1 rounded border transition-colors ${
                      cementSpend === preset
                        ? 'border-gold text-gold bg-gold/10'
                        : 'border-white/10 text-muted hover:border-gold/50'
                    }`}
                  >
                    {formatLKR(preset)}
                  </button>
                ))}
              </div>
            </div>

            {/* Number of sites slider */}
            <div>
              <label className="block text-offwhite font-semibold text-sm mb-2">
                Number of Active Sites
              </label>
              <p className="text-muted text-xs mb-3">
                How many construction sites are you managing simultaneously?
              </p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={numSites}
                  onChange={(e) => setNumSites(Number(e.target.value))}
                  className="flex-1 accent-gold h-2 cursor-pointer"
                />
                <span className="font-mono font-bold text-gold text-xl w-8 text-center">
                  {numSites}
                </span>
              </div>
              <div className="flex justify-between text-muted text-xs mt-1">
                <span>1 site</span>
                <span>20 sites</span>
              </div>
            </div>

            {/* Recommended plan callout */}
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
              <p className="text-xs text-muted mb-1">Recommended plan for {numSites} site{numSites !== 1 ? 's' : ''}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-syne font-bold text-gold text-lg">{plan.name}</span>
                <span className="text-muted text-sm">— LKR {planCost.toLocaleString()}/mo</span>
              </div>
            </div>
          </motion.div>

          {/* Results panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Estimated monthly loss */}
            <div className="card-dark p-6 border-l-4 border-danger">
              <p className="text-muted text-xs font-medium uppercase tracking-wide mb-2">
                Estimated Monthly Material Loss
              </p>
              <div className="text-3xl text-danger font-bold font-mono">
                − LKR <AnimatedValue value={leakage} />
              </div>
              <p className="text-muted text-xs mt-2">
                Based on 15% industry-average leakage from your LKR {cementSpend.toLocaleString()} spend
              </p>
            </div>

            {/* ConstructTrack cost */}
            <div className="card-dark p-6 border-l-4 border-muted">
              <p className="text-muted text-xs font-medium uppercase tracking-wide mb-2">
                ConstructTrack {plan.name} Cost
              </p>
              <div className="text-3xl text-offwhite font-bold font-mono">
                LKR <AnimatedValue value={planCost} />
                <span className="text-muted text-sm font-normal">/mo</span>
              </div>
            </div>

            {/* Net saving */}
            <div className={`card-dark p-6 border-l-4 ${isPositive ? 'border-success' : 'border-gold'}`}>
              <p className="text-muted text-xs font-medium uppercase tracking-wide mb-2">
                {isPositive ? 'Monthly Net Savings' : 'Monthly Net Impact'}
              </p>
              <div className={`text-3xl font-bold font-mono ${isPositive ? 'text-success' : 'text-gold'}`}>
                {isPositive ? '+' : ''}LKR <AnimatedValue value={Math.abs(monthlySaving)} />
              </div>
              <p className="text-muted text-xs mt-2">
                {isPositive
                  ? `${roi}× return on your ConstructTrack investment each month`
                  : 'Increase material spend or number of sites to see positive ROI'}
              </p>
            </div>

            {/* Annual projection */}
            {isPositive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gold/10 border border-gold/40 rounded-xl p-5"
              >
                <p className="text-gold text-xs font-mono font-semibold uppercase tracking-wide mb-1">
                  Annual Projection
                </p>
                <div className="text-2xl font-mono font-bold text-gold">
                  LKR <AnimatedValue value={monthlySaving * 12} />
                  <span className="text-sm text-muted font-normal ml-2">recovered / year</span>
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <Link
              to={plan.href}
              className="btn-gold w-full justify-center text-base py-4 mt-2"
            >
              Start recovering this money →
            </Link>
            <p className="text-center text-muted text-xs">
              7-day free trial · No credit card required · Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
