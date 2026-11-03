import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white hover:text-neutral-300 transition-colors"
        >
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-b border-neutral-900 px-4 pt-2 pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-neutral-300 hover:text-[#ff2a2a] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-[#ff2a2a] text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white transition-colors"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

