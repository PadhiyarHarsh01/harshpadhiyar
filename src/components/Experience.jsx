"use client"

import { useEffect, useRef, useState } from "react"
import { FiBriefcase, FiCalendar } from "react-icons/fi"

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Academic & Freelance Projects",
    period: "Mar 2025 – Present",
    description:
      "Built full-stack web applications using React, Node.js, Express, and MongoDB. Designed responsive UIs, developed REST APIs, and collaborated using GitHub and Postman in Agile settings.",
  },
  {
    title: "Data Visualization Intern (Virtual)",
    company: "Tata Group – Forage",
    period: "Apr 2025",
    description:
      "Completed real-world job simulation with Tata Insights. Analyzed data, built interactive dashboards with Power BI & Tableau, and presented insights to CXO-level stakeholders.",
  },
]

function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-card text-card-foreground rounded-lg border-l-4 border-l-primary shadow-md transition-all duration-300 hover:shadow-lg hover:border-l-[6px] ${
                isVisible ? `slide-in-right delay-${index * 200}` : "opacity-0"
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground mt-1">
                      <FiBriefcase className="h-4 w-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                    <FiCalendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

