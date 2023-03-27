import { createContext, useState, useEffect } from 'react'

export const AlertMessageContext = createContext({
    alertMessage: null,
    setAlertMessage: () => null,
})

export const AlertMessageProvider = ({ children }) => {
    const [alertMessage, setAlertMessage] = useState(null)

    const showAlertMessage = (message, type) => {
        setAlertMessage({ message, type })
    }

    const value = {
        alertMessage,
        setAlertMessage,
        showAlertMessage,
    }

    return <AlertMessageContext.Provider value={value}>{children}</AlertMessageContext.Provider>
}
