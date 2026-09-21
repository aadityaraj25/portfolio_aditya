import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Patterns from './components/Patterns'
import Achievements from './components/Achievements'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="app">
      <Navbar onContactClick={() => setModalOpen(true)} />
      <main>
        <Hero onContactClick={() => setModalOpen(true)} />
        <About />
        <TechStack />
        <Projects />
        <Patterns />
        <Achievements />
        <GitHubStats />
        <Contact onContactClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
