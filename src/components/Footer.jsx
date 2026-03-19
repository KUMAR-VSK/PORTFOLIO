import { FaGithub, FaLinkedin, FaEnvelope, FaLink, FaPhone, FaMapMarkerAlt, FaBolt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-black mb-4 text-white">Kumar V S</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Software Developer specializing in scalable web applications with modern UI/UX design,
              secure backend APIs, and production-ready deployment solutions.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-[#333] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#333] group" aria-label="GitHub">
                <FaGithub className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-[#0077b5] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-[#0077b5] group" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:kumarvsofficial@gmail.com" className="w-12 h-12 bg-white/10 hover:bg-red-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-red-500 group" aria-label="Email">
                <FaEnvelope className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <FaLink className="w-5 h-5" />
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <FaPhone className="w-5 h-5" />
              Get In Touch
            </h4>
            <div className="space-y-4 text-gray-300">
              <a href="mailto:kumarvsofficial@gmail.com" className="flex items-start gap-3 hover:text-white transition-colors group">
                <FaEnvelope className="w-5 h-5 mt-0.5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">kumarvsofficial@gmail.com</span>
              </a>
              <a href="tel:+919488158891" className="flex items-start gap-3 hover:text-white transition-colors group">
                <FaPhone className="w-5 h-5 mt-0.5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 9488158891</span>
              </a>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5 text-white" />
                <span className="text-sm">Udumelpet, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kumar V S. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <FaBolt className="w-4 h-4" />
              Built with React, Tailwind CSS & Modern Web Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
