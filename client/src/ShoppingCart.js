import { useShoppingCart } from "./context/ShoppingCartContext"

export default function ShoppingCart({ isOpen }) {
    const { closeCart } = useShoppingCart()
    if (isOpen === true) {
        return (
            <div className="flex justify-center items-center bottom-0 top-0 absolute w-[100%]">
                <div className="bg-white shadow rounded-lg p-10 m-3 justify-center">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    <button
                        className="text-red-500 font-bold right-0"
                        onClick={closeCart}
                    >
                        Close Cart
                    </button>
                </div>
            </div>
        )
    } else {
        return ""
    }
}
