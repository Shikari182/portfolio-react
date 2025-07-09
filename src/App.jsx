import React from 'react';
import './styles.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;