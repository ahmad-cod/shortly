import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LinkShortener from './components/LinkShortener'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <LinkShortener />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
