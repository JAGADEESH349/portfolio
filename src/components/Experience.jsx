import { motion } from 'framer-motion'
import { experience } from '../constants/data'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const Experience = () => (
  <section
    id="experience"
    className="py-10 md:py-20 px-4 md:px-10 relative overflow-hidden"
    style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)' }}
  >
    {/* Right-side decorative gradient blob */}
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-6 pointer-events-none"
      style={{ background: 'radial-gradient(circle,#3b82f6,transparent)', filter: 'blur(70px)' }}
    />

    <div className="max-w-4xl mx-auto relative">
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
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">Career</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-1">
            Work{' '}
            <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Experience
            </span>
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-14">
          {/* Vertical line */}
          <div
            className="absolute left-2.5 md:left-6 top-2 bottom-2 w-0.5 rounded-full"
            style={{ background: 'linear-gradient(to bottom, #2563eb, #bfdbfe)' }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 15 },
                visible: (idx) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: idx * 0.06, type: 'spring', stiffness: 350, damping: 22 } })
              }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute -left-7 md:-left-11 top-4 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #2563eb, #60a5fa)' }}
              >
                <exp.icon size={10} className="text-white" />
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 450, damping: 24 }}
                className="rounded-2xl border border-slate-100 p-4 md:p-6 hover:border-blue-200 hover:shadow-lg transition-shadow duration-200"
                style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)' }}
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg md:text-xl">{exp.role}</h3>
                    <p className="font-semibold text-sm" style={{ color: '#2563eb' }}>{exp.company}</p>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto"
                    style={{ background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {exp.description.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3b82f6' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default Experience
