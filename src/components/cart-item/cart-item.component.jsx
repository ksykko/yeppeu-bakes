const CartItem = ({ cartItem }) => {
    const { productName, quantity, qty, additionalInstruction } = cartItem

    return (
        <div className="text-xs font-sans font-medium mb-4">
            <p>{qty} - {productName}</p>
            <span>Qty: {quantity}</span>
            <span>{additionalInstruction}</span>
        </div>
    )
}

export default CartItem
