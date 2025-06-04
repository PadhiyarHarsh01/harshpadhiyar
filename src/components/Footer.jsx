import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

function Footer() {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 fade-in">
            <h3 className="text-xl font-bold mb-4">Harshkumar Padhiyar</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                <FiMail className="h-4 w-4" />
                <a href="mailto:harshpadhiyar553@gmail.com">
                <span>harshpadhiyar553@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                <FiPhone className="h-4 w-4" />
                <span>+91 93133 44806</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary">
                <FiMapPin className="h-4 w-4" />
                <a href="https://maps.app.goo.gl/NpP2iLE847xss46f6" target="_blank" rel="noopener noreferrer">
                <span>Vadodara, Gujarat, IN</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/PadhiyarHarsh01" target="_blank"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <FiGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/harshpadhiyar1/" target="_blank"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <FiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <FiTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground fade-in">
          <p>© {new Date().getFullYear()} Harshkumar Padhiyar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

