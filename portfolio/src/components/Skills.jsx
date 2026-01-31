const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Advanced' },
        { name: 'React.js', level: 'Advanced' },
        { name: 'Bootstrap / Tailwind CSS', level: 'Advanced' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 'Advanced' },
        { name: 'OOPs (Object-Oriented Programming)', level: 'Advanced' },
        { name: 'Spring Boot', level: 'Advanced' },
        { name: 'REST APIs', level: 'Advanced' }
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 'Advanced' },
        { name: 'H2 Database', level: 'Intermediate' },
        { name: 'SQL Queries (Joins, Subqueries)', level: 'Advanced' }
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'Postman', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Vercel', level: 'Intermediate' },
        { name: 'Railway', level: 'Intermediate' },
        { name: 'Render', level: 'Intermediate' }        
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'bg-green-500'
      case 'Intermediate': return 'bg-yellow-500'
      case 'Beginner': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`progress-bar h-2 rounded-full ${
                          skill.level === 'Advanced' ? 'w-full' :
                          skill.level === 'Intermediate' ? 'w-3/4' : 'w-1/2'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
