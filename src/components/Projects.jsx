"use client"

import { useEffect, useRef, useState } from "react"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import inventoryImg from '../assets/inventory_management_sys.png';
import pixelVerseImg from '../assets/dall-e.webp';
import expenseTrackerImg from '../assets/expense_tracker.webp';

const projects = [
  {
    title: "Inventory Management System",
    description: "A console-based inventory system built with Java, using CSV files for storage. Supports adding, updating, and deleting products with auto-incremented IDs and robust exception handling.",
    image: inventoryImg,
    technologies: ["Java", "CSV", "OOP", "File I/O"],
    liveLink: "#",
    githubLink: "https://github.com/PadhiyarHarsh01/Inventory-Management-System",
  },
  {
    title: "PixelVerse - Text-to-Picture Generation",
    description: "An AI-powered image generation web application using Stable Diffusion, allowing users to create, edit, and download custom images with real-time prompt-based generation.",
    image: pixelVerseImg,
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stable Diffusion"],
    liveLink: "#",
    githubLink: "https://github.com/PadhiyarHarsh01/PixelVerse",
  },
  {
    title: "Expense Tracker - Android App",
    description: "A modern Android application built using Kotlin and Firebase Realtime Database, designed to help users track their daily expenses efficiently with a clean UI, authentication flow, and persistent data storage.",
    image: expenseTrackerImg,
    technologies: ["Kotlin", "XML", "Firebase Realtime Database", "ConstraintLayout"],
    liveLink: "#",
    githubLink: "https://github.com/PadhiyarHarsh01/ExpenceTracker",
  },
]

function Projects() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card text-card-foreground rounded-lg overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? `fade-in delay-${index * 200}` : "opacity-0"
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <FiGithub className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

