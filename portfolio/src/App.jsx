import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GitHubStats from './components/GitHubStats'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToastContainer from './components/ToastContainer'
import LoadingScreen from './components/LoadingScreen'
import ThreeDBackground from './components/ThreeDBackground'
import SkillsCanvas from './components/SkillsCanvas'
import FooterParticles from './components/FooterParticles'
import { VisualsProvider } from './contexts/VisualsContext'
import Resume from './components/Resume'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Remove artificial loading - load immediately
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <VisualsProvider>
      <ThreeDBackground />
      <SkillsCanvas />
      <FooterParticles />
      <Resume />
      <ToastContainer />
      <div className="min-h-screen scroll-smooth">
        <Header />
        <Hero />
        <main className="container mx-auto px-4">
          <About />
          <Skills />
          <Projects />
          <GitHubStats />
          <Education />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </VisualsProvider>
  )
}

export default App
