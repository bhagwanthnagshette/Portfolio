import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        // Teal "shutter" panel — slides up on exit
        <motion.div
          key="preloader"
          className="fixed inset-0 w-full h-screen bg-[#0F7663] z-[100000] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Text wrapper — fades + shrinks out before the shutter rises */}
          <motion.div
            className="relative text-5xl md:text-7xl font-black tracking-tighter select-none"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background "ghost" copy — dim teal so it peeks through */}
            <span className="text-teal-950/40">
              {personalInfo.brandName}
              <span>.</span>
            </span>

            {/* Foreground white copy clipped from bottom → top (water fill) */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 text-white overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
            >
              {personalInfo.brandName}
              <span className="text-[#22D3EE]">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

