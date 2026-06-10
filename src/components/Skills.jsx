import { motion } from 'framer-motion'
import { skills } from '../constants/data'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } }

// Icon accent colors so they're visible on white cards
const categoryAccents = {
  Core:     { icon: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  Frontend: { icon: '#0284c7', bg: '#f0f9ff', border: '#bae6fd' },
  Backend:  { icon: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
  Database: { icon: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff' },
  Cloud:    { icon: '#ea580c', bg: '#fff7ed', border: '#fed7aa' },
  Tools:    { icon: '#0f172a', bg: '#f8fafc', border: '#e2e8f0' },
}

const Skills = () => {
  const groupedSkills = {}
  skills.forEach(c => { groupedSkills[c.category] = c.items })

  return (
    <section
      id="skills"
      className="py-10 md:py-20 px-4 md:px-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-10 md:mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Expertise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-1">
              My{' '}
              <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Skills
              </span>
            </h2>
            <div className="mt-2 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {Object.entries(groupedSkills).map(([cat, items], ci) => {
              const accent = categoryAccents[cat] || categoryAccents.Tools
              return (
                <motion.div
                  key={cat}
                  custom={ci}
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 15 },
                    visible: (i) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.05, type: 'spring', stiffness: 350, damping: 22 } })
                  }}
                  whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(37,99,235,0.12)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="bg-white rounded-2xl p-4 md:p-5 border"
                  style={{ borderColor: accent.border }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: `1px solid ${accent.border}` }}>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: accent.icon }} />
                    <h3 className="font-display font-bold text-slate-800 text-base">{cat}</h3>
                  </div>

                  {/* Skill items */}
                  <div className={`grid gap-3 ${items.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {items.map((skill, si) => (
                      <motion.div
                        key={si}
                        whileHover={{ scale: 1.04 }}
                        className="flex flex-col items-center gap-2 p-2 md:p-3 rounded-xl transition-all cursor-default"
                        style={{ background: accent.bg }}
                      >
                        {/* Icon — colored, NOT washed out */}
                        <div
                          className="text-3xl"
                          style={{ color: accent.icon }}
                        >
                          <skill.icon />
                        </div>
                        <p className="text-xs font-semibold text-slate-700 text-center leading-tight">{skill.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills