import { useContext, useState } from 'react'

import { CartContext } from '../../contexts/cart-context'
import { UserContext } from '../../contexts/user.context'

import { useNavigate } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const { currentUser } = useContext(UserContext)

    const navigate = useNavigate()
    const [showSignInModal, setShowSignInModal] = useState(false)
    const [showCartEmptyModal, setShowCartEmptyModal] = useState(false)

    const goToCheckoutHandler = () => {
        if (currentUser) {
            if (cartItems.length === 0) {
                setShowCartEmptyModal(true)
            } else {
                navigate('/shop/check-out')
            }
        } else {
            setShowSignInModal(true)
        }
    }

    const goToOrderTrackingHandler = () => {
        if (currentUser) {
            navigate('/shop/order-tracking')
        } else {
            setShowSignInModal(true)
        }
    }

    const closeModalHandler = () => {
        setShowSignInModal(false)
        setShowCartEmptyModal(false)
    }

    return (
        <div className="absolute h-80 w-80 p-5 flex flex-col z-10 top-10 right-0 bg-lightestPeach rounded-b-xl shadow-2xl">
            <div className=" h-60 flex flex-col overflow-scroll no-scrollbar">
                {cartItems.map((item) => (
                    <CartItem key={item.priceId} cartItem={item} />
                ))}
            </div>
            <Button
                className="btn-default font-medium tracking-widest text-center uppercase font-playfairDisplay"
                onClick={goToCheckoutHandler}
            >
                Checkout
            </Button>
            <div className="inline-flex items-center justify-center w-full -mb-3">
                <hr className="w-64 h-px my-3 bg-lightBrown border-0" />
                <button
                    className="absolute px-3 font-extrabold text-lightBrown uppercase text-xs -translate-x-1/2 bg-lightestPeach left-1/2 font-playfairDisplay hover:underline hover:underline-offset-4 tracking-widest"
                    onClick={goToOrderTrackingHandler}
                >
                    Orders
                </button>
            </div>
            {showSignInModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>
                    <div className="relative bg-white p-5 rounded-lg shadow-lg z-10">
                        <h3 className="font-bold text-lg mb-3">
                            Please sign in to continue
                        </h3>
                        <p className="mb-3 font-sans font-normal">
                            You need to sign in to your account to complete your
                            order.
                        </p>
                        <div className="mt-6">
                            <Button
                                className="bg-gray-300 hover:bg-gray-400 py-2 px-4 font-sans font-normal rounded-md"
                                onClick={closeModalHandler}
                            >
                                Close
                            </Button>
                            <Button
                                className="bg-lightBrown hover:opacity-90 text-white py-2 px-4 font-sans font-normal rounded-md ml-3"
                                onClick={() => {
                                    navigate('/sign-in')
                                    closeModalHandler()
                                }}
                            >
                                Sign in
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {showCartEmptyModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>
                    <div className="relative bg-white p-5 rounded-lg shadow-lg z-10">
                        <h3 className="font-bold text-lg mb-3">
                            Your cart is empty
                        </h3>
                        <p className="mb-3 font-sans font-normal">
                            Please add items to your cart before proceeding to
                            checkout.
                        </p>
                        <div className="mt-6">
                            <Button
                                className="bg-gray-300 hover:bg-gray-400 py-2 px-4 font-sans font-normal rounded-md"
                                onClick={closeModalHandler}
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartDropdown
