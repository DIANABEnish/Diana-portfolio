import { motion } from 'framer-motion'

interface SkillCategory {
  name: string
  skills: {
    name: string
    level: number
  }[]
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      name: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 }
      ]
    },
    {
      name: 'Tools & Methodologies',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma', level: 60 },
        { name: 'Agile Development', level: 75 }
      ]
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100">
            Technical Expertise
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I've mastered through academic study and real-world projects
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-shadow duration-300 will-change-transform"
              style={{ minHeight: '420px' }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2,
                          delay: skillIndex * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
