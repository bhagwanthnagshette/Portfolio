import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef.current || !cardRef.current) return
    const containerHeight = containerRef.current.offsetHeight
    const cardTop = cardRef.current.offsetTop
    setIsActive(latest * containerHeight >= cardTop + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-colors duration-700 md:absolute ${className} ${
        isActive
          ? 'bg-[#0F7663] shadow-[0_0_35px_rgba(34,211,238,0.35)]'
          : 'bg-white shadow-xl'
      }`}
    >
      {/* Punched hole circle at the top */}
      <div className="w-5 h-5 mx-auto rounded-full bg-neutral-200 border-2 border-neutral-300 shadow-inner" />

      {/* Inner rounded panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-[#0A4D40] text-white' : 'bg-[#f4f4f4] text-neutral-600'
        }`}
      >
        <div>
          <span
            className={`text-3xl font-serif italic mb-2 block ${
              isActive ? 'text-[#22D3EE]' : 'text-neutral-400'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-3 tracking-tight ${
              isActive ? 'text-white' : 'text-neutral-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isActive ? 'text-white/90' : 'text-neutral-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopCardConfigs = [
    {
      className: 'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }}
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold text-neutral-700 tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0F7663]" />
            {skillsContent.badge}
          </span>

          {/* Heading with hand-drawn arrow */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1]">
              {skillsContent.heading}
            </h2>
            <svg
              className="absolute -bottom-6 -right-6 w-8 h-8 text-black"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          {/* Description */}
          <p className="mt-6 text-neutral-600 text-sm sm:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop SVG Path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopD}
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. faint guide path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />

          {/* 3. real dashed path masked by scroll */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile SVG Path */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth={20}
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. faint guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* 3. real dashed path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => {
            const config = desktopCardConfigs[idx] || {
              className: '',
              aosType: 'fade-up',
              aosDelay: 100 * (idx + 1),
            }
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={config.className}
                aosDelay={config.aosDelay}
                aosType={config.aosType}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Hand-written end note */}
        <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 z-10">
          {skillsContent.endText}
        </div>
      </div>
    </section>
  )
}

