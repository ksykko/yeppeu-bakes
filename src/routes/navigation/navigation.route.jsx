import { Fragment, useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart-context'

import BagIcon from '../../components/bag-icon/bag-icon.component'
import HamburgerIcon from '../../components/hamburger-icon/hamburger-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component'

import Logo from '../../assets/logo.png'

import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen, clearAllCartItems, cartRef, toggleCart } =
        useContext(CartContext)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
            <div className="flex items-center justify-between font-bold font-playfairDisplay">
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center justify-center">
                        <div
                            className={`text-xl font-extrabold text-darkestBrown inline-flex justify-center`}
                        >
                            <img
                                src={Logo}
                                alt=""
                                className="mr-2 w-8 rounded-full"
                            />
                            YEPPEU BAKES
                        </div>
                    </div>
                </Link>
                {/* Menu */}
                <div
                    className={`hidden items-center h-10 font-alata text-md md:flex md:space-x-8 text-darkestBrown relative`}
                >
                    <div className="group">
                        <Link to="/">Home</Link>
                        <div
                            className={`mx-2 group-hover:border-b group-hover:border-lightBrown`}
                        ></div>
                    </div>
                    <div className="group">
                        <Link to="/shop">Shop</Link>
                        <div
                            className={`mx-2 group-hover:border-b group-hover:border-lightBrown`}
                        ></div>
                    </div>

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
                                <div className="absolute right-0 mt-2 py-2 w-48 bg-lightestPeach rounded-md shadow-xl z-10">
                                    <div className="flex justify-between items-center hover:bg-lightBrown group">
                                        <Link
                                            to={`/profile/${currentUser.displayName}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightBrown group-hover:text-white"
                                        >
                                            Profile
                                        </Link>
                                        <AiOutlineUser
                                            size={20}
                                            className="text-gray-700 group-hover:text-white mr-[0.9rem]"
                                        />
                                    </div>
                                    <div className="border-t border-gray-100"></div>
                                    <div className="flex justify-between items-center hover:bg-lightBrown group">
                                        <Link
                                            to="/sign-in"
                                            onClick={handleSignout}
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
                    <div className="relative">
                        <BagIcon onClick={() => toggleCart()} />
                        <div ref={cartRef}>
                            {isCartOpen && <CartDropdown />}
                        </div>
                    </div>
                </div>

                {/* Hamburger Button */}
                <HamburgerIcon />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
