import "./index.css"
import Home from "./Home"
import Navbar from "./Navbar"
import About from "./About"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
