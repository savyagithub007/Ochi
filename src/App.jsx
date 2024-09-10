import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Eyes from './components/Eyes.jsx'
import Featured from './components/Featured.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import Clients from './components/Clients.jsx'
import Ready from './components/Ready.jsx'

function App() {


const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured /> 
      <Clients />
      <Cards />
      <Ready />
      <Footer />
    </div>
  )
}

export default App
