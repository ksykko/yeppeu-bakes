import { createContext, useState } from 'react'

export const HamburgerContext = createContext({
    isHamburgerOpen: false,
    setIsHamburgerOpen: () => {},
})

export const HamburgerProvider = ({ children }) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const value = { isHamburgerOpen, setIsHamburgerOpen }

    return (
        <HamburgerContext.Provider value={value}>
            {children}
        </HamburgerContext.Provider>
    )
}
