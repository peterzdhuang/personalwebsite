"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.',
      link: 'https://github.com/yourusername/ecommerce-platform',
      image: ['/placeholder.svg?height=200&width=200', '/icons/github-logo.svg', '/icons/linkedin-logo.logo'],
    },
    {
      title: 'Weather App',
      description: 'Created a weather application using React and the OpenWeatherMap API.',
      link: 'https://github.com/yourusername/weather-app',
      image: ['/placeholder.svg?height=200&width=200', '/icons/github-logo.svg', '/icons/linkedin-logo.logo'],
    },
    // Add more projects as needed
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex overflow-hidden">
            <div className="flex-grow">
              <CardHeader>
                <CardTitle className="text-card-title">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="icon" className="rounded-full bg-black hover:bg-gray-800" asChild>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/arrow-right-solid.svg"
                      alt="Arrow Right"
                      width={16}
                      height={16}
                      className="block"
                    />
                  </a>
                </Button>
              </CardFooter>
            </div>
            <CardContent className="p-0 w-1/3">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {project.image.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-48 w-full">
                        <Image
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
