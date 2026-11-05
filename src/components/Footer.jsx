import { personalInfo, footerContent, academy, socialLinks } from '../data/portfolioData'

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand & Taglines */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-white hover:text-neutral-300 transition-colors inline-block"
            >
              {personalInfo.brandName}
              <span className="text-[#22D3EE]">.</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm">
              {footerContent.taglines.join(' • ')}
            </p>
            <div className="text-xs text-neutral-500 font-mono">
              <span>{footerContent.credential}</span> &bull;{' '}
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-center md:text-left">
              {footerNav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-[#22D3EE] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Profiles
            </p>
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#22D3EE] hover:underline font-semibold"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Mandatory TAP Academy Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{footerContent.copyright}</p>

          {/* Mandatory Credit Convention */}
          <p className="flex items-center gap-1.5">
            <span>Trained at</span>
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-[#22D3EE] font-semibold transition-colors underline"
            >
              {academy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

