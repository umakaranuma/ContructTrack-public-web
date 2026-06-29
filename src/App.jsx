// Root application component — sets up routing for all public pages
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Checkout from './pages/Checkout.jsx'
import Demo from './pages/Demo.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar renders on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {/* Footer renders on every page */}
      <Footer />
    </BrowserRouter>
  )
}
