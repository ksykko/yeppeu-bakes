import { Fragment, useContext, useState } from 'react'

import { UserContext } from '../../contexts/user.context'

import FormInput from '../form-input/form-input.component'
import { FaUserCircle } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa'

const UserProfile = () => {
    const { currentUser, currentUserDetails } = useContext(UserContext)
    const { displayName, email, contactNum, deliveryAddress } =
        currentUserDetails
    const [photoURL, setPhotoURL] = useState(currentUser.photoURL || '')

    console.log(currentUserDetails)

    const handleFileSelect = (e) => {}

    return (
        <Fragment>
            {/* Make Profile Details Card */}
            <div className="w-full">
                <div className="p-6 mx-auto">
                    <div className="flex space-x-7">
                        {/* Hoverable */}
                        <div className="flex-shrink-0 relative">
                            {/* Default Avatar */}
                            {currentUser.photoURL === null ? (
                                <FaUserCircle className="h-32 w-32 rounded-full text-lightPeach" />
                            ) : (
                                <img
                                    className="h-32 w-32 rounded-full"
                                    src={photoURL}
                                    alt="Avatar"
                                />
                            )}
                            {/* Add camera icon */}
                            <label className="absolute bottom-0 right-0">
                                <FaCamera className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
                                {/* File input element */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileSelect}
                                />
                            </label>
                        </div>
                        {/* Profile Details */}
                        <div className="flex-1">
                            <div className="flex flex-col space-y-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold">
                                        {displayName}
                                    </h2>
                                    <p className="text-gray-500">{email}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="bg-lightBrown hover:opacity-90 text-white font-semibold py-2 px-4 rounded-xl">
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Make Profile Details Card */}
            <div className="w-full">
                <div className="mx-auto p-6">
                    <div className="flex flex-col space-y-4 mb-7">
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-2xl font-semibold">
                                Personal Details
                            </h2>
                            <p className="text-gray-500">
                                Manage your personal details and shipping
                                address.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5">
                        <div className="w-1/3 space-y-3">
                            <FormInput
                                label="Display Name"
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                name="displayName"
                                value={displayName}
                                onChange={() => {}}
                            />
                            <FormInput
                                label="Email"
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                name="email"
                                value={email}
                                onChange={() => {}}
                            />
                        </div>
                        <div className="w-2/3 space-y-3">
                            <FormInput
                                label="Delivery Address"
                                type="address"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                name="email"
                                value={deliveryAddress == null ? 'N/A' : deliveryAddress}
                                onChange={() => {}}
                            />
                            <FormInput
                                label="Contact Number"
                                type="tel"
                                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                name="phoneNo"
                                value={contactNum == null ? 'N/A' : contactNum}
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserProfile
