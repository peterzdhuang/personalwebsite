'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('experience')

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience')
      const projectsSection = document.getElementById('projects')
      
      if (experienceSection && projectsSection) {
        const scrollPosition = window.scrollY + 100 // Offset for navbar height

        if (scrollPosition >= projectsSection.offsetTop) {
          setActiveSection('projects')
        } else {
          setActiveSection('experience')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex space-x-8">
            <Link 
              href="#experience" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                activeSection === 'experience' 
                  ? 'border-blue-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Experience
            </Link>
            <Link 
              href="#projects" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                activeSection === 'projects' 
                  ? 'border-blue-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

