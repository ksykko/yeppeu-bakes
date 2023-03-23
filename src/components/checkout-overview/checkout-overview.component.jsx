import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'

import CheckoutItem from '../checkout-item/checkout-item.component'

export const CheckoutOverview = () => {
    const { cartItems, cartTotal } = useContext(CartContext)


    return (
        <div className="max-w-7xl mx-auto pt-1">
            <div className="flex-col m-6 space-y-10 shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
                <div className="relative overflow-x-auto shadow-md rounded-2xl">
                    <table className="w-full text-sm text-left text-white bg-lightBrown">
                        <thead className="text-md uppercase tracking-widest">
                            <tr className=" font-playfairDisplay text-center">
                                <th scope="col" className="px-12 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Qty
                                </th>
                                <th scope="col" className="px-12 py-3">
                                    Additional Instructions
                                </th>
                                <th scope="col" className="px-7 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <CheckoutItem key={index} cartItem={item} index={index} />
                            ))}
                        </tbody>
                        {/* Total */}
                        <tfoot>
                            <tr className="bg-lightestPeach border-b text-center hover:bg-whitePeach">
                                <td className="px-6 py-4 font-semibold text-xl text-darkestBrown font-playfairDisplay">
                                    Total:
                                </td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4 font-bold text-2xl text-center text-darkestBrown font-playfairDisplay">
                                    ₱{cartTotal}
                                </td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOverview
