import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaBalanceScale, FaFileAlt, FaMoneyBillWave, FaUniversity, FaShoppingCart, FaHotel, FaClipboard, FaDumbbell } from 'react-icons/fa'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const projects = [
    {
      title: "Case Flow Management System",
      description: "A comprehensive case management system resembling CCMS with case filing, priority-based scheduling, auto-incrementing case numbers, document upload with drag-and-drop, calendar view, dashboard analytics, JWT authentication, and Swagger API documentation.",
      technologies: ["React", "Java", "Spring Boot", "JWT", "Swagger", "Material UI"],
      github: "https://github.com/KUMAR-VSK/DIFFERENTIATED-CASE-FLOW-MANAGEMENT",
      live: null,
      icon: <FaBalanceScale className="w-12 h-12" />,
      status: "Active"
    },
    {
      title: "Content Migration Tool",
      description: "Full-stack content migration tool with image extraction from documents, batch processing capabilities, error handling, visual status tracker, and professional UI with enhanced dropbox. Includes comprehensive JUnit tests.",
      technologies: ["JavaScript", "HTML", "Java", "JUnit", "REST API"],
      github: "https://github.com/KUMAR-VSK/Content-Migration",
      live: null,
      icon: <FaFileAlt className="w-12 h-12" />,
      status: "Active"
    },
    {
      title: "Personal Finance Manager",
      description: "Personal finance tracking and management application with expense tracking, budget planning, financial analytics, and interactive dashboards. Deployed on Vercel with responsive design.",
      technologies: ["React", "JavaScript", "Chart.js", "Vercel"],
      github: "https://github.com/KUMAR-VSK/Personal-Finance-Manager",
      live: "https://personal-finance-manager-lyart.vercel.app",
      icon: <FaMoneyBillWave className="w-12 h-12" />,
      status: "Live"
    },
    {
      title: "Banking Full Stack System",
      description: "Complete banking application with role-based access control, loan approval system, microservices architecture using Spring Boot, account management, transaction processing, and secure authentication.",
      technologies: ["Java", "Spring Boot", "Microservices", "MySQL", "JWT"],
      github: "https://github.com/KUMAR-VSK/Banking-full-stack",
      live: "https://banking-deployment.vercel.app",
      icon: <FaUniversity className="w-12 h-12" />,
      status: "Live"
    },
    {
      title: "E-Commerce Microservices",
      description: "Scalable e-commerce platform built with microservices architecture featuring user service, service registry, distributed system design, and RESTful APIs for seamless integration.",
      technologies: ["Java", "Spring Boot", "Microservices", "Eureka", "REST API"],
      github: "https://github.com/KUMAR-VSK/E-commerce-microservice-user-service",
      live: null,
      icon: <FaShoppingCart className="w-12 h-12" />,
      status: "Active"
    },
    {
      title: "Smart Stay",
      description: "AI-powered hotel recommendation system with intelligent search, personalized suggestions, booking management, and user-friendly interface for finding the perfect accommodation.",
      technologies: ["JavaScript", "React", "AI/ML", "REST API"],
      github: "https://github.com/KUMAR-VSK/Smart-Stay",
      live: null,
      icon: <FaHotel className="w-12 h-12" />,
      status: "Active"
    },
    {
      title: "Paste Bin Clone",
      description: "Code snippet sharing platform built with TypeScript featuring syntax highlighting, expiration settings, private/public pastes, and clean UI for developers to share code snippets.",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      github: "https://github.com/KUMAR-VSK/PASTE-BIN",
      live: null,
      icon: <FaClipboard className="w-12 h-12" />,
      status: "Active"
    },
    {
      title: "Fitness Navigator",
      description: "Python-based fitness navigation system with workout tracking, exercise recommendations, progress monitoring, and personalized fitness plans to help users achieve their health goals.",
      technologies: ["Python", "Flask", "SQLite", "REST API"],
      github: "https://github.com/KUMAR-VSK/FITNESS-NAVIGATOR",
      live: null,
      icon: <FaDumbbell className="w-12 h-12" />,
      status: "Active"
    }
  ]

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (!container) return

    const cardWidth = 500 + 24
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
    
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = 500 + 24
      const index = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications, microservices, and innovative solutions
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-rotate-12 shadow-lg border border-white/30"
            aria-label="Previous project"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg border border-white/30"
            aria-label="Next project"
          >
            <FaChevronRight size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw-4rem)] max-w-[500px] snap-center"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 h-full group/card relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="text-white mb-6 group-hover/card:rotate-6 transition-transform duration-500">
                    {project.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover/card:opacity-80 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500"
                    >
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-black rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
                      >
                        <FaExternalLinkAlt size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current
                  if (container) {
                    const cardWidth = 500 + 24
                    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-white' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-6 text-gray-500 text-sm animate-bounce">
            <span className="inline-flex items-center gap-2">
              <FaChevronLeft size={12} />
              Swipe or use arrows to explore
              <FaChevronRight size={12} />
            </span>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/KUMAR-VSK?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
          >
            <FaGithub size={24} />
            <span>View All 23+ Repositories</span>
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
