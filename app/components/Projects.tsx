import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.',
      link: 'https://github.com/yourusername/ecommerce-platform',
      image: '/placeholder.svg?height=200&width=400',
    },
    {
      title: 'Weather App',
      description: 'Created a weather application using React and the OpenWeatherMap API.',
      link: 'https://github.com/yourusername/weather-app',
      image: '/placeholder.svg?height=200&width=400',
    },
    // Add more projects as needed
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

