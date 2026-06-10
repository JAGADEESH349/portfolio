import { motion } from 'framer-motion'
import { projects } from '../constants/data'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20 md:py-24 px-6 md:px-8 relative">
      {/* Tech Background Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 text-4xl opacity-5 font-bold"
        >
          {'✦'}
        </motion.div>

        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, -35, 35, 0],
            rotate: [0, -360, 0]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/4 right-1/3 text-5xl opacity-5 font-bold"
        >
          {'⚙'}
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
              Featured <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.15,
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  })
                }}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-2xl overflow-hidden hover:border-indigo-400 transition-all shadow-xl hover:shadow-2xl hover:shadow-indigo-200/50"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center overflow-hidden border-b-2 border-accent/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.querySelector('.icon-fallback').style.display = 'flex'
                    }}
                  />
                  <div className="icon-fallback hidden w-full h-full items-center justify-center">
                    <project.icon className="text-accent text-6xl" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold mb-3 md:mb-4 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-900 mb-4 md:mb-6 text-sm md:text-base lg:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-5 md:mb-6">
                    <p className="text-sm md:text-base font-bold text-slate-900 mb-3">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-300/50 rounded-full text-purple-700 text-xs md:text-sm font-semibold hover:border-purple-500 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 md:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-accent to-cyan-400 border border-accent text-slate-900 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all font-semibold text-sm md:text-base shadow-md"
                    >
                      <FaGithub className="text-base md:text-lg" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
