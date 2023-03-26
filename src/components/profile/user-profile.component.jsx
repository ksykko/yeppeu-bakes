import { Fragment, useContext } from 'react'

import { UserContext } from '../../contexts/user.context'

const UserProfile = () => {
    const { currentUser } = useContext(UserContext)

    return (
        <Fragment>

        </Fragment>
    )
}

export default UserProfile
