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
import BackgroundEffects from './components/BackgroundEffects'

function App() {
  return (
    <>
      <BackgroundEffects />
      <ToastContainer />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg">Skip to main content</a>
      <div className="min-h-screen scroll-smooth">
        <Header />
        <main id="main-content" className="container mx-auto px-4">
          <Hero />
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
