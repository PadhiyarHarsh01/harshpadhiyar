"use client"
import { motion } from "framer-motion"
import { FiCode, FiDatabase, FiServer, FiGlobe, FiTerminal, FiLayers } from "react-icons/fi"
import AnimatedSection from "./AnimatedSection"

const skills = [
  {
    category: "Programming Languages",
    icon: <FiCode className="h-6 w-6 text-primary" />,
    technologies: ["Java", "Python", "C (Basic)"],
  },
  {
    category: "Frontend",
    icon: <FiCode className="h-6 w-6 text-primary" />,
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <FiServer className="h-6 w-6 text-primary" />,
    technologies: ["Node.js", "Express"],
  },
  {
    category: "Database",
    icon: <FiDatabase className="h-6 w-6 text-primary" />,
    technologies: ["MongoDB", "MySQL"],
  },
  // {
  //   category: "DevOps",
  //   icon: <FiGlobe className="h-6 w-6 text-primary" />,
  //   technologies: ["Docker", "AWS", "CI/CD", "Nginx"],
  // },
  {
    category: "Tools",
    icon: <FiTerminal className="h-6 w-6 text-primary" />,
    technologies: ["Git", "GitHub", "VS Code", "Postman"],
  },
  // {
  //   category: "Other",
  //   icon: <FiLayers className="h-6 w-6 text-primary" />,
  //   technologies: ["RESTful APIs"],
  //   // technologies: ["RESTful APIs", "GraphQL", "Agile/Scrum", "Testing", "UI/UX"],
  // },
]

function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="bg-card text-card-foreground rounded-lg border-none shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        whileHover={{
                          backgroundColor: "hsl(var(--primary))",
                          color: "hsl(var(--primary-foreground))",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

