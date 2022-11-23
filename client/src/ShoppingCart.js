import { useShoppingCart } from "./context/ShoppingCartContext"
import { CartItem } from "./CartItem.js"
import storeItems from "./data/database.json"

export default function ShoppingCart({ isOpen }) {
    const { closeCart, cart } = useShoppingCart()
    if (isOpen === true) {
        return (
            <div className="flex justify-center items-center bottom-0 top-0 absolute w-[100%]">
                <div className="bg-white shadow rounded-lg p-10 m-3 justify-center">
                    <div className="flex flex-row">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                        <button
                            className="text-red-500 font-bold right-0 self-end m-auto mr-0"
                            onClick={closeCart}
                        >
                            Close Cart
                        </button>
                    </div>
                    <div className="grid columns-1 mt-5">
                        {cart.map((item) => (
                            <CartItem key={item.sku} {...item} />
                        ))}
                    </div>
                    <div className="text-2xl font-bold text-right">
                        Total{" "}
                        {cart.reduce((total, cartItem) => {
                            const item = storeItems.products.find(
                                (item) => item.sku === cartItem.sku
                            )
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)}
                        dkk
                    </div>
                    <a
                        href="./checkout"
                        className="text-white rounded shadow p-3 bg-blue-500 mt-10"
                    >
                        Goto checkout
                    </a>
                    <br />
                </div>
            </div>
        )
    } else {
        return ""
    }
}
