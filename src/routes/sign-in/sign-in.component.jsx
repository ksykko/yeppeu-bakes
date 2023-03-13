import { Fragment } from 'react'
import {
    signInWithGooglePopup,
    createUserProfileDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import Navigation from '../navigation/navigation.component'

// import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserProfileDocumentFromAuth(user)
    }

    const altAtrribute = { text: 'text-white', borderLine: 'bg-white' }

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                {/* Navbar */}
                <nav id="sign-in" className="bg-orangePeach">
                    <div className="container max-w-6xl mx-auto px-6 py-3">
                        <Navigation className=" text-white" />
                    </div>
                </nav>
                {/* Global Container */}
                <div className="max-w-lg mx-auto pt-10">
                    {/* Card Container */}
                    <div className="flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 ">
                        {/* Top Content */}
                        <div className="p-6">
                            <h1 className="mt-8 mb-5 text-center">Logo Here</h1>
                            <h1 className="mb-7 text-darkBlue font-extrabold font-playfairDisplay text-center">
                                Signin to your account
                            </h1>
                            <div className="space-y-3">
                                <p className=" text-sm text-gray-500">Email</p>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    className="w-full p-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                                    placeholder="example@gmail.com"
                                />
                                <p className=" text-sm text-gray-500">Password</p>
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    className="w-full p-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                                    placeholder="********"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 p-32">

                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn
