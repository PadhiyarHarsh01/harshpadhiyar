import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-background text-foreground'>
        <Navbar />
        <main className="flex flex-col gap-0 md:gap-8">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App