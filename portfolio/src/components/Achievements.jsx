const Achievements = () => {
  const achievements = [
    {
      title: 'Built and deployed full-stack applications successfully',
      icon: '🏆',
      description: 'Experience with complete software development lifecycle'
    },
    {
      title: 'Hands-on experience with JWT Authentication',
      icon: '🔐',
      description: 'Implemented secure authentication systems'
    },
    {
      title: 'Participated in Hackathons and project exhibitions',
      icon: '🎯',
      description: 'Active participation in competitive programming events'
    },
    {
      title: 'Strong SQL practice and problem-solving skills',
      icon: '🧠',
      description: 'Advanced database querying and optimization'
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white animate-fade-in-up">
          Achievements & Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-white transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 animate-float grayscale">{achievement.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
