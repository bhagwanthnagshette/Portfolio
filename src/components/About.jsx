import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

// Small inline SVG icons for the visiting card back
function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-[#22D3EE] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-[#22D3EE] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}
function LocationIcon() {
  return (
    <svg className="w-4 h-4 text-[#22D3EE] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 text-[#22D3EE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg className="w-4 h-4 text-[#22D3EE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function About() {
  const [flipped, setFlipped] = useState(false)

  // QR value: LinkedIn profile, or fallback to email
  const qrValue = socialLinks.linkedin || `mailto:${personalInfo.emails.primary}`

  return (
    <section
      id="about"
      className="bg-[#0F7663] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Inner two-column layout ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* ── Left: ID badge on a lanyard ── */}
        <motion.div
          className="md:w-[350px] shrink-0 flex flex-col items-center relative pt-32"
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
        >
          {/* Black lanyard string */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm" />

          {/* Grey clip at the top of the card */}
          <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-10 h-6 bg-neutral-400 rounded-md shadow-md z-10" />

          {/* Flip card button wrapper */}
          <button
            type="button"
            aria-label="Flip ID card"
            onClick={() => setFlipped((f) => !f)}
            className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
          >
            {/* Inner rotating container */}
            <div
              className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
              style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* ════ FRONT FACE: ID Badge ════ */}
              <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col">
                {/* Cutout slot */}
                <div className="w-10 h-3 mx-auto bg-gray-700 rounded-full mb-3 shrink-0" />
                {/* Photo */}
                <img
                  src={stackImage}
                  alt={`${personalInfo.name} — ${personalInfo.title}, TAP Academy student`}
                  className="w-full flex-1 rounded-xl object-cover object-top"
                />
              </div>

              {/* ════ BACK FACE: Visiting Card ════ */}
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#141414] to-[#1f1f1f] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                {/* Teal accent bar at the top */}
                <div className="h-1.5 bg-[#0F7663] shrink-0" />

                <div className="p-5 flex flex-col justify-between flex-1">
                  {/* Brand name + title */}
                  <div>
                    <p className="text-xl font-black text-white leading-tight">
                      {personalInfo.brandName}
                      <span className="text-[#22D3EE]">.</span>
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#22D3EE] font-semibold mt-1">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-3" />

                  {/* Contact rows — only render rows with values */}
                  <div className="space-y-2.5 flex-1">
                    {personalInfo.emails.primary && (
                      <a
                        href={`mailto:${personalInfo.emails.primary}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 text-xs text-white/85 hover:text-[#22D3EE] transition-colors"
                      >
                        <EmailIcon />
                        <span className="truncate">{personalInfo.emails.primary}</span>
                      </a>
                    )}

                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 text-xs text-white/85 hover:text-[#22D3EE] transition-colors"
                      >
                        <PhoneIcon />
                        <span>{personalInfo.phone}</span>
                      </a>
                    )}

                    {personalInfo.location && (
                      <div className="flex items-center gap-2.5 text-xs text-white/85">
                        <LocationIcon />
                        <span>{personalInfo.location}</span>
                      </div>
                    )}

                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 text-xs text-white/85 hover:text-[#22D3EE] transition-colors"
                      >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                      </a>
                    )}

                    {socialLinks.github && (
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2.5 text-xs text-white/85 hover:text-[#22D3EE] transition-colors"
                      >
                        <GitHubIcon />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  {/* QR code + caption */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="bg-white rounded-lg p-2 shrink-0">
                      <QRCode value={qrValue} size={76} />
                    </div>
                    <span className="text-[10px] text-white/60 leading-tight">
                      Scan to<br />connect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Flip hint */}
          <p className="text-xs font-bold text-black/60 mt-4 select-none">
            Tap the card to flip ↻
          </p>
          ``        </motion.div>

        {/* ── Right: heading + bio ── */}
        <div data-aos="fade-left" className="flex-1 pt-4 md:pt-12">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-teal-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── Decorative 4-point stars ── */}
      <svg
        className="absolute top-10 right-10 w-12 h-12 text-black opacity-30 animate-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        className="absolute bottom-32 left-10 w-8 h-8 text-black opacity-30 animate-pulse"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── White torn-paper SVG divider at the bottom ── */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="white"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}
