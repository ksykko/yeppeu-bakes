import { useContext, useState } from 'react'

import { CartContext } from '../../contexts/cart-context'

import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

const CheckoutItem = ({ cartItem, index }) => {
    const {
        priceId,
        productImage,
        productName,
        quantity,
        qty,
        cost,
        additionalInstruction,
    } = cartItem

    const { cartItems, addItemToCart, clearItemFromCart } =
        useContext(CartContext)

    const [selectedQuantities, setSelectedQuantities] = useState(
        cartItems.map((item) => item.quantity)
    )

    const handleQuantityChange = (index, event) => {
        const newSelectedQuantities = [...selectedQuantities]
        newSelectedQuantities[index] = Number(event.target.value)
        setSelectedQuantities(newSelectedQuantities)

        const cartItem = cartItems[index]
        addItemToCart(
            cartItem,
            cartItem.productImage,
            cartItem.productName,
            Number(event.target.value),
            cartItem.productCost,
            cartItem.additionalInstruction
        )
    }

    const clearItemHandler = () => clearItemFromCart(cartItem)

    return (
        <tr
            key={priceId}
            className="bg-lightestPeach border-b hover:bg-whitePeach"
        >
            <td className="w-36 p-4">
                <img
                    className="h-28 w-28 object-cover rounded-xl"
                    src={productImage}
                    alt={productName}
                />
            </td>
            <td className="px-6 py-4 font-semibold text-darkestBrown">
                {qty} {productName}
            </td>
            <td className="px-6 py-4">
                <div className="relative">
                    <select
                        value={selectedQuantities[index]}
                        onChange={(e) => handleQuantityChange(index, e)}
                        className="block appearance-none w-full text-darkestBrown bg-white border border-gray-200 hover:border-lightBrown px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-lightBrown"
                    >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                            (number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                            )
                        )}
                    </select>

                    <svg
                        className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                    </svg>
                </div>
            </td>
            <td className="px-6 py-4">
                {/* Textarea */}
                <textarea
                    className="w-full text-justify h-24 px-4 py-2 border text-darkestBrown text-sm border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lightBrown focus:border-transparent placeholder:text-xs resize-none no-scrollbar"
                    placeholder="If you order more than one flavor, you can note here the quantity of each flavor. Thank you!"
                    defaultValue={additionalInstruction}
                    onChange={(e) => {
                        addItemToCart(
                            cartItem,
                            productImage,
                            productName,
                            quantity,
                            cost,
                            e.target.value
                        )
                    }}
                ></textarea>
            </td>
            <td className="px-6 py-4 font-bold text-xl text-center text-darkestBrown font-playfairDisplay">
                ₱{cost * quantity}
            </td>
            <td className="px-6 py-4">
                <div className="flex items-cente justify-center">
                    <span>
                        <MdOutlineRemoveShoppingCart
                            size={25}
                            className="text-red-500 cursor-pointer hover:opacity-80"
                            onClick={clearItemHandler}
                        />
                    </span>
                </div>
            </td>
        </tr>
    )
}

export default CheckoutItem
