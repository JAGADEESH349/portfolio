import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, socialLinks } from '../constants/data'

const Hero = () => {
  const [typingText, setTypingText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = personalInfo.typingTexts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentText.substring(0, typingText.length + 1))
        if (typingText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypingText(currentText.substring(0, typingText.length - 1))
        if (typingText === '') {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % personalInfo.typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typingText, isDeleting, textIndex])

  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = personalInfo.resume
    link.download = 'Jagadeeswar_Mula_Resume.pdf'
    link.click()
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8 md:pt-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Premium Layered Background - Light Theme */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Indigo Glow - Left */}
        <motion.div
          animate={{ 
            x: [0, 15, -15, 0],
            y: [0, -20, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-transparent rounded-full blur-3xl opacity-40"
        />
        
        {/* Soft Purple Glow - Center */}
        <motion.div
          animate={{ 
            x: [0, -15, 15, 0],
            y: [0, 20, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-transparent rounded-full blur-3xl opacity-35"
        />
        
        {/* Soft Pink Accent - Right */}
        <motion.div
          animate={{ 
            x: [0, 20, -20, 0],
            y: [0, 15, -15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-pink-300/10 to-transparent rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-sm md:text-base font-bold text-slate-800 uppercase tracking-widest">
                Welcome to my portfolio
              </p>
            </motion.div>

            {/* Main Heading - Name with Soft Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight text-slate-900">
                {personalInfo.name}
              </h1>
              {/* Decorative gradient line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-4 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              />
            </motion.div>

            {/* Typing Text - Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="min-h-12"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {typingText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  |
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-slate-900 leading-relaxed max-w-xl font-semibold">
                {personalInfo.tagline}
              </p>
              <p className="text-sm md:text-base text-slate-800 font-medium italic border-l-2 border-indigo-500 pl-4 max-w-xl">
                {personalInfo.credibility}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Primary Button */}
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-300/50 transition-all duration-300"
              >
                View My Work
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                onClick={handleResumeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 md:px-10 md:py-4 border-2 border-indigo-500 text-slate-900 font-semibold rounded-lg bg-white hover:bg-indigo-50 transition-all duration-300"
              >
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-indigo-300 bg-white hover:bg-indigo-50 flex items-center justify-center text-indigo-600 hover:text-pink-600 hover:border-pink-500 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <social.icon className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md"
            >
              {/* Large Soft Outer Glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-pink-200/20 blur-2xl pointer-events-none" />

              {/* Premium Gradient Border */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-300/40">
                {/* Inner circle for image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366F1;stop-opacity:1" /%3E%3Cstop offset="50%25" style="stop-color:%238B5CF6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23EC4899;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="120" fill="%23F1F5F9" text-anchor="middle" dy=".3em" font-weight="bold"%3EJM%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full border-2 border-indigo-300 pointer-events-none opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, linear: true }}
                className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full border-2 border-pink-300 pointer-events-none opacity-40"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-slate-800 font-medium">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
