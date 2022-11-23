import storeItems from "./data/database.json"

export function CartItem({ sku, quantity }) {
    const item = storeItems.products.find((item) => item.sku === sku)
    if (!item) {
        return null
    }
    return (
        <div className="flex flex-row w-[30em]">
            <img
                src={item.image}
                alt={item.name}
                className="object-cover w-20 h-10 rounded m-2 self-start "
            />
            <h1 class="text-lg font-bold p-2">{item.name}</h1>
            <span className="text-gray-500 p-2 m-auto mr-0">
                {quantity} x {item.price} = {item.price * quantity}dkk
            </span>
        </div>
    )
}
