import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#0F7663]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            A selection of software applications and games built with Python, clean logic, and modern design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                project.isFlagship
                  ? 'bg-gradient-to-b from-neutral-900/90 to-[#0a0a0a] border-2 border-[#22D3EE]/50 shadow-2xl shadow-[#22D3EE]/10'
                  : 'bg-[#0a0a0a] border border-neutral-800/80 hover:border-[#22D3EE]/40 shadow-xl'
              }`}
            >
              <div>
                {/* Top Bar: Number & Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-mono text-neutral-500 font-bold uppercase tracking-wider">
                    Project {project.number}
                  </span>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F7663]/30 text-[#22D3EE] border border-[#22D3EE]/40 flex items-center gap-1.5 shadow-sm">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-[#22D3EE] transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-semibold bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:border-neutral-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Footer */}
              <div className="pt-6 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
                {/* GitHub Code Link */}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-white hover:bg-[#22D3EE] hover:text-black hover:border-[#22D3EE] transition-all duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  Source Code
                </a>

                {/* Demo Status */}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22D3EE] hover:underline"
                  >
                    Live Demo &rarr;
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 animate-pulse" />
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

