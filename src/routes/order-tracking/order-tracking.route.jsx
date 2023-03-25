import { Fragment, useState } from 'react'

import { FaTruck } from 'react-icons/fa'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'

const OrderTracking = () => {
    const [orderItems, setOrderItems] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            quantity: 2,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 15.99,
            quantity: 1,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Product 3',
            price: 8.99,
            quantity: 3,
            imageUrl: 'https://via.placeholder.com/150',
        },
    ])

    const [orderDetails, setOrderDetails] = useState({
        orderNumber: '12345',
        trackingNumber: '67890',
        shippingDate: 'March 28, 2023',
        deliveryDate: 'April 2, 2023',
        billingAddress: {
            name: 'John Doe',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345',
        },
        shippingAddress: {
            name: 'Jane Smith',
            address: '456 First St',
            city: 'Anytown',
            state: 'CA',
            zip: '54321',
        },
        trackingUrl: 'https://www.example.com/tracking/12345',
    })

    const tabs = [
        {
            name: 'Order Tracking',
            content: (
                <div>
                    <div className="text-2xl">Order Tracking</div>
                </div>
            ),
        },
        {
            name: 'Order History',
            content: (
                <div>
                    <div className="text-2xl">Order History</div>
                </div>
            ),
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                {/*  */}
                {/* Tab navigation */}
                <div className="max-w-5xl mx-auto pt-5 pb-10">
                    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
                        <div className="flex items-center mb-6">
                            <FaTruck className="text-gray-600 mr-2" size={20} />
                            <h2 className="text-lg font-medium">
                                Order Tracking
                            </h2>
                        </div>
                        <div className="border-b border-gray-300 pb-6">
                            {/* Tab buttons */}
                            <div className="flex justify-between mb-6">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        className={`py-2 px-4 font-medium ${
                                            activeTab === tab
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-600'
                                        }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                            {/* Tab content */}
                            {activeTab.content}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderTracking
