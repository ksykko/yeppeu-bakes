import { createContext, useState } from 'react'

const addCartItem = (
    cartItems,
    productToAdd,
    productName,
    selectedQuantity,
    additionalInstruction
) => {
    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.priceId === productToAdd.priceId
    )

    // If it is, add the selected quantity to the existing quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.priceId === productToAdd.priceId
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity + selectedQuantity,
                      additionalInstruction,
                  }
                : cartItem
        )
    }

    // If it isn't, add the product to the cart with the selected quantity
    return [
        ...cartItems,
        { ...productToAdd, productName, quantity: selectedQuantity, additionalInstruction },
    ]
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
})

// productToAdd must be based on the price

/*
    price.priceId,
    price.productName,
    price.cost,
    price.qty,
    additionalInstruction,
    quantity
*/

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (
        productToAdd,
        selectedQuantity,
        additionalInstruction
    ) => {
        setCartItems(
            addCartItem(
                cartItems,
                productToAdd,
                selectedQuantity,
                additionalInstruction
            )
        )
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
