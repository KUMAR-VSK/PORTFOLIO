const Skills = () => {
  const skillCategories = [
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
        "VS_Code.app","IntelliJ_idea.sh", "Vercel.sh", "Railway.sh", "Render.sh"
      ]
    },
    {
      id: "PID_8492",
      title: "DEPLOYMENT_CORE",
      bgText: "DEPLOY",
      skills: [
        "Railway.sh", "Render.sh","Vercel.sh","Netlify.sh","GitHub.sh","Aiven.sh"
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden font-mono">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter animate-fade-in-up">
            TECH ARSENAL
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white via-gray-500 to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background large text */}
              <div className="absolute -right-4 -bottom-4 text-6xl md:text-8xl font-black text-white/5 select-none z-0 pointer-events-none uppercase">
                {category.bgText}
              </div>

              {/* Terminal Window */}
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 shadow-xl">

                {/* Window Header */}
                <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono flex items-center gap-4">
                    <span className="text-gray-500">{category.id}</span>
                    <span className="text-white font-bold flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg border border-white/20">
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
                        <div className="bg-black/40 border border-white/20 px-4 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:border-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all cursor-default flex items-center gap-2 font-medium">
                          <span className="text-gray-600 group-hover/skill:text-green-400 font-bold transition-colors">{'>'}</span>
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-8 right-8 p-4 text-xs text-white/10 font-mono text-right">
        <div>SYSTEM_STATUS: ACTIVE</div>
        <div>SKILLS_LOADED: TRUE</div>
      </div>
    </section>
  )
}

export default Skills
