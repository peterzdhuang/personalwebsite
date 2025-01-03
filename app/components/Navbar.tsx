'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <nav className="sticky top-0 bg-white z-10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              className={`relative font-futura-cyrillic text-lg ${
                activeButton === 'experience' ? 'text-[#32302f]' : 'text-[#615e5c] hover:text-[#32302f]'
              }`}
              asChild
              onClick={() => handleClick('experience')}
            >
              <Link href="#experience">
                Experience
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#32302f] transition-opacity ${
                  activeButton === 'experience' ? 'opacity-100' : 'opacity-0'
                }`} />
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              className={`relative font-futura-cyrillic text-lg ${
                activeButton === 'education' ? 'text-[#32302f]' : 'text-[#615e5c] hover:text-[#32302f]'
              }`}
              asChild
              onClick={() => handleClick('education')}
            >
              <Link href="#education">
                Education
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#32302f] transition-opacity ${
                  activeButton === 'education' ? 'opacity-100' : 'opacity-0'
                }`} />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`relative font-futura-cyrillic text-lg ${
                activeButton === 'projects' ? 'text-[#32302f]' : 'text-[#615e5c] hover:text-[#32302f]'
              }`}
              asChild
              onClick={() => handleClick('projects')}
            >
              <Link href="#projects">
                Projects
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#32302f] transition-opacity ${
                  activeButton === 'projects' ? 'opacity-100' : 'opacity-0'
                }`} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

