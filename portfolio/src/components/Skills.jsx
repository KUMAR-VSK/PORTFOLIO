const Skills = () => {
  const skillCategories = [
    {
      id: "PID_8492",
      title: "FRONTEND_CORE",
      bgText: "FRONTEND",
      skills: [
        "HTML5.sh", "CSS3.sh", "React.js.sh",
        "Tailwind.sh", "Bootstrap.sh"
      ]
    },
    {
      id: "PID_1138",
      title: "BACKEND_SYSTEMS",
      bgText: "BACKEND",
      skills: [
        "Java.java", "Spring_Boot.jar", "REST_API.sh",
        "OOPs_Concepts.cpp"
      ]
    },
    {
      id: "PID_9000",
      title: "DATABASE_MATRIX",
      bgText: "DATA",
      skills: [
        "MySQL.sql", "H2_Database.db", "SQL_Queries.sql"
      ]
    },
    {
      id: "PID_2077",
      title: "DEVOPS_TOOLS",
      bgText: "TOOLS",
      skills: [
        "Git.sh", "GitHub.sh", "Postman.exe",
        "VS_Code.app", "Vercel.sh", "Railway.sh", "Render.sh"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-black text-white relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter animate-fade-in-up">
          TECH ARSENAL
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background large text */}
              <div className="absolute -right-4 -bottom-4 text-6xl md:text-8xl font-black text-gray-800 opacity-20 select-none z-0 pointer-events-none uppercase">
                {category.bgText}
              </div>

              {/* Terminal Window */}
              <div className="relative z-10 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors duration-300 shadow-2xl">

                {/* Window Header */}
                <div className="bg-gray-800/50 p-3 flex items-center justify-between border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono flex items-center gap-4">
                    <span>{category.id}</span>
                    <span className="text-gray-300 font-bold flex items-center gap-2">
                      {index % 2 === 0 ? '</>' : '⚡'} {category.title}
                    </span>
                  </div>
                </div>

                {/* Window Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center group/skill"
                      >
                        <div className="bg-black/50 border border-gray-700 px-4 py-2 rounded-sm text-sm text-gray-300 hover:text-white hover:border-white hover:bg-gray-800 transition-all cursor-default flex items-center gap-2">
                          <span className="text-gray-600 group-hover/skill:text-green-400 font-bold">{'>'}</span>
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white/20"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white/20"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-4 text-xs text-gray-800 font-mono text-right">
        <div>SYSTEM_STATUS: OPTIMAL</div>
        <div>LOAD_BALANCER: ACTIVE</div>
      </div>
    </section>
  )
}

export default Skills
