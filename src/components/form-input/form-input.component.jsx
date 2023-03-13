import { Fragment } from 'react'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Fragment>
            {/* If label exists, render it */}
            {label && (
                <p className=" text-sm text-darkBlue font-semibold">{label}</p>
            )}
            <input {...otherProps}/>
        </Fragment>
    )
}

export default FormInput
