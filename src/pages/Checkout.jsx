// Checkout page — multi-step form for starting a free trial.
// Route: /checkout?plan=lite|pro|enterprise
// Steps: 0 = Package Summary, 1 = Account Form, 2 = Confirmation
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCheckout } from '../hooks/useCheckout.js'
import PackageSummary from '../components/checkout/PackageSummary.jsx'
import AccountForm from '../components/checkout/AccountForm.jsx'
import PaymentStep from '../components/checkout/PaymentStep.jsx'

// Step indicator at the top of the checkout flow
function StepIndicator({ currentStep }) {
  const steps = ['Choose Plan', 'Create Account', 'Confirmation']

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => (
        <React.Fragment key={label}>
          {/* Step circle */}
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-mono font-bold transition-all duration-300 ${
                i < currentStep
                  ? 'bg-success text-white'
                  : i === currentStep
                  ? 'bg-gold text-navy-primary'
                  : 'bg-white/10 text-muted'
              }`}
            >
              {i < currentStep ? (
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span
              className={`text-xs mt-1.5 font-medium hidden sm:block ${
                i === currentStep ? 'text-gold' : i < currentStep ? 'text-success' : 'text-muted'
              }`}
            >
              {label}
            </span>
          </div>

          {/* Connector line between steps */}
          {i < steps.length - 1 && (
            <div
              className={`h-0.5 w-16 sm:w-24 mx-1 transition-all duration-500 ${
                i < currentStep ? 'bg-success' : 'bg-white/10'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// Step content with fade/slide animation
function StepContent({ step, planId, checkout }) {
  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <motion.div
          key="step0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PackageSummary planId={planId} />
          <button
            onClick={checkout.nextStep}
            className="btn-gold w-full justify-center py-4 mt-6 text-base"
          >
            Continue to Account Setup
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* API error banner */}
          {checkout.error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-danger/10 border border-danger/40 rounded-xl p-4 mb-6 flex items-start gap-3"
            >
              <span className="text-danger text-lg flex-shrink-0">⚠</span>
              <div>
                <p className="text-danger font-semibold text-sm">Registration failed</p>
                <p className="text-danger/80 text-xs mt-0.5">{checkout.error}</p>
              </div>
            </motion.div>
          )}

          <AccountForm
            onSubmit={checkout.handleAccountSubmit}
            isLoading={checkout.isLoading}
          />

          {/* Back button */}
          <button
            onClick={checkout.prevStep}
            disabled={checkout.isLoading}
            className="mt-4 text-muted hover:text-offwhite text-sm transition-colors flex items-center gap-1"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to plan selection
          </button>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <PaymentStep email={checkout.registeredEmail} isProcessing={true} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Checkout() {
  // Read the plan from URL: /checkout?plan=pro
  const [searchParams] = useSearchParams()
  const planId = searchParams.get('plan') || 'pro'

  const checkout = useCheckout(planId)

  // Step labels for the sidebar on wider screens
  const STEP_TITLES = [
    'Your Selected Plan',
    'Create Your Account',
    'Setting Up Workspace',
  ]

  return (
    <div className="min-h-screen bg-navy-primary pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="text-center mb-8">
          <h1 className="font-syne font-bold text-3xl text-offwhite mb-2">
            Start Your Free Trial
          </h1>
          <p className="text-muted text-sm">
            7 days free · No credit card required · Cancel any time
          </p>
        </div>

        {/* Step indicator */}
        <StepIndicator currentStep={checkout.step} />

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left sidebar: step title + context */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="sticky top-24">
              <h2 className="font-syne font-bold text-xl text-offwhite mb-2">
                {STEP_TITLES[checkout.step]}
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {checkout.step === 0 &&
                  'Review the plan you selected. You can always upgrade or downgrade after your trial.'}
                {checkout.step === 1 &&
                  'Create your account to get access. You\'ll be the primary admin for your company workspace.'}
                {checkout.step === 2 &&
                  'Your workspace is being configured. This only takes a moment.'}
              </p>

              {/* Security badge */}
              <div className="bg-navy-secondary border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg width="16" height="16" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-gold text-xs font-semibold font-mono">SECURE CHECKOUT</span>
                </div>
                <ul className="space-y-1.5 text-xs text-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> 256-bit TLS encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Your data stays in Sri Lanka
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> GDPR-aligned privacy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-success">✓</span> Cancel any time
                  </li>
                </ul>
              </div>

              {/* Support contact */}
              <div className="mt-6 text-xs text-muted">
                Need help?{' '}
                <a href="mailto:hello@constructtrack.lk" className="text-gold hover:underline">
                  hello@constructtrack.lk
                </a>
              </div>
            </div>
          </div>

          {/* Main form area */}
          <div className="lg:col-span-3">
            <div className="card-dark p-6 md:p-8">
              <StepContent
                step={checkout.step}
                planId={planId}
                checkout={checkout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
