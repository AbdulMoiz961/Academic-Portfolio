import React, { useState, useEffect} from 'react'

import { Navbar } from './components'
import { Home, Skills, Projects, Contact, Footer, Preloader } from './containers'

import './App.css'

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <div className='App'>
        {/* <Preloader load={load} /> */}
        <div className='AppRest'>
          <Navbar />
          <Home />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
  )
}

export default App
