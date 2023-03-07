import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className="flex items-center justify-between font-bold text-white">
                {/* Logo */}
                <Link to="/">
                    <div className="text-3xl text-orangePeach">iSchool</div>
                </Link>
                {/* Menu */}
                <div className="hidden h-10 font-alata md:flex md:space-x-8">
                    <div className="group">
                        <Link to="/">Home</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-orangePeach"></div>
                    </div>
                    <div className="group">
                        <Link to="/shop">Shop</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-orangePeach"></div>
                    </div>
                    <div className="group">
                        <Link to="/sign-in">Sign In</Link>
                        <div className="mx-2 group-hover:border-b group-hover:border-orangePeach"></div>
                    </div>
                </div>

                {/* Hamburger Button */}
                <div class="md:hidden">
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
