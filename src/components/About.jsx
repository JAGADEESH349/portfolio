import { motion } from 'framer-motion'
import { stats, aboutText } from '../constants/data'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
}

// Stat card accent colors (non-blue palette for variety)
const statAccents = [
  { num: '#7c3aed', bar: 'linear-gradient(90deg,#7c3aed,#a78bfa)', bg: '#faf5ff', border: '#e9d5ff', icon: '🚀' },
  { num: '#0891b2', bar: 'linear-gradient(90deg,#0891b2,#67e8f9)', bg: '#ecfeff', border: '#a5f3fc', icon: '⚡' },
  { num: '#d97706', bar: 'linear-gradient(90deg,#d97706,#fcd34d)', bg: '#fffbeb', border: '#fde68a', icon: '🏆' },
]

const About = () => (
  <section id="about" className="py-10 md:py-20 px-4 md:px-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)' }}>
    {/* Very subtle decorative blobs — not blue background, just faint corner accents */}
    <div
      className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
    />
    <div
      className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.05) 0%, transparent 70%)' }}
    />

    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-10 md:mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">Who I Am</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-1">
            About{' '}
            <span style={{
              background: 'linear-gradient(135deg,#1d4ed8,#7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              Me
            </span>
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#1d4ed8,#7c3aed)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-start">

          {/* ── Left: Stats (2 cols) ── */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-4">
            {stats.map((s, i) => {
              const a = statAccents[i] || statAccents[0]
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 15 },
                    visible: (idx) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: idx * 0.05, type: 'spring', stiffness: 350, damping: 22 } })
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="relative overflow-hidden rounded-2xl p-5 border"
                  style={{ background: a.bg, borderColor: a.border }}
                >
                  {/* Big decorative number in background */}
                  <span
                    className="absolute -right-3 -top-3 text-7xl font-display font-black opacity-[0.06] select-none pointer-events-none"
                    style={{ color: a.num }}
                  >
                    {s.number}
                  </span>

                  <div className="relative flex items-center gap-4">
                    {/* Accent icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm"
                      style={{ background: 'white', border: `1.5px solid ${a.border}` }}
                    >
                      {a.icon}
                    </div>

                    <div>
                      {/* The attractive number */}
                      <div
                        className="text-2xl md:text-3xl font-display font-black leading-none"
                        style={{ color: a.num }}
                      >
                        {s.number}
                      </div>
                      <div className="text-slate-600 text-xs md:text-sm font-semibold mt-0.5 leading-snug">
                        {s.label}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="mt-3 h-0.5 rounded-full" style={{ background: a.bar, opacity: 0.5 }} />
                </motion.div>
              )
            })}

            {/* Tech chips */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.18, type: 'spring', stiffness: 350, damping: 22 } }
              }}
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-4 rounded-2xl border border-slate-100 bg-slate-50 cursor-default"
            >
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Java', 'React', 'Node.js', 'AWS', 'MongoDB', 'MySQL'].map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: About text (3 cols) ── */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.88, y: 15 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.12, type: 'spring', stiffness: 350, damping: 22 } }
            }}
            whileHover={{ y: -6, scale: 1.01, boxShadow: '0 16px 40px rgba(99,102,241,0.12)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden p-5 md:p-8 border cursor-default"
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #eff6ff 50%, #dbeafe 100%)',
              borderColor: 'rgba(99,102,241,0.15)',
              boxShadow: '0 8px 40px rgba(99,102,241,0.08), 0 2px 12px rgba(0,0,0,0.04)',
            }}
          >
            {/* Soft blobs inside card */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }}
            />
            <div
              className="absolute bottom-0 left-0 w-36 h-36 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
            />

            <div className="relative">
              {/* Decorative quote glyph */}
              <span
                className="block text-6xl font-serif leading-none mb-2 select-none"
                style={{ color: 'rgba(99,102,241,0.2)' }}
              >
                "
              </span>

              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
                {aboutText}
              </p>

              {/* Author row */}
              <div className="mt-6 pt-4 flex items-center gap-3 border-t border-slate-100">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #38bdf8)' }}
                >
                  JM
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">Jagadeeswar Mula</p>
                  <p className="text-slate-400 text-xs">Full Stack Developer · India</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-600 text-xs font-medium">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default About
