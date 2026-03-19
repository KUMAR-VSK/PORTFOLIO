import { FaGithub, FaCode, FaRocket, FaCogs, FaTools, FaDatabase, FaBolt, FaGlobe } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      title: 'GitHub Repositories',
      value: '23+',
      icon: <FaGithub className="w-8 h-8" />,
      description: 'Public repositories with diverse tech stack'
    },
    {
      title: 'Total Commits',
      value: '250+',
      icon: <FaCode className="w-8 h-8" />,
      description: 'Contributions across multiple projects'
    },
    {
      title: 'Full-Stack Projects',
      value: '8+',
      icon: <FaRocket className="w-8 h-8" />,
      description: 'Production-ready applications deployed'
    },
    {
      title: 'Microservices',
      value: '3+',
      icon: <FaCogs className="w-8 h-8" />,
      description: 'Scalable microservice architectures built'
    },
    {
      title: 'Tech Stack',
      value: '10+',
      icon: <FaTools className="w-8 h-8" />,
      description: 'Languages and frameworks mastered'
    },
    {
      title: 'SQL Certified',
      value: 'Advanced',
      icon: <FaDatabase className="w-8 h-8" />,
      description: 'HackerRank SQL certification'
    },
    {
      title: 'LeetCode Active',
      value: 'KUMARVSK',
      icon: <FaBolt className="w-8 h-8" />,
      description: 'Regular problem-solving practice'
    },
    {
      title: 'Live Deployments',
      value: '5+',
      icon: <FaGlobe className="w-8 h-8" />,
      description: 'Applications hosted on Vercel'
    }
  ]

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Key milestones and accomplishments in my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 hover:from-white/15 hover:to-white/10 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all shadow-lg text-white">
                  {achievement.icon}
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-black text-white block mb-1">{achievement.value}</span>
                  <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
