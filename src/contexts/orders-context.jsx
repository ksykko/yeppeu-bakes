import { createContext, useState, useEffect } from 'react'

import { getAllOrderDocuments } from '../utils/firebase/firebase.utils'

export const OrdersContext = createContext({
    ordersMap: {},
})

export const OrdersProvider = ({ children }) => {
    const [ordersMap, setOrdersMap] = useState({})

    useEffect(() => {
        const getOrdersMap = async () => {
            const ordersMap = await getAllOrderDocuments()
            setOrdersMap(ordersMap)
        }

        getOrdersMap()
    }, [])

    const value = { ordersMap }

    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>
    )
}
