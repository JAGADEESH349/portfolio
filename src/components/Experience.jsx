import { motion } from 'framer-motion'
import { experience } from '../constants/data'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="py-20 md:py-24 px-6 md:px-8 relative">
      {/* Tech Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-1/3 text-4xl opacity-5 font-bold text-slate-400"
        >
          {'< />'}
        </motion.div>

        <motion.div
          animate={{
            x: [0, -45, 45, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 27,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 right-1/4 text-5xl opacity-5 font-bold text-slate-400"
        >
          {'{ }'}
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 text-slate-900">
              Work <span className="bg-gradient-to-r from-accent via-accentMid to-accentEnd bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-accent via-accentMid to-accentEnd mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: i * 0.2,
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  })
                }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    animate={{ y: [0, -8, 0] }}
                    animationDuration="2s"
                    className="hidden md:flex w-20 h-20 rounded-full bg-gradient-to-br from-accent via-accentMid to-accentEnd/20 border-2 border-accent/60 items-center justify-center text-accent z-10 shadow-lg shadow-accent/20"
                  >
                    <exp.icon size={28} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, x: 15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex-1 bg-white/60 backdrop-blur-sm border-2 border-accent/20 rounded-xl p-8 md:p-10 hover:border-accent/40 transition-all shadow-lg hover:shadow-xl hover:shadow-accent/10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-2">
                          {exp.role}
                        </h3>
                        <p className="bg-gradient-to-r from-accent via-accentMid to-accentEnd bg-clip-text text-transparent font-semibold text-lg md:text-xl">
                          {exp.company}
                        </p>
                      </div>
                      <div className="px-4 py-2 bg-gradient-to-r from-accent/10 via-accentMid/10 to-accentEnd/10 border border-accent/30 rounded-full text-accent text-base md:text-lg font-semibold w-fit">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-slate-900 text-base md:text-lg flex items-start gap-3 font-medium"
                        >
                          <span className="bg-gradient-to-r from-accent via-accentMid to-accentEnd bg-clip-text text-transparent mt-1.5 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
