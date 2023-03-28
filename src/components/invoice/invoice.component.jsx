import { Fragment, useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { useLocation, Link } from 'react-router-dom'

import html2pdf from 'html2pdf.js'

import Logo from '../../assets/logo-nobg.png'

import { ReactComponent as Location } from '../../assets/svgs/location.svg'
import { ReactComponent as Globe } from '../../assets/svgs/globe.svg'

import { MdArrowBackIosNew } from 'react-icons/md'

const Invoice = () => {
    const { currentUser, currentUserDetails } = useContext(UserContext)
    const { displayName, contactNum, deliveryAddress } = currentUserDetails

    const location = useLocation()

    const { order } = location.state || { order: null }
    const { orderId, createdAt, status, totalCost, cartItems } = order || {
        orderId: 0,
        totalCost: 0,
        createdAt: null,
        status: '',
        cartItems: [],
    }

    console.log(order)

    const subtotal = cartItems.reduce((accumulator, currentItem) => {
        const itemTotal = currentItem.cost * currentItem.quantity
        return accumulator + itemTotal
    }, 0)

    const total = subtotal + 50

    const handlePrint = () => {
        const invoiceDocument = document.getElementById('invoice-document')
        const printContents = invoiceDocument.innerHTML
        const originalContents = document.body.innerHTML
        document.body.innerHTML = printContents
        window.print()
        document.body.innerHTML = originalContents
    }

    const handleSave = () => {
        const element = document.getElementById('invoice-document')
        const options = {
            orientation: 'landscape',
        }
        html2pdf().set(options).from(element).save(`invoice-${orderId}.pdf`)
    }

    return (
        <Fragment>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-darkestBrown">
                <Link to={`/profile/${displayName}/order-tracking`}>
                    <button className="px-8 py-2 text-white bg-lightBrown rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90">
                        <div className="flex items-center justify-center">
                            <MdArrowBackIosNew
                                size={20}
                                className="-ml-3 mr-1"
                            />
                            Back
                        </div>
                    </button>
                </Link>
                <div
                    id="invoice-document"
                    className="max-w-lg md:max-w-5xl bg-white shadow-lg"
                >
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
                                    <Globe />
                                    <span className="text-xs">
                                        https://yeppeubakes.netlify.app/
                                    </span>
                                    <span className="text-xs">
                                        https://www.instagram.com/yeppeubakes/
                                    </span>
                                </li>
                                <li className="flex flex-col items-center p-2 border-l-2 border-lightBrown border-opacity-50">
                                    <Location />
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
                                <br />
                                {displayName} {deliveryAddress} {contactNum}
                            </address>
                        </div>
                        <div className="w-40">
                            <address className="text-sm">
                                <span className="font-bold">Ship To :</span>
                                <br />
                                {displayName} {deliveryAddress} {contactNum}
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
                    <div className="w-full h-0.5 bg-lightBrown"></div>

                    <div className="p-4">
                        <div className="flex items-center justify-center">
                            Thank you very much for buying our baked goods!
                        </div>
                        <div className="flex items-end justify-end space-x-3">
                            <button
                                className="px-4 py-2 text-sm text-green-600 bg-green-100"
                                onClick={handlePrint}
                            >
                                Print
                            </button>
                            <button
                                className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
                                onClick={handleSave}
                            >
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
