import { Fragment } from 'react'

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import PaymentOverview from '../../components/payment-overview/payment-overview.component'

const Payment = () => {
    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                <PaymentOverview />
            </div>
        </Fragment>
    )
}

export default Payment
