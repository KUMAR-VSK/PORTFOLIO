import { useState } from 'react'
import { FaStar, FaGithub, FaCode, FaFire, FaChartBar } from 'react-icons/fa'

const GitHubImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`flex items-center justify-center h-32 text-gray-500 ${className}`}>
        <span>Stats unavailable</span>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse rounded-xl" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-xl hover:scale-105 transition-transform duration-500 ${loaded ? '' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  )
}

const GitHubStats = () => {
  const stats = [
    {
      icon: <FaStar className="w-8 h-8 text-yellow-400" />,
      label: 'LeetCode',
      value: 'KUMARVSK',
      link: 'https://leetcode.com/KUMARVSK',
      description: 'Active problem solver'
    },
    {
      icon: <FaGithub className="w-8 h-8 text-white" />,
      label: 'GitHub',
      value: 'KUMAR-VSK',
      link: 'https://github.com/KUMAR-VSK',
      description: 'Open source contributor'
    },
    {
      icon: <FaCode className="w-8 h-8 text-blue-400" />,
      label: 'Repositories',
      value: '23+',
      link: 'https://github.com/KUMAR-VSK?tab=repositories',
      description: 'Public projects'
    },
    {
      icon: <FaFire className="w-8 h-8 text-orange-500" />,
      label: 'Commits',
      value: '250+',
      link: 'https://github.com/KUMAR-VSK',
      description: 'Total contributions'
    }
  ]

  return (
    <section id="github-stats" className="py-24 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-slide-up">
            Coding Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 animate-scale-in"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slide-up stagger-1">
            Actively solving problems and building projects on various platforms
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <a
              key={index}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-white/20 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-2xl group animate-bounce-in magnetic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg">
                  {stat.icon}
                </div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-2xl font-black text-white mb-2">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Contribution Graph */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl animate-slide-up stagger-4 magnetic-hover">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-white mb-3 flex items-center gap-3">
                <FaChartBar className="w-6 h-6" />
                GitHub Activity
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Building real-world projects using <span className="text-white font-bold">Java</span>, <span className="text-white font-bold">Spring Boot</span>, and <span className="text-white font-bold">MySQL</span>. 
                Actively solving problems on <span className="text-white font-bold">LeetCode</span> to sharpen algorithmic skills.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/KUMAR-VSK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 flex items-center gap-2"
                >
                  <FaGithub className="w-5 h-5" />
                  View GitHub Profile
                </a>
                <a
                  href="https://leetcode.com/KUMARVSK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border-2 border-white/30 hover:border-white/50 hover:scale-110 flex items-center gap-2"
                >
                  <FaCode className="w-5 h-5" />
                  LeetCode Profile
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <GitHubImage
                src="https://github-readme-stats.vercel.app/api?username=KUMAR-VSK&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=ffffff&icon_color=ffffff"
                alt="GitHub Stats"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Language Stats */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl animate-slide-up stagger-5 magnetic-hover">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaCode className="w-5 h-5" /> Most Used Languages
            </h4>
            <GitHubImage
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=KUMAR-VSK&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=ffffff"
              alt="Top Languages"
              className="w-full"
            />
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl animate-slide-up stagger-6 magnetic-hover">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaFire className="w-5 h-5 text-orange-500" /> Contribution Streak
            </h4>
            <GitHubImage
              src="https://github-readme-streak-stats.herokuapp.com/?user=KUMAR-VSK&theme=dark&hide_border=true&background=00000000&ring=ffffff&fire=ffffff&currStreakLabel=ffffff"
              alt="GitHub Streak"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats
