import { useContext, useState, useEffect } from 'react'

import { AlertMessageContext } from '../../contexts/alert-message.context'
import { FaRegCheckCircle } from 'react-icons/fa'
import { RiErrorWarningLine } from 'react-icons/ri'

import Navigation from '../../routes/navigation/navigation.route'

const NavigationBar = () => {
    const { alertMessage, setAlertMessage } = useContext(AlertMessageContext)

    useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => {
                setAlertMessage(null)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [alertMessage, setAlertMessage])

    const handleDismiss = () => {
        setAlertMessage(null)
    }

    return (
        <nav className="bg-lightestPeach shadow-md">
            <div className="container max-w-6xl mx-auto px-6 py-3 relative">
                {alertMessage && (
                    <div
                        className={`absolute z-50 right-5 border-l-4 px-4 py-3 rounded-sm shadow-md ${
                            alertMessage.type === 'success'
                                ? ' bg-green-100 border-teal-500 text-green-900 w-[22rem]'
                                : ' bg-red-100 border-red-500 text-red-900 w-64'
                        }`}
                        role="alert"
                        onAnimationEnd={handleDismiss} // Dismiss the alert message once the animation ends
                        style={{ borderTopWidth: '4' }} // Start with a border of 0 width
                    >
                        <div className="flex">
                            <div className="py-1">
                                {alertMessage.type === 'success' ? (
                                    <FaRegCheckCircle
                                        size={29}
                                        className="text-teal-500 mr-4"
                                    />
                                ) : (
                                    <RiErrorWarningLine
                                        size={31}
                                        className="text-red-500 mr-4"
                                    />
                                )}
                            </div>
                            <div>
                                <p className="font-bold">
                                    {alertMessage.type === 'success'
                                        ? 'Success'
                                        : 'Error'}
                                </p>
                                <p className="text-sm font-medium">
                                    {alertMessage.message}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <Navigation />
            </div>
        </nav>
    )
}

export default NavigationBar
