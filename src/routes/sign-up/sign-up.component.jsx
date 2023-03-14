import { Fragment } from 'react'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import SignupForm from '../../components/signup-form/signup-form.component'


const SignUp = () => {

    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                <SignupForm />
            </div>
        </Fragment>
    )
}

export default SignUp
