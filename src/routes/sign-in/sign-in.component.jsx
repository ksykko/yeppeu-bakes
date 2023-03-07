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

    return (
        <Fragment>
            <div className=" bg-orangePeach">
                {/* <section id="top">
                    <div className="container max-w-6xl mx-auto px-6 py-12">
                        <Navigation />
                    </div>
                </section> */}
            </div>

            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                    <h1>Sign In Page</h1>
                    <button onClick={logGoogleUser}>
                        Sign in with Google Popup
                    </button>
                    {/* <SignUpForm /> */}
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn
