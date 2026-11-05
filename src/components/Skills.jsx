import { motion } from 'framer-motion'
import { technicalSkills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0F7663]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Skills &amp; Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            A comprehensive overview of the programming languages, frameworks, databases, and developer tools I use.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-neutral-800/80 hover:border-[#22D3EE]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-900 mb-5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-600">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-[#22D3EE]/60 hover:text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-all duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-6 mt-6 border-t border-neutral-900/60 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>{category.skills.length} competencies</span>
                <span className="text-[#22D3EE] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

