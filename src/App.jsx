import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import Login from './components/auth/Login'


function Home() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </Fragment>
  )
}

function App() {

  return (
      <div className="App">
      <Navbar />

        <Routes>

            <Route path='/' element={<Home />} >
            </Route>
            
            <Route path='login' element={<Login />} >
            </Route>

        </Routes>

    </div>
  )
}

export default App
