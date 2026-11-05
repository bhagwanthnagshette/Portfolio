import AOS from 'aos'
import { useEffect } from 'react'
import { technicalSkills } from '../data/portfolioData'

// ── SkillBadge: single rounded pill for one skill ──────────────────────────
function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200 cursor-default">
      {name}
    </span>
  )
}

// ── SkillCard: one category card with AOS and red hover glow ──────────────
function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
        hover:scale-[1.02] hover:border-red-500/30
        hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]
        transition-all duration-300"
    >
      {/* Category title */}
      <h3 className="text-white uppercase font-black text-sm tracking-widest pb-4 mb-5 border-b border-white/10">
        {category.title}
      </h3>

      {/* Badge list */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </div>
  )
}

// ── Main exported section ─────────────────────────────────────────────────
export default function TechnicalSkills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })
  }, [])

  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred red accent circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14" data-aos="fade-up">
          {/* Pill label */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Technical Stack
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            My Skillset
          </h2>

          {/* Description */}
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            A curated set of languages, frameworks, databases, and tools I use to build full-stack applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

