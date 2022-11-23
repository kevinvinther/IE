import { CartItem } from "./CartItem.js"
import storeItems from "./data/database.json"
import { useShoppingCart } from "./context/ShoppingCartContext"

export default function Checkout() {
    const { closeCart, cart } = useShoppingCart()
    return (
        <div>
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
        </div>
    )
}
