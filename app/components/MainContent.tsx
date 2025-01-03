import Navbar from './Navbar'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'

export default function MainContent() {
  return (
    <main className="w-[100%] h-screen overflow-y-auto">
      <Navbar />
      <div className="p-6">
        
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  )
}

