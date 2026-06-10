import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '../constants/data'
import { FaGithub, FaLinkedin, FaBrain, FaReact, FaJava, FaJs } from 'react-icons/fa'

const FLOATING_ICONS = [
  { icon: FaGithub,     x: '8%',   y: '15%', size: 38, duration: 22, delay: 0, pathX: [0, 50, -25, 40, 0], pathY: [0, -60, 45, -35, 0], rot: [0, 180, 360] },
  { icon: FaLinkedin,   x: '88%',  y: '12%', size: 40, duration: 26, delay: 2, pathX: [0, -60, 35, -45, 0], pathY: [0, 70, -35, 45, 0], rot: [0, -180, -360] },
  { icon: FaBrain,      x: '12%',  y: '72%', size: 36, duration: 25, delay: 3, pathX: [0, 60, -35, 45, 0], pathY: [0, -70, 35, -45, 0], rot: [0, 120, 240] },
  { icon: FaReact,      x: '45%',  y: '8%',  size: 36, duration: 24, delay: 1.5, pathX: [0, -40, 50, -25, 0], pathY: [0, 60, -50, 35, 0], rot: [0, 360, 720] },
  { icon: FaJava,       x: '90%',  y: '82%', size: 38, duration: 28, delay: 4, pathX: [0, -50, 25, -35, 0], pathY: [0, -60, 35, -45, 0], rot: [0, -90, -180] },
  { icon: FaJs,         x: '5%',   y: '42%', size: 34, duration: 21, delay: 0.5, pathX: [0, 40, -25, 45, 0], pathY: [0, 50, -35, 25, 0], rot: [0, 180, 360] },
  { icon: FaReact,      x: '76%',  y: '55%', size: 34, duration: 20, delay: 3.5, pathX: [0, -30, 45, -20, 0], pathY: [0, 50, -40, 30, 0], rot: [0, -180, -360] },
  { icon: FaGithub,     x: '65%',  y: '28%', size: 32, duration: 23, delay: 1.0, pathX: [0, 40, -30, 20, 0], pathY: [0, -50, 40, -30, 0], rot: [0, 180, 360] },
  { icon: FaJs,         x: '55%',  y: '88%', size: 32, duration: 27, delay: 2.2, pathX: [0, -35, 40, -25, 0], pathY: [0, 45, -35, 30, 0], rot: [0, 90, 180] },
]

const Hero = () => {
  const [typingText, setTypingText] = useState('')
  const [textIndex, setTextIndex]   = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = personalInfo.typingTexts[textIndex]
    const t = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentText.slice(0, typingText.length + 1))
        if (typingText === currentText) setTimeout(() => setIsDeleting(true), 2000)
      } else {
        setTypingText(currentText.slice(0, typingText.length - 1))
        if (typingText === '') { setIsDeleting(false); setTextIndex((textIndex + 1) % personalInfo.typingTexts.length) }
      }
    }, isDeleting ? 50 : 100)
    return () => clearTimeout(t)
  }, [typingText, isDeleting, textIndex])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const resume = () => { const a = document.createElement('a'); a.href = personalInfo.resume; a.download = 'Jagadeeswar_Mula_Resume.pdf'; a.click() }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        /* Diagonal white to vibrant royal blue gradient */
        background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)',
      }}
    >
      {/* Decorative blobs — soft, colourful, not heavy */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)', filter: 'blur(10px)' }}
      />
      <motion.div
        animate={{ x: [0, -25, 25, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute -bottom-40 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.16) 0%, transparent 65%)', filter: 'blur(10px)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,121,249,0.12) 0%, transparent 65%)', filter: 'blur(8px)' }}
      />

      {/* Dot pattern — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100,116,139,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Floating Tech Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        {FLOATING_ICONS.map((item, idx) => {
          const IconComponent = item.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                y: item.pathY,
                x: item.pathX,
                rotate: item.rot,
                scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
                opacity: [0.35, 0.65, 0.35]
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.delay
              }}
              style={{
                position: 'absolute',
                left: item.x,
                top: item.y,
                fontSize: item.size,
                color: idx % 4 === 0 
                  ? 'rgba(79, 70, 229, 0.42)' 
                  : idx % 4 === 1 
                  ? 'rgba(37, 99, 235, 0.42)' 
                  : idx % 4 === 2 
                  ? 'rgba(124, 58, 237, 0.42)' 
                  : 'rgba(2, 132, 199, 0.42)',
              }}
            >
              <IconComponent />
            </motion.div>
          )
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Availability badge */}
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border"
              style={{
                background: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(99,102,241,0.25)',
                color: '#4338ca',
                backdropFilter: 'blur(8px)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </motion.span>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.08] text-slate-900"
            >
              {personalInfo.name}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.45, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="h-1 mt-3 rounded-full origin-left"
                style={{ background: 'linear-gradient(90deg, #6366f1, #38bdf8, transparent)' }}
              />
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.3 }}
              className="flex items-center gap-1.5 min-h-[36px]"
            >
              <span
                className="text-xl md:text-2xl font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #4f46e5, #0ea5e9)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
              >
                {typingText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.65, repeat: Infinity }}
                className="text-2xl font-light text-indigo-400"
              >
                |
              </motion.span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.3 }}
              className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
            >
              {personalInfo.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.3 }}
              className="text-sm text-slate-500 italic border-l-2 pl-4 max-w-lg"
              style={{ borderColor: 'rgba(99,102,241,0.5)' }}
            >
              {personalInfo.credibility}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <motion.button
                onClick={() => go('projects')}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className="px-7 py-3 rounded-xl font-semibold text-sm text-white"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5, #2563eb)',
                  boxShadow: '0 8px 24px rgba(79,70,229,0.3)',
                }}
              >
                View My Work →
              </motion.button>
              <motion.button
                onClick={resume}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className="px-7 py-3 rounded-xl font-semibold text-sm text-slate-700 border bg-white/70 hover:bg-white transition-all"
                style={{ borderColor: 'rgba(99,102,241,0.3)', backdropFilter: 'blur(8px)' }}
              >
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex gap-3 pt-1"
            >
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.15 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18, delay: 0.45 + i * 0.05 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors border bg-white/70"
                  style={{ borderColor: 'rgba(99,102,241,0.2)', backdropFilter: 'blur(8px)' }}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: profile image ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Halo glow */}
              <div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(16px)' }}
              />

              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[116%] h-[116%] rounded-full border animate-spin-slow absolute" style={{ borderColor: 'rgba(99,102,241,0.2)' }} />
                <div className="w-[132%] h-[132%] rounded-full border animate-spin-reverse absolute" style={{ borderColor: 'rgba(14,165,233,0.12)' }} />
              </div>

              {/* Image with gradient border */}
              <div
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full p-[3px]"
                style={{ background: 'linear-gradient(135deg, #6366f1, #38bdf8, #a78bfa)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={e => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234f46e5'/%3E%3Cstop offset='100%25' stop-color='%2338bdf8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='300' height='300'/%3E%3Ctext x='50%25' y='55%25' font-size='90' fill='white' text-anchor='middle' font-weight='700' font-family='sans-serif'%3EJM%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #38bdf8)', boxShadow: '0 4px 16px rgba(79,70,229,0.35)' }}
              >
                Full Stack Dev ✦
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <span className="text-[10px] text-slate-400 tracking-widest uppercase block text-center">Scroll</span>
          <svg className="w-4 h-4 text-slate-400 mt-0.5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
