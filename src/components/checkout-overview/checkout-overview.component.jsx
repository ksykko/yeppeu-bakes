import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { MdPayments } from 'react-icons/md'

import CheckoutItem from '../checkout-item/checkout-item.component'

export const CheckoutOverview = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    const navigate = useNavigate()

    const goToPaymentHandler = () => {
        navigate('/shop/payment')
    }

    return (
        <div className="max-w-7xl mx-auto pt-1 pb-10">
            <div className="flex-col m-6 space-y-10 rounded-2xl md:flex-row md:space-y-0 bg-opacity-0">
                <div className="flex justify-between mb-5">
                    <button className="px-8 py-2 text-white bg-lightBrown rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90">
                        <Link to="/shop">Back</Link>
                    </button>
                    <button
                        className="px-8 py-2 text-white bg-emerald-400 rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90"
                        onClick={goToPaymentHandler}
                    >
                        Proceed to Payment{' '}
                        <MdPayments className=" inline-flex " />
                    </button>
                </div>
                <div className="relative overflow-x-auto shadow-lg rounded-2xl">
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
                                <CheckoutItem
                                    key={index}
                                    cartItem={item}
                                    index={index}
                                />
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
