import { motion } from 'framer-motion'
import { heroContent, personalInfo } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            <span>Available for new opportunities</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-neutral-400 font-medium">
              {heroContent.greeting}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              I build web apps as a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff2a2a]">
                {heroContent.titleHighlight}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {heroContent.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            {/* Primary CTA */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3.5 rounded-lg bg-[#ff2a2a] text-white font-semibold text-sm hover:bg-[#e02020] transition-colors shadow-lg shadow-[#ff2a2a]/20"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Secondary CTA (Contact Email) */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-6 py-3.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 font-semibold text-sm hover:bg-neutral-800 hover:text-white transition-colors"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download CTA */}
            <a
              href={heroContent.ctaResume.href}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg border border-neutral-800 text-neutral-300 font-semibold text-sm hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>

          {/* Quick Meta Stats */}
          <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-neutral-400 text-xs uppercase tracking-wider">
            <div>
              <span className="block text-xl font-bold text-white">Python</span>
              <span>Django & Flask</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-neutral-800" />
            <div>
              <span className="block text-xl font-bold text-white">Full Stack</span>
              <span>React & MySQL</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-neutral-800" />
            <div>
              <span className="block text-xl font-bold text-white">Bengaluru</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Code/Terminal Visual with Float Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <div className="w-full max-w-md rounded-2xl bg-[#0a0a0a] border border-neutral-800 shadow-2xl p-4 sm:p-5 text-left font-mono text-xs text-neutral-300 animate-[float_6s_ease-in-out_infinite] overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ff2a2a]" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-neutral-500">developer.py</span>
            </div>

            {/* Code Body */}
            <div className="space-y-2 leading-relaxed">
              <p className="text-neutral-500"># Welcome to my developer portfolio</p>
              <p>
                <span className="text-[#ff2a2a]">class</span>{' '}
                <span className="text-amber-400">Developer</span>:
              </p>
              <div className="pl-4 space-y-1">
                <p>
                  <span className="text-[#ff2a2a]">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self):
                </p>
                <div className="pl-4 space-y-1 text-neutral-300">
                  <p>
                    self.name ={' '}
                    <span className="text-emerald-400">&apos;{personalInfo.name}&apos;</span>
                  </p>
                  <p>
                    self.role ={' '}
                    <span className="text-emerald-400">&apos;{personalInfo.title}&apos;</span>
                  </p>
                  <p>
                    self.location ={' '}
                    <span className="text-emerald-400">&apos;{personalInfo.location}&apos;</span>
                  </p>
                  <p>
                    self.stack = [
                    <span className="text-amber-300">&apos;Python&apos;</span>,{' '}
                    <span className="text-amber-300">&apos;Django&apos;</span>,{' '}
                    <span className="text-amber-300">&apos;React&apos;</span>]
                  </p>
                </div>
                <p className="pt-2">
                  <span className="text-[#ff2a2a]">def</span>{' '}
                  <span className="text-blue-400">hireable</span>(self):
                </p>
                <p className="pl-4 text-emerald-400">
                  <span className="text-[#ff2a2a]">return</span> True
                </p>
              </div>
            </div>

            {/* Terminal Status Footer */}
            <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500">
              <span>Status: Ready to build</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

