import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax background text
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.querySelector('#firstName')?.value?.trim() || ''
    const lastName = form.querySelector('#lastName')?.value?.trim() || ''
    const email = form.querySelector('#email')?.value?.trim() || ''
    const message = form.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
        templateId &&
        publicKey &&
        serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'
    )

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          `Portfolio Contact from ${firstName} ${lastName}`
        )}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      )
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax giant Contact background */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-10 pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Teal Card aligned to the right */}
      <div
        data-aos="fade-up"
        className="bg-[#0F7663] w-full md:w-[85%] lg:w-[75%] p-6 sm:p-8 md:p-16 ml-auto rounded-tl-3xl shadow-2xl relative z-10 text-white"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/20">
          <span className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-white/90">
            Reach Me
          </span>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-semibold text-white hover:bg-[#22D3EE] hover:text-black hover:border-[#22D3EE] transition-all duration-300"
            >
              DM on Instagram &rarr;
            </a>
          ) : (
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-semibold text-white hover:bg-[#22D3EE] hover:text-black hover:border-[#22D3EE] transition-all duration-300"
            >
              Email Directly &rarr;
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mt-12"
        >
          {/* Two-column inputs grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Underline-only inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message *"
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors resize-none min-h-[120px]"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="permission"
                required
                defaultChecked
                className="mt-1 w-4 h-4 rounded accent-[#22D3EE] cursor-pointer"
              />
              <label
                htmlFor="permission"
                className="text-xs text-white/90 leading-relaxed cursor-pointer select-none"
              >
                I agree that my submitted data is being collected and processed to respond to my inquiry.
              </label>
            </div>

            {/* Response Note & Urgent Contact Link */}
            <div className="text-xs text-white/80 space-y-1">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p>
                Need an urgent response? Email directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-[#22D3EE] transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/40 bg-white/20 text-white/70 font-bold text-base cursor-not-allowed"
                >
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-base shadow-lg"
                >
                  Sent Successfully ✓
                </button>
              )}

              {status === 'error' && (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-950 border border-white text-white font-bold text-base hover:bg-black transition-colors"
                >
                  Failed — Try Again
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base hover:bg-[#22D3EE] hover:text-black hover:border-[#22D3EE] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 shadow-xl"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
