import React from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filterOptions = ['All', 'Software', 'AI/ML', 'Backend']

  const getFilteredProjects = () => {
    if (activeFilter === 'All') return projects
    return projects.filter(project =>
      project.category === activeFilter
    )
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

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of full-stack applications, AI/ML solutions, and scalable backend systems
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap gap-3 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {getFilteredProjects().map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="bg-white/5 p-6 border-b border-white/10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform flex-shrink-0">
                    <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{project.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{project.title}</h3>
                    <p className="text-gray-300 text-sm font-medium mb-3">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white">
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
                    <span className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center text-xs">✓</span>
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
                        className="px-4 py-2 bg-white hover:bg-gray-200 text-black font-bold rounded-xl transition-all text-sm shadow-lg hover:shadow-xl"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
