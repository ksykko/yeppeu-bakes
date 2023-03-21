import { useContext } from "react"

import { CartContext } from "../../contexts/cart-context"

import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="absolute h-80 w-80 p-5 flex flex-col z-10 top-10 right-3 bg-lightestPeach rounded-b-xl shadow-2xl">
            <div className=" h-60 flex flex-col overflow-scroll no-scrollbar">
                {cartItems.map((item) =>
                    <CartItem key={item.priceId} cartItem={item} />
                )}
            </div>
            <button className='btn-default font-medium tracking-widest uppercase font-playfairDisplay'>Checkout</button>
        </div>
    )
}

export default CartDropdown
