import { Fragment, useState } from 'react'

import {
    createAuthUserWithEmailAndPassword,
    createUserProfileDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'


import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignupForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const role = 'user'

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfileDocumentFromAuth(user, { displayName, role })
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                alert('Something went wrong, please try again')
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <Fragment>
            {/* Global Container */}
            <div className="max-w-lg mx-auto pt-1">
                {/* Card Container */}
                <div className="flex-col m-6 space-y-10 bg-lightestPeach shadow-2xl rounded-2xl md:flex-row md:space-y-0 pb-12">
                    {/* Top Content */}
                    <div className="p-2 px-14">
                        <h1 className="mb-4 mt-10 text-lightBrown font-extrabold font-playfairDisplay text-center">
                            Sign up with your account
                        </h1>

                        {/* Sign up Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-3">
                                {/* Name */}
                                <FormInput
                                    label="Name"
                                    type="text"
                                    name="displayName"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                    placeholder="John Doe"
                                    required
                                    value={displayName}
                                    onChange={handleChange}
                                />

                                {/* Email */}
                                <FormInput
                                    label="Email"
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                    placeholder="example@gmail.com"
                                    required
                                    value={email}
                                    onChange={handleChange}
                                />

                                {/* Password */}
                                <FormInput
                                    label="Password"
                                    type="password"
                                    name="password"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                    placeholder="********"
                                    required
                                    value={password}
                                    onChange={handleChange}
                                />

                                {/* Confirm Password */}
                                <FormInput
                                    label="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                    placeholder="********"
                                    required
                                    value={confirmPassword}
                                    onChange={handleChange}
                                />
                                <div className="flex justify-between">
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-darkBlue bg-lightBrown border-lightBrown accent-lightBrown rounded focus:ring-1"
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ml-2 text-xs font-semibold text-darkBlue"
                                        >
                                            I accept the{' '}
                                            <span className="text-lightBrown">
                                                Terms and Conditions
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <Button
                                buttonType="default"
                                type="submit"
                            >
                                Create an Account
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignupForm
