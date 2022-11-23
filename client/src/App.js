import "./index.css"
import Home from "./Home"
import Navbar from "./Navbar"
import About from "./About"
import { Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Checkout from "./Checkout"

function App() {
  return (
    <ShoppingCartProvider>
      <div className="bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
