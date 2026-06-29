// Sticky navigation bar with blur backdrop.
// Becomes opaque + elevated on scroll.
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

// ConstructTrack wordmark SVG logo
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      {/* Hard-hat icon built with SVG */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#C9A84C" fillOpacity="0.15" />
        <path d="M6 22h20v2H6v-2z" fill="#C9A84C" />
        <path d="M16 8C11.5 8 8 11.5 8 16v4h16v-4c0-4.5-3.5-8-8-8z" fill="#C9A84C" />
        <path d="M13 8.5V14h6V8.5C17.7 8 16.9 8 16 8c-.9 0-1.7 0-3 .5z" fill="#0A1628" />
        <rect x="14" y="6" width="4" height="3" rx="1" fill="#C9A84C" />
      </svg>
      <span className="font-syne font-bold text-xl text-gold tracking-tight group-hover:text-gold-light transition-colors">
        ConstructTrack
      </span>
    </Link>
  )
}

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Demo', href: '/demo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Track scroll to add blur + border when user scrolls down
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-navy border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-offwhite transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="http://localhost:8000/login"
            className="text-muted hover:text-offwhite transition-colors text-sm font-medium"
          >
            Login
          </a>
          <Link to="/checkout?plan=pro" className="btn-gold text-sm py-2">
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted hover:text-offwhite p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden backdrop-navy border-b border-white/5 px-4 py-4 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-offwhite font-medium py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://localhost:8000/login"
            className="text-muted font-medium py-2"
          >
            Login
          </a>
          <Link to="/checkout?plan=pro" className="btn-gold w-full justify-center">
            Start Free Trial
          </Link>
        </motion.div>
      )}
    </header>
  )
}
