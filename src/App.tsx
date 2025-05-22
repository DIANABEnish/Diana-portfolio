import { useState, useEffect } from 'react'
import HomeSection from './components/HomeSection'
import Header from './components/Header'
import ContactSection from './components/ContactSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
/**

import EducationSection from './components/EducationSection'
import CertificationsSection from './components/CertificationsSection'


 */


function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header activeSection={activeSection} />
      
      <main className="container mx-auto px-4 py-8">
        <HomeSection />
        <AboutMe />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>
      
  
    </div>
  )
}

export default App