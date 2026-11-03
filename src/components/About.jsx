import { motion } from 'framer-motion'
import { aboutContent, academy, personalInfo } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white text-neutral-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
            {aboutContent.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Get to know my journey, training, and technical expertise.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative Accent Background Box */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff2a2a] to-black rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />

              <div className="relative w-72 sm:w-80 h-72 sm:h-80 rounded-2xl overflow-hidden border-4 border-black bg-neutral-950 shadow-2xl flex items-center justify-center">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Training Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/90 backdrop-blur-md rounded-xl p-3 border border-neutral-800 text-white flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#ff2a2a] tracking-wider">
                      Trained At
                    </p>
                    <a
                      href={academy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold hover:text-[#ff2a2a] transition-colors underline"
                    >
                      {academy.name}
                    </a>
                  </div>
                  <span className="text-xs bg-[#ff2a2a]/20 text-[#ff2a2a] font-bold px-2 py-0.5 rounded-full border border-[#ff2a2a]/30">
                    Full Stack
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Rich HTML Bio */}
            <div
              className="text-base sm:text-lg text-neutral-700 leading-relaxed space-y-4 font-normal"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* Quick Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Specialization
                </span>
                <p className="text-base font-bold text-neutral-900 mt-1">
                  Python, Django & Modern Web
                </p>
              </div>
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Location
                </span>
                <p className="text-base font-bold text-neutral-900 mt-1">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Core Tech Stack Pills */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 text-white shadow-sm hover:bg-[#ff2a2a] transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
