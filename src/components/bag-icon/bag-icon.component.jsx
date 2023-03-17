import { useContext } from 'react'

import { ReactComponent as ShoppingBag } from '../../assets/svgs/shopping-bag.svg'

import { CartContext } from '../../contexts/cart-context'

const BagIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <div onClick={toggleIsCartOpen} className="cart-icon-container -inset-x-3 mb-1 select-none">
            <ShoppingBag className="shopping-icon" />
            <span className="item-count font-sans inset-y-4">0</span>
        </div>
    )
}

export default BagIcon
