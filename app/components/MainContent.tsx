import Navbar from './Navbar'
import Experience from './Experience'
import Projects from './Projects'

export default function MainContent() {
  return (
    <main className="w-[95%] h-screen overflow-y-auto">
      <Navbar />
      <div className="p-6">
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  )
}

