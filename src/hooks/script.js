import { useEffect } from "react"

// hamburger menu script
export const useHamburgerMenu = () => {
    useEffect(() => {
        // const hamburger = document.querySelector(".hamburger")
        // const navMenu = document.querySelector(".nav-menu")

        // hamburger.addEventListener("click", mobileMenu)

        // function mobileMenu() {
        //     hamburger.classList.toggle("active")
        //     navMenu.classList.toggle("active")
        // }

        const btn = document.getElementById('menu-btn')
        const menu = document.getElementById('menu')

        btn.addEventListener('click', navToggle)

        function navToggle() {
            btn.classList.toggle('open')
            menu.classList.toggle('flex')
            menu.classList.toggle('hidden')


        }
    }, [])
}