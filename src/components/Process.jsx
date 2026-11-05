import { motion } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F7663]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            {skillsContent.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {skillsContent.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            {skillsContent.description}
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsContent.cards.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative p-6 rounded-2xl bg-black border border-neutral-800/80 hover:border-[#22D3EE]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-neutral-700 group-hover:text-[#22D3EE] transition-colors">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-neutral-800 group-hover:bg-[#22D3EE] transition-colors" />
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Step Status Pill */}
              <div className="pt-6 mt-6 border-t border-neutral-900 text-xs font-mono text-neutral-500 flex items-center justify-between">
                <span>Phase {step.number}</span>
                <span className="text-neutral-600 group-hover:text-neutral-300 transition-colors">
                  &bull;&bull;&bull;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process End Callout */}
        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="text-[#22D3EE] font-bold">&check;</span>
            {skillsContent.endText}
          </span>
        </div>
      </div>
    </section>
  )
}

