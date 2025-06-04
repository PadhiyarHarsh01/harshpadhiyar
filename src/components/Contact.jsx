"use client"

import { useState, useEffect, useRef } from "react"
import { FiSend, FiCheckCircle } from "react-icons/fi"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Reset form and show success message
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "fade-in" : "opacity-0"}`}>
          Get In Touch
        </h2>
        <p className={`text-center text-muted-foreground mb-8 ${isVisible ? "fade-in delay-100" : "opacity-0"}`}>
          Feel free to reach out by filling the form below or directly via email:&nbsp;
          <a
            href="mailto:your.email@example.com"
            className="text-primary underline hover:text-primary/80 transition-colors"
          >
            harshpadhiyar553@gmail.com
          </a>
        </p>
        <div className={`max-w-2xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="bg-card text-card-foreground rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="p-6">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md flex items-center gap-2 fade-in">
                  <FiCheckCircle className="h-5 w-5" />
                  <span>Thank you for your message! I'll get back to you soon.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground transition-all duration-300 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact