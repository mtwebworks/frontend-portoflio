import React from 'react';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import './App.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => (
  <>
    <Nav />
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
    {/* <div className='responsive'>x</div> */}
  </>
)

export default App;