// Demo page — video placeholder, WhatsApp share, and CTA.
// Route: /demo
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Play button SVG
function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
      <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center shadow-gold-lg">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

// Feature highlight strip shown below the video
const VIDEO_FEATURES = [
  { icon: '🏗️', label: 'Material tracking demo' },
  { icon: '📊', label: 'Live dashboard walkthrough' },
  { icon: '📱', label: 'Mobile app on site' },
  { icon: '📄', label: 'Bank report generation' },
]

export default function Demo() {
  const whatsappText = encodeURIComponent(
    'Check out ConstructTrack — construction site management for Sri Lanka! https://constructtrack.lk'
  )

  return (
    <main className="min-h-screen bg-navy-primary pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-mono font-semibold uppercase tracking-widest mb-3">
            Product Demo
          </p>
          <h1 className="font-syne font-extrabold text-4xl md:text-5xl text-offwhite mb-4">
            See ConstructTrack in action.
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Watch how a Colombo construction company tracks materials, manages wages,
            and generates a bank report — all in under 10 minutes.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative group cursor-pointer mb-8"
        >
          {/* Glow behind video */}
          <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-3xl" />

          {/* Video container */}
          <div className="relative bg-navy-secondary border border-white/10 rounded-2xl overflow-hidden aspect-video">
            {/* Fake thumbnail background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-secondary via-navy-primary to-navy-secondary">
              {/* Mock dashboard screenshot background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-8 left-8 right-8 bottom-8 grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-gold/20 rounded-xl" />
                  ))}
                </div>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-navy-primary/50" />
            </div>

            {/* Video label */}
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-navy-primary text-xs font-mono font-bold px-3 py-1.5 rounded-full">
                ▶ DEMO · 9 MIN
              </span>
            </div>

            {/* Duration */}
            <div className="absolute bottom-4 right-4">
              <span className="bg-black/60 text-white text-xs font-mono px-2 py-1 rounded">9:24</span>
            </div>

            {/* Play button */}
            <PlayButton />
          </div>
        </motion.div>

        {/* Feature highlights below video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {VIDEO_FEATURES.map((f) => (
            <div
              key={f.label}
              className="bg-navy-secondary border border-white/5 rounded-xl p-4 text-center hover:border-gold/30 transition-colors"
            >
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-muted text-xs">{f.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* Primary CTA */}
          <Link to="/checkout?plan=pro" className="btn-gold text-base px-10 py-4">
            Try it free for 7 days
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* WhatsApp share */}
          <a
            href={`https://wa.me/?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-semibold px-6 py-4 rounded-lg hover:bg-[#25D366]/20 transition-all"
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Share on WhatsApp
          </a>
        </motion.div>

        {/* Book a live demo section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="card-dark p-8 text-center max-w-2xl mx-auto"
        >
          <div className="text-3xl mb-4">📅</div>
          <h3 className="font-syne font-bold text-xl text-offwhite mb-2">
            Prefer a live walkthrough?
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Book a 30-minute Zoom call with our team. We'll walk through your specific
            use case — whether it's 2 sites or 20.
          </p>
          <a
            href="mailto:hello@constructtrack.lk?subject=Book%20a%20Demo"
            className="btn-outline"
          >
            Book a Live Demo
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  )
}
