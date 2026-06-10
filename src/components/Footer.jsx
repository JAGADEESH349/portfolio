import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '../constants/data'

const links = [
  { name: 'Home',     href: '#home' },
  { name: 'About',   href: '#about' },
  { name: 'Skills',  href: '#skills' },
  { name: 'Projects',href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 30%, #eff6ff 60%, #bfdbfe 85%, #2563eb 100%)', borderTop: '1px solid rgba(99,102,241,0.15)' }}>
      {/* Very faint corner blobs for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 relative">
        <div className="grid md:grid-cols-3 gap-8 pb-8" style={{ borderBottom: '1px solid rgba(99,102,241,0.12)' }}>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="text-2xl font-display font-bold text-slate-900 mb-2">
              JM<span style={{ color: '#4f46e5' }}>.</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-xs">
              Full Stack Developer crafting scalable web apps with Java, React, and cloud tools.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-indigo-600 transition-colors border border-indigo-100 bg-white/70 hover:border-indigo-200 hover:bg-indigo-50 shadow-sm"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.08 }}
          >
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.name}>
                  <a
                     href={l.href}
                     className="text-slate-600 hover:text-indigo-600 text-sm transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.14 }}
          >
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-slate-600 text-sm flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:mulajagadeesh119@gmail.com" className="hover:text-indigo-600 transition-colors font-medium">
                  mulajagadeesh119@gmail.com
                </a>
              </li>
              <li className="text-slate-600 text-sm flex items-center gap-2 font-medium">
                <span>📍</span> Andhra Pradesh, India
              </li>
              <li className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-700 text-xs font-semibold">Open to opportunities</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
