import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#0F7663] py-3.5 md:py-4'
          : isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900/80 shadow-lg py-3.5 md:py-4'
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Logo */}
        <a href="#" className="text-white text-2xl font-black">
          {personalInfo.brandName}
          <span className="text-[#22D3EE]">.</span>
        </a>

        {/* Centre: Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-white/80 hover:text-white font-medium transition-colors"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-[#22D3EE] w-0 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#22D3EE]" />
            </a>
          ))}
        </div>

        {/* Right: Desktop "Hire Me" Button */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-[#22D3EE]/30 text-white font-semibold backdrop-blur-md hover:bg-[#22D3EE] hover:text-black hover:border-[#22D3EE] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 inline-block"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
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

      {/* Mobile Dropdown Panel */}
      <div
        className={`absolute top-full left-0 right-0 w-full bg-[#0F7663] shadow-2xl overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="py-3 text-white font-bold text-lg border-b border-white/20 hover:text-[#22D3EE] transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center bg-[#22D3EE] text-black font-bold rounded-full shadow-md hover:bg-white transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
