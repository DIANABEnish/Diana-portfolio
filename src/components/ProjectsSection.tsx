import { motion } from 'framer-motion'
import { ExternalLink, Linkedin } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  linkedinUrl: string
}

export default function ProjectsSection() {
  const projects: Project[] = [
    
       {
      id: 1,
      title: 'Sports Wear E-Commerce Platform',
      description: 'A sleek and responsive multipage sportswear website showcasing stylish and functional athletic apparel.',
      tags: ['TypeScript', 'HTML', 'SCSS', 'Responsive Design'],
      imageUrl: '/src/assets/images/sportswearProject.png',
      demoUrl: 'https://elevatesport7.netlify.app/',
      linkedinUrl: 'https://www.linkedin.com/posts/dianabenish_webdevelopment-frontenddeveloper-javascriptprojects-activity-7304793911925903361-Gjoj'
    },
    {
      id: 2,
      title: 'Amazon Clone E-Commerce Platform',
      description: 'Amazon-inspired shopping platform with full purchase flow and order tracking',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      imageUrl: '/src/assets/images/amazonProject.png',
      demoUrl: 'https://a-rivershop.netlify.app/amazon',
      linkedinUrl: 'https://www.linkedin.com/posts/dianabenish_webdevelopment-frontenddeveloper-javascriptprojects-activity-7304793911925903361-Gjoj'
    },
    {
      id: 3,
      title: 'Volunteers in the Field Full Stack',
      description: 'Interactive platform connecting farmers with volunteers through dynamic mapping technology',
      tags: ['React', 'Node.js', 'MongoDB', 'Material UI', 'Leaflet'],
      imageUrl: '/src/assets/images/volunteerProject.png',
      demoUrl: 'https://mitnadvimbil.netlify.app/',
      linkedinUrl: 'https://www.linkedin.com/posts/dianabenish_webdevelopment-fullstack-frontend-activity-7292822500390899714-BWV-'
    }
 
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world solutions I've built to address practical challenges
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative group h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-xl font-semibold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Linkedin Post</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}