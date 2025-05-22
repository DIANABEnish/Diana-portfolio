import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Diana Benish
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            Hey, I'm Diana.
          </h2>
        </motion.div>

        <motion.p 
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        A Front-End Developer bringing digital ideas to life.

       I create clean, thoughtful websites that are visually engaging and feel intuitive across all devices. My approach balances visual design with practical functionality, focusing on what truly matters to users.

        </motion.p>

        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://github.com/DIANABEnish" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/dianabenish" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:Dianaal791@gmail.com" 
             className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="/Diana_Benish_CV.pdf"
            download="Diana_Benish_CV.pdf"
            type="application/pdf"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Download className="w-8 h-8" />
          </a>
        </motion.div>

        <motion.div 
          className="text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}