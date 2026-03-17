import React from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState('All')
  const scrollContainerRef = React.useRef(null)

  const filterOptions = ['All', 'Software', 'AI/ML', 'Backend']

  const getFilteredProjects = () => {
    if (activeFilter === 'All') return projects
    return projects.filter(project =>
      project.category === activeFilter
    )
  }

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const projects = [
    {
      title: 'Personal Finance Manager',
      subtitle: 'Tax & Investment Guide',
      description: 'A robust software application built with Spring Boot backend for secure tax calculations and MySQL database management, paired with React frontend for an intuitive user experience.',
      features: [
        'Automated tax calculation based on Indian income tax slabs',
        'Investment portfolio optimization recommendations',
        'Real-time gold price tracking with historical data',
        'Secure user data management and privacy protection'
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'React.js', 'REST APIs'],
      deployment: 'Vercel + Railway',
      icon: '💰',
      github: '#',
      live: '#',
      category: 'Software',
      tags: ['Finance', 'Full Stack']
    },
    {
      title: 'Smart Stay',
      subtitle: 'AI Hotel Recommendation System',
      description: 'An intelligent travel companion that leverages machine learning algorithms to provide personalized hotel recommendations, local dining options, and attraction suggestions.',
      features: [
        'ML-powered hotel recommendation engine',
        'Personalized dining and attraction recommendations',
        'User feedback analysis for continuous improvement',
        'Interactive travel planning interface'
      ],
      techStack: ['Python', 'Machine Learning', 'React', 'APIs'],
      deployment: 'TBD',
      icon: '🏨',
      github: '#',
      live: '#',
      category: 'AI/ML',
      tags: ['AI', 'Travel']
    },
    {
      title: 'Bank Loan Approval',
      subtitle: 'Prediction System',
      description: 'A machine learning solution that streamlines the loan approval process by analyzing applicant data and providing instant approval predictions with confidence scoring.',
      features: [
        'ML classification for loan approval prediction',
        'Comprehensive applicant data analysis',
        'Real-time prediction with confidence scoring',
        'Model performance monitoring and reporting'
      ],
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      deployment: 'Live',
      icon: '🏦',
      github: '#',
      live: 'https://banking-deployment.vercel.app/',
      category: 'AI/ML',
      tags: ['ML', 'Finance']
    },
    {
      title: 'Microservices E-Commerce',
      subtitle: 'Backend System',
      description: 'Designed and developed a scalable microservices-based e-commerce backend following industry-standard architecture with independent services enabling modular development.',
      features: [
        'Independent microservices (User, Product, Order)',
        'API Gateway with centralized routing',
        'Eureka Service Registry for dynamic discovery',
        'JWT-based authentication with Spring Security'
      ],
      techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Docker'],
      deployment: 'Docker',
      icon: '🛒',
      github: '#',
      live: '#',
      category: 'Backend',
      tags: ['Microservices', 'Cloud']
    }
  ]

  const filteredProjects = getFilteredProjects()

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black pointer-events-none"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10 px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-slide-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 animate-scale-in"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-slide-up stagger-1">
            Explore my portfolio of full-stack applications, AI/ML solutions, and scalable backend systems
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-12 animate-slide-up stagger-2">
          <div className="inline-flex flex-wrap gap-3 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
            {filterOptions.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 animate-bounce-in ${
                  activeFilter === filter
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group animate-fade-in stagger-3">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 hover:rotate-12 shadow-2xl"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-125 hover:-rotate-12 shadow-2xl"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[500px] snap-center"
              >
                <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/20 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 group/card">
                  {/* Header */}
                  <div className="bg-white/5 p-6 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover/card:bg-white/10 transition-all duration-700"></div>
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border-2 border-white/30 group-hover/card:scale-110 group-hover/card:border-white/50 transition-all flex-shrink-0 shadow-lg">
                        <span className="text-4xl grayscale group-hover/card:grayscale-0 transition-all">{project.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl font-black text-white mb-1 leading-tight">{project.title}</h3>
                        <p className="text-gray-300 text-sm font-semibold mb-3">{project.subtitle}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-xs font-bold text-white">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div>
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center text-xs border border-white/20">✓</span>
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-white mt-1 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-black/30 border border-white/10 rounded-lg text-xs font-medium text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {project.deployment}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.github === '#' ? (
                          <span className="px-4 py-2 bg-white/5 text-gray-500 font-medium rounded-xl text-sm border border-white/10 cursor-not-allowed">
                            Private
                          </span>
                        ) : (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all text-sm border border-white/20 hover:border-white/40"
                          >
                            GitHub
                          </a>
                        )}
                        {project.live === '#' ? (
                          <span className="px-4 py-2 bg-white/5 text-gray-500 font-medium rounded-xl text-sm border border-white/10 cursor-not-allowed">
                            Coming Soon
                          </span>
                        ) : (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            Live Demo →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredProjects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* Swipe Hint */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>←</span>
            <span>Swipe or use arrows to explore projects</span>
            <span>→</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
