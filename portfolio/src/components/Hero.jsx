const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-white/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]"></div>
        </div>
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[140px]">

          {/* Main Hero Intro - Spans 2 cols, 2 rows */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-glow-pulse">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 text-white text-xs font-black tracking-widest mb-6 border-2 border-white/40 backdrop-blur-sm shadow-lg animate-slide-up">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
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

          {/* Avatar / Profile Image - 1 col, 2 rows */}
          <div className="md:col-span-1 lg:col-span-1 row-span-2 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-glow-pulse" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 w-36 h-36 rounded-full border-4 border-white/40 bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-5 overflow-hidden group-hover:scale-110 group-hover:border-white/60 group-hover:shadow-2xl group-hover:shadow-white/30 transition-all duration-500 animate-float">
              <span className="text-7xl">👨‍💻</span>
            </div>
            <h3 className="text-white font-black text-xl relative z-10 mb-1 neon-text">Kumar V S</h3>
            <p className="text-gray-200 text-sm text-center relative z-10 flex items-center gap-1.5 font-semibold">
              <span className="text-lg">📍</span> Based in India
            </p>
          </div>

          {/* Current Status - 1 col, 1 row */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-green-500/30 via-white/15 to-white/10 backdrop-blur-2xl border-2 border-green-400/50 p-6 flex flex-col justify-center items-center hover:border-green-400/70 hover:from-green-500/40 hover:shadow-2xl hover:shadow-green-400/30 transition-all duration-500 relative overflow-hidden group animate-glow-pulse" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="relative flex h-6 w-6 mb-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-green-400 shadow-2xl shadow-green-400/60"></span>
              </div>
              <h4 className="text-white font-black text-center text-sm md:text-base leading-tight neon-text">Available for<br />Opportunities</h4>
            </div>
          </div>

          {/* Connect / Links - 1 col, 1 row */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex items-center justify-center gap-3 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-glow-pulse" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/40 hover:border-white hover:bg-white hover:text-black hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 text-2xl group" aria-label="GitHub">
              <span className="grayscale group-hover:grayscale-0 transition-all">🐙</span>
            </a>
            <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/40 hover:border-white hover:bg-white hover:text-black hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 text-2xl group" aria-label="LinkedIn">
              <span className="grayscale group-hover:grayscale-0 transition-all">💼</span>
            </a>
            <a href="mailto:kumarvsofficial@gmail.com" className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border-2 border-white/40 hover:border-white hover:bg-white hover:text-black hover:scale-125 hover:rotate-12 hover:shadow-2xl hover:shadow-white/40 transition-all duration-300 text-2xl group" aria-label="Email">
              <span className="grayscale group-hover:grayscale-0 transition-all">✉️</span>
            </a>
          </div>

          {/* Tech Stack Marquee / Mini - 2 cols, 1 row */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex flex-col justify-center relative overflow-hidden hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 group animate-glow-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>

            <p className="text-white text-xs font-black uppercase tracking-widest mb-4 relative z-10 flex items-center gap-2">
              <span className="text-lg">⚡</span> Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 relative z-10">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Docker'].map((tech, i) => (
                <span key={tech} className="px-4 py-2 bg-white/20 border-2 border-white/40 rounded-xl text-white text-sm font-black hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-white/40 transition-all cursor-default animate-slide-up" style={{ animationDelay: `${0.6 + i * 0.05}s` }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Download - 1 col, 1 row */}
          <a href="/resume.pdf" download="Kumar_V_S_Resume.pdf" className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-white/15 to-white/8 backdrop-blur-2xl border-2 border-white/30 p-6 flex flex-col items-center justify-center group hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 cursor-pointer text-center animate-glow-pulse" style={{ animationDelay: '0.6s' }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center mb-3 group-hover:-translate-y-2 group-hover:bg-white group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/40 transition-all duration-300">
              <svg className="w-7 h-7 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <span className="text-white font-black text-sm group-hover:neon-text transition-all">Download Resume</span>
          </a>

          {/* Action Call - 1 col, 1 row */}
          <a href="#projects" className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-white via-gray-100 to-white backdrop-blur-xl border-4 border-white p-6 flex flex-col items-center justify-center group hover:scale-110 hover:shadow-2xl hover:shadow-white/50 hover:border-white transition-all duration-500 shadow-2xl shadow-white/30 neon-glow animate-glow-pulse" style={{ animationDelay: '0.7s' }}>
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
