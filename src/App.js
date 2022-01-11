// Import
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Connect from './component/Connect';
import Footer from './component/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Connect />
      <Footer />
    </div>
  );
}


export default App;