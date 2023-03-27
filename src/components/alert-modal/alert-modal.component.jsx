import { useState } from 'react'

import Button from '../button/button.component'

const AlertModal = ({ heading, message, onClose }) => {
    const [showModal, setShowModal] = useState(true)

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
            style={{ zIndex: 9999 }}
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>
            <div
                className="relative bg-white p-5 rounded-lg shadow-lg z-10"
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <h3 className="font-bold text-lg mb-3">{heading}</h3>
                <p className="mb-3 font-sans font-normal">{message}</p>
                <div className="mt-6">
                    <Button
                        className="bg-gray-300 hover:bg-gray-400 py-2 px-4 font-sans font-normal rounded-md"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AlertModal
