import { FaLaptopCode, FaLock, FaCloud, FaDatabase, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-slide-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto animate-scale-in"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl group relative overflow-hidden animate-slide-up stagger-1 magnetic-hover">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed relative z-10">
                I am a <span className="text-white font-bold border-b-2 border-white/30">Java Software Developer</span> specializing in <span className="text-white font-bold border-b-2 border-white/30">Spring Boot</span> for robust backend development and <span className="text-white font-bold border-b-2 border-white/30">React</span> for modern, responsive frontend interfaces.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-4 relative z-10">
                My expertise focuses on building scalable software applications with clean architecture, secure API implementations, and efficient database management using Java, Spring Boot, and MySQL technologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl animate-slide-up stagger-2 magnetic-hover">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 animate-bounce-in">
                <FaCloud className="w-6 h-6 text-white" />
                Core Competencies
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <FaLaptopCode className="w-6 h-6 text-white" />, text: 'Software Application Development' },
                  { icon: <FaLock className="w-6 h-6 text-white" />, text: 'Secure API Design & Implementation' },
                  { icon: <FaCloud className="w-6 h-6 text-white" />, text: 'Cloud Deployment & DevOps' },
                  { icon: <FaDatabase className="w-6 h-6 text-white" />, text: 'Database Design & Optimization' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border-2 border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 hover:-translate-y-1 transition-all group/item animate-bounce-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <span className="text-2xl group-hover/item:scale-125 transition-all duration-300">{item.icon}</span>
                    <span className="text-gray-200 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 animate-slide-in-right stagger-3">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl sticky top-24 magnetic-hover">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 animate-bounce-in">
                <FaPhone className="w-6 h-6 text-white" />
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all group/contact animate-slide-up stagger-1">
                  <FaMapMarkerAlt className="w-5 h-5 text-white mt-1 group-hover/contact:scale-125 transition-all" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-gray-200 text-sm">Udumelpet, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <a href="mailto:kumarvsofficial@gmail.com" className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all group/contact animate-slide-up stagger-2">
                  <FaEnvelope className="w-5 h-5 text-white mt-1 group-hover/contact:scale-125 transition-all" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-gray-200 text-sm break-all">kumarvsofficial@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919488158891" className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border-2 border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all group/contact animate-slide-up stagger-3">
                  <FaPhone className="w-5 h-5 text-white mt-1 group-hover/contact:scale-125 transition-all" />
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-gray-200 text-sm">+91 9488158891</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in stagger-4">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Connect</p>
                <div className="flex gap-3">
                  <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-[#333] text-white rounded-xl p-3 flex items-center justify-center border-2 border-white/20 hover:border-[#333] hover:scale-110 hover:rotate-6 transition-all group/social animate-bounce-in stagger-1" aria-label="GitHub">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/10 hover:bg-[#0077b5] text-white rounded-xl p-3 flex items-center justify-center border-2 border-white/20 hover:border-[#0077b5] hover:scale-110 hover:-rotate-6 transition-all group/social animate-bounce-in stagger-2" aria-label="LinkedIn">
                    <FaLinkedin className="w-6 h-6" />
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
