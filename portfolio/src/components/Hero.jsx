import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Enhanced Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-white/3 rounded-full blur-[100px] animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[140px]">

          {/* Main Hero Intro - Spans 2 cols, 2 rows */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-white/40 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 text-white text-xs font-bold tracking-wider mb-5 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                SOFTWARE DEVELOPER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-gradient-shift">KUMAR V S</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300">Building robust apps.</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
                Specializing in <span className="text-white font-semibold">Java</span>, <span className="text-white font-semibold">Spring Boot</span> backend APIs, and <span className="text-white font-semibold">React</span> frontend interfaces.
              </p>
            </div>
          </div>

          {/* Avatar / Profile Image - 1 col, 2 rows */}
          <div className="md:col-span-1 lg:col-span-1 row-span-2 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/40 transition-all duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 w-36 h-36 rounded-full border-4 border-white/20 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-5 overflow-hidden group-hover:scale-110 group-hover:border-white/40 transition-all duration-500 shadow-2xl">
              <span className="text-7xl animate-float">👨‍💻</span>
            </div>
            <h3 className="text-white font-bold text-xl relative z-10 mb-1">Kumar V S</h3>
            <p className="text-gray-300 text-sm text-center relative z-10 flex items-center gap-1">
              <span>📍</span> Based in India
            </p>
          </div>

          {/* Current Status - 1 col, 1 row */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-green-500/20 via-white/5 to-transparent backdrop-blur-xl border border-green-500/30 p-6 flex flex-col justify-center items-center hover:border-green-400/50 hover:from-green-500/30 transition-all duration-500 relative overflow-hidden shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex h-5 w-5 mb-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 shadow-lg shadow-green-500/50"></span>
              </div>
              <h4 className="text-white font-bold text-center text-sm md:text-base leading-tight">Available for<br />Opportunities</h4>
            </div>
          </div>

          {/* Connect / Links - 1 col, 1 row */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-6 flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/40 transition-all duration-500 shadow-lg">
            <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg text-2xl group" aria-label="GitHub">
              <span className="grayscale group-hover:grayscale-0">�</span>
            </a>
            <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg text-2xl group" aria-label="LinkedIn">
              <span className="grayscale group-hover:grayscale-0">💼</span>
            </a>
            <a href="mailto:kumarvsofficial@gmail.com" className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black hover:scale-110 transition-all shadow-lg text-2xl group" aria-label="Email">
              <span className="grayscale group-hover:grayscale-0">✉️</span>
            </a>
          </div>

          {/* Tech Stack Marquee / Mini - 2 cols, 1 row */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-6 flex flex-col justify-center relative overflow-hidden hover:bg-white/10 hover:border-white/40 transition-all duration-500 shadow-lg group">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
            <p className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-4 relative z-10">⚡ Tech Stack</p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-semibold hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Download - 1 col, 1 row */}
          <a href="/resume.pdf" download="Kumar_V_S_Resume.pdf" className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 p-6 flex flex-col items-center justify-center group hover:bg-white/10 hover:border-white/40 transition-all duration-500 cursor-pointer text-center shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 group-hover:-translate-y-1 group-hover:bg-white group-hover:border-white transition-all">
              <svg className="w-7 h-7 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm group-hover:text-white">Download Resume</span>
          </a>

          {/* Action Call - 1 col, 1 row */}
          <a href="#projects" className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-white via-gray-200 to-white backdrop-blur-xl border-2 border-white p-6 flex flex-col items-center justify-center group hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 shadow-xl">
            <span className="text-black font-black text-lg mb-1 group-hover:scale-105 transition-transform">View Projects</span>
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
