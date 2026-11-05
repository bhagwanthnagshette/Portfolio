import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImage from '../assets/hero/hero.jpg'
import { heroContent, socialLinks } from '../data/portfolioData'

// ── inline SVG icons ──────────────────────────────────────────────────────────
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

// Social links config used in both the fixed bar and inline mobile bar
const socials = [
  { href: socialLinks.github, icon: <GithubIcon />, label: 'GitHub' },
  { href: socialLinks.linkedin, icon: <LinkedinIcon />, label: 'LinkedIn' },
  { href: socialLinks.instagram, icon: <InstagramIcon />, label: 'Instagram' },
].filter((s) => s.href) // skip empty links (e.g. instagram not provided)

export default function Hero() {

  // AOS init – runs once; also refresh on window load so layout shifts are captured
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const handleLoad = () => AOS.refresh()
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#017c7a]"
    >
      {/* ── Background hero photo – object-contain so it preserves aspect ratio and never stretches ── */}
      <img
        src={heroImage}
        alt="Bhagwanth — Python Full Stack Developer"
        className="absolute inset-0 w-full h-full object-contain object-bottom md:object-right-bottom z-0 select-none pointer-events-none"
      />

      {/* ── Readability gradient overlay ── */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent" />

      {/* ── Fixed left social bar (desktop only) ── */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-5 mix-blend-difference">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/60 hover:text-[#22D3EE] hover:scale-125 transition-all duration-200"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* ── Main content container ── */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">

        {/* Left content block */}
        <div className="max-w-2xl">

          {/* Mobile inline social icons (lg:hidden) */}
          <div className="flex items-center gap-4 mb-4 lg:hidden" data-aos="fade-up" data-aos-delay="100">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 hover:text-[#22D3EE] hover:scale-125 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up"
          >
            {heroContent.greeting},
            <br />
            <span className="text-[#22D3EE] font-black drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]">
              {heroContent.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/90 text-sm md:text-lg font-medium max-w-md mb-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Primary */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-2.5 rounded-full bg-[#22D3EE] text-neutral-950 font-bold text-sm hover:scale-105 hover:bg-white hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all shadow-lg"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Secondary */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-5 py-2.5 rounded-full bg-black/40 border border-[#22D3EE]/40 text-white font-semibold text-sm backdrop-blur-md hover:border-[#22D3EE] hover:bg-black/60 transition-colors"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume download — only if ctaResume is set */}
            {heroContent.ctaResume && heroContent.ctaResume.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/50 text-white font-semibold text-sm hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors"
              >
                {/* Download-document icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

      </div>

      {/* ── Bottom-centre bounce scroll arrow ── */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce pointer-events-none">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
