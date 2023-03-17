import { Link } from 'react-router-dom'

import { signOutUser } from '../../utils/firebase/firebase.utils'

const HamburgerMenu = (currentUser) => {
    return (
        <div
            id="menu"
            className="absolute hidden top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-16 space-y-3 text-lg text-white uppercase bg-Beige bg-opacity-90 md:hidden"
        >
            <Link
                to="/"
                className="text-darkestBrown font-playfairDisplay font-extrabold hover:text-white"
            >
                Home
            </Link>
            <Link
                to="/shop"
                className="text-darkestBrown font-playfairDisplay font-extrabold hover:text-white"
            >
                Shop
            </Link>
            {currentUser ? (
                <span
                    className="text-darkestBrown font-playfairDisplay font-extrabold hover:text-white"
                    onClick={signOutUser}
                >
                    Sign Out
                </span>
            ) : (
                <Link
                    to="/sign-in"
                    className="text-darkestBrown font-playfairDisplay font-extrabold hover:text-white"
                >
                    Sign In
                </Link>
            )}
        </div>
    )
}

export default HamburgerMenu
