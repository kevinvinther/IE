import "./App.css"
import Home from "./Home"
import Navbar from "./Navbar"
import About from "./About"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
