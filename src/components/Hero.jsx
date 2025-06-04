"use client"
import { motion } from "framer-motion"
import { FiDownload, FiMail } from "react-icons/fi"

function Hero() {
  return (
    <section
      id="home"
      className="relative py-24 md:py-36 bg-gradient-to-b from-primary/5 to-background flex items-center min-h-[80vh]"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Left: Text Content */}
          <motion.div
            className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1]">
              Hi, I'm <span className="text-primary">Harshkumar Padhiyar</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-xl">
              Full Stack Developer specializing in building exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" tabIndex={-1}>
                <motion.button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiMail className="h-5 w-5" />
                  Connect with me
                </motion.button>
              </a>
              <a href="./src/assets/Harshkumar_Padhiyar - Resume.pdf" download tabIndex={-1}>
                <motion.button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiDownload className="h-5 w-5" />
                  Download Resume
                </motion.button>
              </a>
            </div>
          </motion.div>
          {/* Right: Profile Image */}
          <motion.div
            className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src= './src/assets/Harsh_Padhiyar.png' alt="Profile" className="w-full h-full object-contain" loading="lazy"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

