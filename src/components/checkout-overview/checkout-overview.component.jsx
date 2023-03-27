import { useContext, useState, useEffect } from 'react'

import { CartContext } from '../../contexts/cart-context'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { MdPayments } from 'react-icons/md'
import { MdArrowBackIosNew } from 'react-icons/md'

import CheckoutItem from '../checkout-item/checkout-item.component'
import AlertModal from '../alert-modal/alert-modal.component'

export const CheckoutOverview = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    const navigate = useNavigate()

    const [loading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        // simulate loading time
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    const goToPaymentHandler = () => {
        if (cartItems.length === 0) {
            setShowModal(true)
        } else {
            navigate('/shop/payment')
        }
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }

    return (
        <div className="max-w-5xl mx-auto pt-5 pb-10 relative">
            {showModal && (
                <div className="z-50" style={{ zIndex: 9999 }}>
                    <AlertModal
                        heading="Your cart is empty!"
                        message="Please add items to your cart before proceeding to checkout."
                        onClose={closeModalHandler}
                    />
                </div>
            )}
            <div className="flex-col space-y-10 rounded-2xl md:flex-row md:space-y-0 bg-opacity-0">
                <div className="flex justify-between mb-5">
                    <Link to="/shop">
                        <button className="px-8 py-2 text-white bg-lightBrown rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90">
                            <div className="flex items-center justify-center">
                                <MdArrowBackIosNew
                                    size={20}
                                    className="-ml-3 mr-1"
                                />
                                Back
                            </div>
                        </button>
                    </Link>
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
                                <th
                                    scope="col"
                                    colSpan="1"
                                    className="px-6 py-3"
                                >
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
                            {cartItems.length === 0 ? (
                                <tr className="bg-lightestPeach border-b text-center hover:bg-whitePeach">
                                    <td
                                        colSpan="6"
                                        className=" font-medium text-md py-10 text-darkestBrown"
                                    >
                                        Your cart is empty.{' '}
                                        <Link
                                            to="/shop"
                                            className=" text-buttonPeach hover:underline underline-offset-4"
                                        >
                                            Check our baked goods!
                                        </Link>
                                    </td>
                                </tr>
                            ) : (
                                cartItems.map((item, index) => (
                                    <CheckoutItem
                                        key={index}
                                        cartItem={item}
                                        index={index}
                                    />
                                ))
                            )}
                        </tbody>

                        {cartItems.length > 0 && (
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
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CheckoutOverview
