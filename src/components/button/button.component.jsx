

/*
    default button

    facebook sign in button

    google sign in button

*/

const BUTTON_TYPE_CLASSES = {
    default: 'btn-default',
    google: 'btn-google-signin',
    facebook: 'btn-facebook-signin',
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className={`${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button
