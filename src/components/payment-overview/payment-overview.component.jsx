import { useContext } from 'react'

import { CartContext } from '../../contexts/cart-context'

import { Link } from 'react-router-dom'

const PaymentOverview = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className="max-w-5xl mx-auto pt-5 pb-10">
            {/* Back Button */}
            <div className="flex justify-start mb-5">
                <button className="px-8 py-2 text-white bg-lightBrown rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90">
                    <Link to="/shop/check-out">Back</Link>
                </button>
            </div>

            <div class="w-full bg-lightestPeach rounded-2xl border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div class="w-full">
                    <div class="-mx-3 md:flex items-start">
                        <div class="px-3 md:w-7/12 lg:pr-10">
                            <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                {/* <div class="w-full flex items-center">
                                    <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                        <img
                                            src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h6 class="font-semibold uppercase text-darkestBrown">
                                            Ray Ban Sunglasses.
                                        </h6>
                                        <p class="text-gray-400">x 1</p>
                                    </div>
                                    <div>
                                        <span class="font-semibold text-darkestBrown text-xl">
                                            $210
                                        </span>
                                        <span class="font-semibold text-darkestBrown text-sm">
                                            .00
                                        </span>
                                    </div>
                                </div> */}
                                {cartItems.map((item, index) => {
                                    const {
                                        priceId,
                                        productImage,
                                        productName,
                                        quantity,
                                        qty,
                                        cost,
                                        additionalInstruction,
                                    } = item

                                    return (
                                        <div
                                            key={index}
                                            class="w-full flex items-center mb-2"
                                        >
                                            <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <img
                                                    src={productImage}
                                                    alt=""
                                                />
                                            </div>
                                            <div class="flex-grow pl-3">
                                                <h6 class="font-semibold uppercase text-darkestBrown">
                                                    {productName}
                                                </h6>
                                                <p class="text-gray-400">
                                                    {qty} x {quantity}
                                                </p>
                                                <p class="text-gray-400">
                                                    {additionalInstruction}
                                                </p>
                                            </div>
                                            <div>
                                                <span class="font-extrabold text-darkestBrown text-xl font-playfairDisplay">
                                                    ₱{cost}
                                                </span>
                                                <span class="font-extrabold text-darkestBrown text-sm font-playfairDisplay">
                                                    .00
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div class="mb-6 pb-6 border-b border-gray-200">
                                <div class="-mx-2 flex items-end justify-end">
                                    <div class="flex-grow px-2 lg:max-w-xs">
                                        <label class="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                            Discount code
                                        </label>
                                        <div>
                                            <input
                                                class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                placeholder="XXXXXX"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div class="px-2">
                                        <button class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                                            APPLY
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div class="w-full flex mb-3 items-center">
                                    <div class="flex-grow">
                                        <span class="text-darkestBrown">
                                            Subtotal
                                        </span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-extrabold font-playfairDisplay">
                                            ₱{cartTotal}.00
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="flex-grow">
                                        <span class="text-darkestBrown">
                                            Shipping Fee
                                        </span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-extrabold font-playfairDisplay">
                                            ₱50.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div class="w-full flex items-center">
                                    <div class="flex-grow">
                                        <span class="text-darkestBrown">Total</span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-semibold text-gray-400 text-sm">
                                            PESOS
                                        </span>{' '}
                                        <span class="font-extrabold font-playfairDisplay">
                                            ₱{cartTotal + 50}.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3 md:w-5/12">
                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                <div class="w-full flex mb-3 items-center">
                                    <div class="w-32">
                                        <span class="text-darkestBrown font-semibold">
                                            Contact
                                        </span>
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <span>Scott Windon</span>
                                    </div>
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="w-32">
                                        <span class="text-darkestBrown font-semibold">
                                            Billing Address
                                        </span>
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <span>
                                            123 George Street, Sydney, NSW 2000
                                            Australia
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div class="w-full p-3 border-b border-gray-200">
                                    <div class="mb-5">
                                        <label
                                            for="type1"
                                            class="flex items-center cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                class="form-radio h-5 w-5 text-indigo-500"
                                                name="type"
                                                id="type1"
                                                checked
                                            />
                                            <img
                                                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                                class="h-6 ml-3"
                                                alt=""
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <div class="mb-3">
                                            <label class="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                                Name on card
                                            </label>
                                            <div>
                                                <input
                                                    class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                    placeholder="John Smith"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                                Card number
                                            </label>
                                            <div>
                                                <input
                                                    class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                    placeholder="0000 0000 0000 0000"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-3 -mx-2 flex items-end">
                                            <div class="px-2 w-1/3">
                                                <label class="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                                    Expiration date
                                                </label>
                                                <div>
                                                    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors cursor-pointer">
                                                        <option value="01">
                                                            01 - Jan
                                                        </option>
                                                        <option value="02">
                                                            02 - Feb
                                                        </option>
                                                        <option value="03">
                                                            03 - Mar
                                                        </option>
                                                        <option value="04">
                                                            04 - Apr
                                                        </option>
                                                        <option value="05">
                                                            05 - May
                                                        </option>
                                                        <option value="06">
                                                            06 - Jun
                                                        </option>
                                                        <option value="07">
                                                            07 - Jul
                                                        </option>
                                                        <option value="08">
                                                            08 - Aug
                                                        </option>
                                                        <option value="09">
                                                            09 - Sep
                                                        </option>
                                                        <option value="10">
                                                            10 - Oct
                                                        </option>
                                                        <option value="11">
                                                            11 - Nov
                                                        </option>
                                                        <option value="12">
                                                            12 - Dec
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="px-2 w-1/4">
                                                <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors cursor-pointer">
                                                    <option value="2020">
                                                        2020
                                                    </option>
                                                    <option value="2021">
                                                        2021
                                                    </option>
                                                    <option value="2022">
                                                        2022
                                                    </option>
                                                    <option value="2023">
                                                        2023
                                                    </option>
                                                    <option value="2024">
                                                        2024
                                                    </option>
                                                    <option value="2025">
                                                        2025
                                                    </option>
                                                    <option value="2026">
                                                        2026
                                                    </option>
                                                    <option value="2027">
                                                        2027
                                                    </option>
                                                    <option value="2028">
                                                        2028
                                                    </option>
                                                    <option value="2029">
                                                        2029
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="px-2 w-1/3">
                                                <label class="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                                    Security code
                                                </label>
                                                <div>
                                                    <input
                                                        class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                        placeholder="000"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full p-3">
                                    <label
                                        for="type2"
                                        class="flex items-center cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            class="form-radio h-5 w-5 text-indigo-500"
                                            name="type"
                                            id="type2"
                                        />
                                        <img
                                            src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/gcash-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1"
                                            width="80"
                                            class="ml-3"
                                            alt=""
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold font-playfairDisplay">
                                    <i class="mdi mdi-lock-outline mr-1"></i>{' '}
                                    PAY NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview
