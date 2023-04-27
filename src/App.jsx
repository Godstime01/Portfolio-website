import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import SingleProject from "./components/SingleProject";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>

    </div>
  )
}

export default App
