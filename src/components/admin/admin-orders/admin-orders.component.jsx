import { Fragment, useContext, useState, useEffect } from 'react'

import { BakedGoodsContext } from '../../../contexts/baked-goods.context'
import { OrdersContext } from '../../../contexts/orders-context'

import { getAllCartItems } from '../../../utils/firebase/firebase.utils'

import { css } from '@emotion/react'
import { BeatLoader } from 'react-spinners'

const AdminOrders = () => {
    const { bakedGoodsMap } = useContext(BakedGoodsContext)
    const { ordersMap } = useContext(OrdersContext)
    const [isLoading, setIsLoading] = useState(true)

    const [allCartItems, setAllCartItems] = useState([])

    useEffect(() => {
        setIsLoading(true)

        // Call the function to retrieve cart items
        getAllCartItems().then((orders) => {
            orders.sort((a, b) => a.orderId - b.orderId)
            setAllCartItems(orders)
            setIsLoading(false)
        })
    }, [])

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `


    return (
        <Fragment>
            <div className="flex-1 mx-72 mr-16 mt-18">
                <div className="p-8">
                    <div className="text-4xl text-darkestBrown font-extrabold font-playfairDisplay my-3">
                        Order List
                    </div>
                    <div className=" overflow-x-auto shadow-lg rounded-xl">
                        <table className="w-full text-sm text-left text-white bg-lightBrown">
                            <thead className="text-md uppercase tracking-widest">
                                <tr className=" font-playfairDisplay text-center">
                                    {/* <th scope="col" className="px-12 py-3">
                                        <span className="sr-only">Image</span>
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Order ID
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Order Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Order Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Items
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold">
                                        <td
                                            colSpan="5"
                                            className="px-6 py-4 text-center"
                                        >
                                            <div className="mx-auto">
                                                <BeatLoader
                                                    color={'#FCA999'}
                                                    loading={isLoading}
                                                    css={override}
                                                    size={10}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    allCartItems.map((cartItem) => {
                                        return (
                                            <tr
                                                key={cartItem.orderId}
                                                className="bg-lightestPeach border-b text-center hover:bg-whitePeach text-darkestBrown font-semibold"
                                            >
                                                {/* <td className="px-6 py-4">
                                                    <img
                                                        src={
                                                            bakedGoodsMap[
                                                                bakedGoodId
                                                            ].imageUrl[1].url
                                                        }
                                                        alt="product"
                                                        className="h-28 w-28 object-cover rounded-xl"
                                                    />
                                                </td> */}
                                                <td className="px-6 py-4 text-center">
                                                    #{cartItem.orderId}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {cartItem.createdAt &&
                                                        new Date(
                                                            cartItem.createdAt
                                                                .seconds * 1000
                                                        ).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {/* {cartItem.orderStatus} */}
                                                    <div className="relative">
                                                        <select


                                                            className="block appearance-none w-full text-darkestBrown bg-white border border-gray-200 hover:border-lightBrown px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-lightBrown"
                                                        >

                                                            <option>
                                                                <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                                                                Pending
                                                            </option>
                                                            <option>
                                                                {cartItem.status}
                                                            </option>
                                                            <option>
                                                                In-Transit
                                                            </option>
                                                            <option>
                                                                Delivered
                                                            </option>
                                                        </select>

                                                        <svg
                                                            className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                                                            />
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    ₱{cartItem.totalCost}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    View Items
                                                </td>
                                            </tr>
                                        )
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminOrders
