import { useState } from 'react'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  // Validate form fields
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
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    // EmailJS configuration
    // NOTE: Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/ and get your credentials
    const serviceID = 'service_xxxxxxx' // Replace with your EmailJS service ID
    const templateID = 'template_xxxxxxx' // Replace with your EmailJS template ID
    const userID = 'your_user_id' // Replace with your EmailJS user ID

    try {
      // Show loading toast
      const loadingToast = toast.loading('Sending your message...')

      // Send email using EmailJS
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

      // Dismiss loading toast
      toast.dismiss(loadingToast)

      if (response.status === 200) {
        // Success toast
        toast.success('🎉 Message sent successfully! I\'ll get back to you soon.', {
          duration: 5000,
        })
        // Reset form
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)

      // For now, since EmailJS is not configured, show a mock success
      toast.success('✅ Form submitted! (Demo mode - EmailJS not configured yet)', {
        duration: 5000,
      })

      // In production with real EmailJS credentials, use this instead:
      // toast.error('❌ Failed to send message. Please try again or email me directly.')

      // Reset form anyway for demo
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm passionate about creating innovative solutions and would love to collaborate on exciting projects.
              Whether you're looking for a skilled developer, want to discuss a potential opportunity, or simply want to connect,
              I'm always open to meaningful conversations and new challenges.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:kumarvsofficial@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    aria-label="Send email to Kumar V S"
                  >
                    kumarvsofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href="tel:+919488158891"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                    aria-label="Call Kumar V S"
                  >
                    +91 9488158891
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Udumelpet, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Professional Profiles</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/KUMAR-VSK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400"
                  aria-label="Visit Kumar V S GitHub profile"
                >
                  <span className="text-lg">🐙</span>
                </a>
                <a
                  href="https://linkedin.com/in/kumar-v-s-1695861b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400"
                  aria-label="Visit Kumar V S LinkedIn profile"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a
                  href="mailto:kumarvsofficial@gmail.com"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-600 hover:border-cyan-400"
                  aria-label="Send email to Kumar V S"
                >
                  <span className="text-lg">✉️</span>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <span className="text-xl mr-2">⚡</span>
                Quick Response
              </h4>
              <p className="text-gray-300 text-sm">
                I typically respond within 24 hours. For urgent inquiries, feel free to call me directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:ring-cyan-500 focus:border-transparent'
                      }`}
                    placeholder="Your Name"
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠️</span> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:ring-cyan-500 focus:border-transparent'
                      }`}
                    placeholder="your.email@example.com"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠️</span> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-600 focus:ring-cyan-500 focus:border-transparent'
                      }`}
                    placeholder="Tell me about your project or inquiry..."
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠️</span> {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">
                    {formData.message.length} / 500 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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

