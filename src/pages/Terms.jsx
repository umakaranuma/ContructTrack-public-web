// Terms of Service page — governs use of the ConstructTrack platform.
// Route: /terms
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Consistent section wrapper
function Section({ number, title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-syne font-bold text-xl text-offwhite mb-4 flex items-baseline gap-3">
        <span className="font-mono text-gold text-sm">{number}.</span>
        {title}
      </h2>
      <div className="text-muted text-sm leading-relaxed space-y-3 pl-6">{children}</div>
    </section>
  )
}

export default function Terms() {
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
            Terms of Service
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
            These Terms of Service ("Terms") govern your access to and use of the ConstructTrack
            platform and services provided by ConstructTrack (Pvt) Ltd, a company incorporated
            in Sri Lanka ("ConstructTrack", "we", "us"). By registering an account or using the
            Service, you agree to these Terms. If you do not agree, do not use the Service.
          </div>

          <Section number="1" title="Definitions">
            <p>
              <strong className="text-offwhite">"Service"</strong> means the ConstructTrack web
              platform, mobile applications, APIs, and all associated features.
            </p>
            <p>
              <strong className="text-offwhite">"Customer"</strong> means the company or individual
              that has registered an account.
            </p>
            <p>
              <strong className="text-offwhite">"User"</strong> means any person authorised by the
              Customer to access the Service (including site managers, foremen, accountants).
            </p>
            <p>
              <strong className="text-offwhite">"Subscription Plan"</strong> means the pricing tier
              (Lite, Pro, or Enterprise) selected at registration.
            </p>
          </Section>

          <Section number="2" title="Account Registration">
            <p>
              You must provide accurate, complete, and current information when creating an account.
              You are responsible for maintaining the confidentiality of your login credentials.
              You must notify us immediately at{' '}
              <a href="mailto:hello@constructtrack.lk" className="text-gold hover:underline">
                hello@constructtrack.lk
              </a>{' '}
              if you suspect unauthorised access to your account.
            </p>
            <p>
              Each Customer may designate a primary account owner who has administrative rights.
              The account owner is responsible for all activity under the Customer's account,
              including activity by site managers and other Users.
            </p>
          </Section>

          <Section number="3" title="Free Trial">
            <p>
              New Customers receive a 7-day free trial for Lite and Pro plans. No payment
              information is required to start a trial. At the end of the trial period, your
              account will be paused unless you provide a valid payment method and activate a
              paid subscription.
            </p>
            <p>
              ConstructTrack reserves the right to modify or discontinue the free trial offer
              at any time without notice.
            </p>
          </Section>

          <Section number="4" title="Subscriptions and Payment">
            <p>
              Subscriptions are billed monthly in Sri Lankan Rupees (LKR). Prices are as
              displayed on our pricing page and are subject to VAT where applicable.
            </p>
            <p>
              Payment is processed through PayHere. By providing payment information, you
              authorise us to charge your selected payment method on a recurring monthly basis
              until you cancel.
            </p>
            <p>
              Invoices will be issued within 3 business days of each billing cycle. Overdue
              accounts (past 14 days) may be suspended pending payment.
            </p>
          </Section>

          <Section number="5" title="Cancellation and Refunds">
            <p>
              You may cancel your subscription at any time from your account dashboard. Cancellation
              takes effect at the end of the current billing period — you retain access until then.
            </p>
            <p>
              We offer a full refund within 7 days of your first paid charge if you are unsatisfied
              with the Service. Refunds after this period are at our discretion. To request a
              refund, email{' '}
              <a href="mailto:billing@constructtrack.lk" className="text-gold hover:underline">
                billing@constructtrack.lk
              </a>.
            </p>
          </Section>

          <Section number="6" title="Acceptable Use">
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Violate any applicable Sri Lankan or international laws</li>
              <li>Upload false or fraudulent data (e.g. fabricated invoices or attendance records)</li>
              <li>Attempt to reverse-engineer, hack, or disrupt the platform</li>
              <li>Share your account credentials with unauthorised third parties</li>
              <li>Use the platform to store illegal content or conduct illegal activities</li>
              <li>Circumvent plan limits by creating multiple accounts</li>
            </ul>
            <p>
              Violation of these terms may result in immediate account suspension without refund.
            </p>
          </Section>

          <Section number="7" title="Intellectual Property">
            <p>
              The ConstructTrack platform, software, design, and all associated IP are owned
              exclusively by ConstructTrack (Pvt) Ltd. You are granted a limited, non-exclusive,
              non-transferable licence to use the Service during your subscription.
            </p>
            <p>
              Your data (materials logs, photos, reports) remains your property. We claim no
              ownership over Customer data.
            </p>
          </Section>

          <Section number="8" title="Data and Privacy">
            <p>
              Your use of the Service is also governed by our{' '}
              <Link to="/privacy" className="text-gold hover:underline">Privacy Policy</Link>,
              which is incorporated into these Terms by reference. By using the Service, you
              consent to the collection and use of data as described in the Privacy Policy.
            </p>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by law, ConstructTrack's total liability to you
              for any claim arising from these Terms or the Service shall not exceed the amount
              you paid us in the 3 months preceding the claim.
            </p>
            <p>
              ConstructTrack shall not be liable for indirect, incidental, special, consequential,
              or punitive damages, including loss of profits, data, or business opportunities.
            </p>
          </Section>

          <Section number="10" title="Disclaimer of Warranties">
            <p>
              The Service is provided "as is" and "as available." We do not warrant that the
              Service will be uninterrupted, error-free, or completely secure. We disclaim all
              implied warranties to the fullest extent permitted by Sri Lankan law.
            </p>
          </Section>

          <Section number="11" title="Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of Sri Lanka. Any dispute arising out of or
              relating to these Terms shall be resolved by the courts of Colombo, Sri Lanka.
              You agree to first attempt to resolve disputes by contacting us directly.
            </p>
          </Section>

          <Section number="12" title="Modifications to Terms">
            <p>
              We may revise these Terms from time to time. We will provide at least 14 days'
              notice via email before any material changes take effect. Continued use of the
              Service after that date constitutes acceptance.
            </p>
          </Section>

          <Section number="13" title="Contact">
            <p>
              ConstructTrack (Pvt) Ltd<br />
              No. 42, Galle Road, Colombo 03, Sri Lanka<br />
              Email:{' '}
              <a href="mailto:legal@constructtrack.lk" className="text-gold hover:underline">
                legal@constructtrack.lk
              </a><br />
              Phone: +94 11 234 5678
            </p>
          </Section>
        </motion.div>
      </div>
    </main>
  )
}
