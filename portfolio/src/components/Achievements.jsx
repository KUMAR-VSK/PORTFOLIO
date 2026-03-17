const Achievements = () => {
  const achievements = [
    {
      title: 'Full-Stack Applications',
      value: '4+',
      icon: '🚀',
      description: 'Successfully built and deployed production-ready applications'
    },
    {
      title: 'JWT Authentication',
      value: '✓',
      icon: '🔐',
      description: 'Implemented secure authentication systems across projects'
    },
    {
      title: 'Hackathons',
      value: '3+',
      icon: '🎯',
      description: 'Active participation in competitive programming events'
    },
    {
      title: 'SQL Expertise',
      value: 'Advanced',
      icon: '🗄️',
      description: 'Certified in advanced database querying and optimization'
    }
  ]

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
                {/* Icon */}
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/20 transition-all shadow-lg">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{achievement.icon}</span>
                </div>

                {/* Value */}
                <div className="mb-3">
                  <span className="text-4xl font-black text-white block mb-1">{achievement.value}</span>
                  <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                </div>

                {/* Description */}
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
