import React from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filterOptions = ['All', 'Full Stack', 'AI/ML', 'ML']

  const getFilteredProjects = () => {
    if (activeFilter === 'All') return projects
    return projects.filter(project =>
      project.tag.toLowerCase().includes(activeFilter.toLowerCase())
    )
  }

  const projects = [
    {
      title: 'Personal Finance Manager (Tax & Investment Guide)',
      description: 'A full-stack financial application built with Spring Boot backend for secure tax calculations and MySQL database management, paired with React frontend for an intuitive user experience. Implements complex business logic for Indian tax systems and real-time financial data integration.',
      features: [
        'Automated tax calculation based on Indian income tax slabs',
        'Investment portfolio optimization recommendations',
        'Real-time gold price tracking with historical data analysis',
        'Secure user data management and privacy protection',
        'Responsive dashboard with financial analytics',
        'RESTful API integration for financial data services'
      ],
      techStack: 'Java, OOPs, Spring Boot, MySQL, React.js, REST APIs',
      deployment: 'Vercel (Frontend) + Railway (Backend)',
      icon: '💰',
      github: '#',
      live: '#',
      tag: 'Full Stack | Finance'
    },
    {
      title: 'Smart Stay (AI Hotel Recommendation System)',
      description: 'An intelligent travel companion that leverages machine learning algorithms to provide personalized hotel recommendations, local dining options, and attraction suggestions based on user preferences and historical booking data.',
      features: [
        'Machine learning-powered hotel recommendation engine',
        'Personalized dining and attraction recommendations',
        'User feedback analysis for continuous improvement',
        'Interactive travel planning interface',
        'Real-time availability and pricing integration',
        'Mobile-responsive design for on-the-go planning'
      ],
      techStack: 'Frontend + AI/ML Model, Dataset, APIs',
      deployment: 'TBD',
      icon: '🏨',
      github: '#',
      live: '#',
      tag: 'AI | Travel | Smart'
    },
    {
      title: 'Bank Loan Approval Prediction System',
      description: 'A machine learning solution that streamlines the loan approval process by analyzing applicant data and providing instant approval predictions. Implements industry-standard ML algorithms for accurate risk assessment and decision support.',
      features: [
        'Machine learning classification for loan approval prediction',
        'Comprehensive applicant data analysis and preprocessing',
        'Real-time prediction results with confidence scoring',
        'Secure data handling and compliance with privacy regulations',
        'Model performance monitoring and accuracy reporting',
        'Scalable architecture for high-volume processing'
      ],
      techStack: 'Python, Machine Learning (Scikit-learn), Dataset Processing',
      deployment: 'Live',
      icon: '🏦',
      github: '#',
      live: 'https://banking-deployment.vercel.app/',
      tag: 'ML | Finance | Prediction'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white animate-fade-in-up">
          Featured Projects
        </h2>

        {/* Project Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 p-2 bg-gray-800 rounded-2xl border border-gray-700">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter
                    ? 'bg-white text-black shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {getFilteredProjects().map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-300 transform hover:-translate-y-3 animate-slide-in-right group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="bg-white/5 p-6 border-b border-gray-800">
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4 group-hover:animate-bounce grayscale">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm font-medium">{project.techStack}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <span className="text-white mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>🚀 {project.deployment}</span>
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 bg-white hover:bg-gray-200 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm"
                  >
                    Live Demo
                  </a>
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
