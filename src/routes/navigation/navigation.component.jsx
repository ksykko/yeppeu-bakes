import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart-context'

import BagIcon from '../../components/bag-icon/bag-icon.component'
import HamburgerIcon from '../../components/hamburger-icon/hamburger-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu.component'

import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = ({ className, borderLine }) => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    // set borderLine to orangePeach if not specified
    if (!borderLine) {
        borderLine = 'black'
    }

    // set className to empty string if not specified
    if (!className) {
        className = 'text-darkestBrown'
    }


    return (
        <Fragment>
            <div className="flex items-center justify-between font-bold font-playfairDisplay">
                {/* Logo */}
                <Link to="/">
                    <div className={`text-xl font-extrabold ${className}`}>
                        YEPPEU BAKES
                    </div>
                </Link>
                {/* Menu */}
                <div
                    className={`hidden items-center h-10 font-alata text-md md:flex md:space-x-8 ${className}`}
                >
                    <div className="group">
                        <Link to="/">Home</Link>
                        <div
                            className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}
                        ></div>
                    </div>
                    <div className="group">
                        <Link to="/shop">Shop</Link>
                        <div
                            className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}
                        ></div>
                    </div>

                    {/* if currentUser is true, show Sign Out link */}
                    {currentUser ? (
                        <div className="group">
                            <span onClick={signOutUser}>Sign Out</span>
                            <div
                                className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}
                            ></div>
                        </div>
                    ) : (
                        <div className="group">
                            <Link to="/sign-in">Sign In</Link>
                            <div
                                className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}
                            ></div>
                        </div>
                    )}
                    <BagIcon />
                    {isCartOpen && <CartDropdown />}
                </div>

                {/* Hamburger Button */}
                <HamburgerIcon />

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
