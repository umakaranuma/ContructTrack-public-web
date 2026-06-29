// Hero section — full-width dark navy with animated dashboard mockup,
// headline, sub-headline, CTAs, and a trust bar.
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Animated counter that ticks from 0 to a target value
function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const startRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }
    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration])

  return (
    <span className="font-mono text-gold font-bold">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}

// Mini bar chart that animates in on mount
function MiniBarChart() {
  const bars = [
    { label: 'Mon', height: 60, color: '#C9A84C' },
    { label: 'Tue', height: 80, color: '#C9A84C' },
    { label: 'Wed', height: 45, color: '#7A8BA0' },
    { label: 'Thu', height: 90, color: '#C9A84C' },
    { label: 'Fri', height: 70, color: '#C9A84C' },
    { label: 'Sat', height: 35, color: '#7A8BA0' },
  ]

  return (
    <div className="flex items-end gap-1 h-16">
      {bars.map((bar, i) => (
        <div key={bar.label} className="flex flex-col items-center gap-1 flex-1">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${bar.height}%` }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
            style={{ backgroundColor: bar.color }}
            className="w-full rounded-t-sm"
          />
          <span className="text-[9px] text-muted">{bar.label}</span>
        </div>
      ))}
    </div>
  )
}

// Attendance pill — changes between present/absent states
function AttendancePill({ name, status, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center justify-between bg-navy-primary/60 rounded-lg px-3 py-2 text-xs"
    >
      <span className="text-offwhite font-medium">{name}</span>
      <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-semibold ${
        status === 'Present'
          ? 'bg-success/20 text-success'
          : 'bg-danger/20 text-danger'
      }`}>
        {status}
      </span>
    </motion.div>
  )
}

// The animated fake dashboard preview card
function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Glow effect behind card */}
      <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-3xl" />

      {/* Main dashboard card */}
      <div className="relative bg-navy-secondary border border-white/10 rounded-2xl overflow-hidden shadow-gold-lg">
        {/* Fake browser chrome */}
        <div className="bg-navy-primary/80 border-b border-white/10 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-danger/70" />
          <div className="w-3 h-3 rounded-full bg-gold/50" />
          <div className="w-3 h-3 rounded-full bg-success/50" />
          <div className="ml-4 flex-1 bg-white/5 rounded-md px-3 py-1 text-xs text-muted">
            app.constructtrack.lk/sites/colombo-04
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Header row */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-syne font-bold text-offwhite text-sm">Colombo Site 04</h3>
              <p className="text-muted text-xs mt-0.5">Rajagiriya Residential Tower</p>
            </div>
            <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full font-mono">
              ● LIVE
            </span>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-navy-primary/60 rounded-xl p-3 text-center">
              <div className="text-lg font-bold">
                <AnimatedCounter target={1842} suffix=" bags" duration={2500} />
              </div>
              <div className="text-[10px] text-muted mt-1">Cement Stock</div>
            </div>
            <div className="bg-navy-primary/60 rounded-xl p-3 text-center">
              <div className="text-lg font-bold">
                <AnimatedCounter target={34} suffix="" duration={1500} />
              </div>
              <div className="text-[10px] text-muted mt-1">Workers Today</div>
            </div>
            <div className="bg-navy-primary/60 rounded-xl p-3 text-center">
              <div className="text-lg font-bold">
                <AnimatedCounter target={68} suffix="%" duration={1800} />
              </div>
              <div className="text-[10px] text-muted mt-1">Progress</div>
            </div>
          </div>

          {/* Two-column: chart + attendance */}
          <div className="grid grid-cols-2 gap-4">
            {/* Material usage chart */}
            <div className="bg-navy-primary/60 rounded-xl p-3">
              <p className="text-[10px] text-muted mb-2 font-medium">Material Usage (Week)</p>
              <MiniBarChart />
            </div>

            {/* Attendance list */}
            <div className="bg-navy-primary/60 rounded-xl p-3">
              <p className="text-[10px] text-muted mb-2 font-medium">Today's Attendance</p>
              <div className="space-y-1.5">
                <AttendancePill name="K. Perera" status="Present" delay={0.6} />
                <AttendancePill name="S. Fernando" status="Present" delay={0.75} />
                <AttendancePill name="R. Silva" status="Absent" delay={0.9} />
                <AttendancePill name="M. Jayasinghe" status="Present" delay={1.05} />
              </div>
            </div>
          </div>

          {/* Alert bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-4 bg-gold/10 border border-gold/30 rounded-lg px-3 py-2 flex items-center gap-2"
          >
            <span className="text-gold text-sm">⚠</span>
            <span className="text-xs text-gold font-medium">
              Cement usage 22% above estimate — review delivery bill
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Company logo placeholder shapes for trust bar
function TrustLogo({ name }) {
  return (
    <div className="flex items-center gap-2 opacity-50 hover:opacity-70 transition-opacity">
      <div className="w-6 h-6 bg-muted/40 rounded" />
      <span className="text-muted text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-hero-gradient pt-16 relative overflow-hidden">
      {/* Background decoration dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-gold text-xs font-medium font-mono">
                Now in Beta — Free for first 50 companies
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-offwhite leading-tight mb-6"
            >
              Your Construction Sites.{' '}
              <span className="text-gold-gradient">Under Control.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted text-lg leading-relaxed mb-8 max-w-lg"
            >
              Track materials, wages, and progress across every site — in real time.
              Built for Sri Lankan construction companies that are serious about growth.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/checkout?plan=pro" className="btn-gold animate-pulse-gold text-base px-8 py-3.5">
                Start Free Trial
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/demo" className="btn-outline text-base px-8 py-3.5">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8"
            >
              {[
                { value: '7-day', label: 'Free trial' },
                { value: 'No card', label: 'Required' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono font-bold text-gold text-lg">{stat.value}</div>
                  <div className="text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column: animated dashboard */}
          <DashboardMock />
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-center text-muted text-xs font-medium uppercase tracking-widest mb-6">
            Trusted by construction companies across Sri Lanka
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <TrustLogo name="Nawaloka Construction" />
            <TrustLogo name="Access Engineering" />
            <TrustLogo name="MTD Walkers" />
            <TrustLogo name="Sanken Constructions" />
            <TrustLogo name="CML Red Dot" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
