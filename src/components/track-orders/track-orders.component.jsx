import { Fragment, useState, useContext, useEffect } from 'react'

import { getCartItems } from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../contexts/user.context'

import { MdOutlinePayments } from 'react-icons/md'
import { FiPackage } from 'react-icons/fi'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { BsCheckCircle } from 'react-icons/bs'
import { css } from '@emotion/react'
import { BeatLoader } from 'react-spinners'

const TrackOrders = () => {
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

        // get last order
        getCartItems(currentUser).then((orders) => {
            orders.sort((a, b) => b.orderId - a.orderId)
            const lastOrder = orders[0]
            setOrders([lastOrder])
            setIsLoading(false)
        })
    }, [currentUser])

    console.log(orders)

    return (
        <Fragment>
            <div className="max-w-xl mx-auto my-10">
                <h2 className="sr-only">Steps</h2>

                {loading ? (
                    <div className="flex justify-center">
                        <BeatLoader
                            color={'#FCA999'}
                            loading={loading}
                            css={override}
                            size={24}
                        />
                    </div>
                ) : orders && orders.length > 0 && orders[0]?.orderId ? (
                    <Fragment>
                        <div className="flex">
                            <div className="w-1/2">
                                <div className="text-md font-medium text-gray-500">
                                    Order ID <br />
                                </div>
                                {orders &&
                                    orders.length > 0 &&
                                    orders[0]?.orderId && (
                                        <span className="text-sm text-darkestBrown font-medium">
                                            #{orders[0].orderId}
                                        </span>
                                    )}
                            </div>
                        </div>
                        <div className="max-w-lg mx-auto py-6 text-darkestBrown">
                            <div className="flex">
                                <div className="w-1/4">
                                    <div className="relative mb-2">
                                        <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                                            <span className="flex justify-center text-white w-full">
                                                <MdOutlinePayments size={24} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-xs text-center md:text-base font-medium">
                                        Payment
                                    </div>
                                </div>

                                <div className="w-1/4">
                                    <div className="relative mb-2">
                                        <div
                                            className="absolute flex align-center items-center align-middle content-center"
                                            style={{
                                                width: 'calc(100% - 2.5rem - 1rem)',
                                                top: '50%',
                                                transform:
                                                    'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                                <div
                                                    className="w-0 bg-green-300 py-1 rounded"
                                                    style={{ width: '100%' }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                                            <span className="flex justify-center text-white w-full">
                                                <FiPackage size={24} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-xs text-center md:text-base font-medium">
                                        Preparing
                                    </div>
                                </div>

                                <div className="w-1/4">
                                    <div className="relative mb-2">
                                        <div
                                            className="absolute flex align-center items-center align-middle content-center"
                                            style={{
                                                width: 'calc(100% - 2.5rem - 1rem)',
                                                top: '50%',
                                                transform:
                                                    'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                                <div
                                                    className="w-0 bg-green-300 py-1 rounded"
                                                    style={{ width: '0%' }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                                            <span className="flex justify-center text-gray-600 w-full">
                                                <MdOutlineDeliveryDining
                                                    size={24}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-xs text-center md:text-base font-medium">
                                        In Transit
                                    </div>
                                </div>

                                <div className="w-1/4">
                                    <div className="relative mb-2">
                                        <div
                                            className="absolute flex align-center items-center align-middle content-center"
                                            style={{
                                                width: 'calc(100% - 2.5rem - 1rem)',
                                                top: '50%',
                                                transform:
                                                    'translate(-50%, -50%)',
                                            }}
                                        >
                                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                                <div
                                                    className="w-0 bg-green-300 py-1 rounded"
                                                    style={{ width: '0%' }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                                            <span className="flex justify-center text-gray-600 w-full">
                                                <BsCheckCircle size={24} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-xs text-center md:text-base font-medium">
                                        Received
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-darkestBrown">
                            No orders yet
                        </h2>
                        <p className="text-sm text-gray-500">
                            You have not placed any orders yet
                        </p>
                    </div>
                )}
            </div>
        </Fragment>
    )
}

export default TrackOrders
