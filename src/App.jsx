import { useState } from 'react'


import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <Header name="Kerby Buan"></Header>
      <main>
        <section>
          <Home />
        </section>
        {/* <section>
          <About />
        </section> */}
      </main>
    </>
  );
}

export default App
