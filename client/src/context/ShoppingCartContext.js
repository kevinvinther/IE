import { useContext, createContext, useState } from "react"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [cart, setCart] = useState([])

    // Get the total number of items for unique item in  cart
    function getItemQuantity(sku) {
        console.log("getItemQuantity", sku)
        // If it can't find an item with the id, say the item has 0 quanityt
        return cart.find((item) => item.sku === sku)?.quantity || 0
    }

    // Increment the quantity of an item in the cart
    function incrementItemQuantity(sku) {
        console.log("incrementItemQuantity", sku)
        setCart((cart) => {
            const item = cart.find((item) => item.sku === sku)
            if (item) {
                item.quantity = item.quantity + 0.5
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
                item.quantity = item.quantity - 0.5
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
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
