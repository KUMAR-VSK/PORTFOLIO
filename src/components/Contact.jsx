import { useState } from 'react'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBolt, FaExclamationTriangle, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const userID = import.meta.env.VITE_EMAILJS_USER_ID || 'YOUR_USER_ID'

    try {
      const loadingToast = toast.loading('Sending your message...')

      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Kumar V S',
        },
        userID
      )

      toast.dismiss(loadingToast)

      if (response.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 auto-rows-auto">
          
          {/* Header Section */}
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 p-8 text-center relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-fade-in-up">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 text-white text-xs font-black tracking-widest mb-4 border-2 border-white/40 backdrop-blur-sm shadow-lg">
                <FaBolt className="w-4 h-4" />
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Let's Work <span className="gradient-text neon-text">Together</span>
              </h2>
              <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </p>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 p-8 relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-slide-in-left">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <p className="text-white text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-green-400/30"></span>
                Contact Information
              </p>

              <div className="space-y-6">
                <a href="mailto:kumarvsofficial@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white/20 border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/40 transition-all duration-300">
                    <FaEnvelope className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Email</p>
                    <p className="text-gray-200 font-semibold">kumarvsofficial@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919488158891" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white/20 border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:border-white group-hover:shadow-2xl group-hover:shadow-white/40 transition-all duration-300">
                    <FaPhone className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Phone</p>
                    <p className="text-gray-200 font-semibold">+91 9488158891</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/20">
                  <div className="w-14 h-14 rounded-xl bg-white/20 border-2 border-white/40 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Location</p>
                    <p className="text-gray-200 font-semibold">Udumelpet, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-white text-sm font-black uppercase tracking-widest mb-4">Connect With Me</p>
                <div className="flex gap-3">
                  <a href="https://github.com/KUMAR-VSK" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center hover:scale-110 hover:rotate-6 hover:bg-[#333] hover:border-[#333] hover:shadow-2xl hover:shadow-[#333]/40 transition-all duration-300" aria-label="GitHub">
                    <FaGithub className="w-7 h-7 text-white" />
                  </a>
                  <a href="https://linkedin.com/in/kumar-v-s-1695861b2" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center hover:scale-110 hover:-rotate-6 hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-2xl hover:shadow-[#0077b5]/40 transition-all duration-300" aria-label="LinkedIn">
                    <FaLinkedin className="w-7 h-7 text-white" />
                  </a>
                  <a href="mailto:kumarvsofficial@gmail.com" className="w-14 h-14 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center hover:scale-110 hover:-rotate-6 hover:bg-red-500 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300" aria-label="Email">
                    <FaEnvelope className="w-7 h-7 text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-xl border-2 border-white/30">
                <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                  <FaBolt className="w-5 h-5 text-yellow-400" />
                  Quick Response
                </h4>
                <p className="text-gray-200 text-sm">
                  I typically respond within 24 hours. For urgent inquiries, feel free to call me directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="rounded-3xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 p-8 relative overflow-hidden group hover:border-white/50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 animate-slide-in-right">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>

            <div className="relative z-10">
              <p className="text-white text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                <FaPaperPlane className="w-5 h-5" />
                Send a Message
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${errors.name
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/30 focus:ring-white/50 focus:border-white/60 focus:bg-white/15'
                      }`}
                    placeholder="Your Name"
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <FaExclamationTriangle className="w-4 h-4" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/30 focus:ring-white/50 focus:border-white/60 focus:bg-white/15'
                      }`}
                    placeholder="your.email@example.com"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <FaExclamationTriangle className="w-4 h-4" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={5}
                    className={`w-full px-5 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.message
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-white/30 focus:ring-white/50 focus:border-white/60 focus:bg-white/15'
                      }`}
                    placeholder="Tell me about your project or inquiry..."
                    maxLength={500}
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <FaExclamationTriangle className="w-4 h-4" /> {errors.message}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-gray-400">
                    {formData.message.length} / 500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-br from-white via-gray-100 to-white backdrop-blur-xl border-2 border-white text-black hover:bg-white/90 font-black py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 neon-glow"
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact

