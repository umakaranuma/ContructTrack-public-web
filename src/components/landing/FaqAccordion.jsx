// FAQ accordion — animated expand/collapse with Framer Motion.
// Questions are specific to ConstructTrack's Sri Lankan use case.
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    question: 'How does the free trial work?',
    answer:
      'You get 7 days completely free — no credit card required for the Lite and Pro plans. During the trial you have full access to all features in your chosen plan. At the end of 7 days, you can subscribe or your account will be paused (no data deleted for 30 days).',
  },
  {
    question: 'Can I use it without internet on site?',
    answer:
      'Yes. The ConstructTrack mobile app is built offline-first. Site managers can log materials, capture bill photos, and record attendance even in areas with zero connectivity. Everything syncs automatically the next time the device has an internet connection — whether that\'s WiFi at the site office or 4G on the road.',
  },
  {
    question: 'How do I add my site managers?',
    answer:
      'From your dashboard, go to Team → Invite Manager. Enter their mobile number and they\'ll receive a WhatsApp invitation with a one-tap install link. You can set per-site permissions — a manager for Site A can\'t see Site B\'s data unless you grant access.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We store data in AWS Mumbai region for compliance with Sri Lankan data residency preferences. We perform daily backups with 30-day retention. Your data is never shared with third parties or used for advertising.',
  },
  {
    question: 'Can I export data for my bank?',
    answer:
      'Absolutely — this is one of ConstructTrack\'s core features. The Pro and Enterprise plans include a one-click bank loan drawdown report. It includes site progress photos, material consumption summaries, payment ledgers, and BOQ comparisons — all formatted to meet requirements from major Sri Lankan banks including Bank of Ceylon, People\'s Bank, and Commercial Bank.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major payment methods through PayHere: Visa, Mastercard, Amex, and bank transfers. For Enterprise plans, we also accept NEFT bank transfers directly. All subscriptions are charged monthly in LKR. You\'ll receive a proper VAT invoice each month.',
  },
]

// Individual FAQ item with animated expand/collapse
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/5 last:border-0">
      {/* Question row */}
      <button
        onClick={onToggle}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-sm md:text-base transition-colors ${
          isOpen ? 'text-gold' : 'text-offwhite group-hover:text-gold'
        }`}>
          {faq.question}
        </span>
        {/* Chevron icon — rotates when open */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-gold"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Answer — animates height */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pb-5 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqAccordion() {
  // Track which question is currently open (-1 = none)
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="py-24 bg-navy-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="section-heading mb-4">
            Questions? We've got answers.
          </h2>
          <p className="section-sub mx-auto">
            Still have questions? Email us at{' '}
            <a href="mailto:hello@constructtrack.lk" className="text-gold hover:underline">
              hello@constructtrack.lk
            </a>
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-dark px-6 md:px-10 divide-y divide-white/5"
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
