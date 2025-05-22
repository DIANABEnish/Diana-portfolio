import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              className="text-xl font-bold cursor-pointer bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            >
              Diana Benish
            </Link>
          </motion.div>

          {/* Main Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li 
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'text-primary-500 font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  activeClass="active"
                  spy={true}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Resume Download Button - Desktop Only */}
       

          {/* Mobile Menu - To be added later */}
          <div className="md:hidden">
            {/* Hamburger Button */}
          </div>
        </nav>
      </div>
    </header>
  )
}