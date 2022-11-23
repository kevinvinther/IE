import React from "react"

export default function ItemCard({ image, price, name }) {
    // The code before the return is from https://tailwindcomponents.com/component/number-input-counter
    // This is the code that controls the counter.
    // The counter as well is from the before mentioned site.
    function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        )
        const target = btn.nextElementSibling
        let value = Number(target.value)
        value--
        target.value = value
    }

    function increment(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
            'button[data-action="decrement"]'
        )
        const target = btn.nextElementSibling
        let value = Number(target.value)
        value++
        target.value = value
    }

    const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
    )

    const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
    )

    decrementButtons.forEach((btn) => {
        btn.addEventListener("click", decrement)
    })

    incrementButtons.forEach((btn) => {
        btn.addEventListener("click", increment)
    })
    return (
        <div className="block p-6 max-w-sm min-w-[300px] max-h-900 min-h-[250px] bg-white rounded-lg border border-gray-200 shadow-md hober:bg-gray-100 ">
            <img src={image} alt={name} className="object-contain h-80 w-90" />
            <div className="grid grid-cols-2 justify-between">
                <h5 class="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {name}
                </h5>
                <div class="custom-number-input h-10 w-32 justify-self-end">
                    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button
                            data-action="decrement"
                            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                            <span class="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                            type="number"
                            class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                            name="custom-input-number"
                            value="0"
                        ></input>
                        <button
                            data-action="increment"
                            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
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
