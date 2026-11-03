import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: null })

    // Check if EmailJS credentials are configured in environment
    const isConfigured =
      emailjsConfig.serviceId &&
      !emailjsConfig.serviceId.includes('YOUR_') &&
      emailjsConfig.templateId &&
      !emailjsConfig.templateId.includes('YOUR_')

    if (!isConfigured) {
      // Fallback: trigger user's native mail client
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      window.location.href = mailtoLink
      setStatus({
        submitting: false,
        success: true,
        error: null,
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      return
    }

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        emailjsConfig.publicKey
      )
      setStatus({ submitting: false, success: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to send message. Please reach out directly via email.',
      })
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a]" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Have a project in mind, an opportunity to discuss, or just want to say hi? Reach out anytime!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-neutral-800/80 hover:border-[#ff2a2a]/50 transition-all duration-300 flex items-center gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-[#ff2a2a] group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-neutral-500 font-semibold">
                    Email
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff2a2a] transition-colors break-all">
                    {personalInfo.emails.primary}
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-5 rounded-2xl bg-[#0a0a0a] border border-neutral-800/80 hover:border-[#ff2a2a]/50 transition-all duration-300 flex items-center gap-4 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-[#ff2a2a] group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-neutral-500 font-semibold">
                    Phone
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff2a2a] transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-neutral-800/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-[#ff2a2a]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-neutral-500 font-semibold">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs uppercase font-mono text-neutral-500 font-bold mb-3">
                Connect Online
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#ff2a2a] text-sm font-semibold text-neutral-200 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  GitHub
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#ff2a2a] text-sm font-semibold text-neutral-200 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0a0a0a] border border-neutral-800/80 rounded-2xl p-5 sm:p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration / Project"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] transition-colors text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] transition-colors text-sm resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status.success && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  &check; Thank you! Your message has been sent successfully.
                </div>
              )}
              {status.error && (
                <div className="p-3 rounded-lg bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-medium">
                  {status.error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#ff2a2a] hover:bg-[#e02020] text-white font-bold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff2a2a]/20"
              >
                {status.submitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

