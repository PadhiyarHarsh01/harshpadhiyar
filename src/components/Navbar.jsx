"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./ThemeProvider"
import { useMobile } from "../hooks/useMobile"

// Import icons from react-icons instead of lucide-react
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-primary transition-all duration-300 hover:scale-105"
          >
            HP
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              className="ml-2 p-2 rounded-md hover:bg-muted transition-all duration-300 hover:rotate-12"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="p-2 rounded-md hover:bg-muted transition-all duration-300 hover:rotate-12"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </button>
            <button className="p-2 rounded-md hover:bg-muted transition-all duration-300" onClick={toggleMenu}>
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t animate-slideDown">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300 fade-in delay-${index * 100}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

