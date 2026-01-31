const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Kumar V S</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer specializing in scalable web applications with modern UI/UX design,
              secure backend APIs, and production-ready deployment solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/KUMAR-VSK" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400">
                <span className="text-lg">🐙</span>
              </a>
              <a href="https://linkedin.com/in/kumar-v-s-1695861b2" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400">
                <span className="text-lg">💼</span>
              </a>
              <a href="mailto:kumarvsofficial@gmail.com" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400">
                <span className="text-lg">✉️</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Education</a></li>
              <li><a href="#certifications" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Certifications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📧</span>
                <span>kumarvsofficial@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📱</span>
                <span>+91 9488158891</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📍</span>
                <span>Udumelpet, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Kumar V S. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Built with React, Tailwind CSS & Modern Web Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
