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
                      quantity: selectedQuantity,
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


const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(
        (cartItem) => cartItem.priceId !== cartItemToClear.priceId
    )
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        )
        setCartCount(newCartCount)
    }, [cartItems])


    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.productCost,
            0
        )
        setCartTotal(newCartTotal)
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


    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
