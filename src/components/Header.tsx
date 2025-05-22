import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { useState } from 'react'

interface HeaderProps {
  activeSection: string
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'about' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
              onClick={closeMobileMenu}
            >
              Diana Benish
            </Link>
          </motion.div>

          {/* Main Navigation - Desktop */}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-white mb-1"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white mb-1"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-800"
            >
              <ul className="flex flex-col space-y-2 pt-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      className={`block px-4 py-3 rounded-md transition-colors cursor-pointer ${
                        activeSection === item.id
                          ? 'text-primary-500 bg-gray-800/50 font-medium'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                      }`}
                      onClick={closeMobileMenu}
                      activeClass="active"
                      spy={true}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden"
              onClick={closeMobileMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
