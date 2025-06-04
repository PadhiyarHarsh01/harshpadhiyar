"use client"

import { useEffect, useRef, useState } from "react"

function About() {
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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container max-w-3xl px-4 md:px-6 mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
          About Me
        </h2>
        <div>
          <p className={`text-lg text-muted-foreground mb-6 ${isVisible ? "slide-up delay-100" : "opacity-0"}`}>
            I'm a dedicated and aspiring Full Stack Developer with hands-on experience in building responsive, full-stack applications using the MERN stack & Spring Boot. I enjoy transforming ideas into real-world applications that solve problems and deliver seamless user experiences.
          </p>
          <p className={`text-lg text-muted-foreground mb-6 ${isVisible ? "slide-up delay-200" : "opacity-0"}`}>
            My journey began during my B.Tech in Computer Science at Parul University, where I immersed myself in development and data structures. From developing a text-to-image generator (PixelVerse) to completing real-world simulations with companies like Tata Group, I've consistently pushed myself to learn and implement cutting-edge technologies.
          </p>
          <p className={`text-lg text-muted-foreground ${isVisible ? "slide-up delay-300" : "opacity-0"}`}>
            Outside of code, I enjoy participating in tech hackathons, and sharpening my DSA skills — having solved 500+ problems on platforms like LeetCode and GFG. I thrive in collaborative environments and am always looking for opportunities to grow, contribute, and innovate.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

