import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useLenis } from './lib/useLenis'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  useLenis()

  return (
    <div className="bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
