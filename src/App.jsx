import { useState } from 'react'


import Header from './components/Header'
import About from './components/About'

function App() {
  

  return (
    <>
      <Header name="Kerby Buan"></Header>
      <main>
        <section>
          <About />
        </section>
      </main>
    </>
  );
}

export default App
