import { FaGraduationCap, FaCalendarAlt, FaStar, FaSchool, FaMedal } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech Computer Technology',
      institution: 'Bannari Amman Institute of Technology',
      period: '2022 – 2026',
      grade: '8.14',
      gradeLabel: 'CGPA',
      icon: FaGraduationCap,
      description: 'Focused on Software Development, Data Structures, Algorithms, Full Stack Development, and System Design principles.',
      status: 'In Progress',
      highlight: 'Top 15%'
    },
    {
      degree: '12th Grade – HSC',
      institution: 'R G Matric Higher Secondary School',
      period: '2021 – 2022',
      grade: '89.3',
      gradeLabel: 'Percentage',
      icon: FaSchool,
      description: 'Strong performance in Physics, Chemistry, and Mathematics with emphasis on problem-solving and analytical thinking.',
      status: 'Completed',
      highlight: 'District Top 5%'
    },
    {
      degree: '10th Grade – SSLC',
      institution: 'R G Matric Higher Secondary School',
      period: '2019 – 2020',
      grade: '97.4',
      gradeLabel: 'Percentage',
      icon: FaMedal,
      description: 'Outstanding academic performance with consistent top scores across all subjects.',
      status: 'Completed',
      highlight: 'School Topper'
    }
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-white/5"></div>

          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon
              
              return (
                <div
                  key={index}
                  className="relative flex items-start animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center w-full">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center border-2 border-white/30 z-10 transition-all duration-500 shadow-xl ml-4 hover:scale-110 group-hover:border-white/50 group-hover:shadow-white/20 group">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="ml-6 md:ml-8 flex-1">
                      <div className="bg-gradient-to-br from-white/12 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all duration-500 shadow-2xl hover:shadow-white/5">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                edu.status === 'In Progress' 
                                  ? 'bg-white/15 text-white border border-white/25' 
                                  : 'bg-white/10 text-gray-300 border border-white/15'
                              }`}>
                                {edu.status}
                              </span>
                            </div>
                            <p className="text-gray-200 font-medium mb-2">{edu.institution}</p>
                            <p className="text-gray-500 text-sm flex items-center gap-2">
                              <FaCalendarAlt className="w-3.5 h-3.5" /> {edu.period}
                            </p>
                            {edu.description && (
                              <p className="text-gray-300 leading-relaxed mt-3 text-sm">{edu.description}</p>
                            )}
                          </div>
                          
                          <div className="flex flex-col items-start md:items-end gap-2 flex-shrink-0">
                            <div className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-xl font-bold text-base shadow-lg">
                              <FaStar className="w-4 h-4 text-gray-300" />
                              <span>{edu.grade}</span>
                              <span className="text-xs font-normal text-gray-400 ml-1">{edu.gradeLabel}</span>
                            </div>
                            {edu.highlight && (
                              <span className="px-3 py-1 bg-white/10 text-white/80 border border-white/15 rounded-full text-xs font-semibold">
                                {edu.highlight}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
