import React from "react"
import { useShoppingCart } from "./context/ShoppingCartContext"

export default function ItemCard({ image, price, name, sku }) {
    const { getItemQuantity, incrementItemQuantity, decrementItemQuantity } =
        useShoppingCart()
    let quantity = getItemQuantity(sku)
    return (
        <div className="block p-6 max-w-sm min-w-[300px] max-h-900 min-h-[250px] bg-white rounded-lg border border-gray-200 shadow-md hober:bg-gray-100 ">
            <img src={image} alt={name} className="object-contain h-80 w-90" />
            <div className="grid grid-cols-2 justify-between">
                <h5 class="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {name}
                </h5>
                <div class="h-10 w-32 justify-self-end">
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            onClick={() => {
                                decrementItemQuantity(sku)
                            }}
                        >
                            <span class="m-auto text-2xl font-thin">−</span>
                        </button>
                        <span
                            type="number"
                            class="justify-center focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        >
                            {quantity}
                        </span>
                        <button
                            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                            onClick={() => incrementItemQuantity(sku)}
                        >
                            <span class="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>
                <p className="text-sm mb-2 text-gray-500">{price} kr</p>
            </div>
        </div>
    )
}
