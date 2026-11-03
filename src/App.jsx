import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Process from './components/Process'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
      </main>
    </div>
  )
}

export default App
