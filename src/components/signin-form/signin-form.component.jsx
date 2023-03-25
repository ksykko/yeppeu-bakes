import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as FacebookSVG } from '../../assets/svgs/facebook.svg'
import { ReactComponent as GoogleSVG } from '../../assets/svgs/google.svg'
import { ReactComponent as Logo } from '../../assets/svgs/logo-nobg.svg'

import { useNavigate } from 'react-router-dom'

import {
    signInWithGooglePopup,
    createUserProfileDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

const defaultFormFields = {
    email: '',
    password: '',
}

const SigninForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    const navigate = useNavigate()

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    // const signInWithGoogle = async () => {
    //     await signInWithGooglePopup()
    // }
    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup()
            const userSnapshot = await createUserProfileDocumentFromAuth(user)

            const { role } = userSnapshot.data()
            if (role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/user')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            )

            const userSnapshot = await createUserProfileDocumentFromAuth(user)
            const { role } = userSnapshot.data()
            if (role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/')
            }

            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password')
                    break
                case 'auth/user-not-found':
                    alert('User not found')
                    break
                default:
                    console.log(error)
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
                <div className="flex-col m-6 space-y-10 bg-lightestPeach shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
                    {/* Top Content */}
                    <div className="p-2 px-14">
                        <Logo className="w-20 h-20 mx-auto" />
                        <h1 className="mb-4 text-lightBrown font-extrabold font-playfairDisplay text-center">
                            Signin to your account
                        </h1>
                        <div className="space-y-3">
                            {/* facebook logo span with button */}
                            <Button buttonType="facebook">
                                <div className="bg-[#3A5D9E] h-full w-10 rounded-tl-md rounded-bl-md absolute left-0 top-1/2 transform -translate-y-1/2">
                                    <FacebookSVG className="w-5 h-5 absolute left-[0.6rem] top-1/2 transform -translate-y-1/2" />
                                </div>
                                <span>Sign in with Facebook</span>
                            </Button>
                            <Button
                                buttonType="google"
                                onClick={signInWithGoogle}
                            >
                                <div className="bg-red-600 h-full w-10 rounded-tl-md rounded-bl-md absolute left-0 top-1/2 transform -translate-y-1/2">
                                    <GoogleSVG className="w-5 h-5 absolute left-[0.6rem] top-1/2 transform -translate-y-1/2" />
                                </div>
                                <span>Sign in with Google</span>
                            </Button>
                        </div>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-6 bg-gray-300 border-0" />
                            <span className="absolute px-3 font-medium text-slate-400 uppercase text-xs -translate-x-1/2 bg-white left-1/2 font-playfairDisplay">
                                or
                            </span>
                        </div>

                        {/* Sign in Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-3">
                                <FormInput
                                    label="Email"
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                    placeholder="example@gmail.com"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label="Password"
                                    type="password"
                                    name="password"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-lightBrown"
                                    placeholder="********"
                                    value={password}
                                    onChange={handleChange}
                                />
                                <div className="flex justify-between">
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-darkestBrown bg-lightBrown border-lightBrown accent-lightBrown rounded focus:ring-1"
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ml-2 text-xs font-semibold text-darkestBrown"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div className=" text-xs font-semibold text-lightBrown hover:underline">
                                        Forgot Password?
                                    </div>
                                </div>
                            </div>
                            <Button buttonType="default" type="submit">
                                Sign in
                            </Button>
                        </form>

                        <div className="text-center my-4 mb-5 text-xs font-semibold text-darkestBrown">
                            Don't have an account?{' '}
                            <span className=" text-lightBrown hover:underline">
                                <Link to="/sign-up">Sign Up Free!</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SigninForm
