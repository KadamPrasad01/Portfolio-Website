import React from 'react'
import Navbar from './components/Navbar.jsx'
import ClickSpark from './components/ClickSpark.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'
import Education from './pages/Education.jsx'
import Experience from './pages/Experience.jsx'

function App() {
  return (
    <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className='bg-[#09090B] flex flex-col justify-center items-center px-5 sm:px-20 md:px-32 lg:px-40 xl:px-80 text-white font-inter select-none'>
        <Navbar />
        <Home />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <p className='text-[#A1A1AA] mb-5 text-sm'>© 2025 Prasad Kadam. All rights reserved.</p>
      </div>
    </ClickSpark>
  )
}

export default App
