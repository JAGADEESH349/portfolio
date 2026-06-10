import { motion } from 'framer-motion'
import { stats, aboutText } from '../constants/data'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 md:py-24 px-6 md:px-8 relative bg-white">
      {/* Tech Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-4xl opacity-5"
        >
          {'< />'}
        </motion.div>

        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, -35, 35, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 text-5xl opacity-5"
        >
          {'{ }'}
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 text-slate-900">
              About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            {/* Left - Stats */}
            <motion.div variants={itemVariants} className="space-y-5 md:space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: i * 0.15,
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    })
                  }}
                  whileHover={{ scale: 1.05, x: 15 }}
                  className="bg-white/90 border-2 border-indigo-200 rounded-xl p-6 md:p-8 hover:border-indigo-400 transition-all shadow-lg hover:shadow-xl hover:shadow-indigo-200/50"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl md:text-5xl lg:text-6xl font-display font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-lg md:text-xl lg:text-2xl text-slate-900 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right - Description */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/90 border-2 border-blue-200/60 rounded-2xl p-8 md:p-10 shadow-xl hover:border-accent transition-all hover:shadow-cyan-300/20">
                <p className="text-base md:text-lg lg:text-xl text-slate-800 leading-relaxed font-medium">
                  {aboutText}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
