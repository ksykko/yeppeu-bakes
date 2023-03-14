import { Fragment } from 'react'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import SigninForm from '../../components/signin-form/signin-form.component'


const SignIn = () => {


    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                <SigninForm />
            </div>
        </Fragment>
    )
}

export default SignIn
