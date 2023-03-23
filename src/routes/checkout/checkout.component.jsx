import { Fragment } from 'react'

import CheckoutOverview from '../../components/checkout-overview/checkout-overview.component'
import NavigationBar from '../../components/navigation-bar/navigation-bar.component'

const Checkout = () => {
    return (
        <Fragment>
            <div className="h-screen bg-heroPeach">
                <NavigationBar />
                <CheckoutOverview />
            </div>
        </Fragment>
    )
}

export default Checkout
