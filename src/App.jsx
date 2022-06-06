import React, { useEffect, useRef, } from 'react';
import gsap from 'gsap';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import './App.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  let app = useRef(null);

  useEffect(() => {
    gsap.to(app, 0, { css: { visibility: 'visible' } })
  })

  return (
    <div ref={element => app = element} className='app'>
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
