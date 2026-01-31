const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          About Me
        </h2>
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 animate-slide-in-left">
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I am a Java Software Developer specializing in Spring Boot for robust backend development and React for modern, responsive frontend interfaces.
            My expertise focuses on building scalable full-stack applications with clean architecture, secure API implementations, and efficient database management using Java, Spring Boot, and MySQL technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400 text-lg">⚡</span>
                  <span className="text-gray-300">Full Stack Application Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400 text-lg">🔒</span>
                  <span className="text-gray-300">Secure API Design & Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400 text-lg">☁️</span>
                  <span className="text-gray-300">Cloud Deployment & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400 text-lg">📊</span>
                  <span className="text-gray-300">Database Design & Optimization</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-xl font-semibold mb-4 text-white">Personal Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📍</span>
                  <span>Udumelpet, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📧</span>
                  <span>kumarvsofficial@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📱</span>
                  <span>+91 9488158891</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">💼</span>
                  <a href="https://linkedin.com/in/kumar-v-s-1695861b2" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    linkedin.com/in/kumar-v-s-1695861b2
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">🐙</span>
                  <a href="https://github.com/KUMAR-VSK" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    github.com/KUMAR-VSK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
