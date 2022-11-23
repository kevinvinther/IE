import React from "react"

export default function Product({ image, price, name, SKU }) {
  return (
    <div className="container max-w-[80%] mt-10 m-auto grid grid-cols-2">
      <img src={image} className="w-3/6" />
      <div className="justify-self-end">
        <h1 className="text-8xl font-bold ">{name}</h1>
        <p className="font-light text-gray-500 text-3xl ">{price}kr</p>
      </div>
      <sub className="text-gray-500 p-10">SKU: {SKU}</sub>
      <div class="custom-number-input h-10 w-32 justify-self-end ">
        <div class="flex flex-row h-40 w-[15em] rounded-lg relative bg-transparent mt-1 ">
          <button
            data-action="decrement"
            class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-40 rounded-l cursor-pointer outline-none"
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
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-40 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
