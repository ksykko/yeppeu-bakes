import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
    signInWithGooglePopup,
    createUserProfileDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import Navigation from '../navigation/navigation.component'
import Button from '../../components/button/button.component'

// import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserProfileDocumentFromAuth(user)
    }

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                {/* Navbar */}
                <nav id="sign-in" className="bg-orangePeach">
                    <div className="container max-w-6xl mx-auto px-6 py-3">
                        <Navigation
                            className="text-white"
                            borderLine="bg-white"
                        />
                    </div>
                </nav>
                {/* Global Container */}
                <div className="max-w-lg mx-auto pt-1">
                    {/* Card Container */}
                    <div className="flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
                        {/* Top Content */}
                        <div className="p-2 px-14">
                            <h1 className="mt-8 mb-5 text-center">Logo Here</h1>
                            <h1 className="mb-4 text-darkBlue font-extrabold font-playfairDisplay text-center">
                                Signin to your account
                            </h1>
                            <div className="space-y-3">
                                {/* facebook logo span with button */}
                                <Button buttonType="facebook">
                                    Sign in with Facebook
                                </Button>
                                <Button
                                    buttonType="google"
                                    onClick={logGoogleUser}
                                >
                                    Sign in with Google
                                </Button>
                            </div>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-64 h-px my-6 bg-gray-300 border-0" />
                                <span className="absolute px-3 font-medium text-slate-400 uppercase text-xs -translate-x-1/2 bg-white left-1/2 font-playfairDisplay">
                                    or
                                </span>
                            </div>
                            <div className="space-y-3">
                                <p className=" text-sm text-darkBlue font-semibold">
                                    Email
                                </p>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-darkBlue"
                                    placeholder="example@gmail.com"
                                />
                                <p className=" text-sm text-darkBlue font-semibold">
                                    Password
                                </p>
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light focus:outline-darkBlue"
                                    placeholder="********"
                                />
                                <div className="flex justify-between">
                                    <div className="flex items-center mb-4">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            value=""
                                            className="w-4 h-4 text-darkBlue bg-darkBlue border-darkBlue accent-darkBlue rounded focus:ring-1"
                                        />
                                        <label
                                            htmlFor="default-checkbox"
                                            className="ml-2 text-xs font-semibold text-darkBlue"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div className=" text-xs font-semibold text-yellowText">
                                        Forgot Password?
                                    </div>
                                </div>
                            </div>
                            <Button buttonType="default" type="submit">
                                Sign in
                            </Button>
                            <div className="text-center my-4 mb-5 text-xs font-semibold text-lightblueText">
                                Don't have an account?{' '}
                                <span className=" text-yellowText">
                                    <Link to="/sign-up">Sign Up Free!</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn
