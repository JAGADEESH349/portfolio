import { motion } from 'framer-motion'
import { skills } from '../constants/data'

const Skills = () => {
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

  // Group skills by category
  const groupedSkills = {}
  skills.forEach(category => {
    groupedSkills[category.category] = category.items
  })

  return (
    <section id="skills" className="py-20 md:py-24 px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Skills
            </h2>
          </motion.div>

          {/* Skills Categories Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          >
            {Object.entries(groupedSkills).map(([categoryName, categorySkills], categoryIndex) => (
              <motion.div
                key={categoryName}
                custom={categoryIndex}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.2,
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  })
                }}
                className="bg-white border border-slate-200 rounded-2xl p-10 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Category Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
                  {categoryName}
                </h3>

                {/* Skills Grid - 2x2 layout */}
                <div className="grid grid-cols-2 gap-8">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${categoryName}-${skillIndex}`}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-slate-50 transition-all duration-300"
                    >
                      {/* Icon with Revolve Animation */}
                      <motion.div 
                        className="text-slate-700 text-5xl md:text-6xl"
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                      >
                        <skill.icon />
                      </motion.div>
                      
                      {/* Skill Name */}
                      <p className="font-semibold text-slate-900 text-base md:text-lg">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills