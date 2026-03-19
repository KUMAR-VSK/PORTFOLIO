import { FaGithub, FaLinkedin, FaEnvelope, FaUserGraduate, FaMapMarkerAlt, FaBolt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[120px] sm:auto-rows-[140px]">

          {/* Main Hero Intro */}
          <div className="md:col-span-1 lg:col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 text-white text-xs font-black tracking-widest mb-6 border-2 border-white/40 backdrop-blur-sm shadow-lg animate-slide-up">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-green-400/30"></span>
                SOFTWARE DEVELOPER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Hi, I'm <span className="gradient-text neon-text">KUMAR V S</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200">Building robust apps.</span>
              </h1>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-md font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Specializing in <span className="text-white font-bold border-b-2 border-white/30">Java</span>, <span className="text-white font-bold border-b-2 border-white/30">Spring Boot</span> backend APIs, and <span className="text-white font-bold border-b-2 border-white/30">React</span> frontend interfaces.
              </p>
            </div>
          </div>

          {/* Avatar / Profile Image */}
          <div className="row-span-2 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 w-36 h-36 rounded-full border-4 border-white/40 bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-5 overflow-hidden group-hover:scale-110 group-hover:border-white/60 group-hover:shadow-2xl group-hover:shadow-white/30 transition-all duration-500 animate-float text-white" aria-hidden="true">
              <FaUserGraduate className="w-16 h-16" />
            </div>
            <h3 className="text-white font-black text-xl relative z-10 mb-1 neon-text">Kumar V S</h3>
            <p className="text-gray-200 text-sm text-center relative z-10 flex items-center gap-1.5 font-semibold">
              <FaMapMarkerAlt className="w-4 h-4" /> Based in India
            </p>
          </div>

          {/* Connect / Links */}
          <div className="rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex items-center justify-center gap-3 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500">
            <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/40 hover:border-white hover:bg-[#333] hover:text-white hover:scale-125 hover:rotate-6 hover:shadow-2xl hover:shadow-[#333]/40 transition-all duration-300 group" aria-label="GitHub">
              <FaGithub className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/40 hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:scale-125 hover:-rotate-6 hover:shadow-2xl hover:shadow-[#0077b5]/40 transition-all duration-300 group" aria-label="LinkedIn">
              <FaLinkedin className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:kumarvsofficial@gmail.com" className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/40 hover:border-red-500 hover:bg-red-500 hover:text-white hover:scale-125 hover:-rotate-6 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 group" aria-label="Email">
              <FaEnvelope className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex flex-col justify-center relative overflow-hidden hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 group" style={{ animationDelay: '0.5s' }} role="list" aria-label="Tech stack">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>

            <p className="text-white text-xs font-black uppercase tracking-widest mb-4 relative z-10 flex items-center gap-2">
              <FaBolt className="w-5 h-5" aria-hidden="true" /> Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 relative z-10" role="listitem">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Docker'].map((tech, i) => (
                <span key={tech} className="px-4 py-2 bg-white/20 border-2 border-white/40 rounded-xl text-white text-sm font-black hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-white/40 transition-all cursor-default animate-slide-up" style={{ animationDelay: `${0.6 + i * 0.05}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <a href="/resume.pdf" download="Kumar_V_S_Resume.pdf" className="rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex flex-col items-center justify-center group hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 cursor-pointer text-center" style={{ animationDelay: '0.6s' }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-white group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/40 transition-all duration-300">
              <svg className="w-7 h-7 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <span className="text-white font-black text-sm group-hover:neon-text transition-all">Download Resume</span>
          </a>

          {/* Action Call */}
          <a href="#projects" className="rounded-3xl bg-gradient-to-br from-white via-gray-100 to-white backdrop-blur-xl border-4 border-white p-6 flex flex-col items-center justify-center group hover:scale-110 hover:shadow-2xl hover:shadow-white/30 hover:border-white transition-all duration-500 shadow-2xl shadow-white/20 neon-glow" style={{ animationDelay: '0.7s' }}>
            <span className="text-black font-black text-lg mb-1 group-hover:scale-110 transition-transform neon-text">View Projects</span>
            <svg className="w-6 h-6 text-black group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero
