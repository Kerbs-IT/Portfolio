import { useState } from 'react'


import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import TechStack from './components/TechStack'

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
          <TechStack />
        </section>
      </main>
    </>
  );
}

export default App
