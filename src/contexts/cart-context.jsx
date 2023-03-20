import { createContext, useState, useEffect } from 'react'

const addCartItem = (
    cartItems,
    productToAdd,
    productImage,
    productName,
    selectedQuantity,
    productCost,
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
        {
            ...productToAdd,
            productImage,
            productName,
            quantity: selectedQuantity,
            productCost,
            additionalInstruction,
        },
    ]
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (
        productToAdd,
        productImage,
        productName,
        selectedQuantity,
        productCost,
        additionalInstruction
    ) => {
        setCartItems(
            addCartItem(
                cartItems,
                productToAdd,
                productImage,
                productName,
                selectedQuantity,
                productCost,
                additionalInstruction
            )
        )
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
