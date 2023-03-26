import { Fragment, useState, useContext, useEffect } from 'react'

import { getCartItems } from '../../utils/firebase/firebase.utils'
import { UserContext } from '../../contexts/user.context'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
    const { currentUser } = useContext(UserContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        // Call the function to retrieve cart items
        getCartItems(currentUser).then((orders) => {
            console.log('Orders:', orders)
            setOrders(orders)
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
                                status === 'baking'
                                    ? 'bg-yellow-500'
                                    : 'bg-green-500'
                            } mr-2`}
                        ></div>{' '}
                        {status === 'baking' ? 'Baking' : 'Delivered'}
                    </div>
                </td>
                <td className="px-6 py-4">{`₱${totalCost.toFixed(2)}`}</td>
                <td className="px-6 py-4">
                    <Link
                        to={`/orders/${orderId}`}
                        className="font-medium text-buttonPeach hover:underline hover:underline-offset-2"
                    >
                        View Purchases
                    </Link>
                </td>
            </tr>
        )
    }

    const tabs = [
        {
            name: 'Profile',
            content: (
                <div>
                    <div className="text-2xl my-3">Profile</div>
                </div>
            ),
        },
        {
            name: 'My Orders',
            content: (
                <div>
                    <div className="text-2xl text-darkestBrown font-extrabold font-playfairDisplay my-3">
                        My Orders
                    </div>

                    <div className="relative overflow-x-auto shadow-lg rounded-2xl">
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
                                        Purchases
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => renderOrderRow(order))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ),
        },
        {
            name: 'Track Orders',
            content: (
                <div>
                    <div className="text-2xl my-3">Track Orders</div>
                </div>
            ),
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                {/*  */}
                {/* Tab navigation */}
                <div className="max-w-5xl mx-auto pt-5 pb-10">
                    <div className="bg-white shadow-lg p-6 mx-auto rounded-2xl">
                        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                            <ul className="flex flex-wrap -mb-px">
                                {tabs.map((tab, index) => (
                                    <li key={index} className="mr-2">
                                        <Link
                                            href="#"
                                            className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-Beige hover:border-Beige focus:text-lightBrown focus:border-lightBrown ${
                                                activeTab.name === tab.name
                                                    ? 'text-lightBrown border-b-2 font-bold border-lightBrown rounded-t-lg active'
                                                    : ''
                                            }`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Render the content of the active tab */}
                        {activeTab.content}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserDashboard
