import SplashCursor from './components/SplashCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <SplashCursor
        VELOCITY_DISSIPATION={3}
        SPLAT_FORCE={3500}
        COLOR_UPDATE_SPEED={18}
        COLOR="#ffffff"
        RAINBOW_MODE={false}
      />
      <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#ff2a2a] selection:text-white">
        <Preloader />
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechnicalSkills />
          <Services />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
