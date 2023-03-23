import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../contexts/cart-context'
import { useNavigate } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/shop/check-out')
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
        </div>
    )
}

export default CartDropdown
