const Certifications = () => {
  const certifications = [

    {
      title: 'Java Programming Certificate',
      description: 'Complete Java Programming Course',
      issuer: 'Online Platform',
      icon: '☕'
    }
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-left border border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{cert.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
