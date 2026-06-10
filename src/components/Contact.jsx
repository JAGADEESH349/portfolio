import { useState } from 'react'
import { motion } from 'framer-motion'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}
const fadeUp = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } } }

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const link = `mailto:mulajagadeesh119@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = link
    setStatus('Opening email client...')
    setTimeout(() => { setFormData({ name: '', email: '', subject: '', message: '' }); setStatus('') }, 2500)
  }

  const info = [
    { icon: '📧', label: 'Email', value: 'mulajagadeesh119@gmail.com', href: 'mailto:mulajagadeesh119@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Andhra Pradesh, India', href: null },
  ]

  const inputCls = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"

  return (
    <section
      id="contact"
      className="py-10 md:py-20 px-4 md:px-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)' }}
    >
      {/* Faint decorative blobs — not coloring the background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-10 md:mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Let's Talk</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mt-1">
              Get In{' '}
              <span style={{ background: 'linear-gradient(135deg,#1d4ed8,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Touch
              </span>
            </h2>
            <div className="mt-2 w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#2563eb,#60a5fa)' }} />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left info */}
            <motion.div variants={fadeUp} className="space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Let's Connect</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {info.map((d, i) => (
                <motion.div
                  key={i}
                  custom={i + 1}
                  variants={{
                    hidden: { opacity: 0, scale: 0.88, y: 15 },
                    visible: (idx) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: idx * 0.05, type: 'spring', stiffness: 350, damping: 22 } })
                  }}
                  whileHover={{ y: -4, scale: 1.01, boxShadow: '0 8px 24px rgba(37,99,235,0.06)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex items-center gap-4 p-3 md:p-4 bg-white rounded-2xl border border-slate-200 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 bg-white border border-slate-200 shadow-sm"
                  >
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-slate-700 text-sm font-medium hover:text-blue-600 transition-colors">{d.value}</a>
                    ) : (
                      <p className="text-slate-700 text-sm font-medium">{d.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Available badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.88, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.2, type: 'spring', stiffness: 350, damping: 22 } }
                }}
                className="flex items-center gap-3 p-3 md:p-4 bg-emerald-50 border border-emerald-200 rounded-2xl"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-emerald-700 text-sm font-semibold">Available for new opportunities</p>
              </motion.div>

              {/* CTA social nudge */}
              <p className="text-slate-400 text-xs leading-relaxed">
                Prefer a quick message? Reach out directly on{' '}
                <a href="https://www.linkedin.com/in/mula-jagadeesh-a26054336/" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">LinkedIn</a>
              </p>
            </motion.div>

            {/* Right form */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.1, type: 'spring', stiffness: 350, damping: 22 } }
              }}
              whileHover={{ y: -6, scale: 1.01, boxShadow: '0 20px 40px rgba(37,99,235,0.1)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="rounded-3xl p-4 md:p-7 shadow-xl relative overflow-hidden border"
              style={{ background: 'linear-gradient(145deg, #ffffff 0%, #f5f3ff 70%, #eff6ff 100%)', borderColor: 'rgba(99,102,241,0.18)' }}
            >
              {/* Subtle glow accents inside the light card */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)' }} />
              <h4 className="text-slate-800 font-bold text-base mb-5 relative">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className={inputCls} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className={inputCls} />
                </div>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className={inputCls} />
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Your message..." className={`${inputCls} resize-none`} />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)' }}
                >
                  Send Message →
                </motion.button>
                {status && <p className="text-indigo-600 text-xs text-center font-medium">{status}</p>}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact