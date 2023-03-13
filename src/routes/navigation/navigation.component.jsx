import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'


const Navigation = ({ className, borderLine }) => {

    // set borderLine to orangePeach if not specified
    if (!borderLine) {
        borderLine = 'orangePeach'
    }

    return (
        <Fragment>
            <div className="flex items-center justify-between font-bold font-playfairDisplay text-white">
                {/* Logo */}
                <Link to="/">
                    <div className={`text-3xl text-orangePeach ${className}`}>iSchool</div>
                </Link>
                {/* Menu */}
                <div className="hidden items-center h-10 font-alata md:flex md:space-x-8">
                    <div className="group">
                        <Link to="/">Home</Link>
                        <div className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}></div>
                    </div>
                    <div className="group">
                        <Link to="/shop">Shop</Link>
                        <div className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}></div>
                    </div>
                    <div className="group">
                        <Link to="/sign-in">Sign In</Link>
                        <div className={`mx-2 group-hover:border-b group-hover:border-${borderLine}`}></div>
                    </div>
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
