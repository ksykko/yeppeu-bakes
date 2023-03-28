import { createContext, useState, useEffect } from 'react'

import {
    onAuthStateChangedListener,
    createUserProfileDocumentFromAuth,
    getUserProfileDocument,
    getAllUserDocuments,
} from '../utils/firebase/firebase.utils'

// as the actual value of the context is an object, we need to pass an object as the default value
export const UserContext = createContext({
    currentUser: null,
    currentUserDetails: null,
    setCurrentUserDetails: () => null,
    setCurrentUser: () => null,
    usersMap: {},
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentUserDetails, setCurrentUserDetails] = useState(null)
    const [usersMap, setUsersMap] = useState({})

    useEffect(() => {
        const getUsersMap = async () => {
            const userMap = await getAllUserDocuments()
            setUsersMap(userMap)
        }

        getUsersMap()
    }, [])

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

    const value = {
        currentUser,
        setCurrentUser,
        currentUserDetails,
        setCurrentUserDetails,
        usersMap,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
