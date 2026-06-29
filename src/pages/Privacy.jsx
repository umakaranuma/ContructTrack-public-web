// Privacy Policy page — GDPR-aligned policy adapted for Sri Lanka.
// Route: /privacy
import React from 'react'
import { motion } from 'framer-motion'

// Section component for consistent heading/content formatting
function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-syne font-bold text-xl text-offwhite mb-4 border-l-2 border-gold pl-4">
        {title}
      </h2>
      <div className="text-muted text-sm leading-relaxed space-y-3 pl-4">{children}</div>
    </section>
  )
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-navy-primary pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-gold text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="font-syne font-extrabold text-4xl text-offwhite mb-3">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">
            Last updated: 1 January 2025 &nbsp;·&nbsp; Effective: 1 January 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Intro */}
          <div className="bg-navy-secondary border border-white/10 rounded-xl p-6 mb-10 text-sm text-muted leading-relaxed">
            ConstructTrack (Pvt) Ltd ("<strong className="text-offwhite">we</strong>", "
            <strong className="text-offwhite">our</strong>", "<strong className="text-offwhite">us</strong>")
            is committed to protecting the personal data of our users. This Privacy Policy
            explains how we collect, use, store, and share your information when you use our
            construction site management platform at{' '}
            <a href="https://constructtrack.lk" className="text-gold hover:underline">
              constructtrack.lk
            </a>{' '}
            and associated mobile applications (collectively, the "Service").
          </div>

          <Section title="1. Information We Collect">
            <p>
              <strong className="text-offwhite">Account information:</strong> When you register,
              we collect your name, company name, email address, and phone number.
            </p>
            <p>
              <strong className="text-offwhite">Site data:</strong> Material logs, wage records,
              attendance data, delivery photos (including GPS metadata), and site progress photos
              that you or your team upload through the Service.
            </p>
            <p>
              <strong className="text-offwhite">Usage data:</strong> Log files, IP addresses,
              browser type, device identifiers, and pages visited. This data is collected
              automatically when you use our Service.
            </p>
            <p>
              <strong className="text-offwhite">Payment data:</strong> Subscription billing is
              handled by PayHere. We do not store credit card numbers. We receive transaction
              confirmation and your billing address.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your data to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Provide, operate, and maintain the ConstructTrack Service</li>
              <li>Process your subscription and send invoices</li>
              <li>Send WhatsApp and email alerts you have enabled</li>
              <li>Generate reports (including bank loan documents) on your request</li>
              <li>Improve our product through aggregated, anonymised analytics</li>
              <li>Respond to support requests and communicate about your account</li>
              <li>Comply with legal obligations under Sri Lankan law</li>
            </ul>
          </Section>

          <Section title="3. Data Storage and Location">
            <p>
              All data is stored on servers located in the <strong className="text-offwhite">AWS Mumbai (ap-south-1)</strong>{' '}
              region. This ensures your data remains within South Asia and is subject to robust
              technical and legal protections.
            </p>
            <p>
              We retain your account data for as long as your subscription is active, plus 12 months
              after cancellation to allow data export. Deleted accounts are purged within 30 days.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>TLS 1.3 encryption in transit for all data</li>
              <li>AES-256 encryption at rest for all stored data</li>
              <li>Daily automated backups with 30-day retention</li>
              <li>Role-based access controls — site managers only see their own sites</li>
              <li>Multi-factor authentication available for all accounts</li>
            </ul>
          </Section>

          <Section title="5. Sharing of Data">
            <p>
              We do <strong className="text-offwhite">not</strong> sell, rent, or trade your personal
              data to third parties. We may share data only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-offwhite">Service providers:</strong> AWS (hosting), PayHere
                (billing), SendGrid (email), Twilio (WhatsApp) — each bound by data processing agreements.
              </li>
              <li>
                <strong className="text-offwhite">Legal obligations:</strong> When required by Sri
                Lankan law, court order, or to protect our legal rights.
              </li>
              <li>
                <strong className="text-offwhite">Business transfers:</strong> In the event of a
                merger or acquisition, with prior notice to you.
              </li>
            </ul>
          </Section>

          <Section title="6. Your Rights">
            <p>Under GDPR and best-practice data protection standards, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-offwhite">Access</strong> — request a copy of your personal data</li>
              <li><strong className="text-offwhite">Rectification</strong> — correct inaccurate data</li>
              <li><strong className="text-offwhite">Erasure</strong> — request deletion of your account and data</li>
              <li><strong className="text-offwhite">Portability</strong> — export your data in CSV/JSON format</li>
              <li><strong className="text-offwhite">Objection</strong> — opt out of marketing communications</li>
            </ul>
            <p>
              To exercise any of these rights, email{' '}
              <a href="mailto:privacy@constructtrack.lk" className="text-gold hover:underline">
                privacy@constructtrack.lk
              </a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              We use essential cookies for session management and authentication. We do not use
              third-party advertising cookies. You can disable cookies in your browser, but some
              features of the Service may not function correctly.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              ConstructTrack is a B2B enterprise platform. We do not knowingly collect data
              from individuals under 18. If you believe we have inadvertently collected such
              data, contact us immediately.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this policy from time to time. We will notify you by email at least
              14 days before any material changes take effect. Continued use of the Service after
              that date constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              ConstructTrack (Pvt) Ltd<br />
              No. 42, Galle Road, Colombo 03, Sri Lanka<br />
              Email:{' '}
              <a href="mailto:privacy@constructtrack.lk" className="text-gold hover:underline">
                privacy@constructtrack.lk
              </a><br />
              Phone: +94 11 234 5678
            </p>
          </Section>
        </motion.div>
      </div>
    </main>
  )
}
