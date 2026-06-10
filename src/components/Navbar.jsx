import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'experience',   label: 'Experience' },
  { id: 'contact',      label: 'Contact' },
]

const Navbar = () => {
  const [active, setActive]       = useState('home')
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      // Debounce with rAF — never blocks paint
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 40)
        const offset = y + 110
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const el = document.getElementById(NAV_ITEMS[i].id)
          if (el && el.offsetTop <= offset) { setActive(NAV_ITEMS[i].id); break }
        }
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  const txtActive = '#2563eb'
  const txtNormal = '#475569'
  const txtHover  = '#0f172a'

  return (
    <>
      {/* ─── Main bar ─── */}
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          /* Always glassy — just stronger when scrolled */
          background: scrolled ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.12)',
          backdropFilter:       'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(0,0,0,0.04)',
          boxShadow:    scrolled ? '0 1px 16px rgba(0,0,0,0.06)' : 'none',
          /* CSS transition — NOT Framer Motion, so no re-render cost */
          transition: 'background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          willChange: 'background',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <button
            onClick={() => go('home')}
            style={{ font: '700 20px/1 Syne, sans-serif', color: '#0f172a', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '-0.5px' }}
          >
            JM<span style={{ color: '#3b82f6' }}>.</span>
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 2 }} className="hidden md:flex">
            {NAV_ITEMS.map(({ id, label }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  style={{
                    position: 'relative',
                    padding: '6px 14px',
                    borderRadius: 8,
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 500,
                    fontFamily: 'DM Sans, sans-serif',
                    color: isActive ? txtActive : txtNormal,
                    /* Pure CSS transition — zero JS overhead */
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = txtHover}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? txtActive : txtNormal}
                >
                  {label}
                  {/* Underline: CSS opacity + scaleX — instant, no layout measurement */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '55%',
                      height: 2,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
                      opacity: isActive ? 1 : 0,
                      /* CSS transitions are composited on GPU — no Framer layout animation */
                      transition: 'transform 0.18s ease, opacity 0.18s ease',
                      transformOrigin: 'center',
                    }}
                  />
                </button>
              )
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden"
            style={{ color: '#334155', background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            aria-label="Toggle menu"
          >
            <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile click-outside backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 48, background: 'rgba(0,0,0,0.02)' }}
        />
      )}

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: 60, left: 12, right: 12, zIndex: 49,
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 16,
              padding: 8,
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '10px 16px', borderRadius: 10, border: 'none',
                  background: active === id ? 'rgba(37,99,235,0.07)' : 'transparent',
                  color: active === id ? '#1d4ed8' : '#475569',
                  fontSize: 13, fontWeight: active === id ? 600 : 500,
                  fontFamily: 'DM Sans, sans-serif',
                  cursor: 'pointer', marginBottom: 2,
                  transition: 'background 0.12s ease, color 0.12s ease',
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
