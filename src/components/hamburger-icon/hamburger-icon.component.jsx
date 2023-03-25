import { useContext } from 'react'

import { HamburgerContext } from '../../contexts/hamburger.context'

const HamburgerIcon = () => {
    const { isHamburgerOpen, setIsHamburgerOpen } = useContext(HamburgerContext)

    const toggleIsHamburgerOpen = () => setIsHamburgerOpen(!isHamburgerOpen)

    // turn to state
    const handleMenuClick = () => {
        const btn = document.getElementById('menu-btn')
        const menu = document.getElementById('menu')

        btn.addEventListener('click', navToggle)

        function navToggle() {
            btn.classList.toggle('open')
            menu.classList.toggle('flex')
            menu.classList.toggle('hidden')
        }

    }

    return (
        <div className="md:hidden items-center" onClick={handleMenuClick}>
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
