import { Fragment } from 'react'
import Navigation from '../navigation/navigation.component'
import SignupForm from '../../components/signup-form/signup-form.component'



const SignUp = () => {

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                {/* Navbar */}
                <nav id="sign-up" className="bg-orangePeach">
                    <div className="container max-w-6xl mx-auto px-6 py-3">
                        <Navigation
                            className="text-white"
                            borderLine="bg-white"
                        />
                    </div>
                </nav>

                <SignupForm />

            </div>
        </Fragment>
    )
}

export default SignUp
