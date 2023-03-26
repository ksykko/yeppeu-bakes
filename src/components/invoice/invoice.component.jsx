import { Fragment, useContext } from 'react'

import { UserContext } from '../../contexts/user.context'

import { useLocation } from 'react-router-dom'
import Logo from '../../assets/logo-nobg.png'

const Invoice = () => {
    const { currentUser } = useContext(UserContext)
    const { displayName, email } = currentUser || { displayName: '', email: '' }

    const location = useLocation()

    const { order } = location.state || { order: null }
    const { orderId, createdAt, status, totalCost, cartItems } = order || {
        orderId: 0,
        totalCost: 0,
        createdAt: null,
        status: '',
        cartItems: [],
    }

    const subtotal = cartItems.reduce((accumulator, currentItem) => {
        const itemTotal = currentItem.cost * currentItem.quantity
        return accumulator + itemTotal
    }, 0)

    const total = subtotal + 50

    return (
        <Fragment>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 text-darkestBrown">
                <div className="max-w-lg md:max-w-5xl bg-white shadow-lg">
                    <div className="flex justify-between p-4">
                        <div>
                            <div className=" inline-flex">
                                <img src={Logo} alt="" className="w-20" />
                            </div>

                            <p className="text-base">
                                This is the official receipt of your order.
                            </p>
                        </div>
                        <div className="p-2">
                            <ul className="flex">
                                <li className="flex flex-col items-center p-2 border-l-2 border-lightBrown border-opacity-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-lightBrown mb-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                        />
                                    </svg>
                                    <span className="text-xs">
                                        https://yeppeubakes.netlify.app/
                                    </span>
                                    <span className="text-xs">
                                        https://www.instagram.com/yeppeubakes/
                                    </span>
                                </li>
                                <li className="flex flex-col items-center p-2 border-l-2 border-lightBrown border-opacity-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-lightBrown mb-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-sm">
                                        Manila, Philippines
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-lightBrown"></div>
                    <div className="flex justify-between p-4">
                        <div>
                            <h6 className="font-bold">
                                Order Date :{' '}
                                <span className="text-sm font-medium">
                                    {createdAt &&
                                        new Date(
                                            createdAt.seconds * 1000
                                        ).toLocaleDateString()}
                                </span>
                            </h6>

                            <h6 className="font-bold">
                                Order ID :{' '}
                                <span className="text-sm font-medium">
                                    {`#${orderId}`}
                                </span>
                            </h6>
                        </div>
                        <div className="w-40">
                            <address className="text-sm">
                                <span className="font-bold"> Billed To : </span>
                                {displayName} 795 Folsom Ave San Francisco, CA
                                94107 P: (123) 456-7890
                            </address>
                        </div>
                        <div className="w-40">
                            <address className="text-sm">
                                <span className="font-bold">Ship To :</span>
                                {displayName} 800 Folsom Ave San Francisco, CA
                                94107 P: + 111-456-7890
                            </address>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex justify-center p-4 mb-2">
                        <div className="border-b border-gray-500 shadow">
                            <table className="">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-xs text-gray-500 ">
                                            #
                                        </th>
                                        <th className="px-4 py-2 text-xs text-gray-500 ">
                                            Product Name
                                        </th>
                                        <th className="px-4 py-2 text-xs text-left text-gray-500 ">
                                            Quantity
                                        </th>
                                        <th className="px-4 py-2 text-xs text-left text-gray-500 ">
                                            Price
                                        </th>
                                        <th className="px-4 py-2 text-xs text-left text-gray-500 ">
                                            Subtotal
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white font-mono">
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-2 text-sm text-gray-500 ">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-500 ">
                                                {item.productName}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-500 ">
                                                {item.quantity}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-500 ">
                                                {item.cost}
                                            </td>
                                            <td className="px-4 py-2 text-sm text-gray-500 ">
                                                {item.cost * item.quantity}
                                            </td>
                                        </tr>
                                    ))}

                                    <tr className="">
                                        <td colspan="3"></td>
                                        <td className="text-sm font-bold">
                                            Sub Total
                                        </td>
                                        <td className="text-sm font-bold pl-3 tracking-wider">
                                            <b>₱{subtotal}</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colspan="3"></th>
                                        <td className="text-sm font-bold">
                                            <b>Shipping Fee</b>
                                        </td>
                                        <td className="text-sm font-bold pl-3">
                                            <b>₱50.00</b>
                                        </td>
                                    </tr>
                                    <tr className="text-white bg-darkBrown">
                                        <th colspan="3"></th>
                                        <td className="text-sm font-bold">
                                            <b>Total</b>
                                        </td>
                                        <td className="text-sm pl-3 font-bold">
                                            <b>₱{total}.00</b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <div className="flex justify-between p-4">
                        <div>
                            <h3 className="text-xl">Terms And Condition :</h3>
                            <ul className="text-xs list-disc list-inside">
                                <li>
                                    All accounts are to be paid within 7 days
                                    from receipt of invoice.
                                </li>
                                <li>
                                    To be paid by cheque or credit card or
                                    direct payment online.
                                </li>
                                <li>
                                    If account is not paid within 7 days the
                                    credits details supplied.
                                </li>
                            </ul>
                        </div>
                        <div className="p-4">
                            <h3>Signature</h3>
                            <div className="text-4xl italic text-indigo-500">
                                AAA
                            </div>
                        </div>
                    </div> */}
                    <div className="w-full h-0.5 bg-lightBrown"></div>

                    <div className="p-4">
                        <div className="flex items-center justify-center">
                            Thank you very much for buying our baked goods!
                        </div>
                        <div className="flex items-end justify-end space-x-3">
                            <button className="px-4 py-2 text-sm text-green-600 bg-green-100">
                                Print
                            </button>
                            <button className="px-4 py-2 text-sm text-blue-600 bg-blue-100">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Invoice
