import { createContext, useState, useEffect } from 'react'

import { onAuthStateChangedListener, createUserProfileDocumentFromAuth } from '../utils/firebase/firebase.utils'

// as the actual value of the context is an object, we need to pass an object as the default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserProfileDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
