import { motion } from 'framer-motion'
import {
  internshipsList,
  education,
  softSkillsList,
  certificates,
  academy,
} from '../data/portfolioData'

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0F7663]" />
            Background &amp; Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
            Experience &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Practical industry placement training, academic foundation, and professional attributes.
          </p>
        </div>

        {/* Two-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Experience Timeline & Certifications */}
          <div className="lg:col-span-7 space-y-10">
            {/* Experience / Internship */}
            <div>
              <h3 className="text-xl font-extrabold text-black mb-6 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#0F7663]" />
                Industry Training &amp; Experience
              </h3>

              <div className="space-y-6">
                {internshipsList.map((exp, idx) => (
                  <motion.div
                    key={exp.organization + idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm relative group hover:border-[#0F7663] transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-black">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-200 text-neutral-800">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-[#0F7663] mb-4">
                      <a
                        href={academy.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.organization}
                      </a>{' '}
                      &bull; Placement Training Program
                    </p>

                    <ul className="space-y-2 mb-5">
                      {exp.skills.map((skill, sIdx) => (
                        <li
                          key={sIdx}
                          className="text-sm text-neutral-700 flex items-start gap-2"
                        >
                          <span className="text-[#0F7663] font-bold">&rsaquo;</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-neutral-200/80 text-neutral-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div>
              <h3 className="text-xl font-extrabold text-black mb-4 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-black" />
                Featured Certifications
              </h3>

              <div className="space-y-3">
                {certificates.featured.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-black">{cert.name}</p>
                        <p className="text-xs text-neutral-500">Issuer: {cert.issuer}</p>
                      </div>
                    </div>
                    <a
                      href={certificates.viewAllUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#0F7663] hover:text-[#22D3EE] hover:underline transition-colors"
                    >
                      Verify &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Soft Skills */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education Card */}
            <div>
              <h3 className="text-xl font-extrabold text-black mb-6 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#0F7663]" />
                Education
              </h3>

              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-[#0F7663] uppercase tracking-wider">
                  Undergraduate Degree
                </span>
                <h4 className="text-xl font-bold text-black">
                  {education.degree}
                </h4>
                <p className="text-sm text-neutral-600 font-medium">
                  {education.institution}
                </p>
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Duration</span>
                  <span className="font-bold text-black">{education.cgpa}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Graduation Year</span>
                  <span className="font-bold text-black">{education.graduation}</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-extrabold text-black mb-6 flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-black" />
                Core Soft Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkillsList.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-black transition-colors"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <h4 className="text-sm font-bold text-black mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

