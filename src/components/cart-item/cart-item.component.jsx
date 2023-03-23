const CartItem = ({ cartItem }) => {
    const {
        priceId,
        productImage,
        productName,
        quantity,
        qty,
        cost,
        additionalInstruction,
    } = cartItem


    return (
        <div className="flex flex-row space-x-2 mb-3 bg-heroPeach rounded-xl pr-2">
            <img
                src={productImage}
                alt=""
                className=" w-1/3 rounded-tl-xl rounded-bl-xl"
            />
            <div className="flex items-center justify-center text-xs font-sans font-semibold">
                <div className="">
                    <p>
                        {qty} - {productName}
                    </p>
                    <span>
                        Qty: {quantity} x ₱{cost}
                    </span>
                    <br />
                    <span>{additionalInstruction}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
