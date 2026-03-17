const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Bannari Amman Institute of Technology',
      period: '2022 – 2026',
      grade: 'CGPA: 8.14',
      icon: '🎓',
      description: 'Currently pursuing Bachelor of Technology with focus on Software Development',
      status: 'In Progress'
    },
    {
      degree: '12th Grade – HSC',
      institution: 'R G Matric Higher Secondary School',
      period: '2021 – 2022',
      grade: '89.3%',
      icon: '📚',
      description: 'Higher Secondary Certificate with strong performance in core subjects',
      status: 'Completed'
    },
    {
      degree: '10th Grade – SSLC',
      institution: 'R G Matric Higher Secondary School',
      period: '2019 – 2020',
      grade: '97.4%',
      icon: '🏆',
      description: 'Secondary School Leaving Certificate with outstanding results',
      status: 'Completed'
    }
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-gray-500 to-white"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start animate-slide-in-left group" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center border-4 border-gray-900 z-10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shadow-xl">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{edu.icon}</span>
                </div>

                {/* Content */}
                <div className="ml-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 flex-1 shadow-2xl group-hover:shadow-white/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          edu.status === 'In Progress' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : 'bg-white/10 text-gray-300 border border-white/20'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-gray-200 font-semibold mb-2 text-lg">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                        <span>📅</span> {edu.period}
                      </p>
                      {edu.description && (
                        <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-5 py-3 rounded-2xl font-bold text-lg shadow-lg">
                        <span className="text-2xl">⭐</span>
                        {edu.grade}
                      </div>
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
