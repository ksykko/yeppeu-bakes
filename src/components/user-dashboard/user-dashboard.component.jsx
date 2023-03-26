import { useState, useContext } from 'react'

import { UserContext } from '../../contexts/user.context'

import { Link } from 'react-router-dom'

import UserProfile from '../../components/profile/user-profile.component'
import MyOrders from '../../components/my-orders/my-orders.component'
import TrackOrders from '../../components/track-orders/track-orders.component'

const UserDashBoard = () => {
    const { currentUser } = useContext(UserContext)

    console.log(currentUser)

    const tabs = [
        {
            name: 'Profile',
            content: <UserProfile />,
        },
        {
            name: 'My Orders',
            content: <MyOrders />,
        },
        {
            name: 'Track Orders',
            content: <TrackOrders />,
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="bg-white shadow-lg p-6 mx-auto rounded-2xl">
                <div className="text-3xl text-lightBrown font-extrabold font-playfairDisplay my-3">
                    Good morning, {currentUser.displayName}!
                </div>
                {/* Welcome to Yeppeu Bakes */}
                <div className="text-sm text-darkestBrown font-medium my-3">
                    Welcome to your dashboard. Here you can view your orders, track
                    your orders, and update your profile information.
                </div>
                <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                    <ul className="flex flex-wrap justify-end -mb-px">
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
    )
}

export default UserDashBoard
