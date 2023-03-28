import { Fragment, useContext, useState } from 'react'

import { storeCartItems } from '../../utils/firebase/firebase.utils'

import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart-context'
import { UserContext } from '../../contexts/user.context'
import { AlertMessageContext } from '../../contexts/alert-message.context'

import ModalForm from '../modal-form/modal-form.component'

import { Link } from 'react-router-dom'
import ModalGcash from '../modal-gcash/modal-gcash.component'
import { FaEdit } from 'react-icons/fa'
import { MdArrowBackIosNew } from 'react-icons/md'
import FormInput from '../form-input/form-input.component'

const paymentFields = {
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
}

const PaymentOverview = () => {
    const { cartItems, cartTotal, clearAllCartItems } = useContext(CartContext)
    const { currentUser, currentUserDetails, setCurrentUserDetails } =
        useContext(UserContext)
    const { alertMessage, showAlertMessage } = useContext(AlertMessageContext)

    const { deliveryAddress, contactNum } = currentUserDetails
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [formFields, setFormFields] = useState(paymentFields)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
    const [currentContactNum, setCurrentContactNum] = useState(contactNum)
    const [currentDeliveryAddress, setCurrentDeliveryAddress] =
        useState(deliveryAddress)
    const [isLoading, setIsLoading] = useState(false)

    const handlePaymentMethodChange = (e) => {
        setSelectedPaymentMethod(e.target.value)
    }

    const handlePayNowClick = async () => {
        if (!currentUser) {
            console.log('User is not logged in')
            return
        }

        if (selectedPaymentMethod === 'card') {
            setIsLoading(true)

            // Simulate payment processing
            setTimeout(async () => {
                if (cartItems.length > 0) {
                    await storeCartItems(currentUser, cartItems)
                    setIsLoading(false)
                    clearAllCartItems()
                    navigate(
                        `/profile/${currentUser.displayName}/order-tracking`
                    )
                    showAlertMessage('Payment successful', 'success')
                } else {
                    console.log('Cart is empty')
                    showAlertMessage('Cart is empty', 'error')
                    setIsLoading(false)
                }
            }, 3000)
        } else if (selectedPaymentMethod === 'gcash') {
            setShowModal(true)
        }
    }

    const handleEditClick = () => {
        setCurrentContactNum(contactNum)
        setCurrentDeliveryAddress(deliveryAddress)
        setShowEditModal(true)
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    const handleUserDetailsUpdate = (newContactNum, newDeliveryAddress) => {
        setCurrentContactNum(newContactNum)
        setCurrentDeliveryAddress(newDeliveryAddress)
        setCurrentUserDetails((prevState) => ({
            ...prevState,
            contactNum: newContactNum,
            deliveryAddress: newDeliveryAddress,
        }))
    }

    const startYear = 2020
    const numYears = 10

    const yearOptions = []
    for (let i = 0; i < numYears; i++) {
        const year = startYear + i
        yearOptions.push(
            <option key={year} value={year}>
                {year}
            </option>
        )
    }

    const formatCardNumber = (value) => {
        // Remove all non-digits
        const cleanedValue = value.replace(/\D/g, '')

        // Split into groups of 4 digits
        const groups = cleanedValue.match(/.{1,4}/g) || []

        // Join groups with a space
        return groups.join(' ')
    }

    const handleCardNumberChange = (event) => {
        const { name, value } = event.target

        // Format the input value
        const formattedValue = formatCardNumber(value)

        // Set the state with the unformatted value
        setFormFields({ ...formFields, [name]: value })

        // Update the input value with the formatted value
        event.target.value = formattedValue
    }

    return (
        <div className="max-w-5xl mx-auto pt-5 pb-10">
            {showEditModal && (
                <ModalForm
                    onClose={() => setShowEditModal(false)}
                    userId={currentUser.uid}
                    handleUserDetailsUpdate={handleUserDetailsUpdate}
                />
            )}
            {/* Back Button */}
            <div className="flex justify-start mb-5">
                <Link to="/shop/check-out">
                    <button className="px-8 py-2 text-white bg-lightBrown rounded-2xl font-playfairDisplay font-semibold text-lg hover:opacity-90">
                        <div className="flex items-center justify-center">
                            <MdArrowBackIosNew
                                size={20}
                                className="-ml-3 mr-1"
                            />
                            Back
                        </div>
                    </button>
                </Link>
            </div>

            <div className="w-full bg-lightestPeach rounded-2xl border-t border-b border-gray-200 px-10 py-10 text-gray-800">
                <div className="w-full">
                    {/* Left Side */}
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-7/12 lg:pr-10">
                            <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                {cartItems.map((item, index) => {
                                    const {
                                        priceId,
                                        productImage,
                                        productName,
                                        quantity,
                                        qty,
                                        cost,
                                        additionalInstruction,
                                    } = item

                                    return (
                                        <div
                                            key={index}
                                            className="w-full flex items-center mb-2"
                                        >
                                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <img
                                                    src={productImage}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-semibold uppercase text-darkestBrown">
                                                    {productName}
                                                </h6>
                                                <p className="text-gray-400">
                                                    {qty} x {quantity}
                                                </p>
                                                <p className="text-gray-400">
                                                    {additionalInstruction}
                                                </p>
                                            </div>
                                            <div>
                                                <span className="font-extrabold text-darkestBrown text-xl font-playfairDisplay">
                                                    ₱{cost}
                                                </span>
                                                <span className="font-extrabold text-darkestBrown text-sm font-playfairDisplay">
                                                    .00
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="-mx-2 flex items-end justify-end">
                                    <div className="flex-grow px-2 lg:max-w-xs">
                                        <label className="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                            Discount code
                                        </label>
                                        <div>
                                            <input
                                                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                placeholder="XXXXXX"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                                            APPLY
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="flex-grow">
                                        <span className="text-darkestBrown">
                                            Subtotal
                                        </span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-extrabold font-playfairDisplay">
                                            ₱{cartTotal}.00
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-darkestBrown">
                                            Shipping Fee
                                        </span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-extrabold font-playfairDisplay">
                                            ₱50.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div className="w-full flex items-center">
                                    <div className="flex-grow">
                                        <span className="text-darkestBrown">
                                            Total
                                        </span>
                                    </div>
                                    <div className="pl-3">
                                        <span className="font-semibold text-gray-400 text-sm">
                                            PESOS
                                        </span>{' '}
                                        <span className="font-extrabold font-playfairDisplay">
                                            ₱{cartTotal + 50}.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-5/12">
                            <div className="w-full mx-auto rounded-lg space-y-3 bg-white border border-gray-200 p-4 text-gray-800 font-light mb-6 relative">
                                <FaEdit
                                    size={20}
                                    className="absolute top-2 right-2 text-lightBrown cursor-pointer"
                                    onClick={handleEditClick}
                                />

                                <div className="flex">
                                    <div className="w-32 text-darkestBrown font-semibold">
                                        Contact
                                    </div>
                                    <div className=" flex-grow">
                                        <div>{currentUser.displayName}</div>
                                        <div>{currentUser.email}</div>
                                        <div>
                                            {contactNum == null ? (
                                                <div className="text-sm text-yellow-500 font-medium">
                                                    Please add your contact
                                                    number.
                                                </div>
                                            ) : (
                                                contactNum
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-32 text-darkestBrown font-semibold">
                                        Delivery <br />
                                        Address
                                    </div>
                                    <div className=" flex-grow">
                                        <div>
                                            {deliveryAddress == null ? (
                                                <div className="text-sm mt-1 text-yellow-500 font-medium">
                                                    Please add your delivery
                                                    address.
                                                </div>
                                            ) : (
                                                deliveryAddress
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                <div className="w-full p-3 border-b border-gray-200">
                                    <div className="mb-5">
                                        <label
                                            htmlFor="type1"
                                            className="flex items-center cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                className="form-radio h-5 w-5 text-indigo-500"
                                                name="type"
                                                id="type1"
                                                value="card"
                                                onChange={
                                                    handlePaymentMethodChange
                                                }
                                            />
                                            <img
                                                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                                className="h-6 ml-3"
                                                alt=""
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <div className="mb-3">
                                            <div>
                                                <FormInput
                                                    label="Name on card"
                                                    name="cardholderName"
                                                    required
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                    placeholder={
                                                        currentUser.displayName
                                                    }
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div>
                                                <FormInput
                                                    label="Card number"
                                                    name="cardNumber"
                                                    required
                                                    onChange={
                                                        handleCardNumberChange
                                                    }
                                                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                    placeholder="0000 0000 0000 0000"
                                                    type="text"
                                                    maxlength="19"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3 -mx-2 flex items-end">
                                            <div className="px-2 w-1/3">
                                                <label className="text-darkestBrown font-semibold text-sm mb-2 ml-1">
                                                    Expiration date
                                                </label>
                                                <div>
                                                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors cursor-pointer">
                                                        {Array.from(
                                                            { length: 12 },
                                                            (_, i) => {
                                                                const month =
                                                                    String(
                                                                        i + 1
                                                                    ).padStart(
                                                                        2,
                                                                        '0'
                                                                    )
                                                                const monthName =
                                                                    new Date(
                                                                        Date.UTC(
                                                                            2022,
                                                                            i,
                                                                            1
                                                                        )
                                                                    ).toLocaleString(
                                                                        'default',
                                                                        {
                                                                            month: 'short',
                                                                        }
                                                                    )
                                                                return (
                                                                    <option
                                                                        key={
                                                                            month
                                                                        }
                                                                        value={
                                                                            month
                                                                        }
                                                                    >
                                                                        {`${month} - ${monthName}`}
                                                                    </option>
                                                                )
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="px-2 w-1/3">
                                                <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors cursor-pointer">
                                                    {yearOptions}
                                                </select>
                                            </div>
                                            <div className="px-2 w-1/3">
                                                <div>
                                                    <FormInput
                                                        label="Security code"
                                                        name="cvv"
                                                        required
                                                        onChange={handleChange}
                                                        onKeyPress={(event) => {
                                                            // Allow only numbers
                                                            if (
                                                                !/^\d+$/.test(
                                                                    event.key
                                                                )
                                                            ) {
                                                                event.preventDefault()
                                                            }
                                                        }}
                                                        className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-lightBrown transition-colors"
                                                        placeholder="000"
                                                        type="text"
                                                        maxlength="3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-3">
                                    <label
                                        htmlFor="type2"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            className="form-radio h-5 w-5 text-indigo-500"
                                            name="type"
                                            id="gcash"
                                            value="gcash"
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <img
                                            src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/gcash-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1"
                                            width="80"
                                            className="ml-3"
                                            alt=""
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold font-playfairDisplay"
                                    onClick={() => handlePayNowClick()}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                            <span className="ml-2">
                                                Processing...
                                            </span>
                                        </div>
                                    ) : (
                                        <>
                                            <i className="mdi mdi-lock-outline mr-1"></i>{' '}
                                            PAY NOW
                                        </>
                                    )}
                                </button>
                                {showModal &&
                                    selectedPaymentMethod === 'gcash' && (
                                        <ModalGcash
                                            isOpen={showModal}
                                            onClose={() => setShowModal(false)}
                                        />
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview
