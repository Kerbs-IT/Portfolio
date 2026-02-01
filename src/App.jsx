import { useState } from 'react'


import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import TechStack from './components/TechStack'
import Education from './components/Education'

function App() {
 

  return (
    <>
      <Header name="Kerby Buan"></Header>
      <main>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
          <Education/>
          <TechStack />
        </section>
      </main>
    </>
  );
}

export default App
