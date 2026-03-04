import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 bg-[#050505]">
      {/* Glassmorphism Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-30 pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">

          {/* Main Hero Intro - Spans 2 cols, 2 rows */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider mb-4 border border-indigo-500/30">
                SOFTWARE DEVELOPER
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">KUMAR V S</span>.
                <br />Building robust apps.
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                Specializing in Java, Spring Boot backend APIs, and React frontend interfaces.
              </p>
            </div>
          </div>

          {/* Avatar / Profile Image - 1 col, 2 rows */}
          <div className="md:col-span-1 lg:col-span-1 row-span-2 rounded-[2rem] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="relative z-10 w-32 h-32 rounded-full border-4 border-white/10 bg-black/50 flex items-center justify-center mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl">
              <span className="text-6xl animate-float">👨‍💻</span>
            </div>
            <h3 className="text-white font-bold text-lg relative z-10">Kumar V S</h3>
            <p className="text-indigo-300 text-xs text-center mt-1 relative z-10">Based in India</p>
          </div>

          {/* Current Status - 1 col, 1 row */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-center items-center hover:bg-white/10 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex h-4 w-4 mb-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
              </div>
              <h4 className="text-white font-semibold text-center text-sm md:text-base">Available for<br />Opportunities</h4>
            </div>
          </div>

          {/* Connect / Links - 1 col, 1 row */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex items-center justify-center gap-4 hover:bg-white/10 transition-colors duration-500">
            <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center border border-white/10 hover:border-white/40 hover:scale-110 transition-all shadow-lg text-2xl grayscale hover:grayscale-0">🐙</a>
            <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#0a66c2]/80 flex items-center justify-center border border-white/10 hover:border-white/40 hover:scale-110 transition-all shadow-lg text-2xl grayscale hover:grayscale-0">💼</a>
            <a href="mailto:kumarvsofficial@gmail.com" className="w-12 h-12 rounded-full bg-red-500/80 flex items-center justify-center border border-white/10 hover:border-white/40 hover:scale-110 transition-all shadow-lg text-2xl grayscale hover:grayscale-0">✉️</a>
          </div>

          {/* Tech Stack Marquee / Mini - 2 cols, 1 row */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-center relative overflow-hidden">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Docker'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-black/40 border border-white/5 rounded-xl text-white text-sm font-medium hover:bg-white/10 hover:-translate-y-1 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Download - 1 col, 1 row */}
          <a href="/resume.pdf" download="Kumar_V_S_Resume.pdf" className="md:col-span-1 lg:col-span-1 row-span-1 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 flex flex-col items-center justify-center group hover:bg-white/10 transition-all duration-500 cursor-pointer text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:-translate-y-1 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <span className="text-white font-medium text-sm">Download Resume</span>
          </a>

          {/* Action Call - 1 col, 1 row */}
          <a href="#projects" className="md:col-span-1 lg:col-span-1 row-span-1 rounded-[2rem] bg-indigo-600/80 backdrop-blur-xl border border-indigo-500 p-6 flex flex-col items-center justify-center group hover:bg-indigo-500 transition-all duration-500 shadow-[0_0_30px_rgba(79,70,229,0.3)]">
            <span className="text-white font-bold text-lg mb-1 group-hover:scale-105 transition-transform">View Projects</span>
            <svg className="w-6 h-6 text-indigo-200 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero
