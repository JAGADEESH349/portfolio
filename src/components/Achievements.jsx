import { motion } from 'framer-motion'
import { FaTrophy, FaGithub, FaCertificate, FaMedal } from 'react-icons/fa'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const achievements = [
  {
    id: 1, title: 'Hackathon Winner',
    description: 'First place in Aantapur Police Hackathon',
    icon: FaTrophy,
    iconColor: '#d97706', bg: '#fffbeb', border: '#fde68a',
    badge: '🏆 1st Place'
  },
  {
    id: 2, title: 'MERN Certification',
    description: 'Completed MERN Stack Certification',
    icon: FaCertificate,
    iconColor: '#2563eb', bg: '#eff6ff', border: '#bfdbfe',
    badge: '📜 Certified'
  },
  {
    id: 3, title: 'Open Source',
    description: 'Solved 100+ LeetCode Problems',
    icon: FaGithub,
    iconColor: '#1e293b', bg: '#f8fafc', border: '#e2e8f0',
    badge: '💻 100+ Solved'
  },
  {
    id: 4, title: 'Internship',
    description: 'Worked as Intern at IncuxAI',
    icon: FaMedal,
    iconColor: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff',
    badge: '🎖️ Real-World'
  }
]

const Achievements = () => (
  <section
    id="achievements"
    className="py-10 md:py-20 px-4 md:px-10 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)' }}
  >
    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle,#3b82f6,transparent)', filter: 'blur(60px)' }} />
    <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-8 pointer-events-none" style={{ background: 'radial-gradient(circle,#818cf8,transparent)', filter: 'blur(60px)' }} />

    <div className="max-w-6xl mx-auto relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        {/* Header */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } }}
          className="mb-10 md:mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">Milestones</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-1">
            <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Achievements
            </span>
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              custom={i}
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 15 },
                visible: (idx) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: idx * 0.05, type: 'spring', stiffness: 350, damping: 22 } })
              }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 16px 36px rgba(37,99,235,0.14)' }}
              transition={{ type: 'spring', stiffness: 450, damping: 24 }}
              className="rounded-2xl p-4 md:p-6 border flex flex-col items-center text-center"
              style={{ background: a.bg, borderColor: a.border }}
            >
              {/* Icon */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                style={{ background: 'white', border: `1.5px solid ${a.border}` }}
              >
                <a.icon className="text-2xl" style={{ color: a.iconColor }} />
              </motion.div>

              {/* Badge pill */}
              <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-3" style={{ background: 'white', color: a.iconColor, border: `1px solid ${a.border}` }}>
                {a.badge}
              </span>

              <h3 className="font-display font-bold text-slate-800 text-base mb-1.5">{a.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default Achievements
