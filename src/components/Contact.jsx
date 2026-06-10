import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactCards } from '../constants/data'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:mulajagadeesh119@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    setStatus('Opening your email client...')
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus('')
    }, 2000)
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-6 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8" />
          </motion.div>

          {/* Main Content - Left Right Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Side - Contact Information */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6">
                  Let's Connect
                </h3>
                <p className="text-base text-slate-600 mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              {/* Contact Info List */}
              <div className="space-y-4">
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="text-purple-600 text-xl">
                    📧
                  </div>
                  <a href="mailto:mulajagadeesh119@gmail.com" className="text-slate-600 hover:text-purple-600 transition-colors">
                    mulajagadeesh119@gmail.com
                  </a>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="text-purple-600 text-xl">
                    📱
                  </div>
                  <a href="tel:+919876543210" className="text-slate-600 hover:text-purple-600 transition-colors">
                    +91 98765 43210
                  </a>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-4">
                  <div className="text-purple-600 text-xl">
                    📍
                  </div>
                  <p className="text-slate-600">Andhra Pradesh, India</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-slate-900 placeholder-slate-400"
                    placeholder="Your Message"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>

                {status && (
                  <p className="text-center text-sm text-purple-600 font-medium">
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact