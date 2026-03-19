import { useState, useEffect, useRef } from 'react'
import { FaJava, FaCloud, FaDatabase } from 'react-icons/fa'
import { SiSpring, SiReact, SiMysql, SiDocker, SiKubernetes, SiGit, SiGithub, SiPostman, SiSwagger } from 'react-icons/si'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('ALL')
  const sectionRef = useRef(null)

  const categories = [
    { id: 'ALL', label: 'All' },
    { id: 'LANGUAGES', label: 'Languages' },
    { id: 'FRAMEWORKS', label: 'Frameworks' },
    { id: 'DATABASES', label: 'Databases' },
    { id: 'DEVOPS', label: 'DevOps' },
    { id: 'CLOUD', label: 'Cloud' }
  ]

  const skills = [
    { name: 'Java', icon: <FaJava className="w-6 h-6" style={{ color: '#f59e0b' }} />, category: 'LANGUAGES' },
    { name: 'Spring Boot', icon: <SiSpring className="w-6 h-6" style={{ color: '#34a853' }} />, category: 'FRAMEWORKS' },
    { name: 'React', icon: <SiReact className="w-6 h-6" style={{ color: '#61dafb' }} />, category: 'FRAMEWORKS' },
    { name: 'REST API', icon: <SiSwagger className="w-6 h-6" style={{ color: '#6a6a6a' }} />, category: 'FRAMEWORKS' },
    { name: 'Swagger API', icon: <SiSwagger className="w-6 h-6" style={{ color: '#22c55e' }} />, category: 'FRAMEWORKS' },
    { name: 'MySQL', icon: <SiMysql className="w-6 h-6" style={{ color: '#4479a1' }} />, category: 'DATABASES' },
    { name: 'Git', icon: <SiGit className="w-6 h-6" style={{ color: '#f34f29' }} />, category: 'DEVOPS' },
    { name: 'GitHub', icon: <SiGithub className="w-6 h-6" style={{ color: '#ffffff' }} />, category: 'DEVOPS' },
    { name: 'Docker', icon: <SiDocker className="w-6 h-6" style={{ color: '#2496ed' }} />, category: 'DEVOPS' },
    { name: 'Postman', icon: <SiPostman className="w-6 h-6" style={{ color: '#f05454' }} />, category: 'DEVOPS' },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-6 h-6" style={{ color: '#326ce5' }} />, category: 'DEVOPS' },
    { name: 'AWS', icon: <FaCloud className="w-6 h-6" style={{ color: '#ff9900' }} />, category: 'CLOUD' }
  ]

  const filtered = activeTab === 'ALL' ? skills : skills.filter(s => s.category === activeTab)

  return (
    <section id="skills" className="py-24 relative overflow-hidden text-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">TECHNICAL PROFICIENCY</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white via-gray-500 to-transparent mx-auto mb-6" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === cat.id
                  ? 'bg-white text-black border-white shadow-lg'
                  : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/8 border border-white/15 hover:border-white/30 hover:bg-white/12 transition-all duration-300"
            >
              {skill.icon}
              <span className="text-sm font-semibold text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
