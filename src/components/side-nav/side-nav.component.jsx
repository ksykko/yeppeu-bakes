/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useContext } from 'react'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart-context'

import { Link } from 'react-router-dom'

import AdminDashboard from '../admin/admin-dashboard/admin-dashboard.component'
import AdminProfile from '../admin/admin-profile/admin-profile.component'
import AdminProducts from '../admin/admin-products/admin-products.component'
import AdminOrders from '../admin/admin-orders/admin-orders.component'

import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'

import { MdOutlineDashboard } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaListUl } from 'react-icons/fa'
import { BiPackage } from 'react-icons/bi'

import Logo from '../../assets/yeppeubakes-nobg.png'

import { signOutUser } from '../../utils/firebase/firebase.utils'

const SideNav = () => {
    const { currentUser } = useContext(UserContext)
    const { clearAllCartItems } = useContext(CartContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const tabs = [
        {
            name: 'Dashboard',
            icon: <MdOutlineDashboard size={19} />,
            content: <AdminDashboard />,
        },
        {
            name: 'Users',
            icon: <FiUsers size={19} />,
            content: <AdminProfile />,
        },
        {
            name: 'Product List',
            icon: <FaListUl size={19} />,
            content: <AdminProducts />,
        },
        {
            name: 'Orders',
            icon: <BiPackage size={19} />,
            content: <AdminOrders />,
        },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prevOpen) => !prevOpen)
    }

    const handleSignout = async () => {
        try {
            await signOutUser()
            clearAllCartItems()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <header>
                <nav
                    id="sidenav-1"
                    class="fixed top-0 left-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-darkestBrown shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] xl:data-[te-sidenav-hidden='false']:translate-x-0"
                    data-te-sidenav-init
                    data-te-sidenav-hidden="false"
                    data-te-sidenav-mode-breakpoint-over="0"
                    data-te-sidenav-mode-breakpoint-side="xl"
                    data-te-sidenav-content="#content"
                    data-te-sidenav-accordion="true"
                >
                    <a
                        class="mb-3 flex items-center justify-center py-6 outline-none"
                        href="#!"
                        data-te-ripple-init
                        data-te-ripple-color="primary"
                    >
                        <img
                            id="te-logo"
                            class="mr-2 w-8"
                            src={Logo}
                            alt="Brand Logo"
                            draggable="false"
                        />
                        <span className="text-white text-xl font-playfairDisplay uppercase">
                            Yeppeu Bakes
                        </span>
                    </a>

                    <ul
                        class="relative m-0 list-none px-[0.2rem]"
                        data-te-sidenav-menu-ref
                    >
                        {tabs.map((tab, index) => (
                            <li key={index} class="relative">
                                <Link
                                    class="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-blue-400/10 hover:text-Beige hover:outline-none focus:bg-blue-400/10 focus:text-Beige focus:outline-none active:bg-blue-400/10 active:text-Beige active:outline-none data-[te-sidenav-state-active]:text-Beige data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                    href="#!"
                                    onClick={() => handleTabClick(tab)}
                                    data-te-sidenav-link-ref
                                >
                                    <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-Beige group-focus:[&>svg]:fill-Beige group-active:[&>svg]:fill-Beige group-[te-sidenav-state-active]:[&>svg]:fill-Beige motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                        {tab.icon}
                                    </span>
                                    <span>{tab.name}</span>
                                </Link>
                                {tab.innerTabs && (
                                    <ul
                                        class="absolute top-0 left-full w-full h-full m-0 list-none px-[0.2rem] bg-whitePeach"
                                        data-te-sidenav-menu-ref
                                    >
                                        {tab.innerTabs.map(
                                            (innerTab, index) => (
                                                // place the inner tab below the active tab
                                                <li
                                                    key={index}
                                                    class="relative"
                                                >
                                                    <Link
                                                        class="group flex h-12 cursor-pointer items-center truncate rounded-[5px] py-4 px-6 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-blue-400/10 hover:text-Beige hover:outline-none focus:bg-blue-400/10 focus:text-Beige focus:outline-none active:bg-blue-400/10 active:text-Beige active:outline-none data-[te-sidenav-state-active]:text-Beige data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                                                        href="#!"
                                                        onClick={() =>
                                                            handleTabClick(
                                                                innerTab
                                                            )
                                                        }
                                                        data-te-sidenav-link-ref
                                                    >
                                                        <span class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-Beige group-focus:[&>svg]:fill-Beige group-active:[&>svg]:fill-Beige group-[te-sidenav-state-active]:[&>svg]:fill-Beige motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
                                                            {innerTab.icon}
                                                        </span>
                                                        <span>
                                                            {innerTab.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav
                    id="main-navbar"
                    class="fixed z-50 top-0 right-0 left-0 flex w-full flex-nowrap items-center justify-between bg-lightestPeach py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 lg:flex-wrap lg:justify-start xl:pl-60"
                    data-te-navbar-ref
                >
                    <div class="flex w-full flex-wrap items-center justify-end px-4 py-3">
                        <button
                            data-te-sidenav-toggle-ref
                            data-te-target="#sidenav-1"
                            class="block border-0 bg-transparent px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
                            aria-controls="#sidenav-1"
                            aria-haspopup="true"
                        >
                            <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </button>

                        <ul class="relative flex items-center">
                            <li class="relative" data-te-dropdown-ref>
                                <a
                                    class="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                >
                                    <span class=" [&>svg]:w-3.5">
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="bell"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span class="absolute -mt-2.5 ml-2 rounded-full bg-red-600 py-[1px] px-1.5 text-[0.6rem] text-white">
                                        1
                                    </span>
                                </a>
                            </li>

                            <li class="relative" data-te-dropdown-ref>
                                <a
                                    class="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false"
                                >
                                    {/* Profile pic */}
                                    {/* if currentUser is true, show Sign Out link */}
                                    {currentUser ? (
                                        <div className="relative">
                                            <div
                                                className="group cursor-pointer"
                                                onClick={handleDropdownToggle}
                                            >
                                                <CgProfile
                                                    size={24}
                                                    className="hover:text-darkBrown"
                                                />
                                            </div>
                                            {isDropdownOpen && (
                                                <div className="absolute right-0 mt-2 py-2 w-48 bg-whitePeach rounded-md shadow-xl z-10">
                                                    <div className="flex justify-between items-center hover:bg-lightBrown font-medium font-playfairDisplay group">
                                                        <Link
                                                            to="/sign-in"
                                                            onClick={
                                                                handleSignout
                                                            }
                                                            className="block px-4 py-2 text-sm text-gray-700 group-hover:text-white"
                                                        >
                                                            Sign Out
                                                        </Link>
                                                        <FiLogOut
                                                            size={20}
                                                            className="text-gray-700 group-hover:text-white mr-3"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="group">
                                            <Link to="/sign-in">Sign In</Link>
                                            <div
                                                className={`mx-2 group-hover:border-b group-hover:border-lightBrown`}
                                            ></div>
                                        </div>
                                    )}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main style={{ marginTop: '58px' }}>{activeTab.content}</main>

            <footer></footer>
        </Fragment>
    )
}

export default SideNav
