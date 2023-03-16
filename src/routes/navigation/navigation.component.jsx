import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'
import { useHamburgerMenu } from '../../hooks/script'

const Navigation = ({ className, borderLine }) => {

    const { currentUser } = useContext(UserContext)

    // set borderLine to orangePeach if not specified
    if (!borderLine) {
        borderLine = 'orangePeach'
    }

    // set className to empty string if not specified
    if (!className) {
        className = 'text-darkestBrown'
    }

    useHamburgerMenu()

    return (
        <Fragment>
            <div className="flex items-center justify-between font-bold font-playfairDisplay">
                {/* Logo */}
                <Link to="/">
                    <div className={`text-xl font-extrabold text-darkestBrown ${className}`}>
                        YEPPEU BAKES
                    </div>
                </Link>
                {/* Menu */}
                <div className={`hidden items-center h-10 font-alata text-md md:flex md:space-x-8 ${className}`}>
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
                </div>

                {/* Hamburger Button */}
                <div className="md:hidden items-center">
                    <button
                        id="menu-btn"
                        type="button"
                        className="z-40 block hamburger md:hidden focus:outline-none"
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
