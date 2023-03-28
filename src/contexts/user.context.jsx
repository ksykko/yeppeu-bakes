import { createContext, useState, useEffect } from 'react'

import {
    onAuthStateChangedListener,
    createUserProfileDocumentFromAuth,
    getUserProfileDocument,
} from '../utils/firebase/firebase.utils'

// as the actual value of the context is an object, we need to pass an object as the default value
export const UserContext = createContext({
    currentUser: null,
    currentUserDetails: null,
    setCurrentUserDetails: () => null,
    setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserDetails, setCurrentUserDetails] = useState(null)
    const value = {
        currentUser,
        setCurrentUser,
        currentUserDetails,
        setCurrentUserDetails,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                createUserProfileDocumentFromAuth(user)

                const userProfile = await getUserProfileDocument(user.uid)
                setCurrentUserDetails(userProfile)
            } else {
                setCurrentUserDetails(null)
            }

            setCurrentUser(user)

        })

        return unsubscribe
    }, [])

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener(async (user) => {
    //         if (user) {
    //             setCurrentUser(user)
    //             const userProfile = await getUserProfileDocument(user.uid)
    //             setCurrentUserDetails(userProfile)
    //         } else {
    //             setCurrentUser(null)
    //             setCurrentUserDetails(null)
    //         }
    //     })

    //     return unsubscribe
    // }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
