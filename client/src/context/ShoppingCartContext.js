import { useContext, createContext, useState } from "react"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [cart, setCart] = useState([])

    const cartQuantity = cart.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    // Get the total number of items for unique item in  cart
    function getItemQuantity(sku) {
        console.log("getItemQuantity", sku)
        // If item with given SKU doesn't exist, return 0
        return cart.find((item) => item.sku === sku)?.quantity || 0
    }

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    // Increment the quantity of an item in the cart
    function incrementItemQuantity(sku) {
        console.log("incrementItemQuantity", sku)
        setCart((cart) => {
            const item = cart.find((item) => item.sku === sku)
            if (item) {
                item.quantity = item.quantity + 1
            } else {
                cart.push({ sku, quantity: 1 })
            }
            return [...cart]
        })
    }

    // Decrement the quantity of an item in the cart
    function decrementItemQuantity(sku) {
        console.log("decrementItemQuantity", sku)
        setCart((cart) => {
            const item = cart.find((item) => item.sku === sku)
            if (item) {
                item.quantity -= 1
            } else {
                cart.push({ sku, quantity: 0 })
            }
            return [...cart]
        })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                incrementItemQuantity,
                decrementItemQuantity,
                cart,
                cartQuantity,
                openCart,
                closeCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
