import { useState } from 'react';
import { Navbar, About, Hero, Portfolio, Contact } from "./components"

function App() {


  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
