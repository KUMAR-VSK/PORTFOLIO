import { FaDatabase, FaCalendarAlt } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'SQL (Advanced) Certificate',
      description: 'Demonstrated proficiency in complex queries, window functions, joins, aggregations, subqueries, and query optimization techniques for efficient database management.',
      issuer: 'HACKER RANK',
      date: '2024',
      icon: <FaDatabase className="w-10 h-10 text-blue-400" />,
      skills: ['Complex Queries', 'Window Functions', 'Query Optimization', 'Joins & Aggregations']
    }
  ]

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Professional certifications validating technical expertise
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:from-white/15 hover:to-white/10 transition-all duration-500 border border-white/20 hover:border-white/40 shadow-2xl group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all flex-shrink-0 shadow-lg text-white">
                  {cert.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white font-bold">
                          {cert.issuer}
                        </span>
                        <span className="text-gray-400 flex items-center gap-1">
                          <FaCalendarAlt className="w-4 h-4" /> {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">{cert.description}</p>

                  <div>
                    <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-3">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 bg-black/30 border border-white/20 rounded-xl text-sm font-medium text-gray-200 hover:bg-white/10 hover:border-white/40 transition-all">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            More certifications coming soon as I continue expanding my technical expertise
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
