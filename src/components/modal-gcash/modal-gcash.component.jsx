import { Fragment } from 'react'
import OtherPayment from '../../assets/cookies/otherpayments.png'

import Button from '../button/button.component'

const ModalGcash = ({ isOpen, onClose }) => {
    return (
        <Fragment>
            {/* Overlay */}
            <div
                className={`${
                    isOpen ? 'opacity-100' : 'opacity-0'
                } fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity z-50`}
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div
                className={`${
                    isOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-2'
                } fixed inset-0 transform transition-all z-50`}
            >
                <div className="flex items-center justify-center h-screen">
                    <div className="bg-darkBrown p-6 rounded-xl shadow-lg w-96">
                        <h2 className="text-2xl text-whitePeach font-extrabold font-playfairDisplay mb-3">
                            Pay with Gcash or Union Bank
                        </h2>
                        <img
                            src={OtherPayment}
                            alt=""
                            className=" w-72 mx-auto mb-5 rounded-xl"
                        />
                        <Button
                            className="bg-gray-300 hover:bg-gray-400 py-2 px-4 font-sans font-normal rounded-md"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalGcash
