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
      imageUrl: '/images/sportswearProject.png',
      demoUrl: 'https://elevatesport7.netlify.app/',
      linkedinUrl: 'https://www.linkedin.com/posts/dianabenish_webdevelopment-frontenddeveloper-javascriptprojects-activity-7304793911925903361-Gjoj'
    },
    {
      id: 2,
      title: 'Amazon Clone E-Commerce Platform',
      description: 'Amazon-inspired shopping platform with full purchase flow and order tracking',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      imageUrl: '/images/amazonProject.png',
      demoUrl: 'https://a-rivershop.netlify.app/amazon',
      linkedinUrl: 'https://www.linkedin.com/posts/dianabenish_webdevelopment-frontenddeveloper-javascriptprojects-activity-7304793911925903361-Gjoj'
    },
    {
      id: 3,
      title: 'Volunteers in the Field Full Stack',
      description: 'Interactive platform connecting farmers with volunteers through dynamic mapping technology',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Postman', 'Material UI', 'Leaflet'],
      imageUrl: '/images/volunteerProject.png',
      demoUrl: 'https://mitnadvimbil.netlify.app/',
      linkedinUrl: 'https://www.linkedin.com/posts/dianabenish_webdevelopment-fullstack-frontend-activity-7292822500390899714-BWV-'
    },
    {
      id: 4,
      title: 'Enterior Design Landing Page',
      description: 'A responsive frontend project featuring clean, aesthetic design for an interior designers website. This modern landing page emphasizes elegant visual presentation and smooth user experience',
      tags: ['React', 'Typescript', 'CSS'],
      imageUrl: '/images/landingPageMockup.PNG',
      demoUrl: 'https://landingpagemc.netlify.app/',
      linkedinUrl: 'https://www.linkedin.com/in/dianabenish/'
    },
    {
      id: 5,
      title: 'Trip Vibe - Travel Booking Website',
      description: 'A single-page travel agency website showcasing destinations, packages, and travel services.',
      tags: ['HTML', 'CSS', 'Bootstrap'],
      imageUrl: '/images/tripvibe.png',
      demoUrl: 'https://tripvibes.netlify.app/',
      linkedinUrl: 'https://www.linkedin.com/in/dianabenish/'
    },
    {
      id: 6,
      title: 'Clearly - Skin Analysis & Personalized Skincare App',
      description: `A three-month collaborative project with a team of 10 developers, 
                    building an application that analyzes facial skin and provides 
                    personalized product recommendations and skincare routines.
                    Note: The codebase is private, but I'm happy to walk you through 
                    the project in detail or share a demo video.`,
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
      imageUrl: '/images/Clearly-mockap.png',
      demoUrl: '/videos/Clearly_demo.mp4',
      linkedinUrl: ''
    }
  ]

  // Container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Card animation - translateY + opacity (לא scale!)
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30 // מתחיל 30px למטה
    },
    visible: { 
      opacity: 1,
      y: 0, // חוזר למקום
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] // easing חלק
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
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
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world solutions I've built to address practical challenges
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary-500/10 transition-shadow duration-300 flex flex-col will-change-transform"
              style={{ 
                minHeight: '550px'
              }}
            >
              {/* Project Image */}
              <div 
                className="relative group overflow-hidden bg-gray-700"
                style={{ 
                  height: '220px',
                  minHeight: '220px',
                  flexShrink: 0
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  width="400"
                  height="220"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ 
                    aspectRatio: '400/220',
                    display: 'block'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-xl font-semibold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 h-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-auto">
                  
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  {project.linkedinUrl && (
                    
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn Post</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
