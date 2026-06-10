import { motion } from 'framer-motion'
import { FaTrophy, FaStar, FaGithub, FaCertificate, FaMedal, FaAward } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Hackathon Winner',
      description: 'First place in Aantapur Police Hackathon',
      icon: FaTrophy,
      color: 'text-yellow-500'
    },
    {
      id: 2,
      title: 'MERN Certification',
      description: 'Completed MERN Stack Certification',
      icon: FaCertificate,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'Open Source',
      description: 'Solved 100+ LeetCode Problems',
      icon: FaGithub,
      color: 'text-purple-500'
    },
    {
      id: 4,
      title: 'Internship',
      description: 'Worked as Intern at IncuxAI',
      icon: FaMedal,
      color: 'text-green-500'
    }
  ]

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

  return (
    <section id="achievements" className="py-20 md:py-24 px-6 md:px-8 relative bg-white">
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
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                custom={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: (i) => ({
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  })
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/90 backdrop-blur-sm border-2 border-purple-200/60 rounded-2xl p-8 md:p-10 hover:border-purple-500 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-300/20 flex flex-col items-center text-center"
              >
                {/* Icon */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`text-5xl md:text-6xl mb-6 ${achievement.color}`}
                >
                  <achievement.icon />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 text-slate-900">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
