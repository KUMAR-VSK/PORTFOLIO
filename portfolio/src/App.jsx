import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToastContainer from './components/ToastContainer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen scroll-smooth">
        <Header />
        <Hero />
        <main className="container mx-auto px-4">
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

