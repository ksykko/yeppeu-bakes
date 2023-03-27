import { Fragment, useState, useContext } from 'react'

import { AlertMessageContext } from '../../contexts/alert-message.context'
import { UserContext } from '../../contexts/user.context'

import { updateUserDetailsDocument } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const ModalForm = ({ onClose, userId }) => {
    const [newContactNum, setNewContactNum] = useState('')
    const [newDeliveryAddress, setNewDeliveryAddress] = useState('')
    const { alertMessage, showAlertMessage } = useContext(AlertMessageContext)

    const { currentUserDetails, setCurrentUserDetails } =
        useContext(UserContext)

    console.log(alertMessage)

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!newContactNum || !newDeliveryAddress) {
            onClose()
            showAlertMessage('Please fill in all fields', 'error')
            return
        }

        try {
            await updateUserDetailsDocument(
                userId,
                newContactNum,
                newDeliveryAddress
            )

            // Update currentUserDetails in UserContext
            setCurrentUserDetails({
                ...currentUserDetails,
                contactNum: newContactNum,
                deliveryAddress: newDeliveryAddress,
            })

            onClose()
            showAlertMessage(
                'Contact information updated successfully',
                'success'
            )
        } catch (error) {
            console.error(error)
            showAlertMessage('Error updating contact information', 'error')
        }
    }

    return (
        <Fragment>
            <div
                className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                style={{ zIndex: 9999 }}
            >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-50"></div>
                <div
                    className="relative bg-white p-5 rounded-lg shadow-lg z-10 w-96"
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <h3 className="font-bold text-lg mb-3">
                        Edit Contact Information
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-3">
                            <FormInput
                                label="Contact Number"
                                type="text"
                                name="contactNum"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                value={newContactNum}
                                onChange={(e) =>
                                    setNewContactNum(e.target.value)
                                }
                            />
                            <FormInput
                                label="Delivery Address"
                                type="text"
                                name="deliveryAddress"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                value={newDeliveryAddress}
                                onChange={(e) =>
                                    setNewDeliveryAddress(e.target.value)
                                }
                            />
                        </div>
                        <div className="mt-6">
                            <Button
                                className="bg-gray-300 hover:bg-gray-400 py-2 px-4 font-sans font-normal rounded-md"
                                onClick={onClose}
                            >
                                Close
                            </Button>
                            <Button
                                className=" bg-emerald-300 hover:bg-emerald-400 text-white py-2 px-4 font-sans font-normal rounded-md ml-3"
                                buttonType="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalForm
