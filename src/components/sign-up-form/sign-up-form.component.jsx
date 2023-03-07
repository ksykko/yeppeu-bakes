import { useState } from 'react'
import FormInput from '../form-input/form-input-component'
import { createAuthUserWithEmailAndPassword, createUserProfileDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {

        // Prevent the default behavior of the form
        event.preventDefault()

        // Check if the passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        // Create the user
        try {
            const { user } = await createAuthUserWithEmailAndPassword (email, password)

            await createUserProfileDocumentFromAuth(user, { displayName })
            resetFormFields()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use' ) {
                alert('Cannot create user. Email already in use')
            } else {
                console.error('User creation encountered an error: ', error)
            }
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={ handleSubmit } action="">

                <FormInput
                    label="Display Name"
                    required
                    type="text"
                    name="displayName"
                    value={ displayName }
                    onChange={ handleChange }
                />

                <FormInput
                    label="Email"
                    required
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ handleChange }
                />

                <FormInput
                    label="Password"
                    required
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ handleChange }
                />

                <FormInput
                    label="Confirm Password"
                    required
                    type="password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={ handleChange }
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm
