import { Fragment } from 'react'

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Fragment>
            {/* If label exists, render it */}
            {label && (
                <p className=" text-sm text-darkestBrown font-semibold">{label}</p>
            )}
            <input {...otherProps}/>
        </Fragment>
    )
}

export default FormInput
