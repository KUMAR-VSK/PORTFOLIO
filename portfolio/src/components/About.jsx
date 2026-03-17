const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl group">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed relative z-10">
                I am a <span className="text-white font-bold">Java Software Developer</span> specializing in <span className="text-white font-bold">Spring Boot</span> for robust backend development and <span className="text-white font-bold">React</span> for modern, responsive frontend interfaces.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4 relative z-10">
                My expertise focuses on building scalable software applications with clean architecture, secure API implementations, and efficient database management using Java, Spring Boot, and MySQL technologies.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">⚡</span>
                Core Competencies
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '💻', text: 'Software Application Development' },
                  { icon: '🔒', text: 'Secure API Design & Implementation' },
                  { icon: '☁️', text: 'Cloud Deployment & DevOps' },
                  { icon: '📊', text: 'Database Design & Optimization' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group">
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                    <span className="text-gray-200 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">📱</span>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group">
                  <span className="text-xl mt-0.5 grayscale group-hover:grayscale-0">📍</span>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-gray-200 text-sm">Udumelpet, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <a href="mailto:kumarvsofficial@gmail.com" className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group">
                  <span className="text-xl mt-0.5 grayscale group-hover:grayscale-0">📧</span>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-gray-200 text-sm break-all">kumarvsofficial@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919488158891" className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group">
                  <span className="text-xl mt-0.5 grayscale group-hover:grayscale-0">📱</span>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-gray-200 text-sm">+91 9488158891</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Connect</p>
                <div className="flex gap-3">
                  <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-white hover:text-black rounded-xl p-3 flex items-center justify-center border border-white/20 hover:border-white transition-all group" aria-label="GitHub">
                    <span className="text-2xl grayscale group-hover:grayscale-0">🐙</span>
                  </a>
                  <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-white hover:text-black rounded-xl p-3 flex items-center justify-center border border-white/20 hover:border-white transition-all group" aria-label="LinkedIn">
                    <span className="text-2xl grayscale group-hover:grayscale-0">💼</span>
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
