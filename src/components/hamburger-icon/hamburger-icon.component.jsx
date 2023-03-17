import { useContext } from 'react'

import { HamburgerContext } from '../../contexts/hamburger.context'

const HamburgerIcon = () => {
    const { isHamburgerOpen, setIsHamburgerOpen } = useContext(HamburgerContext)

    const toggleIsHamburgerOpen = () => setIsHamburgerOpen(!isHamburgerOpen)

    return (
        <div className="md:hidden items-center">
            <button
                id="menu-btn"
                type="button"
                className="z-40 block hamburger md:hidden focus:outline-none"
                onClick={toggleIsHamburgerOpen}
            >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>
    )
}

export default HamburgerIcon
