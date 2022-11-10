import "./App.css"
// import Front from "./Front"
import Navbar from "./Navbar"
import ItemCard from "./ItemCard"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center gap-x-10">
        <ItemCard
          image="https://www.wmfnordic.com/assets/image-cache/images/media/3D7B8EA2-1EAF-4693-BB14B2EA0E14FE42.a83d4af7.jpg"
          price="199.95"
          name="Pan"
        />
        <ItemCard
          image="https://www.ikea.com/us/en/images/products/ikea-365-pot-with-lid-stainless-steel__1006171_pe825756_s5.jpg"
          price="299.95"
          name="Pot"
        />
        <ItemCard
          image="https://media.wired.com/photos/5fcaa4cbd840498ab676cf84/master/w_2580,c_limit/Gear-Lodge-Combo-Cooker-SOURCE-Lodge.jpg"
          price="399.95"
          name="Pan & Pot Combo jalepenos"
        />
      </div>
    </div>
  )
}

export default App
