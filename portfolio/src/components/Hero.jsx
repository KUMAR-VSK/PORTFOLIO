const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="gradient-text">Kumar</span> 👋
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold mb-4">
                Java Software Developer | Spring Boot Backend | React Frontend
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                I specialize in Java development with Spring Boot for robust backend APIs, combined with React for modern, responsive frontend interfaces. Building scalable full-stack applications with clean architecture and secure implementations.
              </p>

              {/* Professional Expertise Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium">
                  Full Stack Development
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium">
                  Secure API Development
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium">
                  Cloud Deployment
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium">
                  Database Management
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 glow-on-hover"
                aria-label="View my projects"
              >
                <span className="flex items-center justify-center">
                  View Projects
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group bg-transparent border-2 border-cyan-400 hover:bg-cyan-400 text-cyan-400 hover:text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                aria-label="Contact me"
              >
                <span className="flex items-center justify-center">
                  Contact Me
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
              <a
                href="/resume.pdf"
                download="Kumar_V_S_Resume.pdf"
                className="group bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-cyan-400"
                aria-label="Download my resume"
              >
                <span className="flex items-center justify-center">
                  Download Resume
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/KUMAR-VSK"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="Visit Kumar V S GitHub profile"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/kumar-v-s-1695861b2"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Visit Kumar V S LinkedIn profile"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:kumarvsofficial@gmail.com"
                className="group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                aria-label="Send email to Kumar V S"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Developer Illustration */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Main Avatar Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>

                {/* Avatar Circle */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full border-4 border-cyan-400/20 flex items-center justify-center overflow-hidden">
                  <div className="text-center relative z-10">
                    <div className="text-7xl md:text-8xl mb-4 animate-float">👨‍💻</div>
                    <div className="text-cyan-400 font-bold text-xl md:text-2xl mb-2">Full Stack Developer</div>
                    <div className="text-gray-400 text-sm">Building the Future, One Line at a Time</div>
                  </div>

                  {/* Inner Pattern */}
                  <div className="absolute inset-4 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-full"></div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-float shadow-lg border border-purple-400/20">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center animate-float shadow-lg border border-green-400/20" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center animate-float shadow-lg border border-yellow-400/20" style={{ animationDelay: '2s' }}>
                <span className="text-lg">☕</span>
              </div>
              <div className="absolute bottom-1/4 -left-8 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center animate-float shadow-lg border border-red-400/20" style={{ animationDelay: '3s' }}>
                <span className="text-base">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="flex flex-col items-center text-cyan-400">
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
