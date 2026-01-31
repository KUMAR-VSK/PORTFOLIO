const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Bannari Amman Institute of Technology',
      period: '2022 – 2026',
      grade: 'CGPA: 8.15 (up to 6th semester)',
      icon: '🎓'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          Education
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-gray-800">
                  <span className="text-2xl">{edu.icon}</span>
                </div>

                {/* Content */}
                <div className="ml-8 bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
