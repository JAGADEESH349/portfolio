import { motion } from 'framer-motion'
import { projects } from '../constants/data'
import { FaGithub } from 'react-icons/fa'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

// Gradient pairs for project headers when image is missing
const headerGradients = [
  'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
  'linear-gradient(135deg, #0c4a6e 0%, #0284c7 100%)',
  'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
  'linear-gradient(135deg, #14532d 0%, #059669 100%)',
  'linear-gradient(135deg, #1c1917 0%, #44403c 100%)',
]

const Projects = () => (
  <section id="projects" className="py-10 md:py-20 px-4 md:px-10 relative" style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)' }}>
    <div className="max-w-7xl mx-auto">
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
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">What I've Built</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-1">
            Featured{' '}
            <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Projects
            </span>
          </h2>
          <div className="mt-2 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 15 },
                visible: (i) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.05, type: 'spring', stiffness: 350, damping: 22 } })
              }}
              whileHover={{ y: -8, scale: 1.015, boxShadow: '0 16px 40px rgba(37,99,235,0.14)' }}
              transition={{ type: 'spring', stiffness: 450, damping: 24 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-shadow duration-200 hover:border-blue-300"
            >
              {/* Image section — NO blue covering, image shows fully */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={e => {
                    // Hide broken img and show gradient fallback
                    e.target.style.display = 'none'
                    const fb = e.target.parentElement.querySelector('.img-fallback')
                    if (fb) fb.style.display = 'flex'
                  }}
                />
                {/* Fallback div — only shown if image fails */}
                <div
                  className="img-fallback absolute inset-0 items-center justify-center flex-col gap-3"
                  style={{ display: 'none', background: headerGradients[idx % headerGradients.length] }}
                >
                  <project.icon className="text-white/80 text-5xl" />
                  <span className="text-white/60 text-xs font-medium">{project.title}</span>
                </div>

                {/* Slim bottom gradient just for text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6), transparent)' }}
                />

                {/* Index badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-xs font-bold text-blue-700 shadow">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-display font-bold text-slate-900 text-base md:text-lg mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg,#1d4ed8,#3b82f6)' }}
                >
                  <FaGithub className="text-base" />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default Projects
