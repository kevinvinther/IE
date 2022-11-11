import "./App.css"
// import Front from "./Front"
import Navbar from "./Navbar"
import ItemCard from "./ItemCard"
// import About from "./About"

function App() {
  const database = JSON.parse(
    JSON.stringify(require("./data/database.json"))
  ).products
  const cards = database.map((product) => (
    <ItemCard image={product.image} name={product.name} price={product.price} />
  ))
  return (
    <div>
      <Navbar />
      <div className="max-w-10 mx-20 my-10 grid gap-x-10 gap-y-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {cards}
      </div>
    </div>
  )
}

export default App
