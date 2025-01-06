"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Projects() {
  const projects = [
    {
      title: "Cross Platform Budget Tracker",
      description: "A personal cross-platform budget tracker for logging daily spendings and visualizing expenditure trends",
      link: "https://github.com/yourusername/ecommerce-platform",
      image: ['/images/budget2.png'],
      tech: ["Ruby on Rails", "Kotlin", "AWS", "Postgres", "Jetpack Compose"]
    },
    {
      title: "NoteHub",
      description: "NoteHub is a revolutionary platform connecting students across 250+ universities to effortlessly upload, access, and share study notes, fostering collaboration and academic success",
      link: "https://github.com/yourusername/weather-app",
      image: ['/images/budget2.png','/images/budget3.png'],
      tech: ["React", "NextJS", "Azure", "NodeJS"]
    },
    {
      title: "Triangle",
      description: "Triangle transforms the dining experiences by allowing restaurant owners create and manage digital menus while enabling customers to scan QR codes to instantly view menus and place orders with ease",
      link: "https://github.com/yourusername/weather-app",
      image: [],
      tech: ["Springboot", "Java", "React", "NextJS", "Postgres"]
    },
    {
      title: "Event Manager",
      description: "An innovative event management app that empowers users to join events, organizers to create and manage them effortlessly, and admins to oversee activities via a centralized dashboard, revolutionizing event coordination",
      link: "https://github.com/yourusername/weather-app",
      image: [],
      tech: ["Java", "Firebase", "UML", "CI/CD"]
    },
    {
      title: "Business Backend",
      description: "A cutting-edge microservice-based application, featuring a distributed architecture with service registry, API gateway, configuration management, and business-specific services, delivering scalable solutions with real-time monitoring via Zipkin",
      link: "https://github.com/yourusername/weather-app",
      image: [],
      tech: ["Springboot", "Microservices", "Docker", "Zipkin"]
    },
    {
      title: "Real-time Chat App",
      description: "A lightning-fast chat application powered by WebSockets for real-time messaging, PostgreSQL for reliable message storage, and a sleek Next.js frontend for a seamless user experience, ensuring instant and persistent communication",
      link: "https://github.com/yourusername/weather-app",
      image: [],
      tech: ["Springboot", "Docker", "Websocket", "Postgres", "NextJS"]
    }
    
    // Add more projects as needed
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
          <div className="flex-grow p-4">
            <CardHeader>
              <CardTitle className="text-card-title">{project.title}</CardTitle>
              <div className="mt-2 text-sm font-normal text-gray-700">
                {project.tech.join(", ")}
              </div>
              <CardDescription className="mt-4 text-gray-700 line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
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
          <CardContent className="p-0 md:w-1/3 w-full">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {project.image.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[300px] md:h-[400px]">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
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
  );
}
