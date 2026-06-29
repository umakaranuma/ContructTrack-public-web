// Step 3 — confirmation / success state after account registration.
// Shows a spinner while the backend processes, then a success message.
// Payment integration is handled server-side; this is trial-only for now.
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animated spinner component
function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-6">
      {/* Outer rotating ring */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 rounded-full border-4 border-t-gold border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        {/* Inner hardhat icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M6 22h20v2H6v-2z" fill="#C9A84C" />
            <path d="M16 8C11.5 8 8 11.5 8 16v4h16v-4c0-4.5-3.5-8-8-8z" fill="#C9A84C" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <p className="text-offwhite font-syne font-semibold text-lg mb-2">
          Setting up your workspace…
        </p>
        <p className="text-muted text-sm">This usually takes less than 10 seconds</p>
      </div>

      {/* Animated status steps */}
      <div className="space-y-2 w-full max-w-xs">
        {[
          { label: 'Creating company workspace', delay: 0 },
          { label: 'Configuring site defaults', delay: 0.8 },
          { label: 'Sending confirmation email', delay: 1.6 },
        ].map((step) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: step.delay }}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: step.delay + 0.3 }}
              className="w-4 h-4 rounded-full bg-success/20 border border-success/50 flex items-center justify-center flex-shrink-0"
            >
              <svg className="w-2.5 h-2.5 text-success" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            {step.label}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Success state shown after the workspace is ready
function SuccessState({ email }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center py-10 gap-6"
    >
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 10 }}
        className="w-20 h-20 rounded-full bg-success/20 border-2 border-success flex items-center justify-center"
      >
        <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <div>
        <h3 className="font-syne font-bold text-2xl text-offwhite mb-2">
          You're all set! 🎉
        </h3>
        <p className="text-muted text-sm max-w-sm">
          Your ConstructTrack workspace has been created. We've sent a confirmation email to{' '}
          <strong className="text-gold">{email || 'your inbox'}</strong>.
        </p>
      </div>

      {/* Email confirmation instruction */}
      <div className="bg-navy-primary border border-white/10 rounded-xl p-5 w-full max-w-sm">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📧</span>
          <div className="text-left">
            <div className="text-offwhite font-semibold text-sm mb-1">Check your email</div>
            <div className="text-muted text-xs leading-relaxed">
              Click the confirmation link in your email to activate your account and log in to your dashboard.
              The link expires in 24 hours.
            </div>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="space-y-2 w-full max-w-sm">
        <p className="text-muted text-xs uppercase tracking-widest font-semibold text-left mb-3">Next steps</p>
        {[
          '1. Confirm your email address',
          '2. Log in and create your first site',
          '3. Invite your site managers',
          '4. Start tracking — it\'s that simple',
        ].map((step) => (
          <div key={step} className="flex items-center gap-2 text-sm text-muted">
            <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
            {step}
          </div>
        ))}
      </div>

      {/* Login link */}
      <a
        href="http://localhost:8000/login"
        className="btn-gold w-full max-w-sm justify-center py-3.5"
      >
        Go to Login
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      <Link to="/" className="text-muted text-sm hover:text-gold transition-colors">
        ← Back to home
      </Link>
    </motion.div>
  )
}

export default function PaymentStep({ email, isProcessing }) {
  // After 3 seconds of "processing", show the success state
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (isProcessing) {
      const timer = setTimeout(() => setShowSuccess(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [isProcessing])

  return (
    <AnimatePresence mode="wait">
      {!showSuccess ? (
        <motion.div key="spinner" exit={{ opacity: 0 }}>
          <Spinner />
        </motion.div>
      ) : (
        <motion.div key="success" initial={{ opacity: 0 }}>
          <SuccessState email={email} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
