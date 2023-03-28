import { useState, useEffect, useContext, Fragment } from 'react'

import { UserContext } from '../../contexts/user.context'
import { getCartItems } from '../../utils/firebase/firebase.utils'

import { IoReceipt } from 'react-icons/io5'

import { Link } from 'react-router-dom'

import { css } from '@emotion/react'
import { BeatLoader } from 'react-spinners'

const MyOrders = () => {
    const { currentUser } = useContext(UserContext)
    const [orders, setOrders] = useState([])
    const [loading, setIsLoading] = useState(true)

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `

    useEffect(() => {
        setIsLoading(true)

        // Call the function to retrieve cart items
        getCartItems(currentUser).then((orders) => {
            orders.sort((a, b) => a.orderId - b.orderId)
            setOrders(orders)
            setIsLoading(false)
        })
    }, [currentUser])

    const renderOrderRow = (order) => {
        const { orderId, createdAt, status, totalCost } = order

        return (
            <tr
                key={orderId}
                className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold"
            >
                <td className="px-6 py-4">{`#${orderId}`}</td>
                <td className="px-6 py-4">
                    {new Date(createdAt.toDate()).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        <div
                            className={`h-2.5 w-2.5 rounded-full ${
                                status === 'preparing'
                                    ? 'bg-yellow-500'
                                    : 'bg-green-500'
                            } mr-2`}
                        ></div>{' '}
                        {status === 'preparing' ? 'Preparing' : 'Delivered'}
                    </div>
                </td>
                <td className="px-6 py-4">{`₱${totalCost.toFixed(2)}`}</td>
                <td className="px-6 py-4 flex items-center justify-center">
                    <Link
                        to={`/invoice/${orderId}`}
                        state={{ order }}
                        className="font-medium text-buttonPeach hover:underline hover:underline-offset-2"
                    >
                        View Invoice
                    </Link>
                    <IoReceipt className="ml-2 text-buttonPeach" />
                </td>
            </tr>
        )
    }

    return (
        <Fragment>
            <div className="relative max-w-4xl mx-auto overflow-x-auto shadow-xl rounded-2xl my-10">
                <table className="w-full text-sm text-left text-white bg-lightBrown">
                    <thead className="text-md uppercase tracking-widest">
                        <tr className=" font-playfairDisplay text-center">
                            <th scope="col" className="px-6 py-3">
                                Order ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Invoice
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold">
                                <td
                                    colSpan="5"
                                    className="px-6 py-4 text-center"
                                >
                                    <div className="mx-auto">
                                        <BeatLoader
                                            color={'#FCA999'}
                                            loading={loading}
                                            css={override}
                                            size={10}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ) : orders.length > 0 ? (
                            orders.map((order) => renderOrderRow(order))
                        ) : (
                            <tr className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold">
                                <td
                                    colSpan="5"
                                    className="px-6 py-10 text-center"
                                >
                                    No orders yet.{' '}
                                    <Link
                                        to="/shop"
                                        className=" text-buttonPeach hover:underline underline-offset-4"
                                    >
                                        Check our baked goods!
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default MyOrders
