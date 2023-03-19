import { useContext } from "react"

import { CartContext } from "../../contexts/cart-context"

import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="absolute h-80 w-60 p-5 flex flex-col z-10 top-14 right-24 bg-lightestPeach rounded-b-xl shadow-2xl">
            <div className=" h-60 flex flex-col overflow-scroll no-scrollbar">
                {cartItems.map((item) =>
                    <CartItem key={item.priceId} cartItem={item} />
                )}
            </div>
            <button className='btn-default font-normal uppercase font-sans'>Checkout</button>
        </div>
    )
}

export default CartDropdown
