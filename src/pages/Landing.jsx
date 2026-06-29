// Landing page — assembles all landing section components in order.
// Route: /
import React from 'react'
import Hero from '../components/landing/Hero.jsx'
import PainPoints from '../components/landing/PainPoints.jsx'
import RoiCalculator from '../components/landing/RoiCalculator.jsx'
import PricingCards from '../components/landing/PricingCards.jsx'
import FeatureGrid from '../components/landing/FeatureGrid.jsx'
import Testimonials from '../components/landing/Testimonials.jsx'
import FaqAccordion from '../components/landing/FaqAccordion.jsx'

export default function Landing() {
  return (
    <main>
      {/* 1. Hero with animated dashboard */}
      <Hero />

      {/* 2. Pain points: theft, ghost workers, bank reports */}
      <PainPoints />

      {/* 3. Interactive ROI calculator (LKR) */}
      <RoiCalculator />

      {/* 4. Pricing tiers: Lite / Pro / Enterprise */}
      <PricingCards />

      {/* 5. Feature grid: 6 key capabilities */}
      <FeatureGrid />

      {/* 6. Testimonials: 3 Sri Lankan construction firms */}
      <Testimonials />

      {/* 7. FAQ accordion */}
      <FaqAccordion />

      {/* Final CTA band */}
      <section className="py-20 bg-navy-primary border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-offwhite mb-4">
            Ready to take control of your sites?
          </h2>
          <p className="text-muted text-lg mb-8">
            Join construction companies across Sri Lanka already saving millions every month.
            Start your 7-day free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/checkout?plan=pro" className="btn-gold text-base px-10 py-4">
              Start Free Trial — No Card Required
            </a>
            <a href="/demo" className="btn-outline text-base px-10 py-4">
              Watch Demo First
            </a>
          </div>
          <p className="text-muted text-sm mt-6">
            Questions? Call us: <a href="tel:+94112345678" className="text-gold">+94 11 234 5678</a>
          </p>
        </div>
      </section>
    </main>
  )
}
